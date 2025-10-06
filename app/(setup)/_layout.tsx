import { Stack } from 'expo-router';

export default function SetupLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BasicSetup/index" options={{ headerShown: false }} />
      <Stack.Screen name="VehicleSetup/index" options={{ headerShown: false, title: '' }} />
    </Stack>
  );
}
