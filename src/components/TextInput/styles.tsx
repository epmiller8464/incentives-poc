import styled from 'styled-components';
import {TextInput, View} from 'react-native';

import {TextBasic} from '../Typography';
import {ICustomTextInputProps} from './types';
import colors from '../../theme/colors';

export const StyledTextInputWrapper = styled(View)<ICustomTextInputProps>`
  height: 58px;
  width: 100%;
  border-radius: 68px;
  background-color: ${colors.white};
  box-shadow: 0px 16px 60px rgba(78, 79, 114, 0.08);
  padding-left: ${(props) => (props.leftIcon ? 16 : 27)}px;
  padding-right: 25px;
  flex-direction: row;
  align-items: center;
  border-width: ${({error}) => (error ? 1 : undefined)}px;
  border-color: ${({error}) => (error ? colors.red[1] : undefined)};
`;

export const StyledInputText = styled(TextInput)`
  margin-left: 8px;
  flex: 1;
  font-size: 16px;
`;

export const InputErrorMessageWrapper = styled(View)`
  width: 100%;
  margin-top: 3px;
`;
export const InputErrorMessage = styled(TextBasic)`
  color: ${colors.red[1]};
`;
