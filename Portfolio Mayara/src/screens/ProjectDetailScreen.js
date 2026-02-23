import React from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, Linking, Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { theme } from '../theme';

export default function ProjectDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { project } = route.params;

  const openLink = (url) => {
    if (!url) return;
    Linking.canOpenURL(url).then((supported) => {
      if (supported) Linking.openURL(url);
      else Alert.alert('Erro', 'Não foi possível abrir o link.');
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={[project.color + '33', theme.colors.background]}
          style={styles.header}
        >
          {/* Back Button */}
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={20} color={theme.colors.text} />
            <Text style={styles.backText}>Projetos</Text>
          </TouchableOpacity>

          <View style={[styles.heroIcon, { backgroundColor: project.color + '33' }]}>
            <Text style={styles.heroEmoji}>{project.icon}</Text>
          </View>

          <View style={[styles.statusBadge, {
            backgroundColor: project.status === 'Concluído'
              ? 'rgba(78,205,196,0.15)' : 'rgba(255,217,61,0.15)'
          }]}>
            <View style={[styles.statusDot, {
              backgroundColor: project.status === 'Concluído'
                ? theme.colors.success : theme.colors.warning
            }]} />
            <Text style={[styles.statusText, {
              color: project.status === 'Concluído' ? theme.colors.success : theme.colors.warning
            }]}>{project.status}</Text>
          </View>

          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.subtitle}>{project.subtitle}</Text>
          <Text style={styles.year}>{project.year}</Text>
        </LinearGradient>

        <View style={styles.content}>
          {/* Description */}
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <View style={[styles.sectionDot, { backgroundColor: project.color }]} />
              <Text style={styles.sectionTitle}>Sobre o Projeto</Text>
            </View>
            <Text style={styles.description}>{project.longDescription}</Text>
          </View>

          {/* Tags */}
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <View style={[styles.sectionDot, { backgroundColor: project.color }]} />
              <Text style={styles.sectionTitle}>Tecnologias</Text>
            </View>
            <View style={styles.tagsGrid}>
              {project.tags.map((tag) => (
                <View key={tag} style={[styles.tag, { borderColor: project.color + '55', backgroundColor: project.color + '11' }]}>
                  <Ionicons name="code-slash" size={12} color={project.color} />
                  <Text style={[styles.tagText, { color: project.color }]}>{tag}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Links */}
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <View style={[styles.sectionDot, { backgroundColor: project.color }]} />
              <Text style={styles.sectionTitle}>Links</Text>
            </View>
            <View style={styles.linksGrid}>
              {project.github ? (
                <TouchableOpacity
                  style={[styles.linkBtn, { borderColor: project.color + '55' }]}
                  onPress={() => openLink(project.github)}
                >
                  <Ionicons name="logo-github" size={20} color={project.color} />
                  <Text style={[styles.linkBtnText, { color: project.color }]}>GitHub</Text>
                  <Ionicons name="open-outline" size={14} color={project.color} />
                </TouchableOpacity>
              ) : (
                <View style={[styles.linkBtn, styles.linkBtnDisabled]}>
                  <Ionicons name="logo-github" size={20} color={theme.colors.textMuted} />
                  <Text style={styles.linkBtnTextDisabled}>GitHub (privado)</Text>
                </View>
              )}

              {project.live ? (
                <TouchableOpacity
                  style={[styles.linkBtn, { borderColor: theme.colors.success + '55' }]}
                  onPress={() => openLink(project.live)}
                >
                  <Ionicons name="globe-outline" size={20} color={theme.colors.success} />
                  <Text style={[styles.linkBtnText, { color: theme.colors.success }]}>Ver Live</Text>
                  <Ionicons name="open-outline" size={14} color={theme.colors.success} />
                </TouchableOpacity>
              ) : (
                <View style={[styles.linkBtn, styles.linkBtnDisabled]}>
                  <Ionicons name="globe-outline" size={20} color={theme.colors.textMuted} />
                  <Text style={styles.linkBtnTextDisabled}>Sem versão live</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  header: {
    padding: theme.spacing.lg,
    paddingTop: theme.spacing.md,
    alignItems: 'center',
    paddingBottom: theme.spacing.xl,
  },
  backBtn: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    alignSelf: 'flex-start', marginBottom: theme.spacing.lg,
    backgroundColor: theme.colors.card,
    paddingHorizontal: 12, paddingVertical: 7,
    borderRadius: theme.radius.full,
    borderWidth: 1, borderColor: theme.colors.border,
  },
  backText: { fontSize: 14, color: theme.colors.text, fontWeight: '600' },
  heroIcon: {
    width: 80, height: 80, borderRadius: 20,
    alignItems: 'center', justifyContent: 'center', marginBottom: 14,
  },
  heroEmoji: { fontSize: 38 },
  statusBadge: {
    flexDirection: 'row', alignItems: 'center', gap: 5,
    paddingHorizontal: 12, paddingVertical: 5,
    borderRadius: theme.radius.full, marginBottom: 12,
  },
  statusDot: { width: 7, height: 7, borderRadius: 4 },
  statusText: { fontSize: 12, fontWeight: '700' },
  title: { fontSize: 28, fontWeight: '800', color: theme.colors.text, textAlign: 'center' },
  subtitle: { fontSize: 15, color: theme.colors.textMuted, textAlign: 'center', marginTop: 4 },
  year: { fontSize: 13, color: theme.colors.textMuted, marginTop: 6, fontWeight: '600' },
  content: { padding: theme.spacing.lg },
  section: { marginBottom: theme.spacing.xl },
  sectionTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  sectionDot: { width: 4, height: 20, borderRadius: 2 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: theme.colors.text },
  description: { fontSize: 15, color: theme.colors.textSecondary, lineHeight: 24 },
  tagsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  tag: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    borderWidth: 1, borderRadius: theme.radius.md,
    paddingHorizontal: 14, paddingVertical: 8,
  },
  tagText: { fontSize: 13, fontWeight: '700' },
  linksGrid: { gap: 10 },
  linkBtn: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    borderWidth: 1,
  },
  linkBtnDisabled: { borderColor: theme.colors.border, opacity: 0.5 },
  linkBtnText: { flex: 1, fontSize: 15, fontWeight: '700' },
  linkBtnTextDisabled: { flex: 1, fontSize: 15, color: theme.colors.textMuted },
});
