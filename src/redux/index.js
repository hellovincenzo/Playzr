import { combineReducers } from 'redux';
import { welcomeReducer } from './reducers';

const rootReducer = combineReducers({
  welcome: welcomeReducer,
});

export { rootReducer };
