import React from 'react';
import {render} from '@testing-library/react-native';
import Button from './index';

describe('Button component', () => {
  test('renders header component with provided text', () => {
    const title = 'Testing header component';
    const handleOnPress = jest.fn();
    const {getByText} = render(
      <Button title={title} onPress={handleOnPress} />,
    );

    const headerText = getByText(title);
    expect(headerText).toBeTruthy();
  });
});
