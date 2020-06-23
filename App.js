import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { AppContainer } from './src/navigations/AppContainer';
import { fonts } from './src/styles/fonts';
import './src/i18n';

const App = () => {
  const fetchFonts = () => {
    return Font.loadAsync(fonts);
  };

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setFontsLoaded(true)} />
    )
  } 

  return <AppContainer />;
};

export default App;
