import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {propTypes} from '../../types/types.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {ActionCreator as DataActionCreator} from '../../reducer/data/data.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {ActionCreator as OffersActionCreator} from '../../reducer/offers/offers.js';
import {
  getCurrentCity,
  getCurrentOffers,
  getCurrentOffer,
  getCurrentComments,
  getNearbyOffers,
  getCities,
  getFavorites,
  getOffers,
  getCurrentRating,
  getCurrentReview,
  getCurrentSortType
} from '../../reducer/data/selectors.js';
import {getAuthorizationStatus, getAuthorizationEmail} from '../../reducer/user/selectors.js';
import {
  getActivePlaceCard,
  getSubmitButtonStatus,
  getSendingStatus,
  getActiveStatusMenu
} from '../../reducer/offers/selectors.js';
import history from '../../history.js';
import {AppRoute} from '../../const.js';
import PrivateRoute from '../private-route/private-route.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Main from '../main/main.jsx';
import Favorites from '../favorites/favorites.jsx';
import Property from '../property/property.jsx';
import {getOfferById} from '../../utils.js';

const App = (props) => {
  const {
    authorizationStatus,
    onRentalTitleClick,
    login,
    email,
    onCityClick,
    onFavoriteClick,
    onMouseEnter,
    onMouseLeave,
    currentOffers,
    currentNearbyOffers,
    currentComments,
    currentCity,
    cities,
    onSortTypeClick,
    activePlaceCard,
    onSubmitReviewClick,
    favorites,
    onChangeNewReviewForm,
    submitButtonDisabled,
    isSending,
    review,
    rating,
    offers,
    loadOfferDetails,
    isActiveMenu,
    onSortMenuClick,
    currentSortType
  } = props;

  return (
    <Router
      history={history}
    >
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main
            authorizationStatus={authorizationStatus}
            email={email}
            cities={cities}
            currentCity={currentCity}
            currentOffers={currentOffers}
            onFavoriteClick={onFavoriteClick}
            onCityClick={onCityClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onRentalTitleClick={onRentalTitleClick}
            onSortTypeClick={onSortTypeClick}
            activePlaceCard={activePlaceCard}
            isActiveMenu={isActiveMenu}
            onSortMenuClick={onSortMenuClick}
            currentSortType={currentSortType}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn
            authorizationStatus={authorizationStatus}
            onSubmit={login}
            email={email}
          />
        </Route>
        <Route
          exact
          path={`${AppRoute.PROPERTY}/:id`}
          render={({match}) => {
            const id = Number(match.params.id);
            const offer = getOfferById(offers, id);
            if (currentNearbyOffers.length === 0
              && currentComments.length === 0) {
              loadOfferDetails(id);
            }
            if (offer !== undefined) {
              return (
                <Property
                  currentNearbyOffers={currentNearbyOffers}
                  currentOffer={offer}
                  currentComments={currentComments}
                  activePlaceCard={id}

                  authorizationStatus={authorizationStatus}
                  email={email}

                  onSubmitReviewClick={onSubmitReviewClick}
                  onChangeNewReviewForm={onChangeNewReviewForm}
                  onRentalTitleClick={onRentalTitleClick}
                  onFavoriteClick={onFavoriteClick}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  submitButtonDisabled={submitButtonDisabled}
                  isSending={isSending}
                  review={review}
                  rating={rating
                  }
                />
              );
            }
            return (``);
          }}
        />
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          authorizationStatus={authorizationStatus}
          render={() => {
            return (
              <Favorites
                favorites={favorites}
                onRentalTitleClick={onRentalTitleClick}
                onFavoriteClick={onFavoriteClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                authorizationStatus={authorizationStatus}
                email={email}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  authorizationStatus: propTypes.authorizationStatus,
  login: propTypes.login,
  email: propTypes.email,
  cities: propTypes.cities,
  currentCity: propTypes.currentCity,
  currentOffers: propTypes.currentOffers,
  currentOffer: propTypes.currentOffer,
  currentComments: propTypes.currentComments,
  onCityClick: propTypes.onCityClick,
  onMouseEnter: propTypes.onMouseEnter,
  onMouseLeave: propTypes.onMouseLeave,
  onFavoriteClick: propTypes.onFavoriteClick,
  activePlaceCard: propTypes.activePlaceCard,
  onRentalTitleClick: propTypes.onRentalTitleClick,
  currentNearbyOffers: propTypes.currentNearbyOffers,
  onSortTypeClick: propTypes.onSortTypeClick,
  onSubmitReviewClick: propTypes.onSubmitReviewClick,
  favorites: propTypes.favorites,
  offers: propTypes.offers,
  onChangeNewReviewForm: propTypes.onChangeNewReviewForm,
  submitButtonDisabled: propTypes.submitButtonDisabled,
  isSending: propTypes.isSending,
  review: propTypes.review,
  rating: propTypes.rating,
  loadOfferDetails: propTypes.loadOfferDetails,
  isActiveMenu: propTypes.isActiveMenu,
  onSortMenuClick: propTypes.onSortMenuClick,
  currentSortType: propTypes.currentSortType,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  email: getAuthorizationEmail(state),
  cities: getCities(state),
  currentCity: getCurrentCity(state),
  currentOffers: getCurrentOffers(state),
  currentOffer: getCurrentOffer(state),
  currentComments: getCurrentComments(state),
  currentNearbyOffers: getNearbyOffers(state),
  activePlaceCard: getActivePlaceCard(state),
  favorites: getFavorites(state),
  offers: getOffers(state),
  submitButtonDisabled: getSubmitButtonStatus(state),
  isSending: getSendingStatus(state),
  review: getCurrentReview(state),
  rating: getCurrentRating(state),
  isActiveMenu: getActiveStatusMenu(state),
  currentSortType: getCurrentSortType(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
    dispatch(DataOperation.loadFavorites());
  },

  onCityClick(city) {
    dispatch(DataActionCreator.changeCity(city));
  },
  onMouseEnter(id) {
    dispatch(OffersActionCreator.setActivePlaceCard(id));
  },
  onMouseLeave() {
    dispatch(OffersActionCreator.removeActivePlaceCard());
  },
  onFavoriteClick(offerId, status) {
    dispatch(DataOperation.addToFavorites(offerId, status));
    dispatch(DataOperation.loadFavorites());
  },
  onRentalTitleClick(offerId) {
    dispatch(DataActionCreator.setCurrentOffer(offerId));
    dispatch(DataOperation.loadComments(offerId));
    dispatch(DataOperation.loadNearbyOffers(offerId));
  },
  onSortTypeClick(sortType) {
    dispatch(DataActionCreator.setCurrentSortType(sortType));
    dispatch(OffersActionCreator.changeActiveStatusMenu(false));
  },
  onSubmitReviewClick(comment, isSending, buttonStatus) {
    dispatch(OffersActionCreator.changeSendingStatus(isSending));
    dispatch(DataOperation.pushComment(comment));
    dispatch(OffersActionCreator.changeSendingStatus(false));
    dispatch(OffersActionCreator.changeSubmitButtonStatus(buttonStatus));
  },
  onChangeNewReviewForm(buttonStatus, review, rating) {
    dispatch(DataActionCreator.setCurrentReview(review));
    dispatch(DataActionCreator.setCurrentRating(rating));
    dispatch(OffersActionCreator.changeSubmitButtonStatus(buttonStatus));
  },
  loadOfferDetails(offerId) {
    dispatch(DataOperation.loadComments(offerId));
    dispatch(DataOperation.loadNearbyOffers(offerId));
  },
  onSortMenuClick(status) {
    dispatch(OffersActionCreator.changeActiveStatusMenu(status));
  },

});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
