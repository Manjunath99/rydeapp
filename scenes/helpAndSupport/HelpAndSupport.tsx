import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';

export default function HelpSupportScreen() {
  const supportEmail = 'amaregouda246@gmail.com';
  const supportPhone = '+91 9901148011';

  const sendEmail = () => {
    Linking.openURL(`mailto:${supportEmail}`).catch(() =>
      Alert.alert('Error', 'Could not open email client'),
    );
  };

  const callPhone = () => {
    Linking.openURL(`tel:${supportPhone}`).catch(() =>
      Alert.alert('Error', 'Could not open phone app'),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help & Support</Text>
      <Text style={styles.message}>
        If you need any help or want to request changes, please contact us:
      </Text>

      {/* Email */}
      <TouchableOpacity onPress={sendEmail} style={styles.contactBox}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{supportEmail}</Text>
      </TouchableOpacity>

      {/* Phone */}
      <TouchableOpacity onPress={callPhone} style={styles.contactBox}>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>{supportPhone}</Text>
      </TouchableOpacity>
    </View>
  );
}

// ---------------- Styles ----------------
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  message: { fontSize: 16, color: '#444', marginBottom: 20 },
  contactBox: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  label: { fontSize: 14, color: '#555' },
  value: { fontSize: 16, fontWeight: '600', marginTop: 4 },
});
