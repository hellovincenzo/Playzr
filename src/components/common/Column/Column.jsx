import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Grid } from '~/styles';

const Column = ({ children, cols, positionY, positionX, height, style }) => {
  const gridCols = {
    flexBasis: `${100 / cols}%`,
  };

  return (
    <View
      style={[
        styles.column,
        gridCols,
        { justifyContent: positionY, alignItems: positionX, height },
        style,
      ]}
    >
      {children}
    </View>
  );
};
Column.defaultProps = {
  cols: 1,
  positionY: 'center',
  positionX: 'center',
  height: '100%',
};

const styles = StyleSheet.create({
  column: {
    ...Grid.column,
  },
});

export { Column };
