import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { FontAwesome } from '@expo/vector-icons';

// REDUX TYPE
import { TOGGLE_BET_MODAL } from '~/redux/types/modalType';

// COMPONENTS
import { Heading, Btn } from '~/components/common';
import { RotateView } from '~/components/RotateView/RotateView';

// STYLES
import { Colors } from '~/styles';

const TabBar = ({ isAllowedScreen }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    ui: { isLoading },
  } = useSelector((state) => state);

  const Tag = isLoading ? RotateView : View;

  const toggleModal = () => dispatch({ type: TOGGLE_BET_MODAL });

  return (
    isAllowedScreen && (
      <Btn style={styles.tabBar} onPress={toggleModal}>
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
