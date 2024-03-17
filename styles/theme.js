import {createTheme} from '@rneui/themed';
import {COLORS} from './colors';
import {FONTS} from './fonts';

const appTheme = createTheme({
  components: {
    Button: {
      defaultProps: {
        variant: 'primary',
      },
    },
    Text: {
      style: {
        color: COLORS.primarySubText,
        fontFamily: FONTS.regular,
      },
    },
    Input: {
      style: {
        borderRadius: 20,
      },
    },
  },
});
export default appTheme;
