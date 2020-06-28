import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { TabNavigator } from './TabNavigator';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Drawer" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export { DrawerNavigator };
