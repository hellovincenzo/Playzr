import React from 'react';
import { useDispatch } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { TabNavigator } from './TabNavigator';

import { DrawerContent } from '~/components/DrawerContent/DrawerContent';

import { drawerItems } from './drawerConstant';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  const dispatch = useDispatch();

  const newDrawerItems = drawerItems(dispatch);

  return (
    <Drawer.Navigator
      drawerContent={({ navigation }) => (
        <DrawerContent
          drawerItems={drawerItems(dispatch, navigation)}
          navigation={navigation}
        />
      )}
    >
      <Drawer.Screen name="Drawer" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export { DrawerNavigator };
