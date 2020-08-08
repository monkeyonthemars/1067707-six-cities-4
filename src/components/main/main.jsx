import React from 'react';
import {Redirect} from 'react-router-dom';
import {propTypes} from '../../types/types.js';
import Map from '../map/map.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import PlacesList from '../places-list/places-list.jsx';
import Sort from '../sort/sort.jsx';
import EmptyMain from '../empty-main/empty-main.jsx';
import Header from '../header/header.jsx';
import {AppRoute, AuthorizationStatus} from '../../const.js';

const Main = (props) => {
  const {
    authorizationStatus,
    email,
    currentOffers,
    onFavoriteClick,
    onRentalTitleClick,
    currentCity,
    cities,
    onCityClick,
    onMouseEnter,
    onMouseLeave,
    onSortTypeClick,
    activePlaceCard,
    isActiveMenu,
    onSortMenuClick,
    currentSortType
  } = props;

  return authorizationStatus === AuthorizationStatus.NO_ACCESS
    ? <Redirect to={AppRoute.LOGIN} />
    : ((
      <div className="page page--gray page--main">
        <Header
          authorizationStatus={authorizationStatus}
          email={email}
        />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList
                cities={cities}
                currentCity={currentCity}
                onCityClick={onCityClick}
              />
            </section>
          </div>
          <div className="cities">

            {currentOffers.length > 0 ?

              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>

                  <Sort
                    onSortTypeClick={onSortTypeClick}
                    isActiveMenu={isActiveMenu}
                    onSortMenuClick={onSortMenuClick}
                    currentSortType={currentSortType}
                  />

                  <div className="cities__places-list places__list tabs__content">

                    <PlacesList
                      placesList={currentOffers}
                      onRentalTitleClick={onRentalTitleClick}
                      onFavoriteClick={onFavoriteClick}
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                    />

                  </div>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      cityCoordinates={currentCity.location}
                      currentOffers={currentOffers}
                      activePlaceCard={activePlaceCard}
                    />
                  </section>
                </div>
              </div>
              :
              <EmptyMain
              />
            };

          </div>
        </main>
      </div>
    ));
};

Main.propTypes = {
  authorizationStatus: propTypes.authorizationStatus,
  email: propTypes.email,
  cities: propTypes.cities,
  currentCity: propTypes.currentCity,
  currentOffers: propTypes.currentOffers,
  onRentalTitleClick: propTypes.onRentalTitleClick,
  onFavoriteClick: propTypes.onFavoriteClick,
  onCityClick: propTypes.onCityClick,
  onMouseEnter: propTypes.onMouseEnter,
  onMouseLeave: propTypes.onMouseLeave,
  onSortTypeClick: propTypes.onSortTypeClick,
  activePlaceCard: propTypes.activePlaceCard,
  isActiveMenu: propTypes.isActiveMenu,
  onSortMenuClick: propTypes.onSortMenuClick,
  currentSortType: propTypes.currentSortType,
};

export default Main;
