import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import FavoriteCity from './favorite-city.jsx';
import * as mocks from '../../mocks/offers-test.js';

it(`<FavoriteCity /> should render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <FavoriteCity
          cityName={mocks.currentCity.name}
          favorites={mocks.rentalOffers}
          onRentalTitleClick={() => {}}
          onFavoriteClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
