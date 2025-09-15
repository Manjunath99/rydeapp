import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Share } from 'react-native';
import { useState } from 'react';
import { colors } from '@/theme';
import useColorScheme from '@/hooks/useColorScheme';
import Button from '@/components/elements/Button';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12, color: colors.darkPurple },
  text: { fontSize: 16, color: colors.primary, marginBottom: 12 },
  codeContainer: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  codeText: { fontSize: 18, fontWeight: 'bold', color: colors.darkPurple },
});

export default function ReferAndEarn() {
  const { isDark } = useColorScheme();
  const [referralCode] = useState('REF12345'); // you can fetch from API

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Join the app using my referral code: ${referralCode}`,
      });
    } catch (error) {
      console.log('Error sharing referral:', error);
    }
  };

  return (
    <ScrollView style={[styles.container, isDark && { backgroundColor: colors.blackGray }]}>
      <View style={[styles.card, isDark && { backgroundColor: colors.primary }]}>
        <Text style={[styles.title, isDark && { color: colors.white }]}>Refer & Earn</Text>
        <Text style={[styles.text, isDark && { color: colors.white }]}>
          Invite your friends and earn rewards when they join and complete their first ride!
        </Text>

        <View style={styles.codeContainer}>
          <Text style={[styles.codeText, isDark && { color: colors.white }]}>{referralCode}</Text>
        </View>

        <Button title="Share Referral Code" onPress={handleShare} />
      </View>

      <View style={[styles.card, isDark && { backgroundColor: colors.primary }]}>
        <Text style={[styles.title, isDark && { color: colors.white }]}>Your Rewards</Text>
        <Text style={[styles.text, isDark && { color: colors.white }]}>
          You have earned <Text style={{ fontWeight: 'bold' }}>₹200</Text> so far!
        </Text>
      </View>
    </ScrollView>
  );
}
