import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Accordion from '../src/components/Accordion';

describe('Accordion', () => {
  test('renders Accordion with closed state correctly', () => {
    const { toJSON } = render(<Accordion />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('renders Accordion with opened state correctly', () => {
    const { toJSON, getByText } = render(<Accordion />);
    
    fireEvent.press(getByText('Accordion'));
    expect(toJSON()).toMatchSnapshot();
  });
});
