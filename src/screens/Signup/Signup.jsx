import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { Row, Column, Input, Btn } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';

// STYLES
import { Assets } from '~/styles';

// ASSETS
import backgroundImage from '~/assets/background.png';
import logo from '~/assets/logo.png';

// API
import { auth } from '~/API';

const Signup = ({ navigation }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (eml) => setEmail(eml);
  const handlePassword = (pwd) => setPassword(pwd);

  const signIn = () => {
    setIsLoading(!isLoading);
    auth(email, password, dispatch);
  };

  return (
    <Layout backgroundImage={backgroundImage} behave>
      <Row>
        <Column>
          <Input
            placeholder={t('translation:pages.signup.input1')}
            value={email}
            onChange={handleEmail}
          />
          <Input
            placeholder={t('translation:pages.signup.input2')}
            value={password}
            onChange={handlePassword}
            secureTextEntry
          />
          <Input
            placeholder={t('translation:pages.signup.input3')}
            value={email}
            onChange={handleEmail}
          />
          <Input
            placeholder={t('translation:pages.signup.input4')}
            value={password}
            onChange={handlePassword}
            secureTextEntry
          />
          <Input
            placeholder={t('translation:pages.signup.input5')}
            value={password}
            onChange={handlePassword}
            secureTextEntry
          />
          <Input
            placeholder={t('translation:pages.signup.input6')}
            value={password}
            onChange={handlePassword}
            secureTextEntry
          />
          <Btn
            text={t('translation:pages.signup.button1')}
            onPress={signIn}
            isLoading={isLoading}
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
