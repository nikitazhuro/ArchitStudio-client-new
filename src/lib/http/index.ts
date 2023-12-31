import axios, { InternalAxiosRequestConfig } from 'axios';

const $host = axios.create({
  baseURL: 'http://localhost:5000/',
});

const $authHost = axios.create({
  baseURL: 'http://localhost:5000/',
});

const authInterceptor = (config: InternalAxiosRequestConfig<any>) => {
  config.headers.Authorization = `Bearer wdaw${localStorage.getItem(
    'access_token',
  )}`;

  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
