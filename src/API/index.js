import axios from 'axios';

import { route } from './constant';
import { SIGN_IN } from '~/redux/types/userTypes';
import { SUCCESS_MSG, ERROR_MSG } from '~/redux/types/messageTypes';
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

export const signup = (
  firstname,
  lastname,
  email,
  platform,
  username,
  password,
  country,
  dispatch
) => {
  dispatch({ type: START_FETCHING });
  axios
    .post(route.signup, {
      firstname,
      lastname,
      email,
      platform,
      username,
      password,
      country,
    })
    .then((result) => dispatch({ type: STOP_FETCHING }))
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

export const resetPassowrd = (email, dispatch) => {
  dispatch({ type: START_FETCHING });
  axios
    .post(route.password, {
      email,
    })
    .then((result) => {
      console.log(result);
      dispatch({ type: STOP_FETCHING });
      dispatch({
        type: SUCCESS_MSG,
        title: 'translation:success.password.title',
        text: 'translation:success.password.text',
      });
    })
    .catch((error) => {
      console.log(error.message);
      if (error) {
        dispatch({ type: STOP_FETCHING });
        dispatch({
          type: ERROR_MSG,
          title: 'translation:error.password.title',
          text: 'translation:error.password.text',
        });
      }
    });
};
