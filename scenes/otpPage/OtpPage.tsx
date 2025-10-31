import { Text, View, StyleSheet, Pressable, Alert } from 'react-native';
import useColorScheme from '@/hooks/useColorScheme';
import useScreenSize from '@/hooks/dimension';
import Button from '@/components/elements/Button';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { colors } from '@/theme';
import { marketingLines } from '@/constants/onboardingconstants';
import { useState } from 'react';
import CircularProgress from '@/components/elements/KButton/KButton';
import { AntDesign } from '@expo/vector-icons';
const CELL_COUNT = 6;

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { useLoginUser, useRegisterUser } from '@/hooks/apiHooks/useUserApis';
import { useAppSlice } from '@/slices/app.slice';
import { DataPersistKeys, useDataPersist } from '@/hooks/useDataPersist';
import { User } from '@/types/user';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonTitle: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    fontWeight: '600',
  },
  button: {
    borderRadius: 8,
    height: 54,
    margin: 'auto',
    marginBottom: 32,
    width: '80%',

    backgroundColor: colors.primary,
  },
  codeFieldRoot: {
    marginTop: 20,
    gap: 6,
  },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#ccc',
    textAlign: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusCell: {
    borderColor: colors.primary,
  },
  cellText: {
    fontSize: 22,
    textAlign: 'center',
  },
});

export default function OtpPage() {
  const { type } = useLocalSearchParams();
  const router = useRouter();
  const { isDark } = useColorScheme();
  const { width, height } = useScreenSize();
  const { setPersistData, getPersistData, removeAllPersistData } = useDataPersist();

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const { authData, setUser, dispatch } = useAppSlice();
  const { mutate: register, isError, error, isSuccess, data } = useRegisterUser();

  const {
    mutate: login,
    isError: isErrorLogin,
    error: errorLogin,
    isSuccess: isSuccessLogin,
    data: dataLogin,
  } = useLoginUser();

  const handleVerify = async () => {
    if (type === 'signup') {
      if (authData) {
        register(authData, {
          onSuccess: async data => {
            const res = await setPersistData(DataPersistKeys.ACCESS_TOKEN, data.accessToken);

            dispatch(setUser(data.user));
            router.replace('/(tabs)/home');
          },
          onError: error => {
            console.log(error);
          },
        });
      }
    }
    if (type === 'login') {
      if (authData) {
        login(
          {
            phoneNumber: authData.phoneNumber,
            passwordHash: authData.password,
          },
          {
            onSuccess: async data => {
              router.push('/home');
            },
            onError: error => {
              console.log(error);
            },
          },
        );
      }
    }
  };
  return (
    <View style={[styles.root, isDark && { backgroundColor: colors.blackGray }]}>
      <View style={{ height: height * 0.2 }}></View>
      <Text style={[styles.title, isDark && { color: colors.gray }]}>Phone verification</Text>
      <Text style={[styles.subtitle, isDark && { color: colors.gray }]}>Enter your OTP code</Text>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            <Text style={styles.cellText}>{symbol || (isFocused ? <Cursor /> : null)}</Text>
          </View>
        )}
      />
      <Text style={[styles.subtitle, isDark && { color: colors.gray }, { marginTop: 20 }]}>
        Didn’t receive code? Resend again
      </Text>

      <Button
        title="Verify OTP"
        titleStyle={[styles.buttonTitle, isDark && { color: colors.blackGray }]}
        style={styles.button}
        onPress={() => {
          console.log('hegr fhgjfr jfbr');
          handleVerify();
          //router.replace('/(setup)/BasicSetup');
        }}
      />
    </View>
  );
}
