import { START_FETCHING, STOP_FETCHING } from '~/redux/types/uiTypes';

const ui = {
  isLoading: false,
};

const uiReducer = (state = ui, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isLoading: true,
      };

    case STOP_FETCHING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export { uiReducer };
