import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Screen = ({ name, component, options, isSignIn }) => {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const Tag = isSignIn ? Drawer.Screen : Stack.Screen;
  return <Tag name={name} component={component} options={options} />;
};

Screen.defaultProps = {
  options: null,
  isSignIn: false,
};

Screen.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
  options: PropTypes.objectOf(PropTypes.any),
  isSignIn: PropTypes.bool,
};

export { Screen };
