import {Appearance} from 'react-native';
const isDarkMode = false// Appearance.getColorScheme() === 'dark';
const Fonts = {
  familyRegular: 'sans-serif',
  sizeTitle: 18,
  sizeRegular: 14,
  weightBold: 'bold',
};
const Colors = {
  background: isDarkMode ? '#333333' : '#efefef',
  backgroundMedium: isDarkMode ? '#666666' : '#dddddd',
  font: isDarkMode ? '#eeeeee' : '#222222',
};
const Sizes = {
  paddingSmall: 2,
  paddingRegular: 8,
  paddingLarge: 16,
  borderRadius: 8,
};
export {Fonts, Colors, Sizes};
