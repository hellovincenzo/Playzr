import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import { baseURL } from '~/API/constant';
import { Row, Column, Input, Btn } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';
import { Assets } from '~/styles';
import backgroundImage from '~/assets/background.png';

const Signup = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (email) => setEmail(email);

  const handlePassword = (password) => setPassword(password);

  const auth = (email, password) => {
    axios
      .post(`${baseURL}/login`, {
        email,
        password,
      })
      .then((response) => {
        if (response) {
          console.log(response.data);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Layout backgroundImage={backgroundImage}>
      <Row>
        <Column>
          <Input
            placeholder={t('translation:pages.login.input1')}
            value={email}
            onChange={handleEmail}
          />
          <Input
            placeholder={t('translation:pages.login.input2')}
            value={password}
            onChange={handlePassword}
            secureTextEntry
          />
        </Column>
      </Row>
      <Row>
        <Column positionY="flex-start">
          <Btn
            text={t('translation:pages.login.button2')}
            onPress={() => auth(email, password)}
            bordered
          />
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

export { Signup };
