import { combineReducers } from 'redux';
import {
  welcomeReducer,
  userReducer,
  settingsReducer,
  messageReducer,
  uiReducer,
  tabReducer,
  betReducer,
  modalReducer,
} from './reducers';

const rootReducer = combineReducers({
  welcome: welcomeReducer,
  user: userReducer,
  settings: settingsReducer,
  message: messageReducer,
  ui: uiReducer,
  tab: tabReducer,
  bets: betReducer,
  modal: modalReducer,
});

export { rootReducer };
