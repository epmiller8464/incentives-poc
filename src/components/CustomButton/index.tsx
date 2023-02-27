import React from 'react';

import {ButtonContainer, ButtonText} from './styles';
import {ButtonVariants, IButtonProps} from './types';

const CustomButton = (props: IButtonProps) => {
  const {variant = ButtonVariants.Primary, text, ...defaultProps} = props;
  return (
    <ButtonContainer variant={variant} {...defaultProps}>
      <ButtonText testID={'buttonText'} variant={variant}>
        {text}
      </ButtonText>
    </ButtonContainer>
  );
};

export default CustomButton;
