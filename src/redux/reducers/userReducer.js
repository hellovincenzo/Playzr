import { SIGN_IN, SIGN_OUT } from '~/redux/types/userTypes';

const init = {
  user: {
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

    default:
      return state;
  }
};

export { userReducer };
