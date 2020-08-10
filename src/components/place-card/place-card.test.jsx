import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';
import * as mocks from '../../mocks/offers-test.js';

const place = mocks.rentalOffers[0];

it(`<PlaceCard /> should render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <PlaceCard
          id={place.id}
          mark={place.mark}
          image={place.image}
          priceValue={place.priceValue}
          priceText={place.priceText}
          isBookmark={place.isBookmark}
          rating={place.rating}
          title={place.title}
          type={place.type}
          onRentalTitleClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          offers={[]}
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
