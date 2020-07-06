import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

// COMPONENTS
import { DismissKeyboard } from '~/components/common';

// STYLES
import { Assets } from '~/styles';

// HELPERS
import { alertMsg } from '~/helpers';

const Layout = ({ children, backgroundImage, behave }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const {
    error: { title, text },
  } = useSelector((state) => state.message);

  const Tag = backgroundImage ? ImageBackground : SafeAreaView;
  const behavior = Platform.OS == 'ios' ? 'padding' : 'height';

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView
        behavior={behave ? behavior : null}
        style={styles.container}
      >
        <Tag source={backgroundImage} style={styles.background}>
          {title ? alertMsg(t(title), t(text), dispatch) : null}
          {!backgroundImage ? (
            children
          ) : (
            <SafeAreaView style={styles.container}>{children}</SafeAreaView>
          )}
        </Tag>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  background: {
    ...Assets.background,
  },
  container: {
    flex: 1,
  },
});

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
