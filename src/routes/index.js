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
      options: (t) => OptionsHeader(t).Signup,
    },
    {
      name: 'Password',
      component: Password,
      options(t) {
        return {
          title: t('translation:pages.password.title'),
        };
      },
    },
  ],
  authorize: [
    {
      name: 'Dashboard',
      component: Dashboard,
      options: (t) => OptionsHeader(t).Dashboard,
    },
  ],
};
