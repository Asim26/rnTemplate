import {store} from '@redux/store';
import axios, {AxiosInstance} from 'axios';
import Config from 'react-native-config';

const HTTP_CLIENT: AxiosInstance = axios.create({
  baseURL: Config.BASE_URL,
});

const initialConfig = () => {
  setupAxios();
};

const setupAxios = () => {
  HTTP_CLIENT.interceptors.request.use(
    (config: any) => {
      const {authToken} = store.getState().root.user;
      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    },
    (err: any) => {
      Promise.reject(err);
    },
  );
};

export {HTTP_CLIENT, setupAxios, initialConfig};
