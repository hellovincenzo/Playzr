import { SUCCESS_MSG, ERROR_MSG, CLEAR_MSG } from '~/redux/types/messageTypes';

const messages = {
  success: {
    title: '',
    text: '',
    isSuccessShowing: false,
  },
  error: {
    title: '',
    text: '',
    isErrorShowing: false,
  },
};

const messageReducer = (state = messages, action) => {
  switch (action.type) {
    case SUCCESS_MSG:
      return {
        ...state,
        success: {
          title: action.title,
          text: action.text,
          isSuccessShowing: true,
        },
      };

    case ERROR_MSG:
      return {
        ...state,
        error: {
          title: action.title,
          text: action.text,
          isErrorShowing: true,
        },
      };

    case CLEAR_MSG:
      return {
        ...state,
        success: {
          title: '',
          text: '',
          isSuccessShowing: false,
        },
        error: {
          title: '',
          text: '',
          isErrorShowing: false,
        },
      };

    default:
      return state;
  }
};

export { messageReducer };
