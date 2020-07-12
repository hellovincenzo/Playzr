import React from 'react';
import PropTypes, { node } from 'prop-types';
import {
  TouchableHighlight,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import { BtnStyles, Typo } from '~/styles';

const Btn = ({
  children,
  text,
  onPress,
  isLoading,
  bordered,
  borderedPrimary,
  borderBottom,
}) => {
  let btnStyles;

  if (bordered) {
    btnStyles = styles.btnBordered;
    if (isLoading) {
      btnStyles = styles.btnBorderedLoading;
    }
  } else if (borderedPrimary) {
    btnStyles = styles.btnBorderedPrimary;
  } else if (borderBottom) {
    btnStyles = styles.btnBorderedBottom;
  } else {
    btnStyles = styles.btn;
  }

  const btnText = bordered ? styles.textBordered : styles.text;
  const btnTextLoading = isLoading ? styles.textLoading : btnText;

  return (
    <TouchableHighlight
      style={btnStyles}
      onPress={onPress}
      disabled={isLoading}
      activeOpacity={0.6}
      underlayColor="transparent"
    >
      {isLoading && bordered ? (
        <ActivityIndicator />
      ) : text ? (
        <Text style={btnTextLoading}>{text}</Text>
      ) : (
        children
      )}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  btn: {
    ...BtnStyles.text,
  },
  btnBordered: {
    ...BtnStyles.bordered,
  },
  btnBorderedPrimary: {
    ...BtnStyles.borderedPrimary,
  },
  btnBorderedLoading: {
    ...BtnStyles.borderedLoading,
  },
  btnBorderedBottom: {
    ...BtnStyles.borderBottom,
  },
  text: {
    ...Typo.textBtn,
  },
  textLoading: {
    ...Typo.textBtnLoading,
  },
  textBordered: {
    ...Typo.textBtnBordered,
  },
  textBorderedPrimary: {
    ...Typo.textBtnBorderedPrimary,
  },
});

Btn.defaultProps = {
  text: '',
  onPress: () => null,
  isLoading: false,
  bordered: false,
  borderBottom: false,
};

Btn.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  isLoading: PropTypes.bool,
  bordered: PropTypes.bool,
  borderBottom: PropTypes.bool,
};

export { Btn };
