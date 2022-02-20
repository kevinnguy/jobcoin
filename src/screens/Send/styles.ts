import { StyleSheet } from 'react-native';

const LAYOUT_MARGIN = 15;

export default StyleSheet.create({
  flex: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    paddingBottom: 70,
  },
  inputBar: {
    height: 70,
    margin: LAYOUT_MARGIN,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'gray',
  },
  transaction: {
    flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: LAYOUT_MARGIN,
  },
  transactionTitle: {
    fontSize: 18,
  },
  transactionDetail: {
    fontSize: 15,
  },
  transactionAmount: {
    fontSize: 20,
    fontWeight: '500',
  },
  transactionReceived: {
    color: 'green',
  },
  transactionSent: {
    color: 'red',
  },
  header: {
    flex: 1,
    height: 70,
    marginHorizontal: LAYOUT_MARGIN,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userAmount: {
    fontSize: 34,
    fontWeight: '500',
  },
  signOut: {
    width: 120,
  },
  cancelButtonModal: {
    backgroundColor: 'red',
  },
  modalMargin: {
    marginBottom: LAYOUT_MARGIN,
  },
});
