import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// COMPONENTS COMMON
import { Btn, Heading } from '~/components/common';

// STYLES
import { Colors } from '~/styles';

const AddMoney = ({ balance }) => (
  <Btn style={styles.addMoneyButton} borderedWhite>
    <Heading
      text={`${balance}€`}
      color={Colors.colors.primary}
      fontType="bold"
      ComponentIcon={AntDesign}
      iconName="pluscircle"
      iconPosition="bottom"
      iconColor={Colors.colors.black}
      iconSize={35}
      iconStyle={styles.plusIcon}
    />
  </Btn>
);

const styles = StyleSheet.create({
  addMoneyButton: {
    margin: 0,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  plusIcon: {
    position: 'absolute',
    bottom: -20,
  },
});

AddMoney.defaultProps = {
  balance: '',
};

AddMoney.propTypes = {
  balance: PropTypes.string,
};

export { AddMoney };
