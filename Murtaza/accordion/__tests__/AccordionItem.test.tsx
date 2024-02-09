import React from 'react';
import { render } from '@testing-library/react-native';
import AccordionItem from '../src/components/AccordionItem';

test('renders AccordionItem correctly', () => {
  const { toJSON } = render(<AccordionItem />);
  expect(toJSON()).toMatchSnapshot();
});
