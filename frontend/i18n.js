import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import es from './translations/es.json';
import fr from './translations/fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    pluralSeparator: '_', // Adjust as per your needs
    // Define pluralRules if necessary
  });

export default i18n;
