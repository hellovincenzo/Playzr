import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { DismissKeyboard } from '~/components/common';

import { Assets } from '~/styles';

const Layout = ({ children, backgroundImage }) => {
  const Tag = backgroundImage ? ImageBackground : SafeAreaView;
  const behavior = Platform.OS == 'ios' ? 'padding' : 'height';

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView behavior={null} style={styles.container}>
        <Tag source={backgroundImage} style={styles.background}>
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
