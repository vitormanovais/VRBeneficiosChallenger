import React from 'react';
import {render} from '@testing-library/react-native';
import Header from './index';

describe('Header component', () => {
  test('renders header component with provided text', () => {
    const text = 'Testing header component';
    const {getByText} = render(<Header text={text} />);

    const headerText = getByText(text);
    expect(headerText).toBeTruthy();
  });
});
