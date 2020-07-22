import axios from 'axios';

import { route } from './constant';
import { SIGN_IN, GET_USER } from '~/redux/types/userTypes';
import { SUCCESS_MSG, ERROR_MSG } from '~/redux/types/messageTypes';
import { START_FETCHING, STOP_FETCHING } from '~/redux/types/uiTypes';

export const getUser = (token, id, setUser) =>
  axios
    .get(route.getUser, {
      params: { token, id },
    })
    .then((user) => setUser(user.data.user))
    .catch((error) => console.log(error));

export const getRank = (token, setRank) =>
  axios
    .get(route.getRanking, {
      params: { token },
    })
    .then((rank) => setRank(rank.data))
    .catch((error) => console.log(error));

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
  game_platform,
  game_username,
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
      game_platform,
      game_username,
      password,
      country,
    })
    .then((result) => {
      if (result) {
        dispatch({ type: STOP_FETCHING });
        dispatch({
          type: SUCCESS_MSG,
          title: 'translation:success.signup.title',
          text: 'translation:success.signup.text',
        });
      }
    })
    .catch((error) => {
      if (error) {
        dispatch({ type: STOP_FETCHING });
        dispatch({
          type: ERROR_MSG,
          title: 'translation:error.signup.title',
          text: 'translation:error.signup.text',
        });
      }
    });
};

export const resetPassowrd = (email, dispatch) => {
  dispatch({ type: START_FETCHING });
  axios
    .post(route.password, {
      email,
    })
    .then((result) => {
      if (result) {
        dispatch({ type: STOP_FETCHING });
        dispatch({
          type: SUCCESS_MSG,
          title: 'translation:success.password.title',
          text: 'translation:success.password.text',
        });
      }
    })
    .catch((error) => {
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
