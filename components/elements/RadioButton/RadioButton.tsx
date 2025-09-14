import React from 'react';
import { View, Text, Pressable, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { colors } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  circleSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  label: {
    fontSize: 16,
    color: colors.black,
  },
});

export interface RadioButtonProps {
  label: string;
  selected: boolean;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

function RadioButton({ label, selected, onPress, containerStyle, labelStyle }: RadioButtonProps) {
  return (
    <Pressable style={[styles.container, containerStyle]} onPress={onPress}>
      <View style={styles.circle}>{selected && <View style={styles.circleSelected} />}</View>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </Pressable>
  );
}

export default RadioButton;
