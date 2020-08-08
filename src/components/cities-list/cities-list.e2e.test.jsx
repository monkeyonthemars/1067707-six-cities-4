import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CitiesList from './cities-list.jsx';
import * as mocks from '../../mocks/offers-test.js';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Handler should get data on city click`, () => {
  const cityClickHandler = jest.fn();

  const citiesList = shallow(
      <CitiesList
        cities={mocks.cities}
        currentCity={mocks.currentCity}
        onCityClick={cityClickHandler}
      />
  );

  const rentalTitles = citiesList.find(`.locations__item-link`);
  rentalTitles.forEach((title) => title.props().onClick({
    preventDefault: () => {},
  }));

  expect(cityClickHandler.mock.calls.length).toBe(6);
});
