import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { userData } from '../data';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Hero Section */}
        <LinearGradient
          colors={['#1C1C27', '#13131A']}
          style={styles.hero}
        >
          {/* Decorative circles */}
          <View style={styles.decorCircle1} />
          <View style={styles.decorCircle2} />

          <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
            {/* Avatar */}
            <View style={styles.avatarContainer}>
              <LinearGradient
                colors={[theme.colors.accent, theme.colors.accentLight]}
                style={styles.avatarGradient}
              >
                <Text style={styles.avatarText}>
                  {userData.name.charAt(0)}
                </Text>
              </LinearGradient>
              {userData.available && (
                <View style={styles.availableBadge}>
                  <View style={styles.availableDot} />
                  <Text style={styles.availableText}>Disponível</Text>
                </View>
              )}
            </View>

            {/* Name & Role */}
            <Text style={styles.name}>{userData.name}</Text>
            <Text style={styles.role}>{userData.role}</Text>
            <Text style={styles.location}>{userData.location}</Text>

            {/* Bio */}
            <View style={styles.bioContainer}>
              <Text style={styles.bio}>{userData.bio}</Text>
            </View>

            {/* Stats */}
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{userData.projects.length}</Text>
                <Text style={styles.statLabel}>Projetos</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{userData.skills.length}+</Text>
                <Text style={styles.statLabel}>Skills</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>3+</Text>
                <Text style={styles.statLabel}>Anos exp.</Text>
              </View>
            </View>
          </Animated.View>
        </LinearGradient>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explore</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity
              style={[styles.actionCard, { borderColor: theme.colors.accent }]}
              onPress={() => navigation.navigate('Skills')}
            >
              <LinearGradient
                colors={[theme.colors.accentGlow, 'transparent']}
                style={styles.actionGradient}
              >
                <Ionicons name="code-slash" size={28} color={theme.colors.accent} />
                <Text style={styles.actionTitle}>Skills</Text>
                <Text style={styles.actionSub}>Tecnologias & ferramentas</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionCard, { borderColor: theme.colors.success }]}
              onPress={() => navigation.navigate('Projects')}
            >
              <LinearGradient
                colors={['rgba(78,205,196,0.1)', 'transparent']}
                style={styles.actionGradient}
              >
                <Ionicons name="grid" size={28} color={theme.colors.success} />
                <Text style={[styles.actionTitle, { color: theme.colors.success }]}>Projetos</Text>
                <Text style={styles.actionSub}>Veja meu trabalho</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionCard, { borderColor: theme.colors.warning, marginBottom: 0 }]}
              onPress={() => navigation.navigate('Contact')}
            >
              <LinearGradient
                colors={['rgba(255,217,61,0.1)', 'transparent']}
                style={styles.actionGradient}
              >
                <Ionicons name="mail" size={28} color={theme.colors.warning} />
                <Text style={[styles.actionTitle, { color: theme.colors.warning }]}>Contato</Text>
                <Text style={styles.actionSub}>Vamos conversar!</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        {/* Featured Projects */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Projetos em Destaque</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
              <Text style={styles.seeAll}>Ver todos →</Text>
            </TouchableOpacity>
          </View>
          {userData.projects.slice(0, 2).map((project) => (
            <TouchableOpacity
              key={project.id}
              style={styles.featuredCard}
              onPress={() => navigation.navigate('Projects', {
                screen: 'ProjectDetail',
                params: { project },
              })}
            >
              <View style={[styles.featuredIcon, { backgroundColor: project.color + '22' }]}>
                <Text style={styles.featuredEmoji}>{project.icon}</Text>
              </View>
              <View style={styles.featuredInfo}>
                <Text style={styles.featuredTitle}>{project.title}</Text>
                <Text style={styles.featuredSub}>{project.subtitle}</Text>
                <View style={styles.tagsRow}>
                  {project.tags.slice(0, 2).map((tag) => (
                    <View key={tag} style={styles.tag}>
                      <Text style={styles.tagText}>{tag}</Text>
                    </View>
                  ))}
                </View>
              </View>
              <View style={[styles.statusDot, {
                backgroundColor: project.status === 'Concluído' ? theme.colors.success : theme.colors.warning
              }]} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  scroll: { paddingBottom: 24 },
  hero: {
    padding: theme.spacing.xl,
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  decorCircle1: {
    position: 'absolute', width: 200, height: 200, borderRadius: 100,
    backgroundColor: theme.colors.accentGlow, top: -80, right: -60,
  },
  decorCircle2: {
    position: 'absolute', width: 150, height: 150, borderRadius: 75,
    backgroundColor: 'rgba(78,205,196,0.08)', bottom: -50, left: -40,
  },
  avatarContainer: { alignItems: 'center', marginBottom: theme.spacing.md },
  avatarGradient: {
    width: 90, height: 90, borderRadius: 45,
    alignItems: 'center', justifyContent: 'center',
  },
  avatarText: { fontSize: 36, fontWeight: '800', color: '#FFF' },
  availableBadge: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: 'rgba(78,205,196,0.15)',
    paddingHorizontal: 10, paddingVertical: 4,
    borderRadius: theme.radius.full, marginTop: 8,
    borderWidth: 1, borderColor: 'rgba(78,205,196,0.3)',
  },
  availableDot: {
    width: 7, height: 7, borderRadius: 4,
    backgroundColor: theme.colors.success, marginRight: 6,
  },
  availableText: { color: theme.colors.success, fontSize: 12, fontWeight: '600' },
  name: {
    fontSize: 28, fontWeight: '800', color: theme.colors.text,
    textAlign: 'center', marginBottom: 4,
  },
  role: {
    fontSize: 15, color: theme.colors.accentLight,
    fontWeight: '600', textAlign: 'center', marginBottom: 6,
  },
  location: { fontSize: 13, color: theme.colors.textMuted, textAlign: 'center', marginBottom: 16 },
  bioContainer: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
    borderWidth: 1, borderColor: theme.colors.border,
    maxWidth: width - 80,
  },
  bio: { color: theme.colors.textSecondary, fontSize: 14, lineHeight: 22, textAlign: 'center' },
  statsRow: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    borderWidth: 1, borderColor: theme.colors.border,
  },
  statItem: { alignItems: 'center', flex: 1 },
  statNumber: { fontSize: 22, fontWeight: '800', color: theme.colors.accent },
  statLabel: { fontSize: 11, color: theme.colors.textMuted, marginTop: 2, fontWeight: '500' },
  statDivider: { width: 1, height: 32, backgroundColor: theme.colors.border },
  section: { padding: theme.spacing.lg },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: theme.colors.text, marginBottom: 14 },
  seeAll: { color: theme.colors.accent, fontSize: 13, fontWeight: '600' },
  actionsGrid: { gap: 12 },
  actionCard: {
    borderRadius: theme.radius.lg, borderWidth: 1,
    overflow: 'hidden',
  },
  actionGradient: { padding: theme.spacing.md, flexDirection: 'row', alignItems: 'center' },
  actionTitle: { fontSize: 16, fontWeight: '700', color: theme.colors.accent, marginLeft: 14, flex: 1 },
  actionSub: { fontSize: 12, color: theme.colors.textMuted, marginLeft: 14, position: 'absolute', left: 72, top: 38 },
  featuredCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: 10,
    borderWidth: 1, borderColor: theme.colors.border,
  },
  featuredIcon: {
    width: 52, height: 52, borderRadius: 14,
    alignItems: 'center', justifyContent: 'center', marginRight: 14,
  },
  featuredEmoji: { fontSize: 24 },
  featuredInfo: { flex: 1 },
  featuredTitle: { fontSize: 15, fontWeight: '700', color: theme.colors.text },
  featuredSub: { fontSize: 12, color: theme.colors.textMuted, marginBottom: 6 },
  tagsRow: { flexDirection: 'row', gap: 6 },
  tag: {
    backgroundColor: theme.colors.accentGlow, borderRadius: theme.radius.full,
    paddingHorizontal: 8, paddingVertical: 2,
    borderWidth: 1, borderColor: theme.colors.border,
  },
  tagText: { fontSize: 10, color: theme.colors.accentLight, fontWeight: '600' },
  statusDot: { width: 8, height: 8, borderRadius: 4, marginLeft: 8 },
});
