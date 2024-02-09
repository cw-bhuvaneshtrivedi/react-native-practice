import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  test('renders button initially', () => {
    const { getByText } = render(<App />);
    const buttonElement = getByText('Click Me!');
    expect(buttonElement).toBeTruthy();
  });

  test('opens search page on button click', () => {
    const { getByText, queryByText } = render(<App />);
    const buttonElement = getByText('Click Me!');
    fireEvent.press(buttonElement);
    const searchTitle = getByText('Select Your Make or Model');
    expect(searchTitle).toBeTruthy();
  });

  test('closes search page on close button click', () => {
    const { getByTestId, getByText, queryByText } = render(<App />);
    const buttonElement = getByText('Click Me!');
    fireEvent.press(buttonElement);
    const closeButton = getByTestId('close-button');
    fireEvent.press(closeButton);
    const buttonAfterClose = getByText('Click Me!');
    expect(buttonAfterClose).toBeTruthy();
  });

  test('opens accordion item on click', () => {
    const { getByText, queryByText, getAllByText } = render(<App />);
    const buttonElement = getByText('Click Me!');
    fireEvent.press(buttonElement);
    const accordionTitles = getAllByText('Accordion');
    const accordionTitle = accordionTitles[0];
    fireEvent.press(accordionTitle);
    const accordianItems = getAllByText('AccordionItem');
    const accordionItemText = accordianItems[0];
    expect(accordionItemText).toBeTruthy();
  });

  test('closes accordion item on second click', async () => {
    const { getByText, queryByText, getAllByText } = render(<App />);
    const buttonElement = getByText('Click Me!');
    fireEvent.press(buttonElement);
    const accordionTitles = getAllByText('Accordion');
    const accordionTitle = accordionTitles[0];
    fireEvent.press(accordionTitle);
    fireEvent.press(accordionTitle); // Second click to close
    setTimeout(() => {
      const accordionItemText = queryByText('AccordionItem');
      expect(accordionItemText).toBeNull();
    }, 1000);
  });
  
});
