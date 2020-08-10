import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import PlacesList from './places-list.jsx';
import * as mocks from '../../mocks/offers-test.js';

it(`<PlacesList /> should render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <PlacesList
          placesList={mocks.rentalOffers}
          onRentalTitleClick={() => {}}
          onFavoriteClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          offers={[]}
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
