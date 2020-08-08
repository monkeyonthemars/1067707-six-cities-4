import NameSpace from '../name-space.js';

export const getActivePlaceCard = (state) => {
  return state[NameSpace.OFFERS].activePlaceCard;
};

export const getSubmitButtonStatus = (state) => {
  return state[NameSpace.OFFERS].submitButtonDisabled;
};

export const getSendingStatus = (state) => {
  return state[NameSpace.OFFERS].isSending;
};

export const getActiveStatusMenu = (state) => {
  return state[NameSpace.OFFERS].isActiveMenu;
};
