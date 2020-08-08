import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';
import * as mocks from '../../mocks/offers-test.js';
import {SortType} from '../../const.js';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

describe(`Render App`, () => {
  it(`<App /> should render correctly`, () => {
    const tree = renderer.create(
        <App
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          login={() => {}}
          email={mocks.email}
          cities={mocks.cities}
          currentCity={mocks.currentCity}
          currentOffers={mocks.rentalOffers}
          onRentalTitleClick={() => {}}
          onFavoriteClick={() => {}}
          onCityClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          currentNearbyOffers={[]}
          currentOffer={mocks.rentalOffers[0]}
          currentComments={[]}
          onSortTypeClick={() => {}}
          activePlaceCard={-1}
          onSubmitReviewClick={() => {}}
          favorites={[]}
          offers={mocks.rentalOffers}
          onChangeNewReviewForm={() => {}}
          submitButtonDisabled={true}
          isSending={false}
          review={``}
          rating={0}
          loadOfferDetails={() => {}}
          isActiveMenu={false}
          onSortMenuClick={() => {}}
          currentSortType={SortType.POPULAR}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
