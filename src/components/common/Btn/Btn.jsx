import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

import { BtnStyles, Typo } from '~/styles';

const Btn = ({ text, onPress, bordered, borderBottom }) => {
  let btnStyles;

  if (bordered) {
    btnStyles = styles.btnBordered;
  } else if (borderBottom) {
    btnStyles = styles.btnBorderedBottom;
  } else {
    btnStyles = styles.btn;
  }

  const btnText = bordered ? styles.textBordered : styles.text;

  return (
    <TouchableHighlight
      style={btnStyles}
      onPress={onPress}
      activeOpacity={0.6}
      underlayColor="transparent"
    >
      <Text style={btnText}>{text}</Text>
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
  btnBorderedBottom: {
    ...BtnStyles.borderBottom,
  },
  text: {
    ...Typo.textBtn,
  },
  textBordered: {
    ...Typo.textBtnBordered,
  },
});

Btn.defaultProps = {
  text: 'Press Here',
  onPress: () => null,
  bordered: false,
  borderBottom: false,
};

Btn.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  bordered: PropTypes.bool,
  borderBottom: PropTypes.bool,
};

export { Btn };
