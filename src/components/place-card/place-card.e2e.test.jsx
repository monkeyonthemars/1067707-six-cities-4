import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';
import * as mocks from '../../mocks/offers-test.js';

const rentalOffer = mocks.rentalOffers[0];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Handler should get data on hover`, () => {
  const mouseEnterHandler = jest.fn();

  const rentalOfferCard = shallow(
      <PlaceCard
        id={rentalOffer.id}
        mark={rentalOffer.mark}
        image={rentalOffer.image}
        priceValue={rentalOffer.priceValue}
        priceText={rentalOffer.priceText}
        isBookmark={rentalOffer.isBookmark}
        rating={rentalOffer.rating}
        title={rentalOffer.title}
        type={rentalOffer.type}
        onRentalTitleClick={() => {}}
        onFavoriteClick={() => {}}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={() => {}}
        offers={[]}
      />
  );

  rentalOfferCard.find(`.place-card`).props().onMouseEnter();
  expect(mouseEnterHandler.mock.calls.length).toBe(1);
});

it(`Handler should get data on mouse leave`, () => {
  const mouseLeaveHandler = jest.fn();

  const rentalOfferCard = shallow(
      <PlaceCard
        id={rentalOffer.id}
        mark={rentalOffer.mark}
        image={rentalOffer.image}
        priceValue={rentalOffer.priceValue}
        priceText={rentalOffer.priceText}
        isBookmark={rentalOffer.isBookmark}
        rating={rentalOffer.rating}
        title={rentalOffer.title}
        type={rentalOffer.type}
        onRentalTitleClick={() => {}}
        onFavoriteClick={() => {}}
        onMouseEnter={() => {}}
        onMouseLeave={mouseLeaveHandler}
        offers={[]}
      />
  );

  rentalOfferCard.find(`.place-card`).props().onMouseLeave();
  expect(mouseLeaveHandler.mock.calls.length).toBe(1);
});

it(`Handler should get data on click`, () => {
  const rentalTitleClickHandler = jest.fn();

  const rentalOfferCard = shallow(
      <PlaceCard
        id={rentalOffer.id}
        mark={rentalOffer.mark}
        image={rentalOffer.image}
        priceValue={rentalOffer.priceValue}
        priceText={rentalOffer.priceText}
        isBookmark={rentalOffer.isBookmark}
        rating={rentalOffer.rating}
        title={rentalOffer.title}
        type={rentalOffer.type}
        onRentalTitleClick={rentalTitleClickHandler}
        onFavoriteClick={() => {}}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        offers={[]}
      />
  );

  rentalOfferCard.find(`.place-card__name`).props().onClick();
  expect(rentalTitleClickHandler.mock.calls.length).toBe(1);
});
