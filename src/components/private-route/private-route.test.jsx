import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import PrivateRoute from './private-route.jsx';
import {AuthorizationStatus} from '../../const.js';

it(`<PrivateRoute /> should render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <PrivateRoute
          render={() => {
            return (<div>Private Component</div>);
          }}
          path={`/`}
          exact={true}
          authorizationStatus={AuthorizationStatus.AUTH}
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
