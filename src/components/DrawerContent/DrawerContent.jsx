import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  Ionicons,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { Row, Column } from '~/components/common';

// ASSETS
import logo from '~/assets/logo.png';

// STYLES
import { Assets } from '~/styles';

const DrawerContent = () => {
  const drawerItems = [
    {
      component: MaterialCommunityIcons,
      name: 'location-exit',
      size: 24,
      color: 'black',
      label: 'Sign out',
      positionY: 'flex-end',
    },
  ];

  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        height: '100%',
      }}
    >
      <Row>
        <Column positionY="flex-start">
          <Image style={styles.logo} source={logo} />
        </Column>
      </Row>
      {drawerItems.map((drawerItem) => (
        <Row key={drawerItem.label}>
          <Column
            positionX={drawerItem.positionX}
            positionY={drawerItem.positionY}
          >
            <DrawerItem
              icon={() => (
                <drawerItem.component
                  name={drawerItem.name}
                  color={drawerItem.color}
                  size={drawerItem.size}
                />
              )}
              label={drawerItem.label}
            />
          </Column>
        </Row>
      ))}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    ...Assets.logo,
  },
});

export { DrawerContent };
