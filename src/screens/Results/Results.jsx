import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// COMPONENTS
import { Row, Column, Heading } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';

// API
import { getStats } from '~/API';

// STYLES
import { Colors } from '~/styles';

const Results = () => {
  const [stats, setStat] = useState([]);

  const {
    user: { token },
  } = useSelector((state) => state.user);

  useEffect(() => {
    getStats(token, setStat);
  }, []);

  console.log(stats);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Row style={styles.row}>
        <Column cols={2} style={styles.column}>
          <Heading
            ComponentIcon={MaterialIcons}
            iconName="compare-arrows"
            iconSize={95}
            color={Colors.colors.primary}
          />
        </Column>
        <Column cols={2} style={styles.column}>
          <Heading text="Niveau" fontType="bold" level={3} />
          <Heading text={stats.level} />
        </Column>
      </Row>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    flex: 0,
    height: '20%',
    width: '92%',
    marginTop: 20,
    backgroundColor: Colors.colors.white,
    borderRadius: 10,
    shadowColor: Colors.colors.silver,
    shadowOpacity: 0.5,
    elevation: 10,
  },
  column: {},
});

export { Results };
