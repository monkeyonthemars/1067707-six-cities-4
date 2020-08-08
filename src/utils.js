export const getOfferById = (offers, offerId) => {
  return offers.find((item) => {
    return item.id === offerId;
  });
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const tagOfferToFavorites = (offers, offerId) => {
  offers.forEach((item) => {
    if (item.id === offerId) {
      item.isBookmark = !item.isBookmark;
    }
  });
  return offers.slice();
};
