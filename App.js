import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { fonts } from './src/styles/fonts';
import { AppContainer } from './src/navigations/AppContainer';
import './src/i18n';

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const fetchFonts = async () => {
    return await Font.loadAsync(fonts);
  };

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }

  return <AppContainer />;
};

export default App;
