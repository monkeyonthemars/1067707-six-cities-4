import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list.jsx';
import * as mocks from '../../mocks/offers-test.js';

it(`<ReviewsList /> should render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <ReviewsList
          currentComments={mocks.comments}
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
