// src/screens/EmergencyContactsScreen.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '@/components/elements/Button';
import { useRouter } from 'expo-router';
import { useGetEmergencyContacts } from '@/hooks/apiHooks/useEmergencyContactApis';
import { useAppSlice } from '@/slices';

export default function EmergencyContactsScreen() {
  const router = useRouter();
  const { user } = useAppSlice();

  //console.log('useruseruseruseruser', user);

  const { data: contacts, error, isLoading, refetch } = useGetEmergencyContacts(user?.userId ?? '');

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading...</Text>
      </View>
    );
  }

  if (contacts?.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>You have no emergency contacts</Text>
        <Button
          title="Add Contact"
          onPress={() => {
            router.push('/profile/emergencyContacts/AddEmergencyContactScreen');
          }}
        />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Contacts</Text>

      <FlatList
        data={contacts}
        keyExtractor={item => item.contactId}
        renderItem={({ item }) => (
          <View style={styles.contactCard}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.phoneNumber}</Text>
            <Text style={styles.relationship}>{item.relationship}</Text>
          </View>
        )}
      />

      <Button
        title="Add Contact"
        onPress={() => {
          router.push('/profile/emergencyContacts/AddEmergencyContactScreen');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 15 },
  contactCard: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  name: { fontSize: 16, fontWeight: '500' },
  relationship: { fontSize: 14, color: 'gray' },
});
