// import { Text, View, StyleSheet } from 'react-native';
// import useColorScheme from '@/hooks/useColorScheme';
// import Button from '@/components/elements/Button';
// import { useRouter } from 'expo-router';
// import { colors } from '@/theme';

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: colors.lightGrayPurple,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   buttonTitle: {
//     fontSize: 16,
//     color: colors.white,
//     textAlign: 'center',
//   },
//   button: {
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 22,
//     backgroundColor: colors.lightPurple,
//     height: 44,
//     width: '50%',
//   },
// });

// export default function Home() {
//   const router = useRouter();
//   const { isDark } = useColorScheme();
//   return (
//     <View style={[styles.root, isDark && { backgroundColor: colors.blackGray }]}>
//       <Text style={[styles.title, isDark && { color: colors.gray }]}>Home</Text>
//       <Button
//         title="Go to Details"
//         titleStyle={[styles.buttonTitle, isDark && { color: colors.blackGray }]}
//         style={styles.button}
//         onPress={() => router.push({ pathname: '(tabs)/home/details', params: { from: 'Home' } })}
//       />
//     </View>
//   );
// }

import React, { useState, useRef } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

type Coordinates = [number, number];

export default function Home() {
  const [pickupText, setPickupText] = useState<string>('');
  const [dropoffText, setDropoffText] = useState<string>('');
  const webviewRef = useRef<WebView>(null);
  const testHtml = `<html><body><h1>Hello WebView</h1></body></html>`;

  const olaHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <script src="https://www.unpkg.com/olamaps-web-sdk@latest/dist/olamaps-web-sdk.umd.js"></script>
        <style>
          html, body, #map { margin:0; padding:0; height:100%; width:100%; }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          window.onload = function() {
            const map = new OlaMaps.Map('map', {
              apiKey: '', // <-- replace with your Ola Maps API key
              center: [12.9716, 77.5946], // Initial center: Bengaluru
              zoom: 12
            });
          };
        </script>
      </body>
    </html>
  `;

  const sendLocationToWebView = (type: 'pickup' | 'dropoff', coords: Coordinates) => {
    webviewRef.current?.postMessage(JSON.stringify({ type, coords }));
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Pick-up Location"
          value={pickupText}
          onChangeText={setPickupText}
          style={styles.input}
        />
        <Button
          title="Select Pickup"
          onPress={() => {
            const coords: Coordinates = [12.9716, 77.5946]; // example coords
            sendLocationToWebView('pickup', coords);
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Drop-off Location"
          value={dropoffText}
          onChangeText={setDropoffText}
          style={styles.input}
        />
        <Button
          title="Select Drop-off"
          onPress={() => {
            const coords: Coordinates = [12.9352, 77.6245]; // example coords
            sendLocationToWebView('dropoff', coords);
          }}
        />
      </View>

      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <WebView
          style={{ flex: 1 }}
          ref={webviewRef}
          originWhitelist={['*']}
          source={{ html: olaHtml }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: { flexDirection: 'row', alignItems: 'center', margin: 8 },
  input: { flex: 1, borderWidth: 1, padding: 8, borderRadius: 8, marginRight: 8 },
});
