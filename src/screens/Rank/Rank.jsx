import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';

// COMPONENTS
import { Row, Column, Heading } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';

// STYLES
import { Colors } from '~/styles';

// API
import { getRank } from '~/API';
import { RANKS } from './constant';

const Rank = () => {
  const [ranks, setRank] = useState([]);

  const {
    user: { token },
  } = useSelector((state) => state.user);

  useEffect(() => {
    getRank(token, setRank);
  }, []);

  return (
    <Layout>
      <Row flex={0}>
        {RANKS.header.map((head) => (
          <Column
            style={styles.header}
            key={head.text}
            cols={7}
            positionY="flex-start"
          >
            <Heading style={styles.headerText} text={head.text} />
          </Column>
        ))}
      </Row>

      {ranks.map((rank) => (
        <Row key={rank.id}>
          <Column cols={7}>
            <Heading style={styles.headerText} text={rank.id} fontType="bold" />
          </Column>
          <Column cols={7}>
            <Heading
              style={styles.headerText}
              text={rank.username}
              fontType="bold"
            />
          </Column>
          <Column cols={7}>
            <Heading
              style={styles.headerText}
              text={rank.nbMatchs}
              fontType="bold"
            />
          </Column>
          <Column cols={7}>
            <Heading
              style={styles.headerText}
              text={rank.nbWins}
              fontType="bold"
            />
          </Column>
          <Column cols={7}>
            <Heading
              style={styles.headerText}
              text={rank.nbLoses}
              fontType="bold"
            />
          </Column>
          <Column cols={7}>
            <Heading
              style={styles.headerText}
              text={rank.diffGoals}
              fontType="bold"
            />
          </Column>
          <Column cols={7}>
            <Heading
              style={styles.headerText}
              text={rank.points}
              fontType="bold"
            />
          </Column>
        </Row>
      ))}
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.colors.black,
    paddingTop: 15,
    paddingBottom: 15,
  },
  headerText: {
    color: Colors.colors.primary,
    fontSize: 12,
  },
});

export { Rank };
