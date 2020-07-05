import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { changeLanguage } from '~/helpers';
import { AppPlayzr } from './AppPlayzr';

const AppContainer = () => {
  const dispatch = useDispatch();

  const {
    settings: { lng },
  } = useSelector((state) => state);

  useEffect(() => {
    changeLanguage(lng, dispatch);
  }, []);

  return (
    <NavigationContainer>
      <AppPlayzr />
    </NavigationContainer>
  );
};

export { AppContainer };
