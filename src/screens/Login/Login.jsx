import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { Row, Column, Input, Btn, Heading } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';
import { ChangeLanguage } from '~/components/ChangeLanguage/ChangeLanguage';

// STYLES
import { Assets } from '~/styles';

// ASSETS
import backgroundImage from '~/assets/background.png';
import logo from '~/assets/logo.png';

// API
import { auth } from '~/API';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const {
    ui: { isLoading },
  } = useSelector((state) => state);

  const handleEmail = (eml) => setEmail(eml);
  const handlePassword = (pwd) => setPassword(pwd);

  const signIn = () => auth(email, password, dispatch);

  return (
    <Layout backgroundImage={backgroundImage}>
      <Row>
        <Column>
          <Image style={styles.logo} source={logo} />
        </Column>
      </Row>
      <Row>
        <ChangeLanguage />
        <Column>
          <Input
            placeholder={t('translation:pages.login.input1')}
            value={email}
            onChange={handleEmail}
            isLoading={isLoading}
          />
          <Input
            placeholder={t('translation:pages.login.input2')}
            value={password}
            onChange={handlePassword}
            isLoading={isLoading}
            returnKeyType="go"
            onSubmitEditing={signIn}
            secureTextEntry
          />
          <Btn
            text={t('translation:pages.login.button1')}
            onPress={() => navigation.navigate('Password')}
            borderBottom
            isLoading={isLoading}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Btn
            text={t('translation:pages.login.button2')}
            onPress={signIn}
            isLoading={isLoading}
            bordered
          />
          <Heading level={6} text={t('translation:pages.login.text1')} />
          <Btn
            text={t('translation:pages.login.button3')}
            onPress={() => navigation.navigate('Signup')}
            isLoading={isLoading}
            borderedPrimary
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
  flag: {
    ...Assets.flag,
  },
});

export { Login };
