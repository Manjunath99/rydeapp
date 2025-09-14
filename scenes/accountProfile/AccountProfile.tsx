import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function AccountProfile() {
  const router = useRouter();

  return (
    <View>
      <Text>Account Information</Text>

      <View>
        <Text>Name: John Doe</Text>
        <Text>Email: john.doe@example.com</Text>
        <Text>Phone: +1 (555) 123-4567</Text>
      </View>

      <TouchableOpacity onPress={() => router.back()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
