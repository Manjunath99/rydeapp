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
    marginBottom: 20,

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
  secondaryButton: {
    borderRadius: 8,
    height: 54,
    width: '80%',
    backgroundColor: colors.transparent,
    borderWidth: 1,
    margin: 'auto',
    marginBottom: 32,

    borderColor: colors.primary,
  },
});

export default function Login() {
  const router = useRouter();
  const { isDark } = useColorScheme();
  const [gender, setGender] = useState('Male');

  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <View style={[styles.root, isDark && { backgroundColor: colors.blackGray }]}>
        <Text style={[styles.title, isDark && { color: colors.gray }]}>Log in</Text>

        <PhoneNumberField
          placeholder="Enter phone number"
          value=""
          onChangeText={() => {}}></PhoneNumberField>
        <TextField placeholder=" Password" keyboardType="email-address"></TextField>

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
            By signing in, you agree to our Terms & Conditions and Privacy Policy
          </Text>
        </View>
      </View>

      <Button
        title="Log in"
        titleStyle={[
          styles.buttonTitle,
          { color: colors.primary },
          isDark && { color: colors.white },
        ]}
        style={[styles.secondaryButton]}
        onPress={() => {}}
      />
      <Text>
        Don't have an account?{' '}
        <Text
          style={[styles.secondaryText, { color: colors.primary }]}
          onPress={() => {
            router.push({ pathname: '/(auth)/Signup' });
          }}>
          Sign up
        </Text>
      </Text>
    </View>
  );
}
