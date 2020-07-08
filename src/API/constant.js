const baseURL = 'https://weenplay.com/api/';
const LOGIN = 'login';
const SINGUP = 'signup';
const PASSWORD = 'resetPassword';

export const route = {
  login: `${baseURL}${LOGIN}`,
  signup: `${baseURL}${SINGUP}`,
  password: `${baseURL}${PASSWORD}`,
};
