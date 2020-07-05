import { combineReducers } from 'redux';
import { welcomeReducer, userReducer, settingsReducer } from './reducers';

const rootReducer = combineReducers({
  welcome: welcomeReducer,
  user: userReducer,
  settings: settingsReducer,
});

export { rootReducer };
