import { Redirect } from 'expo-router';
import { useAppSlice } from '@/slices/app.slice';

export default function Index() {
  const { loggedIn, user } = useAppSlice();
  // if (loggedIn && user) {
  //   return <Redirect href="/(tabs)/home" />;
  // }

  return <Redirect href="/onboarding" />;
}
