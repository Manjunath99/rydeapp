import { Fragment, useState, useEffect, use } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import BottomSheetContents from '@/components/layouts/BottomSheetContents';
import BottomSheet from '@/components/elements/BottomSheet';
import { useDataPersist, DataPersistKeys } from '@/hooks';
import useColorScheme from '@/hooks/useColorScheme';
import { loadImages, loadFonts, colors } from '@/theme';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useAppSlice } from '@/slices';
import { UserService } from '@/services';
import Provider from '@/providers';
import { User } from '@/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@/services/apis/interceptors';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

// keep the splash screen visible while complete fetching resources
SplashScreen.preventAutoHideAsync();

function Router() {
  const { isDark } = useColorScheme();
  const { dispatch, setUser, setLoggedIn } = useAppSlice();
  const { setPersistData, getPersistData, removeAllPersistData } = useDataPersist();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await Promise.all([loadImages(), loadFonts()]);

        const user = await getPersistData<User>(DataPersistKeys.USER);

        if (user) {
          dispatch(setUser(user));
          dispatch(setLoggedIn(true));
        }

        SplashScreen.hideAsync();
        setOpen(true);
      } catch {
      } finally {
        SplashScreen.hideAsync();
        setOpen(true);
      }
    })();
  }, []);

  if (!isOpen) return null;

  return (
    <Fragment>
      <Slot />
      <StatusBar style="light" />
    </Fragment>
  );
}

export default function RootLayout() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </Provider>
  );
}
