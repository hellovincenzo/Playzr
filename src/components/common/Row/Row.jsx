import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Grid } from '~/styles';

const Row = ({ children, flex, backgroundColor, style }) => (
  <View style={[styles.row, { flex, backgroundColor }, style]}>{children}</View>
);

Row.defaultProps = {
  flex: 1,
  backgroundColor: 'transparent',
};

const styles = StyleSheet.create({
  row: {
    ...Grid.row,
  },
});

export { Row };
