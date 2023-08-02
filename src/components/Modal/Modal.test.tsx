import React from 'react';
import {render} from '@testing-library/react-native';
import Modal from './Modal';
import {ModalContent, CloseButton, ModalText} from './ModalStyles';

describe('Modal Component', () => {
  test('renders modal content correctly', () => {
    const {getByText} = render(<Modal />);

    const modalText = getByText('Seu conteúdo aqui');
    expect(modalText).toBeTruthy();
  });
});
