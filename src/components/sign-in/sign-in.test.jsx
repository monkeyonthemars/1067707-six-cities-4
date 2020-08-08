

import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import SignIn from './sign-in.jsx';
import {AuthorizationStatus} from '../../reducer/user/user.js';

it(`<SignIn /> should render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <SignIn
          onSubmit={() => {}}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          email={``}
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
