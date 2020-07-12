import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Column, Btn } from '~/components/common';

// STYLES
import { Assets } from '~/styles';
// ASSETS
import frenchFlag from '~/assets/france.png';
import englishFlag from '~/assets/united-kingdom.png';

// HELPERS
import { changeLanguage } from '~/helpers';

const ChangeLanguage = () => {
  const dispatch = useDispatch();
  const {
    settings: { lng },
  } = useSelector((state) => state);

  const imageStylesFr = lng === 'fr' ? styles.flag : styles.flagInactive;
  const imageStylesEn = lng === 'en' ? styles.flag : styles.flagInactive;
  return (
    <>
      <Column cols={2} positionX="flex-end" positionY="flex-end">
        <Btn onPress={() => changeLanguage('fr', dispatch)}>
          <Image style={imageStylesFr} source={frenchFlag} />
        </Btn>
      </Column>
      <Column cols={2} positionX="flex-start">
        <Btn onPress={() => changeLanguage('en', dispatch)}>
          <Image style={imageStylesEn} source={englishFlag} />
        </Btn>
      </Column>
    </>
  );
};

const styles = StyleSheet.create({
  flag: {
    ...Assets.flag,
  },
  flagInactive: {
    ...Assets.flag,
    opacity: 0.2,
  },
});

export { ChangeLanguage };
