import React from 'react';
import Login from './Login';
import {fireEvent, render, waitFor, act} from '@testing-library/react-native';

describe('Login screen', () => {
  test('renders the correct buttons', () => {
    const {getByTestId, getByText} = render(<Login />);

    const myCardButton = getByTestId('myCardButton');
    const addCardButton = getByTestId('addCardButton');

    expect(getByText('meus cartões')).toBeTruthy();
    expect(getByText('cadastrar cartão')).toBeTruthy();

    fireEvent.press(myCardButton);
    fireEvent.press(addCardButton);
  });
});
