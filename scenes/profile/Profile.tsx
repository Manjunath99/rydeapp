import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/theme';
import useColorScheme from '@/hooks/useColorScheme';
import Button from '@/components/elements/Button';
import { useDataPersist } from '@/hooks/useDataPersist';
import BottomSheet from '@/components/elements/BottomSheet';
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
    color: colors.darkPurple,
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  itemText: {
    fontSize: 16,
    color: colors.primary,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
});

export default function Profile() {
  const router = useRouter();
  const { isDark } = useColorScheme();
  const { removeAllPersistData } = useDataPersist();
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [sheetType, setSheetType] = useState('logout');

  const sections = [
    {
      title: 'Account',
      items: [
        { label: 'Account Info', path: '/profile/accountInfo' },
        { label: 'My Vehicles', path: '/profile/vehicles' },
        { label: 'Saved Routes', path: '/profile/savedRoute/SavedRoutes' },
      ],
    },

    {
      title: 'Settings & Security',
      items: [
        { label: 'Change Password', path: '/profile/changePassword' },
        { label: 'Ride Preferences', path: '/profile/ridePreferences' },
      ],
    },

    {
      title: 'Ride & Social',
      items: [
        { label: 'Ride History', path: '/profile/reviews/ReviewsScreeny' },
        { label: 'Reviews & Ratings', path: '/profile/reviews/ReviewsScreen' },
        { label: 'Refer & Earn', path: '/profile/referAndEarn' },
      ],
    },

    {
      title: 'Safety & Support',
      items: [
        { label: 'Emergency Contacts', path: '/profile/emergencyContacts/EmergencyContactsScreen' },
        { label: 'Privacy & Security', path: '/profile/privacyAndSupport' },
        { label: 'Help & Support', path: '/profile/helpAndSupport' },
        { label: 'Contact Us', path: '/profile/contactUs' }, // moved here
      ],
    },

    {
      title: 'About & App Actions',
      items: [
        { label: 'About Us', path: '/profile/aboutUs' },
        { label: 'Delete Account', path: '/profile/delete' },
        { label: 'Logout', path: '/profile/logout' },
      ],
    },
    // {
    //   title: 'Payments',
    //   items: [
    //     { label: 'Payment Methods / Wallet', path: '/profile/paymentMethods' },
    //     { label: 'Transaction History', path: '/profile/transactions' },
    //     { label: 'Subscriptions / Plans', path: '/profile/subscriptions' },
    //   ],
    // },
  ];

  const handleAction = async () => {
    if (sheetType === 'logout') {
      removeAllPersistData();
      setSheetOpen(false);
      router.push('/(auth)/Login');
    } else if (sheetType === 'delete') {
      removeAllPersistData();
      setSheetOpen(false);
      router.push('/(auth)/Login');
    }
  };

  return (
    <>
      <ScrollView style={[styles.container, isDark && { backgroundColor: colors.blackGray }]}>
        {sections.map((section, sectionIndex) => (
          <View
            key={section.title}
            style={[styles.section, isDark && { backgroundColor: colors.primary }]}>
            <Text style={[styles.sectionTitle, isDark && { color: colors.white }]}>
              {section.title}
            </Text>
            {section.items.map((item, itemIndex) => (
              <TouchableOpacity
                key={item.path}
                onPress={() => {
                  if (item.path === '/profile/logout') {
                    setSheetType('logout');
                    setSheetOpen(true);
                    return;
                  }
                  if (item.path === '/profile/delete') {
                    setSheetType('delete');
                    setSheetOpen(true);
                    return;
                  }
                  router.push(item.path);
                }}
                style={[styles.item, itemIndex === section.items.length - 1 && styles.lastItem]}>
                <Text style={[styles.itemText, isDark && { color: colors.white }]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>

      <BottomSheet isOpen={isSheetOpen} onClose={() => setSheetOpen(false)}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
            {sheetType === 'logout' ? 'Confirm Logout' : 'Delete Account'}
          </Text>
          <Text style={{ marginBottom: 20, color: '#666' }}>
            {sheetType === 'logout'
              ? 'Are you sure you want to log out? You’ll need to log in again to continue using the app.'
              : 'Deleting your account is permanent. All data, rides, and preferences will be lost forever.'}
          </Text>

          <Button
            title={sheetType === 'logout' ? 'Logout' : 'Delete Account'}
            onPress={handleAction}
            style={{
              marginBottom: 10,
              backgroundColor: sheetType === 'logout' ? 'red' : '#b00020',
            }}
          />

          <Button
            title="Cancel"
            onPress={() => setSheetOpen(false)}
            style={{ backgroundColor: '#ccc' }}
          />
        </View>
      </BottomSheet>
    </>
  );
}
