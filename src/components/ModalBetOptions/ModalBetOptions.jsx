import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

// REDUX TYPE
import { TOGGLE_MODAL } from '~/redux/types/modalType';

// COMPONENTS
import { Layout } from '~/components/Layout/Layout';
import { ModalOptionButtonItem } from './ModalOptionButtonItem';
import { Row, Column, Heading, Btn } from '~/components/common';

// STYLES
import { Colors } from '~/styles';

const ModalBetOptions = ({ title, heading, buttonText, bets }) => {
  const dispatch = useDispatch();

  const {
    modal: { isModalVisible },
  } = useSelector((state) => state);

  const store = useSelector((state) => state);

  const toggleModal = () => dispatch({ type: TOGGLE_MODAL });

  const handleOptionPress = (text) =>
    dispatch({ type: 'SELECT_BET', bets, selectedBet: text.bet });

  return (
    isModalVisible && (
      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}
      >
        <Layout>
          <Row flex={0.1}>
            <Column
              cols={2}
              style={[styles.borderBottom, styles.headingText]}
              positionX="flex-end"
            >
              <Heading text={title} fontType="bold" />
            </Column>
            <Column
              cols={2}
              style={[styles.borderBottom, styles.closeIcon]}
              positionX="flex-end"
            >
              <EvilIcons
                name="close"
                size={35}
                color={Colors.colors.black02}
                onPress={toggleModal}
              />
            </Column>
          </Row>
          <Row flex={0.1}>
            <Column>
              <Heading text={heading} />
            </Column>
            {bets.map((bet) => (
              <Column key={bet.bet} cols={bets.length}>
                <ModalOptionButtonItem
                  bet={bet.bet}
                  isSelected={bet.isSelected}
                  handleOptionPress={() => handleOptionPress(bet)}
                />
              </Column>
            ))}
            <Column>
              <Btn
                style={styles.chooseButton}
                text={buttonText}
                borderedPrimary
              />
            </Column>
          </Row>
        </Layout>
      </Modal>
    )
  );
};

const styles = StyleSheet.create({
  borderBottom: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: Colors.colors.silver,
  },
  headingText: {
    flexBasis: '60%',
  },
  closeIcon: {
    flexBasis: '40%',
  },
  optionsButton: {
    backgroundColor: Colors.colors.silver,
    zIndex: 9999,
  },
  optionsButtonText: {
    color: Colors.colors.primary,
  },
  chooseButton: {
    width: '98%',
  },
});

export { ModalBetOptions };
