import styled from 'styled-components/native';

export const StyledText = styled.Text<{color: string}>`
  font-size: 22px;
  text-align: center;
  font-family: PTSans-Bold;
  color: ${props => props.color};
`;

export const StyledBackground = styled.View<{backgroundColor?: string}>`
  background-color: ${props => props.backgroundColor};
`;
export const StyledContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  margin: 6px 16px;
  padding: 7.5px;
  flex-direction: row;
`;

export const StyledBackButton = styled.TouchableOpacity`
  width: 39px;
  height: 39px;
  align-items: center;
  justify-content: center;
`;
