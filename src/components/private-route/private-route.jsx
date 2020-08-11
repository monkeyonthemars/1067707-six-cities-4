import React from 'react';
import {propTypes} from '../../types/types.js';
import {Route, Redirect} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.js';

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render()
            : <Redirect to={AppRoute.LOGIN + `?query=` + path.slice(1)} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: propTypes.authorizationStatus,
  exact: propTypes.exact,
  path: propTypes.path,
  render: propTypes.render
};

export default PrivateRoute;
