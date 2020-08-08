import React from 'react';
import {propTypes} from '../../types/types.js';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import Map from '../map/map.jsx';
import PlacesList from '../places-list/places-list.jsx';
import NewReviewForm from '../new-review-form/new-review-form.jsx';
import {AuthorizationStatus} from '../../const.js';
import Header from '../header/header.jsx';

const Property = (props) => {

  const {
    currentNearbyOffers,
    currentOffer,
    currentComments,
    onRentalTitleClick,
    onFavoriteClick,
    onMouseEnter,
    onMouseLeave,
    activePlaceCard,
    authorizationStatus,
    onSubmitReviewClick,
    email,
    onChangeNewReviewForm,
    submitButtonDisabled,
    isSending,
    review,
    rating
  } = props;

  const bookmarkStatus = currentOffer.isBookmark ? `0` : `1`;
  const bookmarkTitle = currentOffer.isBookmark ? `In bookmarks` : `To bookmarks`;
  const bookmarkClass = currentOffer.isBookmark
    ? `property__bookmark-button button--active button`
    : `property__bookmark-button button`;

  const hostClassName = currentOffer.host.isPro
    ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper`
    : `property__avatar-wrapper user__avatar-wrapper`;

  const gallery = <div className="property__gallery">
    {currentOffer.images.map((image) => {
      return (
        <React.Fragment key={image}>
          <div className="property__image-wrapper">
            <img
              className="property__image"
              src={image}
              alt="Photo studio"
            />
          </div>
        </React.Fragment>
      );
    })}
  </div>;

  const goods = <div className="property__inside">
    <h2 className="property__inside-title">Whats inside</h2>
    <ul className="property__inside-list">
      {currentOffer.goods.map((good) => {
        return (
          <React.Fragment key={good}>
            <li className="property__inside-item">{good}</li>
          </React.Fragment>
        );
      })}
    </ul>
  </div>;

  return (
    <div className="page">
      <Header
        authorizationStatus={authorizationStatus}
        email={email}
      />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            {gallery}
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>{currentOffer.mark}</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.title}
                </h1>
                <button className={bookmarkClass} type="button" onClick={() => {
                  onFavoriteClick(currentOffer.id, bookmarkStatus);
                }}>
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">{bookmarkTitle}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${currentOffer.rating * 20}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{currentOffer.priceValue}</b>
                <span className="property__price-text">&nbsp;{currentOffer.priceText}</span>
              </div>
              {goods}
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={hostClassName}>
                    <img
                      className="property__avatar user__avatar"
                      src={currentOffer.host.avatarUrl}
                      alt="Host avatar"
                      width={74}
                      height={74}
                    />
                  </div>
                  <span className="property__user-name">{currentOffer.host.name}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList
                  currentComments={currentComments}
                />
                {
                  authorizationStatus === AuthorizationStatus.AUTH ?
                    <NewReviewForm
                      activePlaceCard={activePlaceCard}
                      onSubmitReviewClick={onSubmitReviewClick}
                      onChangeNewReviewForm={onChangeNewReviewForm}
                      submitButtonDisabled={submitButtonDisabled}
                      isSending={isSending}
                      review={review}
                      rating={rating}
                    />
                    : ``
                }
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              cityCoordinates={currentOffer.city.location}
              currentOffers={currentNearbyOffers}
              activePlaceCard={activePlaceCard}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <PlacesList
                placesList={currentNearbyOffers}
                onRentalTitleClick={onRentalTitleClick}
                onFavoriteClick={onFavoriteClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Property.propTypes = {
  currentOffer: propTypes.currentOffer,
  currentComments: propTypes.currentComments,
  currentNearbyOffers: propTypes.currentNearbyOffers,
  onRentalTitleClick: propTypes.onRentalTitleClick,
  onFavoriteClick: propTypes.onFavoriteClick,
  onMouseEnter: propTypes.onMouseEnter,
  onMouseLeave: propTypes.onMouseLeave,
  activePlaceCard: propTypes.activePlaceCard,
  authorizationStatus: propTypes.authorizationStatus,
  onSubmitReviewClick: propTypes.onSubmitReviewClick,
  email: propTypes.email,
  onChangeNewReviewForm: propTypes.onChangeNewReviewForm,
  submitButtonDisabled: propTypes.submitButtonDisabled,
  isSending: propTypes.isSending,
  review: propTypes.review,
  rating: propTypes.rating
};

export default Property;
