import React from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { FontAwesome } from '@expo/vector-icons';

// COMPONENTS
import { Heading, Btn } from '~/components/common';

// STYLES
import { Colors } from '~/styles';

const TabBar = ({ isAllowedScreen }) => {
  const { t } = useTranslation();
  return (
    isAllowedScreen && (
      <Btn style={styles.tabBar}>
        <>
          <Heading ComponentIcon={FontAwesome} iconName="soccer-ball-o" />
          <Heading text={t('translation:tab.name1')} fontType="bold" />
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
