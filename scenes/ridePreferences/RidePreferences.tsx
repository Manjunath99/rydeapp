import { View, Text, Switch, ScrollView, Button } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker'; // ✅ updated import

export default function RidePreferences() {
  const [preferQuietRide, setPreferQuietRide] = useState(false);
  const [preferACOn, setPreferACOn] = useState(true);
  const [rideTypePreference, setRideTypePreference] = useState('Standard');
  const [shareRide, setShareRide] = useState(false);
  const [paymentPreference, setPaymentPreference] = useState('Wallet');

  const handleSave = () => {
    // API call to update user preferences
    console.log({
      preferQuietRide,
      preferACOn,
      rideTypePreference,
      shareRide,
      paymentPreference,
    });
  };

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <View style={{ marginBottom: 24 }}>
        <Text>Prefer Quiet Ride</Text>
        <Switch value={preferQuietRide} onValueChange={setPreferQuietRide} />
      </View>

      <View style={{ marginBottom: 24 }}>
        <Text>Prefer AC On</Text>
        <Switch value={preferACOn} onValueChange={setPreferACOn} />
      </View>

      <View style={{ marginBottom: 24 }}>
        <Text>Ride Type Preference</Text>
        <Picker
          selectedValue={rideTypePreference}
          onValueChange={value => setRideTypePreference(value)}>
          <Picker.Item label="Standard" value="Standard" />
          <Picker.Item label="Premium" value="Premium" />
          <Picker.Item label="Luxury" value="Luxury" />
        </Picker>
      </View>

      <View style={{ marginBottom: 24 }}>
        <Text>Share Ride</Text>
        <Switch value={shareRide} onValueChange={setShareRide} />
      </View>

      <View style={{ marginBottom: 24 }}>
        <Text>Payment Preference</Text>
        <Picker
          selectedValue={paymentPreference}
          onValueChange={value => setPaymentPreference(value)}>
          <Picker.Item label="Wallet" value="Wallet" />
          <Picker.Item label="Cash" value="Cash" />
          <Picker.Item label="Card" value="Card" />
        </Picker>
      </View>

      <Button title="Save Preferences" onPress={handleSave} />
    </ScrollView>
  );
}
