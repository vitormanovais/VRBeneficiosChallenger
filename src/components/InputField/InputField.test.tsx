import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import InputField from './index';
import 'jest-styled-components';
import {getByPlaceholderText} from '@testing-library/react';

describe('InputField component', () => {
  test('renders header component with provided text', () => {
    const text = 'Hello, World!';
    const {getByText} = render(<InputField label={text} value={text} />);

    const headerText = getByText(text);
    expect(headerText).toBeTruthy();
  });
  test('applies secureTextEntry for password fields', () => {
    const {getByPlaceholderText} = render(
      <InputField
        label="Password"
        placeholder="Enter password"
        value=""
        password
      />,
    );
    waitFor(async () => {
      const input = await getByPlaceholderText('Enter password');
      expect(input.props.secureTextEntry).toBe(true);
    });
  });
  test('updates input value correctly', () => {
    const handleChange = jest.fn();
    const textInput = 'Teting write';

    const {getByPlaceholderText} = render(
      <InputField
        label="Test"
        placeholder="Enter text"
        value=""
        onChange={handleChange}
      />,
    );
    waitFor(async () => {
      const input = getByPlaceholderText('Enter text');
      fireEvent.changeText(input, textInput);
      expect(handleChange).toHaveBeenCalledWith(textInput);
    });
  });
});
