import { Login, Signup, ForgotPassword, Dashboard } from '~/screens';
import { Colors } from '~/styles';

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
      options(t) {
        return {
          title: t('translation:pages.signup.title'),
        };
      },
    },
    {
      name: 'Password',
      component: ForgotPassword,
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
