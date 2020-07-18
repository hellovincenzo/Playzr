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
    },
    {
      label: 'translation:drawer.label2',
      component: FontAwesome5,
      name: 'user-alt',
    },
    {
      label: 'translation:drawer.label4',
      component: Ionicons,
      name: 'md-podium',
    },
    {
      label: 'translation:drawer.label6',
      component: MaterialCommunityIcons,
      name: 'tournament',
    },
    {
      label: 'translation:drawer.label5',
      component: Ionicons,
      name: 'md-information-circle',
    },
    {
      label: 'translation:drawer.label7',
      component: FontAwesome5,
      name: 'euro-sign',
    },
  ],
};
