import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

export const DASHBOARD = {
  options: [
    {
      label: 'translation:drawer.label3',
      component: Ionicons,
      name: 'md-stats',
      goTo: 'Results',
    },
    {
      label: 'translation:drawer.label2',
      component: FontAwesome5,
      name: 'user-alt',
      goTo: 'Account',
    },
    {
      label: 'translation:drawer.label4',
      component: Ionicons,
      name: 'md-podium',
      goTo: 'Rank',
    },
    {
      label: 'translation:drawer.label6',
      component: MaterialCommunityIcons,
      name: 'tournament',
      goTo: 'Tournament',
    },
    {
      label: 'translation:drawer.label5',
      component: Ionicons,
      name: 'md-information-circle',
      goTo: 'Plan',
    },
    {
      label: 'translation:drawer.label7',
      component: FontAwesome5,
      name: 'euro-sign',
      goTo: 'Deposit',
    },
  ],
};
