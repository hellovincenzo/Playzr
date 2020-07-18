import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

// COMPONENTS COMMON
import { Column, Btn, Heading } from '~/components/common';

// STYLES
import { Colors } from '~/styles';

const OptionSection = ({ options, t }) => (
  <FlatList
    style={styles.optionSectionContainer}
    contentContainerStyle={styles.contentContainerStyle}
    numColumns={2}
    data={options}
    renderItem={({ item }) => (
      // <Column cols={2}>
      <Btn style={styles.optionButton} borderedPrimary>
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
      // </Column>
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
