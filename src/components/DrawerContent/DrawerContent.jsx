import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { ChangeLanguage } from '~/components/ChangeLanguage/ChangeLanguage';

// COMPONENTS
import { Row, Column } from '~/components/common';

// ASSETS
import logo from '~/assets/logo.png';

// STYLES
import { Assets } from '~/styles';

const DrawerContent = ({ drawerItems, navigation }) => (
  <DrawerContentScrollView
    contentContainerStyle={{
      height: '100%',
    }}
  >
    <Row>
      <Column>
        <Image style={styles.logo} source={logo} />
      </Column>
    </Row>
    {drawerItems.map((drawerItem) => (
      <Row key={drawerItem.label} flex={0.5}>
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
            onPress={drawerItem.onPress}
            style={drawerItem.style}
          />
        </Column>
      </Row>
    ))}
  </DrawerContentScrollView>
);

const styles = StyleSheet.create({
  logo: {
    ...Assets.logo,
  },
});

export { DrawerContent };
