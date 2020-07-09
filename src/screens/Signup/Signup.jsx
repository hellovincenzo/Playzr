import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { Row, Column, Input, Btn } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';

// STYLES
import { Assets } from '~/styles';

// ASSETS
import backgroundImage from '~/assets/background.png';

// API
import { signup } from '~/API';

// SIGNUP CONSTANT
import { SIGNUP } from './constant';

const Signup = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gamePlatform: '',
    username: '',
    password: '',
    country: '',
  });

  const {
    ui: { isLoading },
  } = useSelector((state) => state);

  const {
    success: { isSuccessShowing },
  } = useSelector((state) => state.message);

  const createAccount = () => {
    const {
      firstName,
      lastName,
      email,
      gamePlatform,
      userName,
      password,
      country,
    } = inputs;

    signup(
      firstName,
      lastName,
      email,
      gamePlatform,
      userName,
      password,
      country,
      dispatch
    );
  };

  return (
    <Layout backgroundImage={backgroundImage} behave>
      <Row>
        <Column>
          {SIGNUP.forms(inputs, setInputs).map((form) => {
            const {
              placeholder,
              value,
              setInput,
              onSubmitEditing,
              secureTextEntry,
            } = form;
            return (
              <Input
                key={placeholder}
                placeholder={t(placeholder)}
                value={value}
                onChange={setInput}
                onSubmitEditing={onSubmitEditing}
                secureTextEntry={secureTextEntry}
                isLoading={isLoading || isSuccessShowing}
              />
            );
          })}
          <Btn
            text={t('translation:pages.signup.button1')}
            onPress={createAccount}
            isLoading={isLoading}
            bordered
          />
        </Column>
      </Row>
    </Layout>
  );
};

export { Signup };
