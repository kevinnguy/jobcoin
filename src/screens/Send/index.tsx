import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import currency from 'currency.js';

import { Transaction, useAuth } from '../../auth/useAuth';
import { Button } from '../../components/Button';
import { Chart } from '../../components/Chart';
import { SendModal } from './SendModal';

import styles from './styles';

export const SendScreen = () => {
  const auth = useAuth();
  const user = auth.user!;
  const onPressSignOut = () => auth.signOut();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => setIsModalVisible(true);
  const dismissModal = () => setIsModalVisible(false);

  const renderHeader = () => {
    const userAmount = currency(user.balance).format();
    const chartData = user.transactions.reduce<{
      total: number;
      data: number[];
    }>(
      (acc, transaction) => {
        const { fromAddress, amount } = transaction;
        const isReceived = fromAddress !== user.address;
        const numericalAmount = currency(amount).value;

        if (isReceived) {
          acc.total = acc.total + numericalAmount;
        } else {
          acc.total = acc.total - numericalAmount;
        }

        acc.data.push(acc.total);
        return acc;
      },
      { total: 0, data: [] },
    );

    return (
      <>
        <View style={styles.header}>
          <Text style={styles.userAmount}>{userAmount}</Text>
          <Button
            style={styles.signOut}
            title={'Sign out'}
            onPress={onPressSignOut}
          />
        </View>
        <Chart data={chartData.data} />
      </>
    );
  };

  const renderItem = ({ item }: { item: Transaction }) => {
    const { fromAddress, toAddress, timestamp, amount } = item;
    const isReceived = fromAddress !== user.address;

    return (
      <View style={styles.transaction}>
        <View>
          <Text style={styles.transactionTitle}>{toAddress}</Text>
          <Text style={styles.transactionDetail}>{timestamp}</Text>
        </View>
        <Text
          style={[
            styles.transactionAmount,
            isReceived ? styles.transactionReceived : styles.transactionSent,
          ]}>{`${isReceived ? '+' : '-'} ${currency(amount).format()}`}</Text>
      </View>
    );
  };

  const renderSeparator = () => <View style={styles.separator} />;

  const transactionsData = [...user.transactions];
  transactionsData.reverse();

  return (
    <View style={styles.container}>
      <SendModal visible={isModalVisible} onRequestClose={dismissModal} />
      <FlatList
        data={transactionsData}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={renderSeparator}
        renderItem={renderItem}
      />
      <View style={styles.inputBar}>
        <Button title={'Send Jobcoin'} onPress={showModal} />
      </View>
    </View>
  );
};
