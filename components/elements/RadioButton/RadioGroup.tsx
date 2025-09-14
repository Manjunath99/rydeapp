import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import RadioButton from './RadioButton';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'stretch',
    width: '100%',
  },
});

export interface RadioGroupProps {
  options: string[];
  value: string;
  onChange: (val: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

function RadioGroup({ options, value, onChange, containerStyle }: RadioGroupProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      {options.map(opt => (
        <RadioButton key={opt} label={opt} selected={value === opt} onPress={() => onChange(opt)} />
      ))}
    </View>
  );
}

export default RadioGroup;
