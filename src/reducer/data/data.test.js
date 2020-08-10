import {SortType} from '../../const.js';
import {reducer, ActionCreator, ActionType} from './data.js';
import * as mocks from '../../mocks/offers-test.js';

const DEFAULT_CITY_INDEX = 0;
const DEFAULT_RATING = 5;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    cities: [],
    currentCity: {},
    currentOffers: [],
    currentCities: [],
    offers: [],
    currentOffer: {},
    currentComments: [],
    currentNearbyOffers: [],
    currentSortType: SortType.POPULAR,
    favorites: [],
    review: ``,
    rating: 0,
    isNewReviewError: false,
  });
});

it(`Reducer should change current city`, () => {
  expect(
      reducer(
          {
            cities: [],
            currentCity: {},
            currentOffers: [],
            currentCities: [],
            offers: [],
            currentOffer: {},
            currentComments: [],
            currentNearbyOffers: [],
            currentSortType: SortType.POPULAR,
            favorites: [],
            review: ``,
            rating: 0,
            isNewReviewError: false,
          },
          {
            type: ActionType.CHANGE_CITY,
            payload: mocks.cities[2],
          }
      )
  ).toEqual({
    cities: [],
    currentCity: mocks.cities[2],
    currentOffers: [],
    currentCities: [],
    offers: [],
    currentOffer: {},
    currentComments: [],
    currentNearbyOffers: [],
    currentSortType: SortType.POPULAR,
    favorites: [],
    review: ``,
    rating: 0,
    isNewReviewError: false,
  });
});

it(`Reducer should load offers`, () => {
  expect(
      reducer(
          {
            cities: [],
            currentCity: {},
            currentOffers: [],
            currentCities: [],
            offers: [],
            currentOffer: {},
            currentComments: [],
            currentNearbyOffers: [],
            currentSortType: SortType.POPULAR,
            favorites: [],
            review: ``,
            rating: 0,
            isNewReviewError: false,
          },
          {
            type: ActionType.LOAD_OFFERS,
            payload: mocks.rentalOffers,
          }
      )
  ).toEqual({
    cities: [],
    currentCity: {},
    currentOffers: [],
    currentCities: [],
    offers: mocks.rentalOffers,
    currentOffer: {},
    currentComments: [],
    currentNearbyOffers: [],
    currentSortType: SortType.POPULAR,
    favorites: [],
    review: ``,
    rating: 0,
    isNewReviewError: false,
  });
});

it(`Reducer should set current offer`, () => {
  expect(
      reducer(
          {
            cities: [],
            currentCity: {},
            currentOffers: mocks.rentalOffers,
            currentcities: [],
            offers: [],
            currentOffer: {},
            currentComments: [],
            currentNearbyOffers: [],
            currentSortType: SortType.POPULAR,
            favorites: [],
            review: ``,
            rating: 0,
            isNewReviewError: false,
          },
          {
            type: ActionType.SET_CURRENT_OFFER,
            payload: 0,
          }
      )
  ).toEqual({
    cities: [],
    currentCity: {},
    currentOffers: mocks.rentalOffers,
    currentcities: [],
    offers: [],
    currentOffer: mocks.rentalOffers[0],
    currentComments: [],
    currentNearbyOffers: [],
    currentSortType: SortType.POPULAR,
    favorites: [],
    review: ``,
    rating: 0,
    isNewReviewError: false,
  });
});

it(`Reducer should load comments`, () => {
  expect(
      reducer(
          {
            cities: [],
            currentCity: {},
            currentOffers: [],
            currentCities: [],
            offers: [],
            currentOffer: {},
            currentComments: [],
            currentNearbyOffers: [],
            currentSortType: SortType.POPULAR,
            favorites: [],
            review: ``,
            rating: 0,
            isNewReviewError: false,
          },
          {
            type: ActionType.LOAD_COMMENTS,
            payload: mocks.comments,
          }
      )
  ).toEqual({
    cities: [],
    currentCity: {},
    currentOffers: [],
    currentCities: [],
    offers: [],
    currentOffer: {},
    currentComments: mocks.comments,
    currentNearbyOffers: [],
    currentSortType: SortType.POPULAR,
    favorites: [],
    review: ``,
    rating: 0,
    isNewReviewError: false,
  });
});

it(`Reducer should load nearby offers`, () => {
  expect(
      reducer(
          {
            cities: [],
            currentCity: {},
            currentOffers: [],
            currentCities: [],
            offers: [],
            currentOffer: {},
            currentComments: [],
            currentNearbyOffers: [],
            currentSortType: SortType.POPULAR,
            favorites: [],
            review: ``,
            rating: 0,
            isNewReviewError: false,
          },
          {
            type: ActionType.LOAD_NEARBY_OFFERS,
            payload: mocks.rentalOffers,
          }
      )
  ).toEqual({
    cities: [],
    currentCity: {},
    currentOffers: [],
    currentCities: [],
    offers: [],
    currentOffer: {},
    currentComments: [],
    currentNearbyOffers: mocks.rentalOffers,
    currentSortType: SortType.POPULAR,
    favorites: [],
    review: ``,
    rating: 0,
    isNewReviewError: false,
  });
});

it(`Reducer should set current sort type`, () => {
  expect(
      reducer(
          {
            cities: [],
            currentCity: {},
            currentOffers: [],
            currentCities: [],
            offers: [],
            currentOffer: {},
            currentComments: [],
            currentNearbyOffers: [],
            currentSortType: SortType.POPULAR,
            favorites: [],
            review: ``,
            rating: 0,
            isNewReviewError: false,
          },
          {
            type: ActionType.SET_CURRENT_SORT_TYPE,
            payload: SortType.TOP_RATED_FIRST,
          }
      )
  ).toEqual({
    cities: [],
    currentCity: {},
    currentOffers: [],
    currentCities: [],
    offers: [],
    currentOffer: {},
    currentComments: [],
    currentNearbyOffers: [],
    currentSortType: SortType.TOP_RATED_FIRST,
    favorites: [],
    review: ``,
    rating: 0,
    isNewReviewError: false,
  });
});

it(`Reducer should load favorites`, () => {
  expect(
      reducer(
          {
            cities: [],
            currentCity: {},
            currentOffers: [],
            currentCities: [],
            offers: [],
            currentOffer: {},
            currentComments: [],
            currentNearbyOffers: [],
            currentSortType: SortType.POPULAR,
            favorites: [],
            review: ``,
            rating: 0,
            isNewReviewError: false,
          },
          {
            type: ActionType.LOAD_FAVORITES,
            payload: mocks.rentalOffers,
          }
      )
  ).toEqual({
    cities: [],
    currentCity: {},
    currentOffers: [],
    currentCities: [],
    offers: [],
    currentOffer: {},
    currentComments: [],
    currentNearbyOffers: [],
    currentSortType: SortType.POPULAR,
    favorites: mocks.rentalOffers,
    review: ``,
    rating: 0,
    isNewReviewError: false,
  });
});

it(`Reducer should set current review`, () => {
  expect(
      reducer(
          {
            cities: [],
            currentCity: {},
            currentOffers: [],
            currentCities: [],
            offers: [],
            currentOffer: {},
            currentComments: [],
            currentNearbyOffers: [],
            currentSortType: SortType.POPULAR,
            favorites: [],
            review: ``,
            rating: 0,
            isNewReviewError: false,
          },
          {
            type: ActionType.SET_CURRENT_REVIEW,
            payload: `Test review`,
          }
      )
  ).toEqual({
    cities: [],
    currentCity: {},
    currentOffers: [],
    currentCities: [],
    offers: [],
    currentOffer: {},
    currentComments: [],
    currentNearbyOffers: [],
    currentSortType: SortType.POPULAR,
    favorites: [],
    review: `Test review`,
    rating: 0,
    isNewReviewError: false,
  });
});

it(`Reducer should set current rating`, () => {
  expect(
      reducer(
          {
            cities: [],
            currentCity: {},
            currentOffers: [],
            currentCities: [],
            offers: [],
            currentOffer: {},
            currentComments: [],
            currentNearbyOffers: [],
            currentSortType: SortType.POPULAR,
            favorites: [],
            review: ``,
            rating: 0,
            isNewReviewError: false,
          },
          {
            type: ActionType.SET_CURRENT_RATING,
            payload: 3,
          }
      )
  ).toEqual({
    cities: [],
    currentCity: {},
    currentOffers: [],
    currentCities: [],
    offers: [],
    currentOffer: {},
    currentComments: [],
    currentNearbyOffers: [],
    currentSortType: SortType.POPULAR,
    favorites: [],
    review: ``,
    rating: 3,
    isNewReviewError: false,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity(mocks.cities[DEFAULT_CITY_INDEX])).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: mocks.cities[DEFAULT_CITY_INDEX]
    });
  });

  it(`Action creator for loda offers returns correct action`, () => {
    expect(ActionCreator.loadOffers(mocks.rentalOffers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: mocks.rentalOffers
    });
  });
  it(`Action creator for add to favorites returns correct action`, () => {
    expect(ActionCreator.addToFavorites(DEFAULT_CITY_INDEX)).toEqual({
      type: ActionType.ADD_TO_FAVORITES,
      payload: DEFAULT_CITY_INDEX
    });
  });
  it(`Action creator for set current offer returns correct action`, () => {
    expect(ActionCreator.setCurrentOffer(DEFAULT_CITY_INDEX)).toEqual({
      type: ActionType.SET_CURRENT_OFFER,
      payload: DEFAULT_CITY_INDEX
    });
  });
  it(`Action creator for load comments returns correct action`, () => {
    expect(ActionCreator.loadComments(mocks.comments)).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: mocks.comments
    });
  });
  it(`Action creator for load nearby offers returns correct action`, () => {
    expect(ActionCreator.loadNearbyOffers(mocks.rentalOffers)).toEqual({
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: mocks.rentalOffers
    });
  });
  it(`Action creator for set current sort type returns correct action`, () => {
    expect(ActionCreator.setCurrentSortType(SortType.POPULAR)).toEqual({
      type: ActionType.SET_CURRENT_SORT_TYPE,
      payload: SortType.POPULAR
    });
  });
  it(`Action creator for loda favorites returns correct action`, () => {
    expect(ActionCreator.loadFavorites(mocks.rentalOffers)).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: mocks.rentalOffers
    });
  });
  it(`Action creator for set current review returns correct action`, () => {
    expect(ActionCreator.setCurrentReview(mocks.review)).toEqual({
      type: ActionType.SET_CURRENT_REVIEW,
      payload: mocks.review
    });
  });
  it(`Action creator for set current rating returns correct action`, () => {
    expect(ActionCreator.setCurrentRating(DEFAULT_RATING)).toEqual({
      type: ActionType.SET_CURRENT_RATING,
      payload: DEFAULT_RATING
    });
  });
});
