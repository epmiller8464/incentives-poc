import {Text, TextProps} from 'react-native';
import styled from 'styled-components';

import colors from '../theme/colors';

interface ITypographyProps extends TextProps {
  color?: string;
  fontSize?: number;
}

// ReactFonts
const TextBasic = styled(Text)<ITypographyProps>`
  font-size: ${({fontSize}) => (fontSize ? fontSize : 12)}px;
  color: ${({color}) => (color ? color : colors.black)};
  font-family: 'Roboto Light',sans-serif;
`;

// ReactBoldFonts
const TextBold = styled(Text)<ITypographyProps>`
  font-size: ${({fontSize}) => (fontSize ? fontSize : 12)}px;
  color: ${({color}) => (color ? color : colors.black)};
  font-family: 'Roboto Thin',"Roboto Light",sans-serif;
`;



export {
  TextBold,
  TextBasic,
};
