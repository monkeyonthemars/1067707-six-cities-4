import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Property from './property.jsx';
import * as mocks from '../../mocks/offers-test.js';
import {AuthorizationStatus} from '../../const.js';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Handler should get data on favorite click`, () => {
  const favoriteClickHandler = jest.fn();

  const property = shallow(
      <Property
        currentNearbyOffers={[]}
        currentOffer={mocks.rentalOffers[0]}
        currentComments={mocks.comments}
        onRentalTitleClick={() => {}}
        onFavoriteClick={favoriteClickHandler}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        activePlaceCard={-1}
        authorizationStatus={AuthorizationStatus.NO_AUTH}
        onSubmitReviewClick={() => {}}
        email={mocks.email}
        onChangeNewReviewForm={() => {}}
        submitButtonDisabled={true}
        isSending={false}
        review={``}
        rating={0}
      />
  );
  const bookmark = property.find(`.property__bookmark-button`);
  bookmark.simulate(`click`);

  expect(favoriteClickHandler).toHaveBeenCalledTimes(1);
});
