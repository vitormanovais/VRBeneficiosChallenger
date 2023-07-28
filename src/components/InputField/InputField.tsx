import React, {useState} from 'react';
import {
  StyledContainer,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from './InputFieldStyles';
import {TouchableOpacity} from 'react-native';
import IconSvg from '../IconSvg';
import {InputFieldProps} from './types';

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  label,
  value,
  keyboardType,
  onChange,
  password = false,
  error,
  labelColor,
  maxLength,
}) => {
  const [state, setState] = useState<string>(value ?? '');
  const [showPassword, setShowPassword] = useState<boolean>(password);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleTextChange = (text: string) => {
    onChange && onChange(text);
    setState(text);
  };

  return (
    <StyledContainer>
      {label && (
        <StyledLabel color={error ? '#ff0000' : `${labelColor}`}>
          {label}
        </StyledLabel>
      )}
      <StyledInputContainer error={!!error}>
        <StyledInput
          type="custom"
          error={!!error}
          secureTextEntry={showPassword}
          keyboardType={keyboardType}
          value={state}
          placeholder={error ? error : placeholder}
          onChangeText={handleTextChange}
          placeholderTextColor={error ? '#ff0000' : '#BBBBBB'}
          maxLength={maxLength}
        />
        {password && (
          <TouchableOpacity onPress={handleTogglePasswordVisibility}>
            <IconSvg
              name={!showPassword ? 'closedEye' : 'openedEye'}
              width={18.33}
              height={13.33}
              color={error ? '#ff0000' : '#BBBBBB'}
            />
          </TouchableOpacity>
        )}
      </StyledInputContainer>
    </StyledContainer>
  );
};

export default InputField;
