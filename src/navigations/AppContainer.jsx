import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { SuccessMessage } from '~/components/SuccessMessage/SuccessMessage';
import { ErrorMessage } from '~/components/ErrorMessage/ErrorMessage';

import { changeLanguage } from '~/helpers';

import { AppPlayzr } from './AppPlayzr';

const AppContainer = () => {
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.message);
  const { success } = useSelector((state) => state.message);

  const {
    settings: { lng },
  } = useSelector((state) => state);

  useEffect(() => {
    changeLanguage(lng, dispatch);
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="default" />
      <AppPlayzr />
    </NavigationContainer>
  );
};

export { AppContainer };
