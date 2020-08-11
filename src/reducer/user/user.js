import {AuthorizationStatus} from '../../const.js';
import {extend} from '../../utils.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  email: ``,
  isLoginError: false
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_AUTH_EMAIL: `SET_AUTH_EMAIL`,
  SET_IS_LOGIN_ERROR: `SET_IS_LOGIN_ERROR`,
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

  setIsLoginError: (status) => {
    return {
      type: ActionType.SET_IS_LOGIN_ERROR,
      payload: status,
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
    case ActionType.SET_IS_LOGIN_ERROR:
      return extend(state, {
        isLoginError: action.payload,
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setAuthEmail(response.data.email));
      })
      .catch(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.setIsLoginError(false));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setAuthEmail(authData.login));
      })
      .catch(() => {
        dispatch(ActionCreator.setIsLoginError(true));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
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
