import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../theme';
import { userData } from '../data';

const categories = ['Todos', ...new Set(userData.skills.map((s) => s.category))];

function SkillBar({ skill, index }) {
  const animValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(animValue, {
      toValue: skill.level / 100,
      duration: 800,
      delay: index * 80,
      useNativeDriver: false,
    }).start();
  }, []);

  const levelColor =
    skill.level >= 85 ? theme.colors.accent :
    skill.level >= 70 ? theme.colors.success :
    theme.colors.warning;

  return (
    <View style={styles.skillItem}>
      <View style={styles.skillHeader}>
        <Text style={styles.skillName}>{skill.name}</Text>
        <View style={styles.skillMeta}>
          <View style={[styles.categoryBadge, { borderColor: levelColor + '55' }]}>
            <Text style={[styles.categoryText, { color: levelColor }]}>{skill.category}</Text>
          </View>
          <Text style={[styles.skillLevel, { color: levelColor }]}>{skill.level}%</Text>
        </View>
      </View>
      <View style={styles.progressBg}>
        <Animated.View
          style={[
            styles.progressFill,
            {
              width: animValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
              backgroundColor: levelColor,
            },
          ]}
        />
      </View>
    </View>
  );
}

export default function SkillsScreen() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos'
    ? userData.skills
    : userData.skills.filter((s) => s.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => b.level - a.level);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient colors={['#1C1C27', theme.colors.background]} style={styles.header}>
          <Text style={styles.headerTitle}>Habilidades</Text>
          <Text style={styles.headerSub}>Possuo conhecimento e experiência com tecnologias utilizadas no desenvolvimento de software e na gestão de projetos, incluindo Angular, TypeScript, JavaScript, Node.js, Express, HTML, CSS, bancos de dados MySQL e MongoDB. Também utilizo ferramentas e metodologias ágeis como Scrum e Kanban no dia a dia, além de práticas voltadas ao desenvolvimento web, versionamento com Git e criação de interfaces responsivas e acessíveis.</Text>
        </LinearGradient>

        {/* Summary Cards */}
        <View style={styles.summaryRow}>
          <View style={[styles.summaryCard, { borderColor: theme.colors.accent + '55' }]}>
            <Text style={[styles.summaryNumber, { color: theme.colors.accent }]}>
              {userData.skills.filter((s) => s.level >= 85).length}
            </Text>
            <Text style={styles.summaryLabel}>Avançado</Text>
          </View>
          <View style={[styles.summaryCard, { borderColor: theme.colors.success + '55' }]}>
            <Text style={[styles.summaryNumber, { color: theme.colors.success }]}>
              {userData.skills.filter((s) => s.level >= 70 && s.level < 85).length}
            </Text>
            <Text style={styles.summaryLabel}>Intermediário</Text>
          </View>
          <View style={[styles.summaryCard, { borderColor: theme.colors.warning + '55' }]}>
            <Text style={[styles.summaryNumber, { color: theme.colors.warning }]}>
              {userData.skills.filter((s) => s.level < 70).length}
            </Text>
            <Text style={styles.summaryLabel}>Em evolução</Text>
          </View>
        </View>

        {/* Filter */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
        >
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.filterBtn, activeCategory === cat && styles.filterBtnActive]}
              onPress={() => setActiveCategory(cat)}
            >
              <Text style={[styles.filterText, activeCategory === cat && styles.filterTextActive]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Skills List */}
        <View style={styles.skillsList}>
          {sorted.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  header: { padding: theme.spacing.lg, paddingTop: theme.spacing.xl },
  headerTitle: { fontSize: 28, fontWeight: '800', color: theme.colors.text, marginBottom: 6 },
  headerSub: { fontSize: 14, color: theme.colors.textMuted },
  summaryRow: { flexDirection: 'row', paddingHorizontal: theme.spacing.lg, gap: 10, marginBottom: 16 },
  summaryCard: {
    flex: 1, backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md, padding: 14,
    alignItems: 'center', borderWidth: 1,
  },
  summaryNumber: { fontSize: 26, fontWeight: '800' },
  summaryLabel: { fontSize: 11, color: theme.colors.textMuted, marginTop: 2, fontWeight: '500' },
  filterRow: { paddingHorizontal: theme.spacing.lg, paddingBottom: 16, gap: 8 },
  filterBtn: {
    paddingHorizontal: 16, paddingVertical: 8,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.card,
    borderWidth: 1, borderColor: theme.colors.border,
  },
  filterBtnActive: {
    backgroundColor: theme.colors.accentGlow,
    borderColor: theme.colors.accent,
  },
  filterText: { fontSize: 13, color: theme.colors.textMuted, fontWeight: '600' },
  filterTextActive: { color: theme.colors.accent },
  skillsList: { paddingHorizontal: theme.spacing.lg, paddingBottom: 24 },
  skillItem: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: 10,
    borderWidth: 1, borderColor: theme.colors.border,
  },
  skillHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  skillName: { fontSize: 15, fontWeight: '700', color: theme.colors.text },
  skillMeta: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  categoryBadge: {
    borderWidth: 1, borderRadius: theme.radius.full,
    paddingHorizontal: 8, paddingVertical: 2,
  },
  categoryText: { fontSize: 10, fontWeight: '700' },
  skillLevel: { fontSize: 14, fontWeight: '800', minWidth: 36, textAlign: 'right' },
  progressBg: {
    height: 6, backgroundColor: theme.colors.border,
    borderRadius: 3, overflow: 'hidden',
  },
  progressFill: { height: '100%', borderRadius: 3 },
});
