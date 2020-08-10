import React from 'react';
import {propTypes} from '../../types/types.js';
import FavoriteCity from '../favorite-city/favorite-city.jsx';
import FavoritesEmpty from '../favorites-empty/favorites-empty.jsx';
import Header from '../header/header.jsx';

const Favorites = (props) => {

  const {
    favorites,
    onRentalTitleClick,
    onFavoriteClick,
    onMouseEnter,
    onMouseLeave,
    authorizationStatus,
    email,
    offers
  } = props;

  const citiesSet = new Set(favorites.map((place) => {
    return place.city.name;
  }));

  const cities = [];
  citiesSet.forEach((cityName) => {
    cities.push(cityName);
  });

  return (
    favorites.length === 0 ?
      <FavoritesEmpty
        authorizationStatus={authorizationStatus}
        email={email}
      />
      :
      <div className="page">
        <Header
          authorizationStatus={authorizationStatus}
          email={email}
        />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">

                {cities.map((cityName) => {
                  return (
                    <React.Fragment key={cityName}>
                      <FavoriteCity
                        cityName={cityName}
                        favorites={favorites}
                        onRentalTitleClick={onRentalTitleClick}
                        onFavoriteClick={onFavoriteClick}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        offers={offers}
                      />
                    </React.Fragment>
                  );
                })};
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img
              className="footer__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width={64}
              height={33}
            />
          </a>
        </footer>
      </div>
  );
};

Favorites.propTypes = {
  favorites: propTypes.favorites,
  onRentalTitleClick: propTypes.onRentalTitleClick,
  onFavoriteClick: propTypes.onFavoriteClick,
  onMouseEnter: propTypes.onMouseEnter,
  onMouseLeave: propTypes.onMouseLeave,
  authorizationStatus: propTypes.authorizationStatus,
  email: propTypes.email,
  offers: propTypes.offers,
};

export default Favorites;
