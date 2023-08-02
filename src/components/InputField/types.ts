import {KeyboardTypeOptions} from 'react-native';

export interface InputFieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  onChange?: (text: string) => void;
  password?: boolean;
  error?: string;
  placeholderColor?: string;
  labelColor?: string;
  maxLength?: number;
  mask?: string;
  textContentType?: string;
  testId?: string;
}
