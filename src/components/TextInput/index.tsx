import React from 'react';
import {Image} from 'react-native';

import colors from '../../theme/colors';
import {
  InputErrorMessage,
  InputErrorMessageWrapper,
  StyledInputText,
  StyledTextInputWrapper,
} from './styles';
import {ICustomTextInputProps} from './types';

const CustomTextInput = (props: ICustomTextInputProps) => {
  const {leftIcon, rightIcon, error, errorMessage, ...defaultProps} = props;
  return (
    <>
      <StyledTextInputWrapper error={error}>
        <StyledInputText {...defaultProps} />
      </StyledTextInputWrapper>

      {error && (
        <InputErrorMessageWrapper testID="errorTest">
          <InputErrorMessage>{errorMessage}</InputErrorMessage>
        </InputErrorMessageWrapper>
      )}
    </>
  );
};

export default CustomTextInput;
