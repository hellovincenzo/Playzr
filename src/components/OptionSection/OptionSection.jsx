import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

// COMPONENTS COMMON
import { Btn, Heading } from '~/components/common';

// STYLES
import { Colors } from '~/styles';

const OptionSection = ({ options, t, navigation, isLoading }) => (
  <FlatList
    contentContainerStyle={styles.contentContainerStyle}
    numColumns={2}
    data={options}
    renderItem={({ item }) => (
      <Btn
        style={styles.optionButton}
        borderedPrimary
        onPress={() => navigation.navigate(item.goTo)}
        isLoading={isLoading}
      >
        <Heading
          style={styles.optionLabel}
          text={t(item.label).replace(' ', '\n')}
          color="white"
          fontType="medium"
          iconName={item.name}
          iconPosition="bottom"
          iconColor={Colors.colors.black}
          iconSize={35}
          iconStyle={styles.optionIcon}
          ComponentIcon={item.component}
        />
      </Btn>
    )}
    keyExtractor={(item) => item.label}
  />
);

const styles = StyleSheet.create({
  optionSectionContainer: {},
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButton: {
    height: null,
    width: '47.5%',
    paddingTop: 5,
  },
  optionLabel: { textAlign: 'center' },
  optionIcon: {
    paddingBottom: 5,
  },
});

export { OptionSection };
