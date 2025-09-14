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
  circleWrapper: {
    position: 'relative',
    width: 120,
    height: 120,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: colors.primary,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray,
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 0,
    backgroundColor: colors.primary + '80',
    opacity: 0.9,
    borderRadius: 12,
    padding: 4,
    borderColor: colors.primary,
    borderWidth: 1,
  },
});

export default function BasicSetup() {
  const router = useRouter();
  const { isDark } = useColorScheme();
  const [gender, setGender] = useState('Yes');

  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <View style={[styles.root, isDark && { backgroundColor: colors.blackGray }]}>
        <Text style={[styles.title, isDark && { color: colors.gray }]}>Profile info</Text>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <View style={styles.circleWrapper}>
            <View style={styles.circle}>
              <AntDesign name="user" size={80} color="white" />
            </View>

            <AntDesign name="edit" size={24} color="white" style={styles.editIcon} />
          </View>
        </View>

        <TextField placeholder="Email" keyboardType="email-address"></TextField>
        <TextField placeholder="Date of Birth " keyboardType="email-address"></TextField>

        <Text style={[styles.subtitle, isDark && { color: colors.gray }]}>
          Do you have a vehicle?
        </Text>
        <RadioGroup
          options={['Yes', 'No']}
          value={gender}
          onChange={setGender}
          containerStyle={{
            flexDirection: 'row',
            gap: 16,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        />
      </View>

      <Button
        title="Create an account"
        titleStyle={[styles.buttonTitle, isDark && { color: colors.blackGray }]}
        style={styles.button}
        onPress={() => {}}
      />
    </View>
  );
}
