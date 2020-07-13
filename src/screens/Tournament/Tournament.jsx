import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { Row, Column, Input, Btn, Heading } from '~/components/common';
import { Layout } from '~/components/Layout/Layout';
import { ChangeLanguage } from '~/components/ChangeLanguage/ChangeLanguage';

// STYLES
import { Assets } from '~/styles';

// ASSETS
import backgroundImage from '~/assets/background.png';
import logo from '~/assets/logo.png';

const Tournament = ({ navigation }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const {
    ui: { isLoading },
  } = useSelector((state) => state);

  return <Layout></Layout>;
};

const styles = StyleSheet.create({});

export { Tournament };
