import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { Row, Column, Heading } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';

// STYLES
import { Colors } from '~/styles';

// API
import { getUser } from '~/API';

const Account = ({ navigation }) => {
  const [userData, setUserData] = useState({});

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const {
    user: { token, id },
  } = useSelector((state) => state.user);

  useEffect(() => {
    getUser(token, id, setUserData);
  }, []);

  console.log(userData);
  return (
    <Layout>
      <Row>
        <Column positionY="flex-start" style={styles.column}>
          <Heading
            style={styles.infoHeading}
            text={t('translation:pages.account.heading1')}
            fontType="bold"
          />
          <Heading text={t('translation:pages.account.text1')} />
        </Column>
      </Row>
      <Row flex={0.3}>
        <Column
          positionY="flex-start"
          positionX="flex-start"
          style={styles.column}
        >
          <Heading
            style={styles.infoHeading}
            text={t('translation:pages.account.heading2')}
            fontType="bold"
          />
        </Column>
      </Row>
      <Row flex={0.3}>
        <Column
          positionY="flex-start"
          positionX="flex-start"
          style={styles.column}
        >
          <Heading
            text={t('translation:pages.account.subheading1')}
            fontType="medium"
          />
          <Heading text={userData.firstname} color={Colors.colors.silver} />
        </Column>
      </Row>
      <Row flex={0.3}>
        <Column
          positionY="flex-start"
          positionX="flex-start"
          style={styles.column}
        >
          <Heading
            text={t('translation:pages.account.subheading2')}
            fontType="medium"
          />
          <Heading text={userData.lastname} color={Colors.colors.silver} />
        </Column>
      </Row>
      <Row flex={0.3}>
        <Column
          positionY="flex-start"
          positionX="flex-start"
          style={styles.column}
        >
          <Heading
            text={t('translation:pages.account.subheading3')}
            fontType="medium"
          />
          <Heading text={userData.email} color={Colors.colors.silver} />
        </Column>
      </Row>
      <Row>
        <Column
          positionY="flex-start"
          positionX="flex-start"
          style={styles.column}
        >
          <Heading
            text={t('translation:pages.account.subheading5')}
            fontType="medium"
          />
          <Heading text={userData.country} color={Colors.colors.silver} />
        </Column>
      </Row>
    </Layout>
  );
};

const styles = StyleSheet.create({
  infoHeading: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  column: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export { Account };
