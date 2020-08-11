import axios from "axios";
import {Error} from '../const.js';

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if ((response.status === Error.UNAUTHORIZED || response.status === Error.BAD_REQUEST)
    && (response.config.url !== `/login` && response.config.url !== `/favorite`)) {
      onUnauthorized();
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
