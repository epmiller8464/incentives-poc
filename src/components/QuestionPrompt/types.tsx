import {TextInputProps} from 'react-native';

export interface ICustomTextInputProps extends TextInputProps {
  leftIcon?: boolean;
  rightIcon?: boolean;
  error?: boolean;
  errorMessage?: string;
}
