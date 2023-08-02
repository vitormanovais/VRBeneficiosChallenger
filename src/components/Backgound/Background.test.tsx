import React from 'react';
import {Text} from 'react-native';
import {render} from '@testing-library/react-native';
import Background from './Background';

describe('Background Component', () => {
  test('renders children correctly', () => {
    const mockChildren = <Text testID="mockChildren">Hello, World!</Text>;
    const {getByTestId} = render(<Background children={mockChildren} />);

    const styledContainer = getByTestId('mockChildren');
    expect(styledContainer).toBeTruthy();
  });
});
