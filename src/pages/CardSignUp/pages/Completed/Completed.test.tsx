import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Completed from './Completed';
import {useNavigation, useRoute} from '@react-navigation/native';

const mockNavigation = {
  navigate: jest.fn(),
  reset: jest.fn(),
};

const card = {
  cvv: '111',
  dueDate: '12/24',
  id: 8,
  name: 'rere reerere',
  number: '2134 2323 4223 2344',
  type: 'black',
};

describe('Completed Component', () => {
  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
    (useRoute as jest.Mock).mockReturnValue({params: {card}});
  });
  it('renders correctly', () => {
    const {getByText} = render(<Completed />);

    expect(getByText('Wallet Test')).toBeTruthy();
    expect(getByText('Avançar')).toBeTruthy();
  });

  it('navigates to Portfolio on button press', () => {
    const {getByText} = render(<Completed />);

    fireEvent.press(getByText('Avançar'));
    expect(mockNavigation.reset).toHaveBeenCalledWith({
      index: 0,
      routes: [{name: 'SignUp'}],
    });
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Portfolio');
  });
});
