import { Text, View, StyleSheet } from 'react-native';
import useColorScheme from '@/hooks/useColorScheme';
import Button from '@/components/elements/Button';
import { useRouter } from 'expo-router';
import { colors } from '@/theme';
import { RadioGroup } from '@/components/elements/RadioButton/index';
import { useState } from 'react';
import TextField from '@/components/elements/TextField';
import { AntDesign } from '@expo/vector-icons';
import PhoneNumberField from '@/components/elements/PhoneNumberField';
import { useRegisterUser } from '@/hooks/apiHooks/useUserApis';
import { validate } from 'uuid';
import { useAppSlice } from '@/slices/app.slice';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: colors.lightGrayPurple,

    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 24,
    marginTop: 44,

    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryText: {
    fontSize: 12,
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
});

export default function Signup() {
  const router = useRouter();
  const { isDark } = useColorScheme();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [gender, setGender] = useState('Male');
  const { setAuthData, dispatch } = useAppSlice();

  const validateForm = () => {
    return (
      phone.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      password === confirmPassword
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <View style={[styles.root, isDark && { backgroundColor: colors.blackGray }]}>
        <Text style={[styles.title, isDark && { color: colors.gray }]}>
          Sign up with your phone number
        </Text>
        <PhoneNumberField
          placeholder="Enter phone number"
          value={phone}
          onChangeText={setPhone}></PhoneNumberField>
        <TextField value={password} onChangeText={setPassword} placeholder="Password"></TextField>
        <TextField
          value={confirmPassword}
          onChangeText={setconfirmPassword}
          placeholder="Confirm Password"></TextField>

        <Text style={[styles.subtitle, isDark && { color: colors.gray }]}>Select Gender</Text>
        <RadioGroup options={['Male', 'Female', 'Other']} value={gender} onChange={setGender} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: 8,
            marginTop: 16,
          }}>
          <AntDesign name="checkcircleo" size={18} color={colors.primary} />

          <Text
            style={[styles.secondaryText, isDark && { color: colors.gray, textAlign: 'center' }]}>
            By signing up, you agree to our Terms & Conditions and Privacy Policy
          </Text>
        </View>
      </View>

      <Button
        title="Create an account"
        titleStyle={[styles.buttonTitle, isDark && { color: colors.blackGray }]}
        style={styles.button}
        onPress={() => {
          if (!validateForm()) {
            alert('Please fill in all fields');
            return;
          }
          dispatch(setAuthData({ phoneNumber: phone, password: password, gender: gender }));
          router.push({
            pathname: '/(auth)/OtpPage',
            params: {
              type: 'signup',
            },
          });
        }}
      />
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 24,
        }}>
        <Text>
          Already have an account?{' '}
          <Text
            style={[styles.secondaryText, { color: colors.primary }]}
            onPress={() => {
              router.replace({ pathname: '/(auth)/Login' });
            }}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}
