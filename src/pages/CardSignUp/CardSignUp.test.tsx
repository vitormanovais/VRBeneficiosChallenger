import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CardSignUp from './CardSignUp';

describe('SignUp Component', () => {
  test('renders correctly', () => {
    const {getByText, getByPlaceholderText} = render(<CardSignUp />);

    // Verifica se os elementos de texto e placeholder estão sendo exibidos corretamente
    expect(getByText('Wallet Test')).toBeTruthy();
    expect(getByText('número do cartão')).toBeTruthy();
    expect(getByText('nome do titular do cartão')).toBeTruthy();
    expect(getByText('vencimento')).toBeTruthy();
    expect(getByText('código de segurança')).toBeTruthy();
  });

  test('disables button when form is invalid', () => {
    const {getByTestId, getByText} = render(<CardSignUp />);

    // Verifica se o botão está desabilitado inicialmente
    const button = getByTestId('submitButton');
    expect(button.props.disabled).toBeTruthy();

    // Simula a interação com os campos de input
    fireEvent.changeText(getByText('número do cartão'), '123456');
    fireEvent.changeText(getByText('nome do titular do cartão'), '');
    fireEvent.changeText(getByText('vencimento'), '05/25');
    fireEvent.changeText(getByText('código de segurança'), '123');

    // Verifica se o botão continua desabilitado quando o formulário é inválido
    expect(button.props.disabled).toBeTruthy();
  });

  test('enables button when form is valid', () => {
    const {getByTestId, getByText} = render(<CardSignUp />);

    // Simula a interação com os campos de input para preencher o formulário corretamente
    fireEvent.changeText(getByText('número do cartão'), '1234567890123456');
    fireEvent.changeText(getByText('nome do titular do cartão'), 'John Doe');
    fireEvent.changeText(getByText('vencimento'), '05/25');
    fireEvent.changeText(getByText('código de segurança'), '123');

    // Verifica se o botão está habilitado quando o formulário é válido
    const button = getByTestId('submitButton');
    expect(button).not.toBeDisabled();
  });

  test('submits form when button is pressed', () => {
    const {getByTestId, getByText} = render(<CardSignUp />);

    // Simula a interação com os campos de input para preencher o formulário corretamente
    fireEvent.changeText(getByText('número do cartão'), '1234567890123456');
    fireEvent.changeText(getByText('nome do titular do cartão'), 'John Doe');
    fireEvent.changeText(getByText('vencimento'), '05/25');
    fireEvent.changeText(getByText('código de segurança'), '123');

    // Simula o clique no botão de submit
    fireEvent.press(getByTestId('submitButton'));

    // Coloque aqui as asserções para verificar se o formulário foi enviado corretamente
  });
});
