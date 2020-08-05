import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { EvilIcons } from '@expo/vector-icons';

// REDUX TYPE
import { TOGGLE_MODAL } from '~/redux/types/modalType';
import { SUCCESS_MSG, ERROR_MSG } from '~/redux/types/messageTypes';

// COMPONENTS
import { Layout } from '~/components/Layout/Layout';
import { ModalOptionButtonItem } from './ModalOptionButtonItem';
import { Row, Column, Heading, Btn } from '~/components/common';

// API
import { getMatch } from '~/API';

// HELPERS
import { alertMsg } from '~/helpers';

// STYLES
import { Colors } from '~/styles';

const ModalBetOptions = ({ title, heading, buttonText, bets }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const {
    user: {
      token,
      data: { balance },
    },
  } = useSelector((state) => state.user);

  const {
    modal: { isModalVisible },
  } = useSelector((state) => state);

  const {
    bets: { selectedBet },
  } = useSelector((state) => state);

  const toggleModal = () => dispatch({ type: TOGGLE_MODAL });

  const handleOptionPress = (text) =>
    dispatch({ type: 'SELECT_BET', bets, selectedBet: text.bet });

  const handleConfirmation = () => {
    toggleModal();
    getMatch(token, 30, dispatch);
    dispatch({
      type: balance > 0 ? SUCCESS_MSG : ERROR_MSG,
      title: t(`translation:${balance > 0 ? 'success' : 'error'}.bet.title`),
      text: [t(`translation:${balance > 0 ? 'success' : 'error'}.bet.text`)],
    });
  };

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
          </Row>
          <Row flex={0.1}>
            {bets.map((bet) => (
              <Column key={bet.bet} cols={bets.length}>
                <ModalOptionButtonItem
                  bet={bet.bet}
                  isSelected={bet.isSelected}
                  handleOptionPress={() => handleOptionPress(bet)}
                />
              </Column>
            ))}
          </Row>
          <Row flex={0.1}>
            <Column>
              <Btn
                style={styles.chooseButton}
                text={buttonText}
                onPress={() =>
                  alertMsg(
                    t('translation:modal.modalAlert.title'),
                    `${t(
                      'translation:modal.modalAlert.msg'
                    )} ${selectedBet}€ ?`,
                    handleConfirmation
                  )
                }
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
