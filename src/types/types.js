import PropTypes from 'prop-types';

export const propTypes = {
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired,
        }).isRequired
      }).isRequired
  ).isRequired,
  currentCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired
  }).isRequired,
  currentOffer: PropTypes.shape({
    id: PropTypes.number,
    mark: PropTypes.string,
    image: PropTypes.string,
    priceValue: PropTypes.number,
    priceText: PropTypes.string,
    isBookmark: PropTypes.bool,
    rating: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    coordinates: PropTypes.array
  }),
  currentOffers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        mark: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        priceValue: PropTypes.number.isRequired,
        priceText: PropTypes.string.isRequired,
        isBookmark: PropTypes.bool.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        coordinates: PropTypes.array.isRequired,

        bedrooms: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        goods: PropTypes.array.isRequired,
        host: PropTypes.object.isRequired,
        images: PropTypes.array.isRequired,
        maxAdults: PropTypes.number.isRequired,
      })
  ).isRequired,
  placeCard: {
    id: PropTypes.number.isRequired,
    mark: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    priceValue: PropTypes.number.isRequired,
    priceText: PropTypes.string.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onRentalTitleClick: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
  },
  placesList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        mark: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        priceValue: PropTypes.number.isRequired,
        priceText: PropTypes.string.isRequired,
        isBookmark: PropTypes.bool.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      })
  ),
  cityCoordinates: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  onCityClick: PropTypes.func.isRequired,
  onRentalTitleClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
  activePlaceCard: PropTypes.number.isRequired,
  currentComments: PropTypes.array.isRequired,
  comment: PropTypes.object.isRequired,
  currentNearbyOffers: PropTypes.array.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
  onSubmitReviewClick: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  cityName: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  onChangeNewReviewForm: PropTypes.func.isRequired,
  submitButtonDisabled: PropTypes.bool.isRequired,
  isSending: PropTypes.bool.isRequired,
  review: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  loadOfferDetails: PropTypes.func.isRequired,
  isActiveMenu: PropTypes.bool.isRequired,
  onSortMenuClick: PropTypes.func.isRequired,
  currentSortType: PropTypes.string.isRequired,
};
