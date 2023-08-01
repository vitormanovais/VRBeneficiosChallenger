import styled from 'styled-components/native';
import {positionType} from '../../contexts/redux/modal/types';

export const Container = styled.View<{position?: positionType}>`
  flex: 1;
  justify-content: ${props => {
    if (props.position === 'center') return 'center';
    else if (props.position === 'footer') return 'flex-end';
    else return 'flex-start';
  }};
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: white;
  padding: 20px;
`;

export const ModalText = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CloseButton = styled.TouchableOpacity`
  background-color: #ddd;
  padding: 10px;
  align-self: center;
`;

export const CloseButtonText = styled.Text`
  font-size: 16px;
`;
