import { Login, Signup, Dashboard } from '~/screens';

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
          title: 'translation:pages.login.title',
          headerShown: false,
        };
      },
    },
  ],
  authorize: [
    {
      name: 'Dashboard',
      component: Dashboard,
      options(t) {
        return {
          title: t('translation:pages.dashboard.title'),
        };
      },
    },
  ],
};
