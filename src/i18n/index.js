import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: require('./locales/en/translation.json'),
  },
  fr: {
    translation: require('./locales/fr/translation.json'),
  },
};

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export { i18n };
