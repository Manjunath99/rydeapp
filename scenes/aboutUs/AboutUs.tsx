import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { colors } from '@/theme';
import useColorScheme from '@/hooks/useColorScheme';

export default function AboutUsScreen() {
  const { isDark } = useColorScheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: isDark ? colors.blackGray : colors.white }]}
      contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={[styles.card, { backgroundColor: isDark ? colors.primary : colors.white }]}>
        {/* Optional Logo */}
        {/* <Image
          source={require('@/assets/logo.png')}
          style={{ width: 100, height: 100, marginBottom: 16, alignSelf: 'center' }}
          resizeMode="contain"
        /> */}

        <Text style={[styles.title, { color: isDark ? colors.white : colors.darkPurple }]}>
          About Us
        </Text>

        <Text style={[styles.text, { color: isDark ? colors.white : colors.primary }]}>
          Welcome to [App Name]! Our mission is to make travel safe, affordable, and convenient for
          everyone. We connect drivers and passengers seamlessly while offering exciting features
          like ride-sharing, saved routes, and rewards programs.
        </Text>

        <Text style={[styles.text, { color: isDark ? colors.white : colors.primary }]}>
          Founded in [Year], our company is committed to providing reliable and innovative transport
          solutions.
        </Text>

        <Text style={[styles.text, { color: isDark ? colors.white : colors.primary }]}>
          Contact us at: support@[appname].com
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    borderRadius: 12,
    padding: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  text: { fontSize: 16, lineHeight: 22, marginBottom: 12 },
});
