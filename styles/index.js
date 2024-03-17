import {StyleSheet} from 'react-native';
import {COLORS} from './colors';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {globalStyles};
