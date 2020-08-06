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
  playersReducer,
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
  players: playersReducer,
});

export { rootReducer };
