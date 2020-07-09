import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { Row, Column, Input, Btn } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';

// ASSETS
import backgroundImage from '~/assets/background.png';

// API
import { resetPassowrd } from '~/API';

const Password = () => {
  const { t } = useTranslation();

  const {
    ui: { isLoading },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  const handleEmail = (eml) => setEmail(eml);

  const requestNewPassword = () => resetPassowrd(email, dispatch);

  return (
    <Layout backgroundImage={backgroundImage} behave>
      <Row>
        <Column>
          <Input
            placeholder={t('translation:pages.password.input1')}
            value={email}
            onSubmitEditing={requestNewPassword}
            onChange={handleEmail}
          />
          <Btn
            text={t('translation:pages.password.button1')}
            onPress={requestNewPassword}
            isLoading={isLoading}
            bordered
          />
        </Column>
      </Row>
    </Layout>
  );
};

export { Password };
