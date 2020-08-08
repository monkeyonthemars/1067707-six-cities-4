import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from './header.jsx';
import * as mocks from '../../mocks/offers-test.js';
import {AuthorizationStatus} from '../../const.js';

it(`<Header /> should render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <Header
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          email={mocks.email}
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
