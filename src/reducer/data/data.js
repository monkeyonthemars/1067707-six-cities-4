import {DEFAULT_CITY_INDEX, SortType} from '../../const.js';
import {getOfferById, tagOfferToFavorites} from '../../utils.js';
import {extend} from '../../utils.js';

const initialState = {
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
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_CITIES: `LOAD_CITIES`,
  ADD_TO_FAVORITES: `ADD_TO_FAVORITES`,
  SET_CURRENT_OFFER: `SET_CURRENT_OFFER`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  SET_CURRENT_SORT_TYPE: `SET_CURRENT_SORT_TYPE`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  SET_CURRENT_REVIEW: `SET_CURRENT_REVIEW`,
  SET_CURRENT_RATING: `SET_CURRENT_RATING`,
  SET_IS_NEW_REVIEW_ERROR: `SET_IS_NEW_REVIEW_ERROR`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  loadCities: (offers) => ({
    type: ActionType.LOAD_CITIES,
    payload: offers
  }),
  addToFavorites: (offerId) => ({
    type: ActionType.ADD_TO_FAVORITES,
    payload: offerId
  }),
  setCurrentOffer: (offerId) => ({
    type: ActionType.SET_CURRENT_OFFER,
    payload: offerId
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),
  loadNearbyOffers: (offers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: offers
  }),
  setCurrentSortType: (sortType) => ({
    type: ActionType.SET_CURRENT_SORT_TYPE,
    payload: sortType
  }),
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites
  }),
  setCurrentReview: (review) => ({
    type: ActionType.SET_CURRENT_REVIEW,
    payload: review
  }),
  setCurrentRating: (rating) => ({
    type: ActionType.SET_CURRENT_RATING,
    payload: rating
  }),
  setIsNewReviewError: (status) => ({
    type: ActionType.SET_IS_NEW_REVIEW_ERROR,
    payload: status
  }),
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {

        const offers = offersAdapter(response.data);
        const uniqueCityNames = Array.from(new Set(
            offers.map(function (item) {
              return item.city.name;
            })
        ));

        const cities = uniqueCityNames.map(function (cityName) {
          return offers.find(function (item) {
            return item.city.name === cityName;
          }).city;
        });

        const city = cities[DEFAULT_CITY_INDEX];

        dispatch(ActionCreator.loadOffers(offers));
        dispatch(ActionCreator.loadCities(cities));
        dispatch(ActionCreator.changeCity(city));
        dispatch(Operation.loadFavorites());

      });
  },
  loadComments: (offerId) => (dispatch, getState, api) => {
    return api.get(`/comments/` + offerId)
      .then((response) => {
        dispatch(ActionCreator.loadComments(commentsAdapter(response.data)));
      });
  },
  loadNearbyOffers: (offerId) => (dispatch, getState, api) => {
    return api.get(`/hotels/` + offerId + `/nearby`)
      .then((response) => {
        dispatch(ActionCreator.loadNearbyOffers(offersAdapter(response.data)));
      });
  },
  pushComment: (comment) => (dispatch, getState, api) => {
    return api.post(`/comments/${comment.offerId}`, {
      comment: comment.userReview,
      rating: comment.userRating,
    })
      .then(() => {
        dispatch(Operation.loadComments(comment.offerId));
        dispatch(ActionCreator.setCurrentReview(``));
        dispatch(ActionCreator.setCurrentRating(0));
        dispatch(ActionCreator.setIsNewReviewError(false));
      })
      .catch(() => {
        dispatch(ActionCreator.setIsNewReviewError(true));
      });
  },
  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavorites(offersAdapter(response.data)));
      });
  },
  addToFavorites: (offers, offerId, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${offerId}/${status}`)
      .then(() => {
        dispatch(ActionCreator.addToFavorites(tagOfferToFavorites(offers, offerId)));
      })
      .catch((err) => {
        throw err;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
      });

    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });

    case ActionType.LOAD_CITIES:
      return extend(state, {
        currentCities: action.payload
      });

    case ActionType.ADD_TO_FAVORITES:
      return extend(state, {
        offers: action.payload
      });

    case ActionType.SET_CURRENT_OFFER:
      return extend(state, {
        currentOffer: getOfferById(state.currentOffers, action.payload)
      });

    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        currentComments: action.payload
      });

    case ActionType.LOAD_NEARBY_OFFERS:
      return extend(state, {
        currentNearbyOffers: action.payload
      });

    case ActionType.SET_CURRENT_SORT_TYPE:
      return extend(state, {
        currentSortType: action.payload
      });

    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favorites: action.payload
      });

    case ActionType.SET_CURRENT_REVIEW:
      return extend(state, {
        review: action.payload
      });

    case ActionType.SET_CURRENT_RATING:
      return extend(state, {
        rating: action.payload
      });

    case ActionType.SET_IS_NEW_REVIEW_ERROR:
      return extend(state, {
        isNewReviewError: action.payload
      });
  }

  return state;
};

const offersAdapter = (offers) => {
  return offers.map((offer) => {
    return {
      id: offer.id,
      mark: offer.is_premium ? `Premium` : ``,
      image: offer.preview_image,
      priceValue: offer.price,
      priceText: `night`,
      isBookmark: offer.is_favorite,
      rating: offer.rating,
      title: offer.title,
      type: offer.type,
      coordinates: [offer.location.latitude, offer.location.longitude],
      city: offer.city,
      bedrooms: offer.bedrooms,
      description: offer.description,
      goods: offer.goods,
      host: {
        avatarUrl: offer.host.avatar_url,
        id: offer.host.id,
        isPro: offer.host.is_pro,
        name: offer.host.name
      },
      images: offer.images,
      maxAdults: offer.max_adults,
      ratingText: offer.rating
    };
  });
};

const commentsAdapter = (comments) => {
  return comments.map((comment) => {
    return {
      comment: comment.comment,
      date: comment.date,
      id: comment.id,
      rating: comment.rating,
      user: {
        avatarUrl: comment.user.avatar_url,
        id: comment.user.id,
        isPro: comment.user.is_pro,
        name: comment.user.name
      }
    };
  });
};

export {reducer, Operation, ActionType, ActionCreator};
