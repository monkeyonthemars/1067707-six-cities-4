import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Sort from './sort.jsx';
import {SortType} from '../../const.js';

it(`<Sort /> should render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <Sort
          onSortTypeClick={() => {}}
          isActiveMenu={false}
          onSortMenuClick={() => {}}
          currentSortType={SortType.POPULAR}
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
