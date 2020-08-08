import {reducer, ActionCreator, ActionType, AuthorizationStatus} from './user.js';
import * as mocks from '../../mocks/offers-test.js';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    email: ``
  });
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH
  });
});

it(`Reducer should change email by a given value`, () => {
  expect(reducer({
    email: mocks.email
  }, {
    type: ActionType.SET_AUTH_EMAIL,
    payload: mocks.email
  })).toEqual({
    email: mocks.email
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });
  });
  it(`Action creator for set auth email returns correct action`, () => {
    expect(ActionCreator.setAuthEmail(mocks.email)).toEqual({
      type: ActionType.SET_AUTH_EMAIL,
      payload: mocks.email,
    });
  });
});
