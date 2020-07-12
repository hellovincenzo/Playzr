import { Login, Signup, Password, Dashboard } from '~/screens';

import { OptionsHeader } from './OptionsHeader';

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
  ],
};
