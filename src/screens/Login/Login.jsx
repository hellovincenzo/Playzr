import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Image, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import { Row, Column, Input, Btn } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';
import { Assets } from '~/styles';
import backgroundImage from '~/assets/background.png';
import logo from '~/assets/logo.png';

const Login = () => {
  const { welcome } = useSelector((state) => state.welcome);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { t } = useTranslation();

  return (
    <Layout backgroundImage={backgroundImage}>
      <Row>
        <Column>
          <Image style={styles.logo} source={logo} />
        </Column>
      </Row>
      <Row>
        <Column>
          <Input
            placeholder={t('translation:pages.login.input1')}
            value={login}
            onChangeText={(value) => setLogin(value)}
          />
          <Input
            placeholder={t('translation:pages.login.input2')}
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry
          />
        </Column>
      </Row>
      <Row>
        <Column positionY="flex-start">
          <Btn text={t('translation:pages.login.button')} />
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

export { Login };
