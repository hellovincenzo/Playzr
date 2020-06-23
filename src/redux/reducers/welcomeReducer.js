import { WELCOME } from '../types/welcomeType';

const init = {
  welcome: 'Welcome',
};

const welcomeReducer = (state = init, action) => {
  switch (action.type) {
    case WELCOME:
      return {
        ...state,
        welcome: state.welcome
      };
      
  
    default:
      return state;
  }
};

export { welcomeReducer };
