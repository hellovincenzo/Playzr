import { LNG } from '~/redux/types/settingsTypes';

const defaultSettings = {
  lng: 'fr',
};

const settingsReducer = (state = defaultSettings, action) => {
  switch (action.type) {
    case LNG:
      return {
        ...state,
        lng: action.lng,
      };

    default:
      return state;
  }
};

export { settingsReducer };
