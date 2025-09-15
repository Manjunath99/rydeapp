import { View, Text, TextInput, ScrollView, Button, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { colors } from '@/theme';
import useColorScheme from '@/hooks/useColorScheme';

export default function ContactUsScreen() {
  const { isDark } = useColorScheme();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !phone || !message) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    // Replace with API call to submit contact message
    console.log({ name, email, phone, message });
    Alert.alert('Success', 'Your message has been sent!');
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <ScrollView
      style={{ flex: 1, padding: 16, backgroundColor: isDark ? colors.blackGray : colors.white }}
      keyboardShouldPersistTaps="handled">
      {/* Office Address */}
      <View
        style={{
          backgroundColor: isDark ? colors.primary : colors.white,
          padding: 16,
          borderRadius: 12,
          marginBottom: 24,
          shadowColor: colors.black,
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          elevation: 2,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            marginBottom: 8,
            color: isDark ? colors.white : colors.darkPurple,
          }}>
          Our Office
        </Text>
        <Text style={{ color: isDark ? colors.white : colors.primary }}>
          123 Main Street, City Name, State, Country, 123456
        </Text>
      </View>

      {/* Contact Form */}
      <View
        style={{
          backgroundColor: isDark ? colors.primary : colors.white,
          padding: 16,
          borderRadius: 12,
          shadowColor: colors.black,
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          elevation: 2,
        }}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={{
            borderWidth: 1,
            borderColor: colors.primary,
            padding: 10,
            borderRadius: 8,
            marginBottom: 12,
            color: isDark ? colors.white : colors.primary,
          }}
        />

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={{
            borderWidth: 1,
            borderColor: colors.primary,
            padding: 10,
            borderRadius: 8,
            marginBottom: 12,
            color: isDark ? colors.white : colors.primary,
          }}
        />

        <TextInput
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          style={{
            borderWidth: 1,
            borderColor: colors.primary,
            padding: 10,
            borderRadius: 8,
            marginBottom: 12,
            color: isDark ? colors.white : colors.primary,
          }}
        />

        <TextInput
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
          style={{
            borderWidth: 1,
            borderColor: colors.primary,
            padding: 10,
            borderRadius: 8,
            marginBottom: 16,
            textAlignVertical: 'top',
            color: isDark ? colors.white : colors.primary,
          }}
        />

        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}
