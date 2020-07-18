import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

// COMPONENTS COMMON
import { Btn, Heading } from '~/components/common';

// STYLES
import { Colors } from '~/styles';

const OptionSection = ({ options, t, navigation }) => (
  <FlatList
    style={styles.optionSectionContainer}
    contentContainerStyle={styles.contentContainerStyle}
    numColumns={2}
    data={options}
    renderItem={({ item }) => (
      <Btn
        style={styles.optionButton}
        borderedPrimary
        onPress={() => navigation.navigate(item.goTo)}
      >
        <Heading
          text={t(item.label)}
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
  optionSectionContainer: {
    height: '100%',
  },
  contentContainerStyle: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionButton: {
    height: null,
    width: '48%',
    paddingTop: 5,
  },
  optionIcon: {
    paddingBottom: 5,
  },
});

export { OptionSection };
