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

export default function VechileList() {
  const router = useRouter();
  const { isDark } = useColorScheme();
  const [gender, setGender] = useState('Male');

  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <Text style={[styles.title, isDark && { color: colors.gray }]}>Vehicle list</Text>

      <Button
        title="Add new Vehicle"
        titleStyle={[styles.buttonTitle, isDark && { color: colors.blackGray }]}
        style={styles.button}
        onPress={() => {
          router.push({ pathname: '/profile/vehicles/vehicleSetup' });
        }}
      />
    </View>
  );
}
