import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { Row, Column, Input, Btn, Heading } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';

// STYLES
import { Colors } from '~/styles';

// CONSTANT
import { DEPOSIT } from './constant';

const Deposit = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Row style={styles.row}>
        <Column style={[styles.column, styles.amountContainer]}>
          <Heading
            style={styles.amountText}
            text={t('translation:pages.deposit.text1')}
          />
          <Input
            style={styles.amountInput}
            placeholder="XX"
            type="number-pad"
          />
          <Heading
            style={styles.amountEuroSymbol}
            ComponentIcon={MaterialIcons}
            iconName="euro-symbol"
          />
          <Heading style={styles.amountMinMax} text="Min: 10€ - Max: 1000€" />
        </Column>
        {DEPOSIT.buttons.map((button) => (
          <Column
            key={button.text}
            style={styles.moneyButtonContainer}
            cols={4}
          >
            <Btn
              style={styles.moneyButton}
              text={button.text}
              textColor={Colors.colors.primary}
              font="bold"
              bordered
            />
          </Column>
        ))}
        <Column style={{ height: '10%' }}>
          <Btn text={t('translation:pages.deposit.button1')} borderedPrimary />
        </Column>
      </Row>
    </Layout>
  );
};

const styles = StyleSheet.create({
  row: {
    backgroundColor: Colors.colors.white,
    justifyContent: 'center',
  },
  column: {
    position: 'relative',
    flexBasis: '90%',
    marginTop: '10%',
  },
  amountContainer: {
    borderWidth: 1,
    borderColor: Colors.colors.silver,
    borderRadius: 5,
    height: '10%',
  },
  amountText: {
    position: 'absolute',
    backgroundColor: Colors.colors.white,
    top: -7,
    left: 0,
    marginLeft: 20,
    fontSize: 12,
  },
  amountInput: {
    position: 'absolute',
    left: 0,
    paddingLeft: 20,
    height: '100%',
    width: '90%',
    textAlign: 'left',
  },
  amountEuroSymbol: {
    position: 'absolute',
    right: 0,
    paddingRight: 20,
  },
  amountMinMax: {
    position: 'absolute',
    bottom: -20,
    left: 0,
    marginLeft: 20,
    fontSize: 12,
  },
  moneyButtonContainer: {
    height: '10%',
    marginTop: 20,
  },
  moneyButton: {
    width: '70%',
    height: '70%',
    backgroundColor: Colors.colors.lightgrey,
  },
});

export { Deposit };
