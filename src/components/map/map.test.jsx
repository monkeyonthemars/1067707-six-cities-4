import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';
import * as mocks from '../../mocks/offers-test.js';

it(`<Map /> render correctly`, () => {
  const tree = renderer.create(
      <Map
        cityCoordinates={mocks.currentCity.location}
        currentOffers={mocks.rentalOffers}
        activePlaceCard={-1}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
