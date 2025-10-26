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

// keep the splash screen visible while complete fetching resources
SplashScreen.preventAutoHideAsync();

function Router() {
  const { isDark } = useColorScheme();
  const { dispatch, setUser, setLoggedIn } = useAppSlice();
  const { setPersistData, getPersistData } = useDataPersist();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await Promise.all([loadImages(), loadFonts()]);

        const user = await UserService.getUserAsync();
        const jdjd = await UserService.updateProfile({
          name: 'Jed',
          email: 'jed@jed.com',
        });

        if (user) {
          console.log('[##] user', user);
        }

        dispatch(setUser(user));
        dispatch(setLoggedIn(!!user));
        if (user) setPersistData<User>(DataPersistKeys.USER, user);

        SplashScreen.hideAsync();
        setOpen(true);
      } catch {
        getPersistData<User>(DataPersistKeys.USER)
          .then(user => {
            if (user) dispatch(setUser(user));
            dispatch(setLoggedIn(!!user));
          })
          .finally(() => {
            SplashScreen.hideAsync();

            setOpen(true);
          });
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
