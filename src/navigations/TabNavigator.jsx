import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StackNavigator } from './StackNavigator';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Match rapide"
        component={StackNavigator}
        options={{ tabBarVisible: false }}
      />
    </Tab.Navigator>
  );
};

export { TabNavigator };
