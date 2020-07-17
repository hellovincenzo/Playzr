import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';

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

  useEffect(() => {
    dispatch({ type: CLEAR_MSG });
  }, []);

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView behavior={behavior} style={styles.container}>
        <ScrollView>
          <Tag source={backgroundImage} style={styles.background}>
            {children}
          </Tag>
        </ScrollView>
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
  },
});

export { Layout };
