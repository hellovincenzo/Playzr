import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import { routes } from '~/routes';

const StackNavigator = ({ navigation }) => {
  const Stack = createStackNavigator();
  const { t } = useTranslation();

  const {
    user: { isSignIn },
  } = useSelector((state) => state.user);

  const { unauthorize, authorize } = routes;
  const appRoute = isSignIn ? authorize : unauthorize;

  return (
    <Stack.Navigator>
      {appRoute.map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options(t, navigation)}
        />
      ))}
    </Stack.Navigator>
  );
};

export { StackNavigator };
