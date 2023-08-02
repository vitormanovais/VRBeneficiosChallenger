import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import Login from '../Login';
import {useNavigation} from '@react-navigation/native';
import {CardData} from '../../contexts/redux/portfolio/types';
import {useSelector} from 'react-redux';

jest.mock('../../contexts/redux/portfolio/actions', () => ({
  setCreditCards: jest.fn(),
}));

const creditCards: CardData[] = [
  {
    number: '1234 5678 9012 3456',
    name: 'Joao das Neves',
    dueDate: '12/25',
    cvv: '445',
    type: 'black',
    id: '1',
  },
  {
    name: 'Vitor Novais',
    number: '9876 5432 1098 7654',
    dueDate: '11/28',
    cvv: '313',
    type: 'green',
    id: '2',
  },
];

const navigation = {navigate: jest.fn()};

describe('Login', () => {
  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue(navigation);
  });
  it('renders the component with buttons', () => {
    (useSelector as jest.Mock).mockReturnValue({creditCards});
    const {getByText, getByTestId} = render(<Login />);

    expect(getByText('Wallet Test')).toBeTruthy();

    const myCardButton = getByTestId('myCardButton');
    expect(myCardButton).toBeTruthy();

    const addCardButton = getByTestId('addCardButton');
    expect(addCardButton).toBeTruthy();
  });

  it('navigates to the "Portfolio" screen when "meus cartões" button is pressed', () => {
    (useSelector as jest.Mock).mockReturnValue({creditCards});
    const {getByTestId} = render(<Login />);
    fireEvent.press(getByTestId('myCardButton'));
    expect(navigation.navigate).toHaveBeenCalledWith('Portfolio');
  });

  it('navigates to the "CardSignUp" screen when "cadastrar cartão" button is pressed', () => {
    (useSelector as jest.Mock).mockReturnValue({creditCards});
    const {getByTestId} = render(<Login />);
    fireEvent.press(getByTestId('addCardButton'));
    expect(navigation.navigate).toHaveBeenCalledWith('CardSignUp');
  });
});
