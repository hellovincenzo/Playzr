import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Entypo } from '@expo/vector-icons';

// COMPONENTS
import { Row, Column, Heading, Btn } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';
import { OptionSection } from '~/components/OptionSection/OptionSection';
import { AddMoney } from '~/components/AddMoney/AddMoney';
import { ModalBetOptions } from '~/components/ModalBetOptions/ModalBetOptions';

// STYLES
import { Colors } from '~/styles';

// ASSETS
import fondplay from '~/assets/fondplay.png';

// API
import { getBets } from '~/API';

// CONSTANTS
import { DASHBOARD } from './constant';

const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const {
    user: { data },
  } = useSelector((state) => state.user);

  const { bets } = useSelector((state) => state.bets);

  const {
    ui: { isLoading },
  } = useSelector((state) => state);

  useEffect(() => {
    getBets(dispatch);
  }, []);

  return (
    data && (
      <Layout backgroundImage={fondplay}>
        <Row
          flex={0.3}
          backgroundColor={Colors.colors.primary}
          style={styles.userDetailsContainer}
        >
          <Column cols={2} positionX="flex-start">
            <Heading
              text={data.game_username}
              color="white"
              fontType="bold"
              ComponentIcon={Entypo}
              iconName="email"
            />
            <Heading
              text={data.country}
              color="white"
              fontType="bold"
              ComponentIcon={Entypo}
              iconName="location-pin"
            />
          </Column>
          <Column cols={2} positionX="flex-end">
            <AddMoney balance={data.balance} />
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
              onPress={() => dispatch({ type: 'STOP_FETCHING' })}
              borderedPrimary
            />
          </Column>
        </Row>
        <Row flex={0.5} style={styles.optionsContainer}>
          <OptionSection
            options={DASHBOARD.options}
            t={t}
            navigation={navigation}
            isLoading={isLoading}
          />
        </Row>
        <ModalBetOptions
          title={t('translation:modal.modalBetOptions.title1')}
          heading={t('translation:modal.modalBetOptions.heading1')}
          buttonText={t('translation:modal.modalBetOptions.button1')}
          bets={bets}
        />
      </Layout>
    )
  );
};

const styles = StyleSheet.create({
  userDetailsContainer: {
    paddingLeft: 15,
  },
  searchOppnentButton: {
    width: '98%',
    marginTop: 15,
  },
  optionsContainer: {
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: 'center',
  },
});

export { Dashboard };
