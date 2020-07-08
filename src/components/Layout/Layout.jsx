import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
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
import { SuccessMessage } from '~/components/SuccessMessage/SuccessMessage';

// STYLES
import { Assets } from '~/styles';

// HELPERS
import { alertMsg } from '~/helpers';

const Layout = ({ children, backgroundImage }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.message);

  const {
    success: { isSuccessShowing, title, text },
  } = useSelector((state) => state.message);

  const Tag = backgroundImage ? ImageBackground : SafeAreaView;
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView behavior={behavior} style={styles.container}>
        <ScrollView>
          <Tag source={backgroundImage} style={styles.background}>
            {error.title
              ? alertMsg(t(error.title), t(error.text), dispatch)
              : null}
            {isSuccessShowing ? (
              <SuccessMessage title={title} text={text} />
            ) : null}
            {children}
          </Tag>
        </ScrollView>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
