import { StyleSheet } from 'react-native';

const LAYOUT_MARGIN = 15;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: LAYOUT_MARGIN,
  },
  cancelButtonModal: {
    backgroundColor: 'red',
  },
  modalMargin: {
    marginBottom: LAYOUT_MARGIN,
  },
});
