import React from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { Colors } from '~/styles';

const OptionsHeader = (t) => {
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
  };
};

export { OptionsHeader };
