import { Drawer } from 'expo-router/drawer';
import DrawerContents from '@/components/layouts/DrawerContents';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: true, title: 'Create Account' }} />
      <Stack.Screen name="OtpPage" options={{ headerShown: true, title: 'Create Account' }} />
      <Stack.Screen name="PasswordReset" options={{ headerShown: true, title: 'Create Account' }} />
    </Stack>
  );
}
