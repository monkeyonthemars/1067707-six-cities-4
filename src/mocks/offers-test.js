const CITY = {
  PARIS: {
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    },
    name: `Paris`
  },
  COLOGNE: {
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    },
    name: `Cologne`
  },
  BRUSSELS: {
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    },
    name: `Brussels`
  },
  AMSTERDAM: {
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    },
    name: `Amsterdam`
  },
  HAMBURG: {
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    },
    name: `Hamburg`
  },
  DUSSELDORF: {
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    },
    name: `Dusseldorf`
  }
};

const cities = [
  {
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    },
    name: `Paris`
  },
  {
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    },
    name: `Cologne`
  },
  {
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    },
    name: `Brussels`
  },
  {
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    },
    name: `Amsterdam`
  },
  {
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    },
    name: `Hamburg`
  },
  {
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    },
    name: `Dusseldorf`
  }
];

const currentCity = {
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
  name: `Paris`
};

const comments = [
  {
    comment: `The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.`,
    date: `2020-03-15T10:43:24.410Z`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/3.jpg`,
      id: 12,
      isPro: true,
      name: `Isaac`
    }
  }, {
    comment: `The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.`,
    date: `2020-02-15T10:43:24.410Z`,
    id: 2,
    rating: 5,
    user: {
      avatarUrl: `https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/2.jpg`,
      id: 11,
      isPro: true,
      name: `Mike`
    }
  }
];

const rentalOffers = [
  {
    id: 0,
    mark: `Premium`,
    image: `apartment-02.jpg`,
    priceValue: 120,
    priceText: `night`,
    isBookmark: false,
    rating: 100,
    title: `Luxury Tiny House, flowerbulb region nearby A'dam`,
    type: `Apartment`,
    coordinates: [52.4009553943508, 4.86309666406198],
    city: CITY.PARIS,
    bedrooms: 1,
    description: `Luxury Tiny House, flowerbulb region nearby A'dam`,
    goods: [`Washer`, `Breakfast`, `Air conditioning`, `Laptop friendly workspace`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 25,
      isPro: true,
      name: `Angelina`
    },
    images: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`],
    maxAdults: 1,
    ratingText: 4
  },
  {
    id: 1,
    mark: ``,
    image: `apartment-01.jpg`,
    priceValue: 50,
    priceText: `night`,
    isBookmark: true,
    rating: 60,
    title: `Houseboat on IJsselmeer in Amsterdam`,
    type: `Shared room`,
    coordinates: [52.399553943508, 4.87309666406198],
    city: CITY.PARIS,
    bedrooms: 1,
    description: `Houseboat on IJsselmeer in Amsterdam`,
    goods: [`Washer`, `Breakfast`, `Laptop friendly workspace`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 25,
      isPro: true,
      name: `Angelina`
    },
    images: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`],
    maxAdults: 2,
    ratingText: 5
  }, {
    id: 2,
    mark: `Premium`,
    image: `apartment-03.jpg`,
    priceValue: 151,
    priceText: `night`,
    isBookmark: false,
    rating: 80,
    title: `Amstel Rembrandtplein`,
    type: `Apartment`,
    coordinates: [52.3809553943508, 4.909309666406198],
    city: CITY.COLOGNE,
    bedrooms: 1,
    description: `Amstel Rembrandtplein`,
    goods: [`Washer`, `Air conditioning`, `Laptop friendly workspace`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 25,
      isPro: true,
      name: `Angelina`
    },
    images: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`],
    maxAdults: 2,
    ratingText: 3
  }, {
    id: 3,
    mark: ``,
    image: `room.jpg`,
    priceValue: 32,
    priceText: `night`,
    isBookmark: true,
    rating: 100,
    title: `Room with a View on the park.`,
    type: `Private room`,
    coordinates: [52.3709553943508, 4.919309666406198],
    city: CITY.COLOGNE,
    bedrooms: 2,
    description: `Room with a View on the park.`,
    goods: [`Breakfast`, `Air conditioning`, `Laptop friendly workspace`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 25,
      isPro: true,
      name: `Angelina`
    },
    images: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`],
    maxAdults: 1,
    ratingText: 5
  }, {
    id: 4,
    mark: `Premium`,
    image: `apartment-02.jpg`,
    priceValue: 120,
    priceText: `night`,
    isBookmark: false,
    rating: 100,
    title: `Luxury Tiny House, flowerbulb region nearby A'dam`,
    type: `Apartment`,
    coordinates: [52.4009553943508, 4.86309666406198],
    city: CITY.BRUSSELS,
    bedrooms: 2,
    description: `Luxury Tiny House, flowerbulb region nearby A'dam`,
    goods: [`Washer`, `Air conditioning`, `Laptop friendly workspace`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 25,
      isPro: true,
      name: `Angelina`
    },
    images: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`],
    maxAdults: 1,
    ratingText: 3
  }, {
    id: 5,
    mark: ``,
    image: `apartment-01.jpg`,
    priceValue: 50,
    priceText: `night`,
    isBookmark: true,
    rating: 60,
    title: `Houseboat on IJsselmeer in Amsterdam`,
    type: `Shared room`,
    coordinates: [52.399553943508, 4.87309666406198],
    city: CITY.AMSTERDAM,
    bedrooms: 1,
    description: `Houseboat on IJsselmeer in Amsterdam`,
    goods: [`Air conditioning`, `Laptop friendly workspace`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 25,
      isPro: true,
      name: `Angelina`
    },
    images: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`],
    maxAdults: 1,
    ratingText: 2
  }, {
    id: 6,
    mark: `Premium`,
    image: `apartment-03.jpg`,
    priceValue: 151,
    priceText: `night`,
    isBookmark: false,
    rating: 80,
    title: `Amstel Rembrandtplein`,
    type: `Apartment`,
    coordinates: [52.3809553943508, 4.909309666406198],
    city: CITY.HAMBURG,
    bedrooms: 1,
    description: `Amstel Rembrandtplein`,
    goods: [`Washer`, `Breakfast`, `Air conditioning`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 25,
      isPro: true,
      name: `Angelina`
    },
    images: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`],
    maxAdults: 2,
    ratingText: 4
  }, {
    id: 7,
    mark: ``,
    image: `room.jpg`,
    priceValue: 32,
    priceText: `night`,
    isBookmark: true,
    rating: 100,
    title: `Room with a View on the park.`,
    type: `Private room`,
    coordinates: [52.3709553943508, 4.919309666406198],
    city: CITY.DUSSELDORF,
    bedrooms: 3,
    description: `Room with a View on the park.`,
    goods: [`Washer`, `Breakfast`, `Air conditioning`, `Laptop friendly workspace`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 25,
      isPro: true,
      name: `Angelina`
    },
    images: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`],
    maxAdults: 1,
    ratingText: 3
  }
];

const email = `test@test.com`;

const review = `I stayed here for one night and it was an unpleasant experience.`;

export {cities, rentalOffers, currentCity, email, comments, review};
