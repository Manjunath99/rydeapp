// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function AccountProfile() {
//   const router = useRouter();

//   return (
//     <View>
//       <Text>Account Information</Text>

//       <View>
//         <Text>Name: John Doe</Text>
//         <Text>Email: john.doe@example.com</Text>
//         <Text>Phone: +1 (555) 123-4567</Text>
//       </View>

//       <TouchableOpacity onPress={() => router.back()}>
//         <Text>Go Back</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { Appbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

export default function AccountProfile() {
  const router = useRouter();

  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const pickImage = async () => {
    // const result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //   allowsEditing: true,
    //   aspect: [1, 1],
    //   quality: 0.7,
    // });
    // if (!result.canceled) {
    //   setProfileImage(result.assets[0].uri);
    // }
  };

  const handleSave = () => {
    // Save to backend or state
    console.log({ name, email, phone, profileImage });
    router.back();
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Appbar */}
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Edit Profile" />
        <Appbar.Action icon="content-save" onPress={handleSave} />
      </Appbar.Header>

      {/* Profile Section */}
      <View style={styles.container}>
        <Text style={styles.title}>Profile Info</Text>

        <View style={{ width: '100%', alignItems: 'center' }}>
          <View style={styles.circleWrapper}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            ) : (
              <View style={styles.circle}>
                <AntDesign name="user" size={80} color="white" />
              </View>
            )}

            <TouchableOpacity style={styles.editIconWrapper} onPress={pickImage}>
              <AntDesign name="edit" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Inputs */}
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your Date of Birth"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  circleWrapper: {
    position: 'relative',
    marginBottom: 20,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIconWrapper: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#333',
    padding: 6,
    borderRadius: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
});
