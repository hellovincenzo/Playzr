import axios from 'axios';

import { route } from './constant';
import { SIGN_IN } from '~/redux/types/userTypes';

export const auth = (email, password, dispatch) =>
  axios
    .post(route.login, { email, password })
    .then((result) => {
      if (result) {
        const { token, user_id } = result.data;

        if (token && user_id) {
          dispatch({ type: SIGN_IN, token, id: user_id });
        }
      }
    })
    .catch((error) => error);
