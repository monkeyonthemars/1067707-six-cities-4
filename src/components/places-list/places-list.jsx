import React from 'react';
import {propTypes} from '../../types/types.js';
import PlaceCard from '../place-card/place-card.jsx';

const PlacesList = (props) => {
  const {
    placesList,
    onRentalTitleClick,
    onFavoriteClick,
    onMouseEnter,
    onMouseLeave,
  } = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {placesList.map((place) => {
        return (
          <React.Fragment key={place.id}>
            <PlaceCard
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
        );
      })}
    </div>
  );
};

PlacesList.propTypes = {
  placesList: propTypes.placesList,
  onRentalTitleClick: propTypes.onRentalTitleClick,
  onFavoriteClick: propTypes.onFavoriteClick,
  onMouseEnter: propTypes.onMouseEnter,
  onMouseLeave: propTypes.onMouseLeave,
};

export default PlacesList;
