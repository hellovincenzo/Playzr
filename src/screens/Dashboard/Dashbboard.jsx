import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { Row, Column, Btn } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';

// STYLES
import { Colors } from '~/styles';

// ASSETS
import fondplay from '~/assets/fondplay.png';
import { SIGN_OUT } from '~/redux/types/userTypes';

// API
import { getUser } from '~/API';

const Dashboard = ({ navigation }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const {
    user: { token, id },
  } = useSelector((state) => state.user);

  const store = useSelector((state) => state);

  useEffect(() => {
    getUser(token, id, dispatch);
  }, []);

  return (
    <Layout backgroundImage={fondplay}>
      <Row backgroundColor={Colors.colors.primary}>
        <Column>
          <Text>{store.user.data && store.user.data.firstname}</Text>
        </Column>
      </Row>
      <Row flex={4}>
        <Column>
          <Btn
            text="Exit"
            onPress={() => dispatch({ type: SIGN_OUT })}
            bordered
          />
        </Column>
      </Row>
    </Layout>
  );
};

export { Dashboard };
