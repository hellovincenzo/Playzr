import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { TabNavigator } from './TabNavigator';

import { DrawerContent } from '~/components/DrawerContent/DrawerContent';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Drawer" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export { DrawerNavigator };
