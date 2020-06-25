import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet } from 'react-native';

import { InputStyles, Typo } from '~/styles';

const Input = ({ placeholder, value, onChange, secureTextEntry }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChange}
    secureTextEntry={secureTextEntry}
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
  onChange: () => null,
  secureTextEntry: false,
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};
export { Input };
