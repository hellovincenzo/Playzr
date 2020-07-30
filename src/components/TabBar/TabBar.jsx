import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { FontAwesome } from '@expo/vector-icons';

// COMPONENTS
import { Heading, Btn } from '~/components/common';
import { RotateView } from '~/components/RotateView/RotateView';

// STYLES
import { Colors } from '~/styles';

// API
import { matchFinder, getMatch } from '~/API';

const TabBar = ({ isAllowedScreen }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    user: { token },
  } = useSelector((state) => state.user);

  const {
    ui: { isLoading },
  } = useSelector((state) => state);

  const { bets } = useSelector((state) => state.bets);

  const Tag = isLoading ? RotateView : View;
  const quicMatch = async () => {
    await matchFinder(token, 10, dispatch);
    await getMatch(token, 5, dispatch);
  };

  return (
    isAllowedScreen && (
      <Btn style={styles.tabBar} onPress={quicMatch}>
        <>
          <Tag>
            <Heading ComponentIcon={FontAwesome} iconName="soccer-ball-o" />
          </Tag>
          {!isLoading && (
            <Heading text={t('translation:tab.name1')} fontType="bold" />
          )}
        </>
      </Btn>
    )
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.colors.white,
    width: '100%',
    height: 80,
    marginLeft: 0,
    marginTop: 0,
  },
});

export { TabBar };
