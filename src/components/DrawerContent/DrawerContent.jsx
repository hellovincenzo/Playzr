import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

// COMPONENTS
import { Row, Column } from '~/components/common';

// ASSETS
import logo from '~/assets/logo.png';

// STYLES
import { Assets } from '~/styles';

const DrawerContent = ({ drawerItems, navigation }) => (
  <DrawerContentScrollView contentContainerStyle={styles.contentContainerStyle}>
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
                style={styles.icon}
              />
            )}
            label={drawerItem.label}
            labelStyle={styles.labelStyle}
            onPress={drawerItem.onPress}
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
  contentContainerStyle: { height: '100%' },
  icon: { width: 30, height: 30 },
  labelStyle: {
    fontFamily: 'spartan-medium',
    fontSize: 16,
  },
});

export { DrawerContent };
