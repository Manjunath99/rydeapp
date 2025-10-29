import { Redirect } from 'expo-router';
import { useAppSlice } from '@/slices/app.slice';

export default function Index() {
  const { loggedIn, user, onBoardingDone } = useAppSlice();
  console.log('LOGINdatattat', { loggedIn, user, onBoardingDone });
  if (loggedIn && user) {
    return <Redirect href="/(tabs)/home" />;
  }
  if (!onBoardingDone) {
    return <Redirect href="/onboarding" />;
  }

  return <Redirect href="/(auth)/Login" />;
}
