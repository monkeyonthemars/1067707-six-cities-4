import React from 'react';
import {propTypes} from '../../types/types.js';
import FavoriteCard from '../favorite-card/favorite-card.jsx';

const FavoriteCity = (props) => {

  const {
    cityName,
    favorites,
    onRentalTitleClick,
    onFavoriteClick,
    onMouseEnter,
    onMouseLeave,
  } = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favorites.map((place) => {
          return (
            cityName === place.city.name ?
              <React.Fragment key={place.id}>
                <FavoriteCard
                  id={place.id}
                  mark={place.mark}
                  image={place.image}
                  priceValue={place.priceValue}
                  priceText={place.priceText}
                  isBookmark={place.isBookmark}
                  rating={place.rating}
                  title={place.title}
                  type={place.type}
                  onRentalTitleClick={onRentalTitleClick}
                  onFavoriteClick={onFavoriteClick}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                />
              </React.Fragment>
              : ``
          );
        })}
      </div>
    </li>
  );
};

FavoriteCity.propTypes = {
  cityName: propTypes.cityName,
  favorites: propTypes.favorites,
  onRentalTitleClick: propTypes.onRentalTitleClick,
  onFavoriteClick: propTypes.onFavoriteClick,
  onMouseEnter: propTypes.onMouseEnter,
  onMouseLeave: propTypes.onMouseLeave
};

export default FavoriteCity;
