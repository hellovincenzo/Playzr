import axios from 'axios';

import { route } from './constant';

import { GET_BET } from '~/redux/types/getBetType';
import { GET_PLAYER } from '~/redux/types/playersType';
import { SIGN_IN, GET_USER } from '~/redux/types/userTypes';
import { SUCCESS_MSG, ERROR_MSG } from '~/redux/types/messageTypes';
import { START_FETCHING, STOP_FETCHING } from '~/redux/types/uiTypes';

export const getUser = (token, id, dispatch) =>
  axios
    .get(route.getUser, {
      params: { token, id },
    })
    .then((user) => dispatch({ type: GET_USER, user }))
    .catch((error) => console.log(error));

export const getRank = (token, setRank) =>
  axios
    .get(route.getRanking, {
      params: { token },
    })
    .then((rank) => setRank(rank.data))
    .catch((error) => console.log(error));

export const getStats = (token, setStat) =>
  axios
    .get(route.getStats, {
      params: { token },
    })
    .then((stat) => setStat(stat.data))
    .catch((error) => console.log(error));

export const getBets = (dispatch) =>
  axios
    .get(route.getBets)
    .then((bets) => dispatch({ type: GET_BET, bets }))
    .catch((error) => console.log(error));

export const getMatch = (token, n, dispatch) => {
  dispatch({ type: START_FETCHING });
  axios
    .get(route.getMatch, {
      params: {
        token,
      },
    })
    .then((players) => {
      dispatch({ type: GET_PLAYER, players });
      dispatch({ type: STOP_FETCHING });
    })
    .catch((err) => {
      if (n === 0) {
        return dispatch({ type: STOP_FETCHING });
      }
      getMatch(token, n - 1, dispatch);
    });
};

export const auth = (email, password, dispatch) => {
  dispatch({ type: START_FETCHING });
  axios
    .post(route.login, { email, password })
    .then((result) => {
      const { token, user_id } = result.data;

      if (token && user_id) {
        getUser(token, user_id, dispatch);
        dispatch({ type: SIGN_IN, token, id: user_id });
        dispatch({ type: STOP_FETCHING });
      }
    })
    .catch((error) => {
      console.log(error.message);
      const err = {};

      if (error) {
        if (!email || !password) err.firstname = 'translation:error.login.text';

        dispatch({ type: STOP_FETCHING });
        dispatch({
          type: ERROR_MSG,
          title: 'translation:error.login.title',
          text: Object.keys(err).map((erreur) => err[erreur]),
        });
      }
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
      const err = {};

      if (error) {
        if (!firstname) err.firstname = 'translation:error.signup.input1';
        if (!lastname) err.lastname = 'translation:error.signup.input2';
        if (!email) err.email = 'translation:error.signup.input3';
        if (!game_platform)
          err.game_platform = 'translation:error.signup.input4';
        if (!game_username)
          err.game_username = 'translation:error.signup.input5';
        if (!password || password.length !== 6)
          err.password = 'translation:error.signup.input6';
        if (!country) err.country = 'translation:error.signup.input7';

        dispatch({ type: STOP_FETCHING });
        dispatch({
          type: ERROR_MSG,
          title: 'translation:error.signup.title',
          text: Object.keys(err).map((erreur) => err[erreur]),
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

export const matchFinder = (token, bet, dispatch) => {
  dispatch({ type: START_FETCHING });
  axios
    .post(route.matchFinder, {
      token,
      bet,
    })
    .then((res) => {
      if (res.data) {
        console.log(res.data);
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: STOP_FETCHING });
    });
};
