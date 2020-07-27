import { matchFinder } from '.';

const baseURL = 'https://weenplay.com/api/';
const LOGIN = 'login';
const SINGUP = 'signup';
const PASSWORD = 'resetPassword';
const MATCH_FINDER = 'matchFinder';
const GET_USER = 'getUser';
const GET_RANK = 'getRanking';
const GET_STATS = 'getStats';
const GET_BETS = 'getBets';

const route = {
  login: `${baseURL}${LOGIN}`,
  signup: `${baseURL}${SINGUP}`,
  password: `${baseURL}${PASSWORD}`,
  matchFinder: `${baseURL}${MATCH_FINDER}`,
  getUser: `${baseURL}${GET_USER}`,
  getRanking: `${baseURL}${GET_RANK}`,
  getStats: `${baseURL}${GET_STATS}`,
  getBets: `${baseURL}${GET_BETS}`,
};

export { route };
