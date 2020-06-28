import React from 'react';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StackNavigator } from './StackNavigator';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  const {
    user: { isSignIn },
  } = useSelector((state) => state.user);

  const TabNav = (
    <Tab.Navigator>
      <Tab.Screen name="AppScreen" component={StackNavigator} />
    </Tab.Navigator>
  );

  const StackNav = <StackNavigator />;

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AppScreen"
        component={StackNavigator}
        options={{ tabBarVisible: false }}
      />
    </Tab.Navigator>
  );
};

export { TabNavigator };
