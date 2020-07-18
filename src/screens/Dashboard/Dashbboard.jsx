import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Entypo } from '@expo/vector-icons';

// COMPONENTS
import { Row, Column, Heading, Btn } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';
import { OptionSection } from '~/components/OptionSection/OptionSection';

// STYLES
import { Colors } from '~/styles';

// ASSETS
import fondplay from '~/assets/fondplay.png';

// API
import { getUser } from '~/API';

// CONSTANTS
import { DASHBOARD } from './constant';

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { user } = useSelector((state) => state.user);

  const {
    user: { token, id },
  } = useSelector((state) => state.user);

  useEffect(() => {
    getUser(token, id, setUserData);
  }, []);

  return (
    <Layout backgroundImage={fondplay}>
      <Row
        flex={0.3}
        backgroundColor={Colors.colors.primary}
        style={styles.userDetailsContainer}
      >
        <Column cols={2} positionX="flex-start">
          <Heading
            text={userData.game_username}
            color="white"
            fontType="bold"
            ComponentIcon={Entypo}
            iconName="email"
          />
          <Heading
            text={userData.country}
            color="white"
            fontType="bold"
            ComponentIcon={Entypo}
            iconName="location-pin"
          />
        </Column>
        <Column cols={2} positionX="flex-end">
          <Btn
            style={styles.addMoneyButton}
            text={`${userData.balance}€`}
            textColor={Colors.colors.primary}
            font="bold"
            borderedWhite
          />
        </Column>
      </Row>
      <Row flex={0} style={styles.optionsContainer}>
        <Column positionY="flex-start">
          <Btn
            style={styles.searchOppnentButton}
            text={t('translation:pages.dashboard.button1')}
            textColor={Colors.colors.white}
            font="bold"
            fontSize={23}
            borderedPrimary
          />
        </Column>
      </Row>
      <Row style={styles.optionsContainer}>
        <OptionSection options={DASHBOARD.options} t={t} />
      </Row>
    </Layout>
  );
};

const styles = StyleSheet.create({
  userDetailsContainer: {
    paddingLeft: 15,
  },
  optionsContainer: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  addMoneyButton: {
    margin: 0,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  searchOppnentButton: {
    width: '98%',
    marginTop: 25,
  },
});

export { Dashboard };
