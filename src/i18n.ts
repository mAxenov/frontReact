import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationRU from 'src/locales/ru/translation.json';

const resources = {
  ru: {
    translation: translationRU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
