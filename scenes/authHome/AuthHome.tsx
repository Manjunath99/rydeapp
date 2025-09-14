import { Text, View, StyleSheet } from 'react-native';
import GradientButton from '@/components/elements/GradientButton';
import { useRouter, useLocalSearchParams } from 'expo-router';
import useColorScheme from '@/hooks/useColorScheme';
import { colors } from '@/theme';
import Button from '@/components/elements/Button';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: '400',
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
    width: '80%',
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    borderRadius: 8,
    height: 54,
    width: '80%',
    backgroundColor: colors.transparent,
    borderWidth: 1,

    borderColor: colors.primary,
  },
});

export default function AuthHome() {
  const router = useRouter();
  const { isDark } = useColorScheme();
  const { from } = useLocalSearchParams();
  return (
    <View style={[styles.root, isDark && { backgroundColor: colors.blackGray }]}>
      <View style={[styles.root, { width: '100%' }]}>
        <Text style={[styles.title, isDark && { color: colors.white }]}>{`Welcome`}</Text>

        <Text
          style={[
            styles.subtitle,
            isDark && { color: colors.white },
          ]}>{`Have a better sharing experience`}</Text>
      </View>

      <View style={{ gap: 20, width: '100%', alignItems: 'center', marginBottom: 50 }}>
        <Button
          title="Create an account"
          titleStyle={[styles.buttonTitle, isDark && { color: colors.blackGray }]}
          style={styles.button}
          onPress={() => {
            router.push({ pathname: '/(auth)/Login' });
          }}
        />
        <Button
          title="Log in"
          titleStyle={[
            styles.buttonTitle,
            { color: colors.primary },
            isDark && { color: colors.white },
          ]}
          style={[styles.secondaryButton]}
          onPress={() => {
            router.push({ pathname: '/(setup)/VehicleSetup' });
          }}
        />
      </View>
    </View>
  );
}
