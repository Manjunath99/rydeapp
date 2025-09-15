import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/theme';
import useColorScheme from '@/hooks/useColorScheme';

const dummyRoutes = [
  {
    routeId: '1',
    routeName: 'Home to Office',
    pickUpLocation: '123 Street, Home',
    dropOffLocation: '456 Avenue, Office',
  },
  {
    routeId: '2',
    routeName: 'Office to Gym',
    pickUpLocation: '456 Avenue, Office',
    dropOffLocation: '789 Road, Gym',
  },
];

export default function SavedRoutesScreen() {
  const router = useRouter();
  const { isDark } = useColorScheme();

  return (
    <ScrollView
      style={{ flex: 1, padding: 16, backgroundColor: isDark ? colors.blackGray : colors.white }}>
      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          padding: 12,
          borderRadius: 8,
          marginBottom: 20,
        }}
        onPress={() => router.push('/profile/savedRoute/AddNewRoute')}>
        <Text style={{ color: colors.white, fontWeight: 'bold', textAlign: 'center' }}>
          Add New Route
        </Text>
      </TouchableOpacity>

      {dummyRoutes.map(route => (
        <View
          key={route.routeId}
          style={{
            padding: 16,
            backgroundColor: isDark ? colors.primary : colors.white,
            borderRadius: 12,
            marginBottom: 12,
            shadowColor: colors.black,
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 2,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: isDark ? colors.white : colors.darkPurple,
            }}>
            {route.routeName}
          </Text>
          <Text style={{ color: isDark ? colors.white : colors.primary }}>
            {route.pickUpLocation} → {route.dropOffLocation}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
