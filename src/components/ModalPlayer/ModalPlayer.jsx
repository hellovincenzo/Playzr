import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { EvilIcons } from '@expo/vector-icons';

// REDUX TYPE
import { TOGGLE_PLAYER_MODAL } from '~/redux/types/modalType';
import { CLEAR_PLAYER } from '~/redux/types/playersType';

// COMPONENTS
import { Layout } from '~/components/Layout/Layout';
import { Row, Column, Heading, Btn } from '~/components/common';

// API
import { getUserCountryFlag } from '~/API';

// HELPERS
import { alertMsg } from '~/helpers';

// STYLES
import { Colors } from '~/styles';

const ModalPlayer = ({ title, heading, buttonText, bets }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const {
    modal: { isModalPayerVisible },
  } = useSelector((state) => state);

  const {
    players: {
      players: { player1, player2 },
    },
  } = useSelector((state) => state);

  const toggleModal = () => {
    dispatch({ type: TOGGLE_PLAYER_MODAL });
    dispatch({ type: CLEAR_PLAYER });
  };

  return isModalPayerVisible ? (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isModalPayerVisible}
      onRequestClose={() => {
        alert('Modal has been closed.');
      }}
    >
      <Layout>
        <Row flex={0.2}>
          <Column positionX="flex-end">
            <EvilIcons
              name="close"
              size={35}
              color={Colors.colors.black02}
              onPress={toggleModal}
            />
          </Column>
        </Row>
        <Row>
          <Column height="50%">
            <Image
              style={styles.userImage}
              source={{
                uri: player1.profile_pic,
              }}
            />
          </Column>
          <Column height="10%">
            <Heading
              text={player1.game_username.toUpperCase()}
              fontType="bold"
            />
          </Column>
          <Column cols={2} height="40%">
            <Heading text="Wins" fontType="bold" />
            <Heading
              text={player1.nbWins}
              fontType="bold"
              color={Colors.colors.green}
            />
          </Column>
          <Column cols={2} height="40%">
            <Heading text="Lost" fontType="bold" />
            <Heading
              text={player1.nbLoses}
              fontType="bold"
              color={Colors.colors.danger}
            />
          </Column>
        </Row>
        <Row>
          <Column height="50%">
            <Image
              style={styles.userImage}
              source={{
                uri: player2.profile_pic,
              }}
            />
          </Column>
          <Column height="10%">
            <Heading
              text={player2.game_username.toUpperCase()}
              fontType="bold"
            />
          </Column>
          <Column cols={2} height="40%">
            <Heading text="Wins" fontType="bold" />
            <Heading
              text={player2.nbWins}
              fontType="bold"
              color={Colors.colors.green}
            />
          </Column>
          <Column cols={2} height="40%">
            <Heading text="Lost" fontType="bold" />
            <Heading
              text={player2.nbLoses}
              fontType="bold"
              color={Colors.colors.danger}
            />
          </Column>
        </Row>
        <Row flex={0.2}>
          <Column>
            <Btn text="Play" borderedPrimary />
          </Column>
        </Row>
      </Layout>
    </Modal>
  ) : null;
};

const styles = StyleSheet.create({
  userImage: {
    width: 145,
    height: 145,
    borderWidth: 5,
    borderRadius: 145,
    borderColor: Colors.colors.primary,
  },
});

export { ModalPlayer };
