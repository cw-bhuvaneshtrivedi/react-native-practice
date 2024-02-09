import React from 'react';
import { render } from '@testing-library/react-native';
import SearchPage from '../src/components/SearchPage';

test('renders SearchPage correctly', () => {
  const { toJSON } = render(<SearchPage clicked={() => {}} />);
  expect(toJSON()).toMatchSnapshot();
});
