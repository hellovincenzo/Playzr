const baseURL = 'https://weenplay.com/api/';
const LOGIN = 'login';
const SINGUP = 'signup';
const PASSWORD = 'resetPassword';
const GET_USER = 'getUser';

export const route = {
  login: `${baseURL}${LOGIN}`,
  signup: `${baseURL}${SINGUP}`,
  password: `${baseURL}${PASSWORD}`,
  getUser: `${baseURL}${GET_USER}`,
};
