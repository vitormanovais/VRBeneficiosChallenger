import React from 'react';
import {render} from '@testing-library/react-native';
import Card from './Card';
import {CardData} from '../../contexts/redux/portfolio/types';

describe('Card Component', () => {
  it('renders card information correctly', () => {
    const mockCard: CardData = {
      number: '1234 5678 9012 3456',
      name: 'John Doe',
      dueDate: '12/24',
      cvv: '123',
      type: 'black',
      id: '1',
    };

    const {getByText} = render(<Card card={mockCard} />);

    const cardType = getByText('Black Card');
    const cardName = getByText('John Doe');
    const cardNumber = getByText('•••• •••• •••• 3456');
    const cardDueDate = getByText('Validade 12/24');

    expect(cardType).toBeTruthy();
    expect(cardName).toBeTruthy();
    expect(cardNumber).toBeTruthy();
    expect(cardDueDate).toBeTruthy();
  });
});
