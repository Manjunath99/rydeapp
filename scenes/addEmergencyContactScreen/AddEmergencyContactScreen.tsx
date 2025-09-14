// src/screens/AddEmergencyContactScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { v4 as uuidv4 } from 'uuid';
import Button from '@/components/elements/Button';

export default function AddEmergencyContactScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [relationship, setRelationship] = useState('');

  const handleSave = () => {
    const newContact = {
      userId: 'currentUserId', // replace with actual userId
      contactId: uuidv4(),
      name,
      phoneNumber,
      relationship,
      createdAt: new Date().toISOString(),
    };

    console.log('Saving contact:', newContact);

    // TODO: Save to backend (DynamoDB/Controller)
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Emergency Contact</Text>

      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TextInput
        style={styles.input}
        placeholder="Relationship"
        value={relationship}
        onChangeText={setRelationship}
      />

      <Button title="Save Contact" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
});
