import { SIGN_IN, SIGN_OUT, GET_USER } from '~/redux/types/userTypes';

const init = {
  user: {
    data: {},
    isSignIn: false,
    token: '',
    id: '',
  },
};

const userReducer = (state = init, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: {
          isSignIn: true,
          token: action.token,
          id: action.id,
        },
      };

    case SIGN_OUT:
      return {
        ...state,
        user: {
          isSignIn: false,
          token: '',
          id: '',
        },
      };

    case GET_USER:
      return {
        ...state,
        data: action.user,
      };

    default:
      return state;
  }
};

export { userReducer };
