import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function PrivacySecurityScreen() {
  const supportEmail = 'privacy@yourapp.com';

  const contactSupport = () => {
    Linking.openURL(`mailto:${supportEmail}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Privacy & Security</Text>

      <Text style={styles.sectionTitle}>🔎 Data We Collect</Text>
      <Text style={styles.text}>
        • Location (current & past trips){'\n'}• Phone number & Email{'\n'}• Profile photo{'\n'}
      </Text>

      <Text style={styles.sectionTitle}>📌 Why We Collect It</Text>
      <Text style={styles.text}>
        • Location: to match rides & improve safety{'\n'}• Phone & Email: for account login &
        communication{'\n'}• Profile Photo: to verify your identity{'\n'}
      </Text>

      <Text style={styles.sectionTitle}>🔒 How We Protect It</Text>
      <Text style={styles.text}>
        • All data is encrypted in transit & storage{'\n'}• Location history is only visible to you
        {'\n'}• Personal info is never sold to third parties{'\n'}
      </Text>

      <Text style={styles.sectionTitle}>⚙️ Your Control</Text>
      <Text style={styles.text}>
        • You can update or delete your profile anytime{'\n'}• You may clear your location history
        from settings{'\n'}• Contact us if you wish to delete your account permanently{'\n'}
      </Text>

      <TouchableOpacity style={styles.button} onPress={contactSupport}>
        <Text style={styles.buttonText}>Contact Privacy Support</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// ---------------- Styles ----------------
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginTop: 20, marginBottom: 8 },
  text: { fontSize: 14, color: '#555', lineHeight: 22 },
  button: {
    marginTop: 30,
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
