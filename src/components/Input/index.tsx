import React from 'react';
import { StyleProp, TextInput, TextInputProps } from 'react-native';

import styles from './styles';

interface IInput extends TextInputProps {
  style?: StyleProp<any>;
}

export const Input: React.FC<IInput> = ({ style, ...rest }) => (
  <TextInput
    autoCapitalize="none"
    style={[styles.textInput, style]}
    {...rest}
  />
);
