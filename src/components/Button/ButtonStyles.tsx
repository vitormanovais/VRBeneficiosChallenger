import styled from 'styled-components/native';

export const StyledText = styled.Text<{color: string}>`
  font-size: 18px;
  line-height: 35px;
  font-family: PTSans-Regular;
  color: ${props => props.color};
`;

export const StyledContainer = styled.TouchableOpacity<{
  backgroundColor: string;
}>`
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.disabled ? '#EEEEEE ' : props.backgroundColor};
  border-radius: 12px;
`;
