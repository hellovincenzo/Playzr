import { combineReducers } from 'redux';
import {
  welcomeReducer,
  userReducer,
  settingsReducer,
  messageReducer,
  uiReducer,
} from './reducers';

const rootReducer = combineReducers({
  welcome: welcomeReducer,
  user: userReducer,
  settings: settingsReducer,
  message: messageReducer,
  ui: uiReducer,
});

export { rootReducer };
