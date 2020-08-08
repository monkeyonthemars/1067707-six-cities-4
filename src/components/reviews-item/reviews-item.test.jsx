import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReviewsItem from './reviews-item.jsx';
import * as mocks from '../../mocks/offers-test.js';

it(`<ReviewsItem /> should render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <ReviewsItem
          comment={mocks.comments[0]}
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
