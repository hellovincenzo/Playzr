import { combineReducers } from 'redux';
import {
  welcomeReducer,
  userReducer,
  settingsReducer,
  messageReducer,
  uiReducer,
  tabReducer,
  betReducer,
} from './reducers';

const rootReducer = combineReducers({
  welcome: welcomeReducer,
  user: userReducer,
  settings: settingsReducer,
  message: messageReducer,
  ui: uiReducer,
  tab: tabReducer,
  bets: betReducer,
});

export { rootReducer };
