import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, StyleSheet, AsyncStorage } from 'react-native';
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { Row, Column, Btn } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';

// STYLES
import { Assets } from '~/styles';

// ASSETS
import backgroundImage from '~/assets/background.png';
import { removeData } from '~/helpers';
// API

const Dashboard = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <Layout backgroundImage={backgroundImage}>
      <Row>
        <Column positionY="flex-start">
          <Btn text="Disconnect" onPress={() => removeData('userToken')} />
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
