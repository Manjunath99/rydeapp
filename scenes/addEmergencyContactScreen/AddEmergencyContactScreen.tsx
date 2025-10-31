// src/screens/AddEmergencyContactScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { v4 as uuidv4 } from 'uuid';
import Button from '@/components/elements/Button';
import { useAddEmergencyContact } from '@/hooks/apiHooks/useEmergencyContactApis';
import { useAppSlice } from '@/slices/app.slice';

export default function AddEmergencyContactScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [relationship, setRelationship] = useState('');
  const { loggedIn, user, onBoardingDone } = useAppSlice();

  const { mutate: addEmergencyContact, error, data } = useAddEmergencyContact();

  const handleSave = () => {
    if (name === '' || phoneNumber === '' || relationship === '' || phoneNumber.length !== 10) {
      console.log('please fill all fields');
      return;
    }
    const newContact = {
      name: name,
      phoneNumber: phoneNumber,
      relationship: relationship,
    };
    console.log('Saving contact:', newContact, user?.userId);

    addEmergencyContact(
      { payload: newContact, userId: user?.userId || '' },
      {
        onSuccess: data => {
          console.log('Contact added successfully:', data);
        },
        onError: error => {
          console.error('Error adding contact:', error);
        },
      },
    );

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
