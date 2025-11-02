import { View, Text, TextInput, ScrollView, Button, Alert, StyleSheet } from 'react-native';
import { useState } from 'react';
import { colors } from '@/theme';
import useColorScheme from '@/hooks/useColorScheme';
import { useChangePassword } from '@/hooks/apiHooks/useUserApis';
import { useRouter } from 'expo-router';

export default function ChangePasswordScreen() {
  const router = useRouter();
  const { isDark } = useColorScheme();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const { mutate: changePassword, isPending, error, data } = useChangePassword();

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !retypePassword) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    if (newPassword !== retypePassword) {
      Alert.alert('Error', 'New password and retype password do not match');
      return;
    }

    changePassword(
      { oldPassword: currentPassword, newPassword: newPassword },
      {
        onSuccess: () => {
          Alert.alert('Success', 'Password changed successfully!');
          router.back();
        },
        onError: () => {
          Alert.alert('Error', 'Failed to change password');
        },
      },
    );

    // setCurrentPassword('');
    // setNewPassword('');
    // setRetypePassword('');
  };

  return (
    <ScrollView
      style={{ flex: 1, padding: 16, backgroundColor: isDark ? colors.blackGray : colors.white }}
      keyboardShouldPersistTaps="handled">
      <View
        style={{
          backgroundColor: isDark ? colors.primary : colors.white,
          padding: 16,
          borderRadius: 12,
          shadowColor: colors.black,
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          elevation: 2,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            marginBottom: 12,
            color: isDark ? colors.white : colors.darkPurple,
          }}>
          Change Password
        </Text>

        <Text>Current Password</Text>
        <TextInput
          placeholder="Enter current password"
          secureTextEntry
          value={currentPassword}
          onChangeText={setCurrentPassword}
          style={inputStyle(isDark)}
        />

        <Text>New Password</Text>
        <TextInput
          placeholder="Enter new password"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
          style={inputStyle(isDark)}
        />

        <Text>Retype New Password</Text>
        <TextInput
          placeholder="Retype new password"
          secureTextEntry
          value={retypePassword}
          onChangeText={setRetypePassword}
          style={inputStyle(isDark)}
        />

        <Button title="Change Password" onPress={handleChangePassword} />
      </View>
    </ScrollView>
  );
}

// reusable input style
const inputStyle = (isDark: boolean) => ({
  borderWidth: 1,
  borderColor: colors.primary,
  padding: 10,
  borderRadius: 8,
  marginBottom: 12,
  color: isDark ? colors.white : colors.primary,
});
