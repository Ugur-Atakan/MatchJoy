import {StyleSheet} from 'react-native';
import {COLORS} from './colors';
import {FONTS} from './fonts';

/**
 * The screen order is as follows. [Location,Walking,Awards]
 * that is, logos[0] represents the styles of logos on the Location page.
 *
 */

export const onBoardingStyles = StyleSheet.create({
  swiperContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'space-between',
    flex: 0.9,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: 40,
    marginTop: 50,
  },
  header: {
    fontSize: 29,
    fontWeight: '900',
    color: COLORS.primaryHeading,
  },
  description: {
    color: COLORS.primarySubText,
    lineHeight: 21,
    fontSize: 14,
    fontFamily: FONTS.regular,
  },
  imageContainers: [
    {
      alignItems: 'center',
      gap: 60,
      justifyContent: 'center',
    },
    {
      position: 'relative',
      top: 200,
      alignItems: 'center',
    },
    {
      marginTop: 50,
      alignItems: 'center',
      gap: 60,
      justifyContent: 'center',
    },
  ],
  logos: [
    {
      width: 119,
      height: 93,
    },
    {
      width: 169,
      height: 132,
      position: 'absolute',
      zIndex: 1,
      transform: [{rotate: '4.65deg'}],
    },
    {
      width: 119,
      height: 93,
      transform: [{rotate: '4.65deg'}],
    },
  ],
  images: [
    {
      width: 300,
      height: 200,
    },

    {
      width: 285,
      height: 157,
    },
    {
      width: 240,
      height: 131,
    },
  ],
  swiperDot: {
    borderWidth: 2,
    width: 15,
    height: 15,
    borderRadius: 99,
    borderColor: '#00296280',
  },
  swiperActiveDot: {
    borderWidth: 2,
    borderColor: '#002962',
    backgroundColor: '#002962',
    width: 15,
    height: 15,
    borderRadius: 99,
  },
});
