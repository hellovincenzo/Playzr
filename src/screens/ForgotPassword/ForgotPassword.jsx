import React from 'react';
import { Text } from 'react-native';

import { Row, Column } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';

const ForgotPassword = () => (
  <Layout>
    <Row>
      <Column>
        <Text>Forgot Password</Text>
      </Column>
    </Row>
  </Layout>
);

export { ForgotPassword };
