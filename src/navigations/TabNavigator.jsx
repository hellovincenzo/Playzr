import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigator } from './StackNavigator';

// COMPONENTS
import { TabBar } from '~/components/TabBar/TabBar';

const TabNavigator = () => {
  const [tabBarVisible, setTabBarVisible] = useState(false);

  const Tab = createBottomTabNavigator();

  const {
    tab: { routesAllowed },
  } = useSelector((state) => state);

  const screenOptions = ({ route }) => {
    if (route && route.state) {
      const { routes } = route.state;
      const last = routes ? routes[routes.length - 1] : null;
      setTabBarVisible(routesAllowed.includes(last.name));
    }
  };

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={() => <TabBar isAllowedScreen={tabBarVisible} />}
    >
      <Tab.Screen
        name="Quick match"
        component={StackNavigator}
        options={{
          tabBarVisible,
        }}
      />
    </Tab.Navigator>
  );
};

export { TabNavigator };
