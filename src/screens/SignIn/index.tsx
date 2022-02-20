import React, { useState } from 'react';
import { Alert, View } from 'react-native';

import { useAuth } from '../../auth/useAuth';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import styles from './styles';

export const SignInScreen = () => {
  const auth = useAuth();
  const [address, setAddress] = useState<string>('');

  const onPressSignIn = () => {
    if (address.length === 0) {
      Alert.alert('Please enter an address to sign in.');
      return;
    }

    auth.signIn(address);
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.textInput}
        onChangeText={setAddress}
        value={address}
        placeholder={'Enter your address'}
      />
      <Button title={'Sign in'} onPress={onPressSignIn} />
    </View>
  );
};
