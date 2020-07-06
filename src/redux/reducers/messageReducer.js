import { SUCCESS_MSG, ERROR_MSG, CLEAR_MSG } from '~/redux/types/messageTypes';

const messages = {
  success: {
    title: '',
    text: '',
  },
  error: {
    title: '',
    text: '',
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
        },
      };

    case ERROR_MSG:
      return {
        ...state,
        error: {
          title: action.title,
          text: action.text,
        },
      };

    case CLEAR_MSG:
      return {
        ...state,
        success: {
          title: '',
          text: '',
        },
        error: {
          title: '',
          text: '',
        },
      };

    default:
      return state;
  }
};

export { messageReducer };
