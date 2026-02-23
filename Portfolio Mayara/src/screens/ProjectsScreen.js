import React from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';
import { userData } from '../data';

export default function ProjectsScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient colors={['#1C1C27', theme.colors.background]} style={styles.header}>
          <Text style={styles.headerTitle}>Projetos</Text>
          <Text style={styles.headerSub}>{userData.projects.length} projetos desenvolvidos</Text>
        </LinearGradient>

        {/* Projects List */}
        <View style={styles.list}>
          {userData.projects.map((project, index) => (
            <TouchableOpacity
              key={project.id}
              style={styles.card}
              onPress={() => navigation.navigate('ProjectDetail', { project })}
              activeOpacity={0.85}
            >
              {/* Top bar color accent */}
              <View style={[styles.cardAccent, { backgroundColor: project.color }]} />

              <View style={styles.cardContent}>
                {/* Icon & Status */}
                <View style={styles.cardTop}>
                  <View style={[styles.iconBox, { backgroundColor: project.color + '22' }]}>
                    <Text style={styles.iconEmoji}>{project.icon}</Text>
                  </View>
                  <View style={styles.cardTopRight}>
                    <View style={[
                      styles.statusBadge,
                      { backgroundColor: project.status === 'Concluído'
                        ? 'rgba(78,205,196,0.15)' : 'rgba(255,217,61,0.15)' }
                    ]}>
                      <View style={[styles.statusDot, {
                        backgroundColor: project.status === 'Concluído'
                          ? theme.colors.success : theme.colors.warning
                      }]} />
                      <Text style={[styles.statusText, {
                        color: project.status === 'Concluído'
                          ? theme.colors.success : theme.colors.warning
                      }]}>{project.status}</Text>
                    </View>
                    <Text style={styles.yearText}>{project.year}</Text>
                  </View>
                </View>

                {/* Title */}
                <Text style={styles.cardTitle}>{project.title}</Text>
                <Text style={styles.cardSub}>{project.subtitle}</Text>
                <Text style={styles.cardDesc} numberOfLines={2}>{project.description}</Text>

                {/* Tags */}
                <View style={styles.tagsRow}>
                  {project.tags.map((tag) => (
                    <View key={tag} style={[styles.tag, { borderColor: project.color + '55' }]}>
                      <Text style={[styles.tagText, { color: project.color }]}>{tag}</Text>
                    </View>
                  ))}
                </View>

                {/* Footer */}
                <View style={styles.cardFooter}>
                  <View style={styles.linksRow}>
                    {project.github && (
                      <View style={styles.linkItem}>
                        <Ionicons name="logo-github" size={14} color={theme.colors.textMuted} />
                        <Text style={styles.linkText}>GitHub</Text>
                      </View>
                    )}
                    {project.live && (
                      <View style={styles.linkItem}>
                        <Ionicons name="globe-outline" size={14} color={theme.colors.textMuted} />
                        <Text style={styles.linkText}>Live</Text>
                      </View>
                    )}
                  </View>
                  <View style={styles.detailBtn}>
                    <Text style={[styles.detailText, { color: project.color }]}>Ver detalhes</Text>
                    <Ionicons name="arrow-forward" size={14} color={project.color} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
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
  list: { padding: theme.spacing.lg, gap: 16 },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    overflow: 'hidden',
    borderWidth: 1, borderColor: theme.colors.border,
  },
  cardAccent: { height: 4 },
  cardContent: { padding: theme.spacing.md },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 },
  iconBox: { width: 52, height: 52, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  iconEmoji: { fontSize: 26 },
  cardTopRight: { alignItems: 'flex-end', gap: 6 },
  statusBadge: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 10, paddingVertical: 4,
    borderRadius: theme.radius.full, gap: 5,
  },
  statusDot: { width: 6, height: 6, borderRadius: 3 },
  statusText: { fontSize: 11, fontWeight: '700' },
  yearText: { fontSize: 12, color: theme.colors.textMuted, fontWeight: '600' },
  cardTitle: { fontSize: 20, fontWeight: '800', color: theme.colors.text, marginBottom: 2 },
  cardSub: { fontSize: 13, color: theme.colors.textMuted, marginBottom: 10, fontWeight: '500' },
  cardDesc: { fontSize: 14, color: theme.colors.textSecondary, lineHeight: 20, marginBottom: 14 },
  tagsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 14 },
  tag: {
    borderWidth: 1, borderRadius: theme.radius.full,
    paddingHorizontal: 10, paddingVertical: 4,
  },
  tagText: { fontSize: 11, fontWeight: '700' },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  linksRow: { flexDirection: 'row', gap: 14 },
  linkItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  linkText: { fontSize: 12, color: theme.colors.textMuted },
  detailBtn: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  detailText: { fontSize: 13, fontWeight: '700' },
});
