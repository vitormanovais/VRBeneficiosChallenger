import styled from 'styled-components/native';
import {CardType} from '../../contexts/redux/portfolio/types';

export const StyledText = styled.Text<{type: CardType}>`
  font-size: 16px;
  line-height: 18px;
  font-family: PTSans-Regular;
  color: ${props => (props.type === 'black' ? '#fff' : '#3F3F3F')};
`;

export const StyledTextHeader = styled.Text<{type: CardType}>`
  font-size: 18px;
  line-height: 20px;
  font-family: PTSans-Regular;
  color: ${props => (props.type === 'black' ? '#fff' : '#3F3F3F')};
`;

export const StyledContainer = styled.View<{type: CardType}>`
  background-color: ${props => (props.type === 'black' ? '#000' : '#A5FF32')};
  border-radius: 16px;
  padding: 25px 10px;
`;

export const InfoContainer = styled.View`
  align-items: flex-start;
  padding: 5px;
`;

export const InfoContainerHeader = styled.View`
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const InfoContainerData = styled.View`
  padding: 5px;
  margin: 59px 0px 11px 0px;
`;
