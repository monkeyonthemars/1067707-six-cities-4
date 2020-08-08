export const AppRoute = {
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  PROPERTY: `/offer`,
  ROOT: `/`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  NO_ACCESS: `NO_ACCESS`
};

export const Error = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401
};

export const SortType = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`
};

export const uniqueCities = [
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

export const DEFAULT_CITY_INDEX = 0;

export const MAX_COUNT_COMMENTS = 10;

export const ReviewsMinMaxLength = {
  MIN_REVIEW_LENGTH: 50,
  MAX_REVIEW_LENGTH: 300,
};

export const UserRaviewRating = {
  rating1: 1,
  rating2: 2,
  rating3: 3,
  rating4: 4,
  rating5: 5,
};
