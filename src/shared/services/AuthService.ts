import {HTTP_CLIENT} from '@utils/config';
import {ENDPOINTS} from '@utils/endpoints';

export const loginUser = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
};
