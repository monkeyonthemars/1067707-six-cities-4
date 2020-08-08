import {extend} from '../../utils.js';

const initialState = {
  activePlaceCard: -1,
  submitButtonDisabled: true,
  isSending: false,
  isActiveMenu: false
};

const ActionType = {
  SET_ACTIVE_PLACE_CARD: `SET_ACTIVE_PLACE_CARD`,
  REMOVE_ACTIVE_PLACE_CARD: `REMOVE_ACTIVE_PLACE_CARD`,
  CHANGE_SUBMIT_BUTTON_STATUS: `CHANGE_SUBMIT_BUTTON_STATUS`,
  CHANGE_SENDING_STATUS: `CHANGE_SENDING_STATUS`,
  CHANGE_ACTIVE_STATUS_MENU: `CHANGE_ACTIVE_STATUS_MENU`
};

const ActionCreator = {
  setActivePlaceCard: (id) => ({
    type: ActionType.SET_ACTIVE_PLACE_CARD,
    payload: id
  }),
  removeActivePlaceCard: () => ({
    type: ActionType.REMOVE_ACTIVE_PLACE_CARD,
    payload: -1
  }),
  changeSubmitButtonStatus: (buttonStatus) => ({
    type: ActionType.CHANGE_SUBMIT_BUTTON_STATUS,
    payload: buttonStatus
  }),
  changeSendingStatus: (isSending) => ({
    type: ActionType.CHANGE_SENDING_STATUS,
    payload: isSending
  }),
  changeActiveStatusMenu: (isActive) => ({
    type: ActionType.CHANGE_ACTIVE_STATUS_MENU,
    payload: isActive
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_PLACE_CARD:
      return extend(state, {
        activePlaceCard: action.payload
      });

    case ActionType.REMOVE_ACTIVE_PLACE_CARD:
      return extend(state, {
        activePlaceCard: -1
      });

    case ActionType.CHANGE_SUBMIT_BUTTON_STATUS:
      return extend(state, {
        submitButtonDisabled: action.payload
      });

    case ActionType.CHANGE_SENDING_STATUS:
      return extend(state, {
        isSending: action.payload
      });

    case ActionType.CHANGE_ACTIVE_STATUS_MENU:
      return extend(state, {
        isActiveMenu: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
