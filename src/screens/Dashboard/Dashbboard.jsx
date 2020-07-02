import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// COMPONENTS
import { Row, Column, Btn } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';

// STYLES
import { Assets, Colors } from '~/styles';

// ASSETS
import fondplay from '~/assets/fondplay.png';
import { SIGN_OUT } from '~/redux/types/userTypes';
// API

const Dashboard = ({ navigation }) => {
  const Tab = createBottomTabNavigator();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const signOut = () => dispatch({ type: SIGN_OUT });

  return (
    <Layout backgroundImage={fondplay}>
      <Row backgroundColor={Colors.colors.primary}>
        <Column></Column>
      </Row>
      <Row flex={4}>
        <Column>
          <Btn
            text="Open Drawer"
            onPress={() => navigation.toggleDrawer()}
            bordered
          />
          <Btn text="Exit" onPress={signOut} bordered />
        </Column>
      </Row>
    </Layout>
  );
};

const styles = StyleSheet.create({
  logo: {
    ...Assets.logo,
  },
});

export { Dashboard };
