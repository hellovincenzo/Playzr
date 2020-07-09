import React from 'react';
import { useDispatch } from 'react-redux';
import { Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons';

import { Colors } from '~/styles';

// REDUX TYPES
import { CLEAR_MSG } from '~/redux/types/messageTypes';

const OptionsHeader = (t, navigation) => {
  const { goBack } = navigation;
  const dispatch = useDispatch();

  const handleBackBtnPress = () => {
    dispatch({ type: CLEAR_MSG });
    goBack();
  };

  return {
    Dashboard: {
      title: t('translation:pages.dashboard.title'),
      headerLeft: () => (
        <Ionicons
          name="md-menu"
          size={45}
          color={Colors.colors.black}
          style={{ paddingLeft: 15 }}
          onPress={null}
        />
      ),
      headerRight: () => (
        <FontAwesome5
          name="user-alt"
          size={35}
          color={Colors.colors.black}
          style={{ paddingRight: 15 }}
        />
      ),
      headerStyle: {
        backgroundColor: Colors.colors.primary,
        shadowOffset: { height: 0, width: 0 },
      },
      headerTitleStyle: {
        fontFamily: 'spartan-bold',
        fontSize: 25,
      },
    },
    Signup: {
      title: t('translation:pages.signup.title'),
      headerLeft: () => (
        <Entypo
          name="back"
          size={24}
          color={Colors.colors.black}
          style={{ paddingLeft: 15 }}
          onPress={handleBackBtnPress}
        />
      ),
      headerStyle: {
        backgroundColor: Colors.colors.primary,
        shadowOffset: { height: 0, width: 0 },
      },
      headerTitleStyle: {
        fontFamily: 'spartan-bold',
        fontSize: 15,
      },
    },
    Password: {
      title: t('translation:pages.password.title'),
      headerLeft: () => (
        <Entypo
          name="back"
          size={24}
          color={Colors.colors.black}
          style={{ paddingLeft: 15 }}
          onPress={handleBackBtnPress}
        />
      ),
      headerStyle: {
        backgroundColor: Colors.colors.primary,
        shadowOffset: { height: 0, width: 0 },
      },
      headerTitleStyle: {
        fontFamily: 'spartan-bold',
        fontSize: 15,
      },
    },
  };
};

export { OptionsHeader };
