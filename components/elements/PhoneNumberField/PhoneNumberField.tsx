import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Image,
} from 'react-native';
import { colors } from '@/theme';

export interface PhoneNumberFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

function PhoneNumberField({
  value,
  onChangeText,
  placeholder = 'Enter phone number',
  containerStyle,
  inputStyle,
}: PhoneNumberFieldProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.prefix, { marginRight: 8 }]}>
        <Image
          source={{
            uri: 'https://flagcdn.com/w20/in.png', // 🇮🇳 flag (20px wide)
          }}
          style={[styles.flag]}
        />
        <View style={styles.separator} />

        <Text style={styles.code}>+91</Text>
      </View>

      <TextInput
        style={[styles.input, inputStyle]}
        keyboardType="phone-pad"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  prefix: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  flag: {
    width: 20,
    height: 15,
    marginRight: 6,
    borderRadius: 2,
  },
  code: {
    fontSize: 16,
    color: colors.black,
    marginLeft: 6,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
  },
  separator: {
    width: 1,
    height: 30,
    backgroundColor: colors.blackGray,
    marginLeft: 8,
  },
});

export default PhoneNumberField;
