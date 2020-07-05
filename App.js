import React, { useState } from 'react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { store } from './src/store';
import { fonts } from './src/styles/fonts';
import { AppContainer } from './src/navigations/AppContainer';

import './src/i18n';

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const fetchFonts = () => Font.loadAsync(fonts);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
