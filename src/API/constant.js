const baseURL = 'https://weenplay.com/api/';
const LOGIN = 'login';
const SINGUP = 'signup';
const PASSWORD = 'resetPassword';
const GET_USER = 'getUser';
const GET_RANK = 'getRanking';

export const route = {
  login: `${baseURL}${LOGIN}`,
  signup: `${baseURL}${SINGUP}`,
  password: `${baseURL}${PASSWORD}`,
  getUser: `${baseURL}${GET_USER}`,
  getRanking: `${baseURL}${GET_RANK}`,
};
