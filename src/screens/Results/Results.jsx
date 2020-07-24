import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  Feather,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { Row, Column, Heading } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';
import { ResultItems } from '~/components/ResultItems/ResultItems';

// API
import { getStats } from '~/API';

// STYLES
import { Colors } from '~/styles';

const Results = () => {
  const [stats, setStat] = useState([]);
  const { t } = useTranslation();

  const {
    user: { token },
  } = useSelector((state) => state.user);

  useEffect(() => {
    getStats(token, setStat);
  }, []);

  console.log(stats);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ResultItems
        ComponentIcon={MaterialIcons}
        iconName="compare-arrows"
        heading={t('translation:pages.results.heading1')}
        stat={stats.level}
      />
      <ResultItems
        ComponentIcon={MaterialCommunityIcons}
        iconName="medal"
        heading={t('translation:pages.results.heading2')}
        stat={stats.nbWins}
      />
      <ResultItems
        ComponentIcon={FontAwesome5}
        iconName="poo-storm"
        heading={t('translation:pages.results.heading3')}
        stat={stats.nbLoses}
      />
      <ResultItems
        ComponentIcon={Feather}
        iconName="shopping-bag"
        heading={t('translation:pages.results.heading4')}
        stat={stats.fifaRank}
      />
      <ResultItems
        ComponentIcon={SimpleLineIcons}
        iconName="arrow-up"
        heading={t('translation:pages.results.heading5')}
        stat={stats.next_level}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export { Results };
