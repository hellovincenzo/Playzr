import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  View,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';

import { SuccessMessage } from '~/components/SuccessMessage/SuccessMessage';
import { ErrorMessage } from '~/components/ErrorMessage/ErrorMessage';

// COMPONENTS
import { DismissKeyboard } from '~/components/common';

// REDUX TYPES
import { CLEAR_MSG } from '~/redux/types/messageTypes';

// STYLES
import { Assets } from '~/styles';

const Layout = ({ children, backgroundImage }) => {
  const dispatch = useDispatch();

  const Tag = backgroundImage ? ImageBackground : SafeAreaView;
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

  const { error } = useSelector((state) => state.message);
  const { success } = useSelector((state) => state.message);
  useEffect(() => {
    dispatch({ type: CLEAR_MSG });
  }, []);

  console.log();
  return (
    <DismissKeyboard>
      <KeyboardAvoidingView behavior={behavior} style={styles.container}>
        {success.isSuccessShowing ? (
          <SuccessMessage title={success.title} text={success.text} />
        ) : null}
        <ScrollView>
          <Tag source={backgroundImage} style={styles.background}>
            <View style={styles.container}>{children}</View>
          </Tag>
        </ScrollView>
        {error.isErrorShowing ? (
          <ErrorMessage title={error.title} text={error.text} />
        ) : null}
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  background: {
    ...Assets.background,
    width: Math.round(Dimensions.get('window').width),
    height: Math.round(Dimensions.get('window').height),
  },
  container: {
    flex: 1,
    position: 'relative',
  },
});

export { Layout };
