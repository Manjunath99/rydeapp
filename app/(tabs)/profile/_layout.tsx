import { Stack, useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import NavigationHeaderLeft from '@/components/layouts/NavigationHeaderLeft';
import NavigationHeaderTitle from '@/components/layouts/NavigationHeaderTitle';
import useColorScheme from '@/hooks/useColorScheme';
import { colors } from '@/theme';

export default function ProfileStackLayout() {
  const navigation = useNavigation();
  const { isDark } = useColorScheme();
  const toggleDrawer = () => navigation.dispatch(DrawerActions.toggleDrawer());
  return (
    <Stack
      screenOptions={{
        headerTintColor: colors.white,
        headerStyle: { backgroundColor: isDark ? colors.blackGray : colors.primary },
        headerTitleStyle: { fontSize: 18 },
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: '',
          //headerTitle: () => <NavigationHeaderTitle />,
          // headerLeft: () => <NavigationHeaderLeft onPress={toggleDrawer} />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          title: 'Details',
          headerTitle: 'Item Details',
        }}
      />
      <Stack.Screen
        name="accountInfo"
        options={{
          title: 'Account Info',
          headerTitle: 'Account Info',
        }}
      />
      <Stack.Screen
        name="vehicles"
        options={{
          title: 'Vehicle Info',
          headerTitle: 'Vehicle Info',
        }}
      />
      <Stack.Screen
        name="emergencyContacts/EmergencyContactsScreen"
        options={{
          title: 'Saved Places',
          headerTitle: 'Saved Places',
        }}
      />
      <Stack.Screen
        name="reviews/ReviewsScreen"
        options={{
          title: 'Saved Places',
          headerTitle: 'Saved Places',
        }}
      />
      <Stack.Screen
        name="reviews/AddReviewScreen"
        options={{
          title: 'Saved Places',
          headerTitle: 'Saved Places',
        }}
      />
      <Stack.Screen
        name="helpAndSupport"
        options={{
          title: 'Saved Places',
          headerTitle: 'Saved Places',
        }}
      />
      <Stack.Screen
        name="privacyAndSupport"
        options={{
          title: 'Saved Places',
          headerTitle: 'Saved Places',
        }}
      />
    </Stack>
  );
}
