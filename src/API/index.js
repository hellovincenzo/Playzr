import axios from 'axios';

import { route } from './constant';
import { SIGN_IN } from '~/redux/types/userTypes';
import { ERROR_MSG } from '~/redux/types/messageTypes';
import { START_FETCHING, STOP_FETCHING } from '~/redux/types/uiTypes';

export const auth = (email, password, dispatch) => {
  dispatch({ type: START_FETCHING });
  axios
    .post(route.login, { email, password })
    .then((result) => {
      dispatch({ type: STOP_FETCHING });
      const { token, user_id } = result.data;

      if (token && user_id) {
        dispatch({ type: SIGN_IN, token, id: user_id });
      }
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({ type: STOP_FETCHING });

      dispatch({
        type: ERROR_MSG,
        title: 'translation:error.login.title',
        text: 'translation:error.login.text',
      });
    });
};
