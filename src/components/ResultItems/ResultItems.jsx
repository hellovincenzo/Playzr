import React from 'react';
import { StyleSheet } from 'react-native';

// COMPONENTS
import { Row, Column, Heading } from '~/components/common';

// STYLES
import { Colors } from '~/styles';

const ResultItems = ({ ComponentIcon, iconName, heading, stat }) => (
  <Row style={styles.row}>
    <Column cols={2}>
      <Heading
        ComponentIcon={ComponentIcon}
        iconName={iconName}
        iconSize={55}
        color={Colors.colors.primary}
      />
    </Column>
    <Column cols={2}>
      <Heading text={heading} fontType="bold" level={5} />
      <Heading text={stat} />
    </Column>
  </Row>
);

const styles = StyleSheet.create({
  row: {
    flex: 0,
    height: '15%',
    width: '92%',
    marginTop: 20,
    backgroundColor: Colors.colors.white,
    borderRadius: 10,
    shadowColor: Colors.colors.silver,
    shadowOpacity: 0.5,
    elevation: 10,
  },
});

export { ResultItems };
