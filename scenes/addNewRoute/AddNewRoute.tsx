import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { colors } from '@/theme';
import useColorScheme from '@/hooks/useColorScheme';

export default function AddRouteScreen() {
  const { isDark } = useColorScheme();
  const router = useRouter();
  const [routeName, setRouteName] = useState('');
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');

  const handleSave = () => {
    // Here you can call your API to save the route
    console.log({ routeName, pickUpLocation, dropOffLocation });
    router.back();
  };

  return (
    <ScrollView
      style={{ flex: 1, padding: 16, backgroundColor: isDark ? colors.blackGray : colors.white }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          marginBottom: 8,
          color: isDark ? colors.white : colors.darkPurple,
        }}>
        Add New Route
      </Text>

      <Text>Route Name</Text>
      <TextInput
        placeholder="e.g. Home to Office"
        value={routeName}
        onChangeText={setRouteName}
        style={{
          borderWidth: 1,
          borderColor: colors.primary,
          padding: 10,
          marginBottom: 12,
          borderRadius: 8,
          color: isDark ? colors.white : colors.primary,
        }}
      />

      <Text>Pick Up Location</Text>
      <TextInput
        placeholder="Pick Up Address"
        value={pickUpLocation}
        onChangeText={setPickUpLocation}
        style={{
          borderWidth: 1,
          borderColor: colors.primary,
          padding: 10,
          marginBottom: 12,
          borderRadius: 8,
          color: isDark ? colors.white : colors.primary,
        }}
      />

      <Text>Drop Off Location</Text>
      <TextInput
        placeholder="Drop Off Address"
        value={dropOffLocation}
        onChangeText={setDropOffLocation}
        style={{
          borderWidth: 1,
          borderColor: colors.primary,
          padding: 10,
          marginBottom: 12,
          borderRadius: 8,
          color: isDark ? colors.white : colors.primary,
        }}
      />

      <Button title="Save Route" onPress={handleSave} />
    </ScrollView>
  );
}
