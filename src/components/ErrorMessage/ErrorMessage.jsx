import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Text, StyleSheet, Animated } from 'react-native';
import { Entypo } from '@expo/vector-icons';

// COLORS
import { Colors, Typo } from '~/styles';

// COMPONENTS
import { Row, Column } from '~/components/common';

// REDUX TYPES
import { CLEAR_MSG } from '~/redux/types/messageTypes';

const ErrorMessage = ({ title, text }) => {
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
      toValue: -135,
      duration: 700,
    }).start();
  };

  const closeMessagePopUp = () => {
    Animated.timing(translateY, {
      toValue: 100,
      duration: 700,
    }).start(() => dispatch({ type: CLEAR_MSG }));
  };

  useEffect(() => {
    openMessagePopUp();
  }, []);

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Row>
        <Column cols={2} positionX="flex-start">
          <Text style={styles.title}>{t(title)}</Text>
        </Column>
        <Column cols={2} positionX="flex-end">
          <Entypo
            name="cross"
            size={30}
            color={Colors.colors.black02}
            onPress={closeMessagePopUp}
          />
        </Column>
        <Column>
          <Text style={styles.text}>{t(text)}</Text>
        </Column>
      </Row>
    </Animated.View>
  );
};

ErrorMessage.defaultProps = {
  title: 'Title',
  text: 'Text',
};

ErrorMessage.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -150,
    backgroundColor: Colors.colors.lightgrey,
    height: 100,
    zIndex: 2,
  },
  title: {
    ...Typo.titleErrorMessage,
  },
  text: {
    ...Typo.textErrorMessage,
  },
});

export { ErrorMessage };
