import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Login/index" options={{ headerShown: false }} />
      <Stack.Screen name="Signup/index" options={{ headerShown: false, title: '' }} />
      <Stack.Screen name="OtpPage/index" options={{ headerShown: false, title: '' }} />
      <Stack.Screen
        name="PasswordReset/index"
        options={{ headerShown: true, title: 'Create Account' }}
      />
    </Stack>
  );
}
