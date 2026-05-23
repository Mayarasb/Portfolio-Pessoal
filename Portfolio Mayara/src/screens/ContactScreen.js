import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, Linking, Alert, Clipboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { userData } from '../data';

const contacts = [
  {
    key: 'email',
    label: 'E-mail',
    icon: 'mail',
    color: theme.colors.accent,
    action: 'copy',
    prefix: 'mailto:',
  },
  {
    key: 'github',
    label: 'GitHub',
    icon: 'logo-github',
    color: '#FFFFFF',
    action: 'open',
    prefix: 'https://',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    icon: 'logo-linkedin',
    color: '#0A66C2',
    action: 'open',
    prefix: 'https://',
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    icon: 'logo-whatsapp',
    color: '#25D366',
    action: 'open',
    prefix: 'https://wa.me/',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    icon: 'logo-instagram',
    color: '#E1306C',
    action: 'open',
    prefix: 'https://instagram.com/',
  },
];

function ContactCard({ item }) {
  const value = userData.contact[item.key];
  if (!value) return null;

  const handlePress = () => {
    if (item.action === 'copy') {
      Clipboard.setString(value);
      Alert.alert('Copiado!', `${item.label} copiado para a área de transferência.`);
    } else {
      const url = item.prefix + value.replace(/[@https:\/\/www\.]/g, '');
      Linking.canOpenURL(value.startsWith('http') ? value : item.prefix + value)
        .then(() => {
          Linking.openURL(value.startsWith('http') ? value : item.prefix + value);
        })
        .catch(() => {
          Clipboard.setString(value);
          Alert.alert('Copiado!', `${value} copiado para a área de transferência.`);
        });
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress} activeOpacity={0.8}>
      <View style={[styles.iconCircle, { backgroundColor: item.color + '20' }]}>
        <Ionicons name={item.icon} size={24} color={item.color} />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardLabel}>{item.label}</Text>
        <Text style={styles.cardValue} numberOfLines={1}>{value}</Text>
      </View>
      <View style={[styles.actionBtn, { borderColor: item.color + '55' }]}>
        <Ionicons
          name={item.action === 'copy' ? 'copy-outline' : 'open-outline'}
          size={16}
          color={item.color}
        />
      </View>
    </TouchableOpacity>
  );
}

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient colors={['#1C1C27', theme.colors.background]} style={styles.header}>
          <Text style={styles.headerTitle}>Contato</Text>
          <Text style={styles.headerSub}>Aberta para novas oportunidades e projetos.?</Text>
        </LinearGradient>

        {/* Availability Card */}
        {userData.available && (
          <View style={styles.availCard}>
            <LinearGradient
              colors={['rgba(78,205,196,0.15)', 'rgba(78,205,196,0.05)']}
              style={styles.availGradient}
            >
              <View style={styles.availLeft}>
                <View style={styles.availPulse}>
                  <View style={styles.availDot} />
                </View>
                <View>
                  <Text style={styles.availTitle}>Disponível para projetos</Text>
                  <Text style={styles.availSub}>Freelance · CLT · Projetos colaborativos</Text>
                </View>
              </View>
              <Ionicons name="checkmark-circle" size={24} color={theme.colors.success} />
            </LinearGradient>
          </View>
        )}

        {/* Contact Cards */}
        <View style={styles.list}>
          <Text style={styles.listTitle}>Minhas redes</Text>
          {contacts.map((item) => (
            <ContactCard key={item.key} item={item} />
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Feito por {userData.name}
          </Text>
          <Text style={styles.footerSub}>React Native Portfolio</Text>
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
  availCard: { marginHorizontal: theme.spacing.lg, marginBottom: 8, borderRadius: theme.radius.lg, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(78,205,196,0.3)' },
  availGradient: { padding: theme.spacing.md, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  availLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  availPulse: { width: 16, height: 16, borderRadius: 8, backgroundColor: 'rgba(78,205,196,0.3)', alignItems: 'center', justifyContent: 'center' },
  availDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: theme.colors.success },
  availTitle: { fontSize: 14, fontWeight: '700', color: theme.colors.text },
  availSub: { fontSize: 12, color: theme.colors.textMuted, marginTop: 2 },
  list: { padding: theme.spacing.lg },
  listTitle: { fontSize: 16, fontWeight: '700', color: theme.colors.text, marginBottom: 14 },
  card: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: 10,
    borderWidth: 1, borderColor: theme.colors.border,
  },
  iconCircle: { width: 46, height: 46, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginRight: 14 },
  cardInfo: { flex: 1 },
  cardLabel: { fontSize: 12, color: theme.colors.textMuted, fontWeight: '600', marginBottom: 2 },
  cardValue: { fontSize: 14, color: theme.colors.text, fontWeight: '600' },
  actionBtn: {
    width: 34, height: 34, borderRadius: 10,
    backgroundColor: theme.colors.background,
    borderWidth: 1, alignItems: 'center', justifyContent: 'center',
  },
  footer: { alignItems: 'center', paddingVertical: theme.spacing.xl },
  footerText: { fontSize: 14, color: theme.colors.textMuted },
  footerSub: { fontSize: 12, color: theme.colors.textMuted + '88', marginTop: 4 },
});
