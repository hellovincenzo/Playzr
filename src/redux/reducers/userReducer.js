import { SIGN_IN, SIGN_OUT, ERROR_CONNECTION } from '~/redux/types/userTypes';

const init = {
  user: {
    isSignIn: false,
    token: '',
    id: '',
  },
  error: {
    title: '',
    msg: '',
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

    case ERROR_CONNECTION:
      return {
        ...state,
        error: {
          title: action.title,
          msg: action.msg,
        },
      };

    default:
      return state;
  }
};

export { userReducer };
