import {AuthorizationStatus} from '../../const.js';
import {extend} from '../../utils.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  email: ``
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_AUTH_EMAIL: `SET_AUTH_EMAIL`
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  setAuthEmail: (email) => {
    return {
      type: ActionType.SET_AUTH_EMAIL,
      payload: email,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_AUTH_EMAIL:
      return extend(state, {
        email: action.payload,
      });
  }

  return state;
};

const Operation = {
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setAuthEmail(authData.login));
      })
      .catch((err) => {
        throw err;
      });
  }
};

export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};
