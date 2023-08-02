import React from 'react';
import {render} from '@testing-library/react-native';
import Portfolio from '../Portfolio';
import {useSelector} from 'react-redux';
import {useHeaderHeight} from '@react-navigation/elements';
import {CardData} from '../../contexts/redux/portfolio/types';

jest.mock('@react-navigation/elements', () => ({
  useHeaderHeight: jest.fn(),
}));

describe('Portfolio', () => {
  it('renders the component with the credit cards', () => {
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

    (useSelector as jest.Mock).mockReturnValue({creditCards});
    (useHeaderHeight as jest.Mock).mockReturnValue(56);

    const {getByText} = render(<Portfolio />);

    expect(getByText('Joao das Neves')).toBeTruthy();
    expect(getByText('Vitor Novais')).toBeTruthy();
  });
});
