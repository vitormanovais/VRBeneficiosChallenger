import styled from 'styled-components/native';

export const StyledCardsContainer = styled.View`
  margin: 30px;
`;

export const StyledButtonContainer = styled.View`
  padding: 10px 14px;
`;
export const StyledHeader = styled.Text`
  font-size: 20px;
  line-height: 47px;
  text-align: center;
  color: #12c2e9;
`;

export const StyledContainer = styled.View`
  flex: 1;
`;
export const StyledHeaderContainer = styled.View<{headerHeight: number}>`
  top: 0;
  padding: 10px;
  background-color: #eeeeee;
  border-radius: 00px 00px 50px 50px;
`;
