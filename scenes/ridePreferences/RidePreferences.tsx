import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { useUpdateUser } from '@/hooks/apiHooks/useUserApis';

export default function RidePreferences() {
  const [preferQuietRide, setPreferQuietRide] = useState(false);
  const [preferACOn, setPreferACOn] = useState(true);
  const [rideTypePreference, setRideTypePreference] = useState('Standard');
  const [shareRide, setShareRide] = useState(false);
  const [paymentPreference, setPaymentPreference] = useState('Wallet');

  const { mutate: changeRidePreferences, isPending, error, data } = useUpdateUser();

  const handleSave = () => {
    const preferences = {
      preferQuietRide,
      preferACOn,
      rideTypePreference,
      shareRide,
      paymentPreference,
    };

    console.log(preferences);
    changeRidePreferences(preferences, {
      onSuccess: () => {
        Alert.alert('Preferences updated successfully');
      },
      onError: error => {
        Alert.alert('Error updating preferences:');
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Ride Preferences</Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="volume-mute-outline" size={22} color="#0ea5e9" />
            <Text style={styles.label}>Prefer Quiet Ride</Text>
            <Switch value={preferQuietRide} onValueChange={setPreferQuietRide} />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="snow-outline" size={22} color="#0ea5e9" />
            <Text style={styles.label}>Prefer AC On</Text>
            <Switch value={preferACOn} onValueChange={setPreferACOn} />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.subTitle}>Ride Type</Text>
          <Picker
            selectedValue={rideTypePreference}
            onValueChange={value => setRideTypePreference(value)}>
            <Picker.Item label="Standard" value="Standard" />
            <Picker.Item label="Premium" value="Premium" />
            <Picker.Item label="Luxury" value="Luxury" />
          </Picker>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="people-outline" size={22} color="#0ea5e9" />
            <Text style={styles.label}>Share Ride</Text>
            <Switch value={shareRide} onValueChange={setShareRide} />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.subTitle}>Payment Preference</Text>
          <Picker
            selectedValue={paymentPreference}
            onValueChange={value => setPaymentPreference(value)}>
            <Picker.Item label="Wallet" value="Wallet" />
            <Picker.Item label="Cash" value="Cash" />
            <Picker.Item label="Card" value="Card" />
          </Picker>
        </View>

        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveText}>Save Preferences</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: '#1e293b',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1e293b',
  },
  saveBtn: {
    backgroundColor: '#0ea5e9',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
