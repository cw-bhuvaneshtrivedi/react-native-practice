import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SearchPage from '../src/components/SearchPage';

const mockApiResponse = [
  {
    "modelId": 1729,
    "modelName": "Creta",
    "maskingName": "creta",
    "rootId": "382",
    "makeId": 8,
    "makeName": "Hyundai",
    "makeMaskingName": "hyundai",
    "launchedOn": "01/16/2024 00:00:00",
    "discontinuationDate": "",
    "rootName": "Creta",
    "status": "New",
    "imagePath": "/n/cw/ec/106815/creta-exterior-right-front-three-quarter-4.png?isig=0",
    "versionId": 9371
  }
];

jest.mock('node-fetch', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    json: jest.fn().mockResolvedValue(mockApiResponse),
  })),
}));

describe('SearchPage Component', () => {
  it('renders loading indicator while fetching data', async () => {
    const { getAllByTestId, queryByTestId } = render(<SearchPage clicked={() => {}} />);
    const loading = getAllByTestId('loading-indicator');
    const loadingIndicator = loading[0];
    expect(loadingIndicator).toBeTruthy();
    await waitFor(() => expect(queryByTestId('loading-indicator')).toBeNull());
  });

  it('displays fetched data after loading', async () => {
    const { getByText } = render(<SearchPage clicked={() => {}} />);
    await waitFor(() => expect(getByText('Hyundai')).toBeTruthy());
  });

  it('expands accordion on click', async () => {
    const { getByText, getAllByTestId } = render(<SearchPage clicked={() => {}} />);
    await waitFor(() => expect(getByText('Hyundai')).toBeTruthy());
  
    fireEvent.press(getByText('Hyundai')); 
    const accordionItems = getAllByTestId('accordion-item'); 
    expect(accordionItems.length).toBeGreaterThan(0);
  });
  
  it('closes accordion item on second click', async () => {
    const { getByText, getAllByTestId, queryByTestId } = render(<SearchPage clicked={() => {}} />);
    await waitFor(() => expect(getByText('Hyundai')).toBeTruthy());
  
    fireEvent.press(getByText('Hyundai'));
    let accordionItems = getAllByTestId('accordion-item');
    expect(accordionItems.length).toBeGreaterThan(0); 
  
    fireEvent.press(getByText('Hyundai'));
    await waitFor(() => expect(queryByTestId('accordion-item')).toBeNull()); 
  });
  
});
