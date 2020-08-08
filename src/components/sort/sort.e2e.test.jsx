import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sort from './sort.jsx';
import {SortType} from '../../const.js';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Handler should get sort types menu click`, () => {
  const sortTypeClickHandler = jest.fn();

  const sort = shallow(
      <Sort
        onSortTypeClick={sortTypeClickHandler}
        isActiveMenu={true}
        onSortMenuClick={() => {}}
        currentSortType={SortType.POPULAR}
      />
  );

  sort.find(`.places__option`).forEach((sortType) => sortType.props().onClick());

  expect(sortTypeClickHandler.mock.calls.length).toBe(4);
});
