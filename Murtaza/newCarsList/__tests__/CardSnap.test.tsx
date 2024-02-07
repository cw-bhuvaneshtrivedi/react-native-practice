import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Card } from '../src/components/Card'; 

const mockItem = {
  makeName: 'Mock Make Name',
  modelName: 'Mock Model Name',
  hostUrl: 'https://mock.url/',
  originalImagePath: '/mock-image.jpg',
  versions: [
    {
      name: 'Mock Version Name',
      fuelType: 'Mock Fuel Type',
      maxPower: 'Mock Max Power',
      displacement: 'Mock Displacement',
      transmission: 'Mock Transmission',
      emi: 'Mock EMI',
      priceOverview: {
        price: 'Mock Price',
        label: 'Mock Label',
        reasonText: 'Mock Reason Text',
      },
    },
  ],
};

it('Card component renders correctly', () => {
  const tree = renderer.create(<Card item={mockItem} />).toJSON();
  expect(tree).toMatchSnapshot();
});
