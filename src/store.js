import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import { createStore, compose } from 'redux';
import { rootReducer } from './redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, composeEnhancers());
const persistor = persistStore(store);

export { store, persistor };
