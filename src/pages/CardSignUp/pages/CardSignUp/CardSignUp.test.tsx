import React from 'react';
import {render, fireEvent, waitFor, act} from '@testing-library/react-native';
import CardSignUp from './CardSignUp';

jest.useFakeTimers();

act(() => {
  jest.runAllTimers();
});

describe('CardSignUp Component', () => {
  it('renders correctly', () => {
    const {getByText} = render(<CardSignUp />);

    expect(getByText('Wallet Test')).toBeTruthy();
    expect(getByText('número do cartão')).toBeTruthy();
    expect(getByText('nome do titular do cartão')).toBeTruthy();
    expect(getByText('vencimento')).toBeTruthy();
    expect(getByText('código de segurança')).toBeTruthy();
    expect(getByText('Avançar')).toBeTruthy();
  });

  it('disables the "Avançar" button when the form is invalid', () => {
    const {getByTestId} = render(<CardSignUp />);
    const submitButton = getByTestId('submitButton');
    expect(submitButton.props.accessibilityState.disabled).toBeFalsy();
  });

  it('enables the "Avançar" button when the form is valid', async () => {
    const {getByTestId} = render(<CardSignUp />);
    const submitButton = getByTestId('submitButton');
    await waitFor(() => {
      fireEvent.changeText(getByTestId('test-number'), '1234 5678 9012 3456');
      fireEvent.changeText(getByTestId('test-name'), 'John Doe');
      fireEvent.changeText(getByTestId('test-dueDate'), '12/25');
      fireEvent.changeText(getByTestId('test-cvv'), '123');

      expect(submitButton.props.accessibilityState.disabled).toBeFalsy();
    });
  });
});
