import React from 'react';
import { Pressable, PressableProps, StyleProp, Text } from 'react-native';
import styles from './styles';

interface IButton extends PressableProps {
  title: string;
  style?: StyleProp<any>;
}

export const Button: React.FC<IButton> = ({
  children,
  title,
  style,
  ...rest
}) => (
  <Pressable style={[styles.button, style]} {...rest}>
    <Text style={styles.title}>{title}</Text>
    {children}
  </Pressable>
);
