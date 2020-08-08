import {reducer, ActionCreator, ActionType} from './offers.js';

const DEFAULT_OFFER_INDEX = 0;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    activePlaceCard: -1,
    submitButtonDisabled: true,
    isSending: false,
    isActiveMenu: false
  });
});

it(`Reducer should set active placecard`, () => {
  expect(
      reducer(
          {
            activePlaceCard: -1,
            submitButtonDisabled: true,
            isSending: false,
            isActiveMenu: false
          },
          {
            type: ActionType.SET_ACTIVE_PLACE_CARD,
            payload: 5,
          }
      )
  ).toEqual({
    activePlaceCard: 5,
    submitButtonDisabled: true,
    isSending: false,
    isActiveMenu: false
  });
});

it(`Reducer should remove active placecard`, () => {
  expect(
      reducer(
          {
            activePlaceCard: 5,
            submitButtonDisabled: true,
            isSending: false,
            isActiveMenu: false
          },
          {
            type: ActionType.REMOVE_ACTIVE_PLACE_CARD,
            payload: ``,
          }
      )
  ).toEqual({
    activePlaceCard: -1,
    submitButtonDisabled: true,
    isSending: false,
    isActiveMenu: false
  });
});

it(`Reducer should change submit button status`, () => {
  expect(
      reducer(
          {
            activePlaceCard: -1,
            submitButtonDisabled: true,
            isSending: false,
            isActiveMenu: false
          },
          {
            type: ActionType.CHANGE_SUBMIT_BUTTON_STATUS,
            payload: false,
          }
      )
  ).toEqual({
    activePlaceCard: -1,
    submitButtonDisabled: false,
    isSending: false,
    isActiveMenu: false
  });
});

it(`Reducer should change sending status`, () => {
  expect(
      reducer(
          {
            activePlaceCard: -1,
            submitButtonDisabled: true,
            isSending: false,
            isActiveMenu: false
          },
          {
            type: ActionType.CHANGE_SENDING_STATUS,
            payload: true,
          }
      )
  ).toEqual({
    activePlaceCard: -1,
    submitButtonDisabled: true,
    isSending: true,
    isActiveMenu: false
  });
});

it(`Reducer should change active status menu`, () => {
  expect(
      reducer(
          {
            activePlaceCard: -1,
            submitButtonDisabled: true,
            isSending: false,
            isActiveMenu: false
          },
          {
            type: ActionType.CHANGE_ACTIVE_STATUS_MENU,
            payload: true,
          }
      )
  ).toEqual({
    activePlaceCard: -1,
    submitButtonDisabled: true,
    isSending: false,
    isActiveMenu: true
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for set active place card returns correct action`, () => {
    expect(ActionCreator.setActivePlaceCard(DEFAULT_OFFER_INDEX)).toEqual({
      type: ActionType.SET_ACTIVE_PLACE_CARD,
      payload: DEFAULT_OFFER_INDEX
    });
  });
  it(`Action creator for remove active place card returns correct action`, () => {
    expect(ActionCreator.removeActivePlaceCard()).toEqual({
      type: ActionType.REMOVE_ACTIVE_PLACE_CARD,
      payload: -1
    });
  });
  it(`Action creator for change submit button status returns correct action`, () => {
    expect(ActionCreator.changeSubmitButtonStatus(true)).toEqual({
      type: ActionType.CHANGE_SUBMIT_BUTTON_STATUS,
      payload: true
    });
  });
  it(`Action creator for change sending status returns correct action`, () => {
    expect(ActionCreator.changeSendingStatus(false)).toEqual({
      type: ActionType.CHANGE_SENDING_STATUS,
      payload: false
    });
  });
  it(`Action creator for change active status menu returns correct action`, () => {
    expect(ActionCreator.changeActiveStatusMenu(false)).toEqual({
      type: ActionType.CHANGE_ACTIVE_STATUS_MENU,
      payload: false
    });
  });
});
