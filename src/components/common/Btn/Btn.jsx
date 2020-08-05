import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

// STYLES
import { BtnStyles, Typo } from '~/styles';

const Btn = ({
  children,
  text,
  textColor,
  font,
  fontSize,
  onPress,
  isLoading,
  bordered,
  borderedPrimary,
  borderedWhite,
  borderBottom,
  style,
}) => {
  let btnStyles;

  if (bordered) {
    btnStyles = styles.btnBordered;
    if (isLoading) {
      btnStyles = styles.btnBorderedLoading;
    }
  } else if (borderedPrimary) {
    btnStyles = styles.btnBorderedPrimary;
    if (isLoading) {
      btnStyles = styles.btnBorderedPrimaryLoading;
    }
  } else if (borderedWhite) {
    btnStyles = styles.btnBorderedWhite;
  } else if (borderBottom) {
    btnStyles = styles.btnBorderedBottom;
  } else {
    btnStyles = styles.btn;
  }

  const fontFamily = () => {
    switch (font) {
      case 'bold':
        return 'spartan-bold';
      case 'medium':
        return 'spartan-medium';
      case 'regular':
        return 'spartan-regular';

      default:
        return null;
    }
  };

  const btnText = bordered ? styles.textBordered : styles.text;
  const btnTextLoading = isLoading ? styles.textLoading : btnText;

  return (
    <TouchableHighlight
      style={[btnStyles, style]}
      onPress={onPress}
      disabled={isLoading}
      activeOpacity={0.6}
      underlayColor="transparent"
    >
      {isLoading && bordered ? (
        <ActivityIndicator />
      ) : text ? (
        <Text
          style={[
            btnTextLoading,
            textColor && {
              color: textColor,
              fontFamily: fontFamily(),
              fontSize,
            },
          ]}
        >
          {text}
        </Text>
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
  btnBorderedPrimaryLoading: {
    ...BtnStyles.borderedPrimaryLoading,
  },
  btnBorderedWhite: {
    ...BtnStyles.borderedWhite,
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
