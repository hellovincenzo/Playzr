import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Text, StyleSheet, Animated } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

// COLORS
import { Colors, Typo } from '~/styles';

// COMPONENTS
import { Row, Column, Heading } from '~/components/common';

// REDUX TYPES
import { CLEAR_MSG } from '~/redux/types/messageTypes';

const ErrorMessage = ({ title, texts }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const translateY = useRef(new Animated.Value(-100)).current;

  const animatedStyles = {
    transform: [
      {
        translateY,
      },
    ],
  };

  const openMessagePopUp = () => {
    Animated.timing(translateY, {
      toValue: -150,
      duration: 700,
    }).start();
  };

  const closeMessagePopUp = () => {
    Animated.timing(translateY, {
      toValue: 100,
      duration: 700,
      useNativeDriver: true,
    }).start(() => dispatch({ type: CLEAR_MSG }));
  };

  useEffect(() => openMessagePopUp(), []);

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Row>
        <Column style={styles.clmnTitle} cols={2} positionX="flex-start">
          <Text style={styles.title}>{t(title)}</Text>
        </Column>
        <Column style={styles.clmnTitle} cols={2} positionX="flex-end">
          <Entypo
            name="cross"
            size={30}
            color={Colors.colors.black02}
            onPress={closeMessagePopUp}
          />
        </Column>
        <Column style={styles.clmnText}>
          {texts.map((text) => (
            <Row key={text}>
              <Column style={{ flexBasis: '10%' }} cols={2}>
                <MaterialIcons
                  name="error-outline"
                  color={Colors.colors.primary}
                  size={30}
                />
              </Column>
              <Column
                style={{ flexBasis: '90%' }}
                cols={2}
                positionX="flex-start"
              >
                <Heading text={t(text)} />
              </Column>
            </Row>
          ))}
        </Column>
      </Row>
    </Animated.View>
  );
};

ErrorMessage.defaultProps = {
  title: 'Title',
  texts: [],
};

ErrorMessage.propTypes = {
  title: PropTypes.string,
  texts: PropTypes.array,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -150,
    backgroundColor: Colors.colors.lightgrey,
    height: 300,
    zIndex: 2,
  },
  clmnTitle: {
    height: 50,
  },
  clmnText: {
    height: 250,
  },
  title: {
    ...Typo.titleErrorMessage,
  },
  text: {
    ...Typo.textErrorMessage,
  },
});

export { ErrorMessage };
