import {
  FontAwesome5,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

// USER TYPES REDUX
import { SIGN_OUT } from '~/redux/types/userTypes';

export const drawerItems = (dispatch, navigation) => {
  const signOut = () => {
    navigation.toggleDrawer();
    dispatch({ type: SIGN_OUT });
  };

  return [
    {
      component: FontAwesome5,
      positionX: 'flex-start',
      name: 'home',
      size: 24,
      color: 'black',
      label: 'Home',
      onPress: signOut,
    },
    {
      component: FontAwesome5,
      positionX: 'flex-start',
      name: 'user-alt',
      size: 24,
      color: 'black',
      label: 'Profile',
      onPress: signOut,
    },
    {
      component: Ionicons,
      positionX: 'flex-start',
      name: 'md-stats',
      size: 24,
      color: 'black',
      label: 'Statistics',
      onPress: signOut,
    },
    {
      component: Ionicons,
      positionX: 'flex-start',
      name: 'md-podium',
      size: 24,
      color: 'black',
      label: 'Rank',
      onPress: signOut,
    },
    {
      component: Ionicons,
      positionX: 'flex-start',
      name: 'md-information-circle',
      size: 24,
      color: 'black',
      label: 'Information',
      onPress: signOut,
    },
    {
      component: MaterialCommunityIcons,
      positionX: 'flex-start',
      name: 'tournament',
      size: 24,
      color: 'black',
      label: 'Tournois',
      onPress: signOut,
    },
    {
      component: FontAwesome5,
      positionX: 'flex-start',
      name: 'euro-sign',
      size: 24,
      color: 'black',
      label: 'Widthdraw & Deposit',
      onPress: signOut,
    },
    {
      component: MaterialCommunityIcons,
      positionY: 'flex-end',
      name: 'location-exit',
      size: 24,
      color: 'black',
      label: 'Sign out',
      onPress: signOut,
    },
  ];
};
