import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet } from 'react-native';

import { InputStyles, Typo } from '~/styles';

const Input = ({
  style,
  placeholder,
  value,
  onChange,
  secureTextEntry,
  isLoading,
  returnKeyType,
  type,
  onSubmitEditing,
}) => (
  <TextInput
    style={[styles.input, style]}
    placeholder={placeholder}
    value={value}
    onChangeText={onChange}
    secureTextEntry={secureTextEntry}
    editable={!isLoading}
    returnKeyType={returnKeyType}
    keyboardType={type}
    onSubmitEditing={onSubmitEditing}
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
  isLoading: false,
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  secureTextEntry: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export { Input };
