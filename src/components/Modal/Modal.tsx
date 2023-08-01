import React, {useState} from 'react';
import {CardData} from '../../contexts/redux/portfolio/types';
import {Modal as RNModal} from 'react-native';

import {
  CloseButton,
  CloseButtonText,
  Container,
  ModalContent,
  ModalText,
} from './ModalStyles';

const Modal: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return modalVisible ? (
    <RNModal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <Container>
        <ModalContent>
          <ModalText>Seu conteúdo aqui</ModalText>
          <CloseButton
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <CloseButtonText>Fechar</CloseButtonText>
          </CloseButton>
        </ModalContent>
      </Container>
    </RNModal>
  ) : (
    <></>
  );
};

export default Modal;
