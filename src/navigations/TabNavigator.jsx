import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StackNavigator } from './StackNavigator';

// REDUX TYPES
import { SET_TAB_VISIBLE } from '~/redux/types/tabTypes';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  const dispatch = useDispatch();

  const {
    user: { isSignIn },
  } = useSelector((state) => state.user);

  const {
    tab: { tabBarVisible },
  } = useSelector((state) => state);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Match rapide"
        component={StackNavigator}
        options={{ tabBarVisible }}
      />
    </Tab.Navigator>
  );
};

export { TabNavigator };
