import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

import { BtnStyles, Typo } from '~/styles';

const Btn = ({ text, onPress }) => (
  <TouchableHighlight style={styles.btn} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  btn: {
    ...BtnStyles.login,
  },
  text: {
    ...Typo.loginText,
  },
});

Btn.defaultProps = {
  text: 'Press Here',
  onPress: () => null,
};

Btn.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export { Btn };
