import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  test('renders App with search drawer closed correctly', () => {
    const { toJSON } = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('renders App with search drawer open correctly', () => {
    const { toJSON, getByText } = render(<App />);
    
    fireEvent.press(getByText('Click Me!'));
    expect(toJSON()).toMatchSnapshot();
  });
});
