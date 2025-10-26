import { Text, View, StyleSheet, Pressable } from 'react-native';
import useColorScheme from '@/hooks/useColorScheme';
import useScreenSize from '@/hooks/dimension';
import Button from '@/components/elements/Button';
import { useRouter } from 'expo-router';
import { colors } from '@/theme';
import { marketingLines } from '@/constants/onboardingconstants';
import { useState } from 'react';
import CircularProgress from '@/components/elements/KButton/KButton';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonTitle: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
  button: {
    marginBottom: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 22,
    backgroundColor: colors.lightPurple,
    height: 44,
    width: '50%',
  },
});

export default function OnBoarding() {
  const router = useRouter();
  const { isDark } = useColorScheme();
  const { width, height } = useScreenSize();

  const [count, setCount] = useState(0);
  return (
    <View style={[styles.root, isDark && { backgroundColor: colors.blackGray }]}>
      <View style={[styles.root, { maxWidth: Math.min(width - 50, 500), padding: 20 }]}>
        <Text style={[styles.title, isDark && { color: colors.gray }]}>
          {marketingLines[count % marketingLines.length].title}
        </Text>
        <Text style={[styles.subtitle, isDark && { color: colors.gray }]}>
          {marketingLines[count % marketingLines.length].description}
        </Text>
      </View>
      <View style={{ marginTop: 20, marginBottom: 50 }}>
        <CircularProgress progress={65} size={86} strokeWidth={6} color={colors.primary}>
          <Pressable
            onPress={() => {
              if (count === marketingLines.length - 1) {
                router.push({ pathname: '/(auth)/Login' });
              } else {
                setCount(count + 1);
              }
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.primary,
                width: 70,
                height: 70,
                borderRadius: 35,
              }}>
              <AntDesign name="arrowright" size={32} color="black" />
            </View>
          </Pressable>
        </CircularProgress>
      </View>
    </View>
  );
}
