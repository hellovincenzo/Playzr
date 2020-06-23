import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Grid } from '~/styles';

const Row = ({ children, flex }) => (
  <View style={[styles.row, { flex }]}>{children}</View>
);

Row.defaultProps = {
  flex: 1,
};

const styles = StyleSheet.create({
  row: {
    ...Grid.row,
  },
});

export { Row };
