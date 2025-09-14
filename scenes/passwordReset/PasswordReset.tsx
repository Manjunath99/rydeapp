import { Text, View, StyleSheet, Pressable, Alert } from 'react-native';
import useColorScheme from '@/hooks/useColorScheme';
import useScreenSize from '@/hooks/dimension';
import Button from '@/components/elements/Button';
import { useRouter } from 'expo-router';
import { colors } from '@/theme';
import { marketingLines } from '@/constants/onboardingconstants';
import { useState } from 'react';
import CircularProgress from '@/components/elements/KButton/KButton';
import { AntDesign } from '@expo/vector-icons';
import TextField from '@/components/elements/TextField';

const CELL_COUNT = 6;

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 16,
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

export default function PasswordReset() {
  const router = useRouter();
  const { isDark } = useColorScheme();
  const { width, height } = useScreenSize();

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleVerify = () => {
    Alert.alert('OTP Entered', value);
  };
  return (
    <View style={[styles.root, isDark && { backgroundColor: colors.blackGray }]}>
      <View style={{ height: height * 0.2 }}></View>
      <Text style={[styles.title, isDark && { color: colors.gray }]}>Set Password </Text>
      <Text style={[styles.subtitle, isDark && { color: colors.gray }]}>Set Your Password</Text>
      <TextField placeholder="Enter your Password" keyboardType="email-address"></TextField>
      <TextField placeholder="Confirm Password" keyboardType="email-address"></TextField>

      <Button
        title="Reset Password"
        titleStyle={[styles.buttonTitle, isDark && { color: colors.blackGray }]}
        style={styles.button}
        onPress={() => {}}
      />
    </View>
  );
}
