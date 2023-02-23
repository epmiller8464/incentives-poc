import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

import colors from '../../theme/colors';
import {ButtonVariants, IButtonProps} from './types';

export const ButtonContainer = styled(TouchableOpacity)<IButtonProps>`
  width: 100%;
  height: 59px;
  border-radius: 68px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 12px 42px rgba(24, 39, 75, 0.12);
  ${({variant}) => {
    switch (variant) {
      case ButtonVariants.Primary:
        return `
          background-color: ${colors.green[2]};
          `;
      case ButtonVariants.Secondary:
        return `
          background-color: ${colors.white};
          border-color: ${colors.green[2]};
          border-width: 1px;
          `;
      case ButtonVariants.Light:
        return `
          background-color: ${colors.yellow[1]};
          `;
      case ButtonVariants.Dark:
        return `
          background-color:${colors.green[1]};
          `;
      case ButtonVariants.Disabled:
        return `
          background-color: ${colors.gray[1]};
          `;
    }
  }};
`;
export const ButtonText = styled(Text)<IButtonProps>`
  ${({variant, fontSize, fontWeight}) => {
    switch (variant) {
      case ButtonVariants.Primary:
        return `
          font-size: ${fontSize ? fontSize : 20}px;
          font-weight: ${fontWeight ? fontWeight : 700};
          color:${colors.white};
          `;
      case ButtonVariants.Secondary:
        return `
          font-size: ${fontSize ? fontSize : 16}px;
          font-weight: ${fontWeight ? fontWeight : 600};
          color: ${colors.green[1]};
          `;
      case ButtonVariants.Light:
        return `
          font-size: ${fontSize ? fontSize : 20}px;
          font-weight: ${fontWeight ? fontWeight : 700};
          color: ${colors.green[1]};
          `;
      case ButtonVariants.Dark:
        return `
          font-size: ${fontSize ? fontSize : 20}px;
          font-weight: ${fontWeight ? fontWeight : 700};
          color: ${colors.white};
          `;
      case ButtonVariants.Disabled:
        return `
          font-size: ${fontSize ? fontSize : 20}px;
          font-weight: ${fontWeight ? fontWeight : 700};
          color: ${colors.white};
          `;
    }
  }};
`;
