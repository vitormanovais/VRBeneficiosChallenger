import styled from 'styled-components/native';

export const StyledText = styled.Text`
  flex: 1;
  font-size: 22px;
  line-height: 21px;
  text-align: center;
  font-family: PT Sans Caption;
  color: #12c2e9;
`;

export const StyledContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
  margin: 21px 16px;
  flex-direction: row;
`;

export const StyledBackButton = styled.TouchableOpacity`
  margin: 13.5px 21px;
  width: 39px;
  height: 39px;
  position: absolute;
  align-items: center;
  justify-content: center;
`;
