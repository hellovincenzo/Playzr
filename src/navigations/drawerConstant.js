import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

// STYLES
import { Colors } from '~/styles';

// USER TYPES REDUX
import { SIGN_OUT } from '~/redux/types/userTypes';

export const drawerItems = (dispatch, navigation, t) => {
  const { toggleDrawer, navigate } = navigation;

  const signOut = () => {
    toggleDrawer();
    dispatch({ type: SIGN_OUT });
  };

  return [
    {
      component: FontAwesome5,
      positionX: 'flex-start',
      name: 'home',
      size: 24,
      color: Colors.colors.black02,
      label: t('translation:drawer.label1'),
      onPress: () => navigate('Dashboard'),
    },
    {
      component: FontAwesome5,
      positionX: 'flex-start',
      name: 'user-alt',
      size: 24,
      color: Colors.colors.black02,
      label: t('translation:drawer.label2'),
      onPress: () => navigate('Account'),
    },
    {
      component: Ionicons,
      positionX: 'flex-start',
      name: 'md-stats',
      size: 24,
      color: Colors.colors.black02,
      label: t('translation:drawer.label3'),
      onPress: () => navigate('Results'),
    },
    {
      component: Ionicons,
      positionX: 'flex-start',
      name: 'md-podium',
      size: 24,
      color: Colors.colors.black02,
      label: t('translation:drawer.label4'),
      onPress: () => navigate('Rank'),
    },
    {
      component: Ionicons,
      positionX: 'flex-start',
      name: 'md-information-circle',
      size: 24,
      color: Colors.colors.black02,
      label: t('translation:drawer.label5'),
      onPress: () => navigate('Plan'),
    },
    {
      component: MaterialCommunityIcons,
      positionX: 'flex-start',
      name: 'tournament',
      size: 24,
      color: Colors.colors.black02,
      label: t('translation:drawer.label6'),
      onPress: () => navigate('Tournament'),
    },
    {
      component: FontAwesome5,
      positionX: 'flex-start',
      name: 'euro-sign',
      size: 24,
      color: Colors.colors.black02,
      label: t('translation:drawer.label7'),
      onPress: () => navigate('Deposit'),
    },
    {
      component: MaterialCommunityIcons,
      positionY: 'flex-end',
      name: 'location-exit',
      size: 24,
      color: Colors.colors.black02,
      label: t('translation:drawer.label8'),
      onPress: signOut,
    },
  ];
};
