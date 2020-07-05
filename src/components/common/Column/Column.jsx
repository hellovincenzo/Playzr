import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Grid } from '~/styles';

const Column = ({ children, cols, positionY, positionX }) => {
  const grid_cols = {
    flexBasis: 100 / cols + '%',
  };

  return (
    <View
      style={[
        styles.column,
        grid_cols,
        { justifyContent: positionY, alignItems: positionX },
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    ...Grid.column,
    // borderWidth: 1,
    // borderColor: 'red',
  },
});

Column.defaultProps = {
  cols: 1,
  positionY: 'center',
  positionX: 'center',
};
export { Column };
