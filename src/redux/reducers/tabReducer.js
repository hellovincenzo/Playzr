import { SET_TAB_VISIBLE } from '~/redux/types/tabTypes';

const init = {
  routesAllowed: ['Dashboard'],
  tabBarVisible: false,
};

const tabReducer = (state = init, action) => {
  switch (action.type) {
    case SET_TAB_VISIBLE:
      return {
        ...state,
        tabBarVisible: action.tabBarVisible,
      };
    default:
      return state;
  }
};

export { tabReducer };
