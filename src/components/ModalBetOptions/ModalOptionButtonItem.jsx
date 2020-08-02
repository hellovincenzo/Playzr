import React from 'react';
import { StyleSheet } from 'react-native';

// COMPONENTS
import { Heading, Btn } from '~/components/common';

// STYLES
import { Colors } from '~/styles';

const ModalOptionButtonItem = ({ bet, isSelected, handleOptionPress }) => {
  return (
    <Btn
      style={
        isSelected
          ? { backgroundColor: Colors.colors.primary }
          : styles.optionsButton
      }
      onPress={handleOptionPress}
      bordered
    >
      <Heading
        text={`${bet.toString()}€`}
        fontType="bold"
        color={isSelected ? Colors.colors.black02 : Colors.colors.primary}
      />
    </Btn>
  );
};

ModalOptionButtonItem.defaultProps = {
  bet: '',
  isSelected: false,
  handleOptionPress: () => null,
};

const styles = StyleSheet.create({
  optionsButton: {
    backgroundColor: Colors.colors.silver,
    zIndex: 9999,
  },
  optionsButtonText: {
    color: Colors.colors.primary,
  },
});

export { ModalOptionButtonItem };
