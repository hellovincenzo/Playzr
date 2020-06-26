import { combineReducers } from 'redux';
import { welcomeReducer, userReducer } from './reducers';

const rootReducer = combineReducers({
  welcome: welcomeReducer,
  user: userReducer,
});

export { rootReducer };
