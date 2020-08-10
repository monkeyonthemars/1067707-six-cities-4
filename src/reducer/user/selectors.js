import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getIsLoginError = (state) => {
  return state[NAME_SPACE].isLoginError;
};

export const getAuthorizationEmail = (state) => {
  return state[NAME_SPACE].email;
};
