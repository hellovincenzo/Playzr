import {
  Login,
  Signup,
  Password,
  Dashboard,
  Account,
  Results,
  Rank,
  Plan,
  Tournament,
} from '~/screens';

import { OptionsHeader } from './OptionsHeader';
import { Deposit } from '../screens';

export const routes = {
  unauthorize: [
    {
      name: 'Login',
      component: Login,
      options(t) {
        return {
          title: t('translation:pages.login.title'),
          headerShown: false,
        };
      },
    },
    {
      name: 'Signup',
      component: Signup,
      options: (t, navigation) => OptionsHeader(t, navigation).Signup,
    },
    {
      name: 'Password',
      component: Password,
      options: (t, navigation) => OptionsHeader(t, navigation).Password,
    },
  ],
  authorize: [
    {
      name: 'Dashboard',
      component: Dashboard,
      options: (t, navigation) => OptionsHeader(t, navigation).Dashboard,
    },
    {
      name: 'Account',
      component: Account,
      options: (t, navigation) => OptionsHeader(t, navigation).Account,
    },
    {
      name: 'Results',
      component: Results,
      options: (t, navigation) => OptionsHeader(t, navigation).Results,
    },
    {
      name: 'Rank',
      component: Rank,
      options: (t, navigation) => OptionsHeader(t, navigation).Rank,
    },
    {
      name: 'Plan',
      component: Plan,
      options: (t, navigation) => OptionsHeader(t, navigation).Plan,
    },
    {
      name: 'Tournament',
      component: Tournament,
      options: (t, navigation) => OptionsHeader(t, navigation).Tournament,
    },
    {
      name: 'Deposit',
      component: Deposit,
      options: (t, navigation) => OptionsHeader(t, navigation).Deposit,
    },
  ],
};
