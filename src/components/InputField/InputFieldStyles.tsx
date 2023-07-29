import TextInputMask from 'react-native-text-input-mask';
import styled from 'styled-components/native';

export const StyledInput = styled(TextInputMask)<{error: boolean}>`
  flex: 1;
  color: ${props => (props.error ? '#ff0000' : '#000')};
  font-size: 16px;
  padding: 0px;
  margin: 0px;
  height: 18px;
`;

export const StyledInputContainer = styled.View<{error: boolean}>`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding: 13.5px 14px 13.5px 16px;
  border-radius: 4px;
  border-width: ${props => (props.error ? '1px' : '0px')};
  border-color: #ff0000;
`;

export const StyledContainer = styled.View`
  padding: 6px;
`;

export const StyledLabel = styled.Text<{color: string}>`
  font-size: 14px;
  line-height: 29px;
  font-family: PT Sans;
  color: ${props => props.color};
  margin-bottom: 4px;
`;
