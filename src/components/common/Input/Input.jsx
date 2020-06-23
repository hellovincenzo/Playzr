import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet } from 'react-native';

import { InputStyles, Typo } from '~/styles';

const Input = ({ placeholder, value, onChangeText, ...rest }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    {...rest}
  />
);

const styles = StyleSheet.create({
  input: {
    ...InputStyles.normal,
    ...Typo.placeholderStyle,
  },
});

Input.defaultProps = {
  placeholder: '',
  value: '',
  onChangeText: () => null,
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
};
export { Input };
