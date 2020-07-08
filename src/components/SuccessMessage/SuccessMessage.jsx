import React, { useState, useEffect } from 'react';
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

const SuccessMessage = ({ title, text }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const [translateY, setTranslateY] = useState(new Animated.Value(-100));

  const animatedStyles = {
    transform: [
      {
        translateY,
      },
    ],
  };

  const showModal = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 700,
    }).start();
  };

  const closeModal = () => {
    dispatch({ type: CLEAR_MSG });
    Animated.timing(translateY, {
      toValue: -100,
      duration: 700,
    }).start();
  };

  useEffect(() => {
    showModal();
  }, [translateY]);

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Row>
        <Column cols={2} positionX={'flex-start'}>
          <Text style={styles.title}>{t(title)}</Text>
        </Column>
        <Column cols={2} positionX={'flex-end'}>
          <Entypo
            name="cross"
            size={30}
            color={Colors.colors.white}
            onPress={closeModal}
          />
        </Column>
        <Column>
          <Text style={styles.text}>{t(text)}</Text>
        </Column>
      </Row>
    </Animated.View>
  );
};

SuccessMessage.defaultProps = {
  title: 'Title',
  text: 'Text',
};

SuccessMessage.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: Colors.colors.green,
    height: 100,
    zIndex: 2,
  },
  title: {
    ...Typo.titleSuccessMessage,
  },
  text: {
    ...Typo.textSuccessMessage,
  },
});

export { SuccessMessage };
