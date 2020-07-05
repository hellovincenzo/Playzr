import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { Row, Column, Input, Btn } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';

// STYLES
import { Assets } from '~/styles';

// ASSETS
import backgroundImage from '~/assets/background.png';

// API

const Password = ({ navigation }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (eml) => setEmail(eml);
  const handlePassword = (pwd) => setPassword(pwd);

  return (
    <Layout backgroundImage={backgroundImage} behave>
      <Row>
        <Column>
          <Input
            placeholder={t('translation:pages.password.input1')}
            value={email}
            onChange={handleEmail}
          />
          <Input
            placeholder={t('translation:pages.password.input2')}
            value={email}
            onChange={handleEmail}
          />
          <Btn
            text={t('translation:pages.password.button1')}
            onPress={null}
            isLoading={isLoading}
            bordered
          />
        </Column>
      </Row>
    </Layout>
  );
};

export { Password };
