import React, { useState } from 'react';
import { Alert, Modal, ModalProps, View } from 'react-native';
import { useAuth } from '../../../auth/useAuth';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

import styles from './styles';

export const SendModal: React.FC<ModalProps> = ({
  visible,
  onRequestClose,
}) => {
  const auth = useAuth();

  const [address, setAddress] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  const onSuccess = () => {
    const user = auth.user!;
    auth.signIn(user.address);
    onRequestClose?.();
  };

  const onError = (error: string) => {
    Alert.alert('Error', error);
  };

  const onPressSend = () =>
    auth.sendTransaction(address, amount, onSuccess, onError);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.container}>
        <Input
          style={styles.modalMargin}
          onChangeText={setAddress}
          value={address}
          placeholder={'Enter user address'}
        />
        <Input
          style={styles.modalMargin}
          onChangeText={setAmount}
          value={amount}
          placeholder={'Enter amount'}
        />
        <Button
          style={styles.modalMargin}
          title={'Send amount'}
          onPress={onPressSend}
        />
        <Button
          style={[styles.cancelButtonModal, styles.modalMargin]}
          title={'Cancel amount'}
          onPress={onRequestClose}
        />
      </View>
    </Modal>
  );
};
