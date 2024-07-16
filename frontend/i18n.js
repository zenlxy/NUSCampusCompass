import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en';
import es from './translations/es';
import fr from './translations/fr.json';
import languages from './app/data/Languages';

i18n.translations = languages;
i18n.fallbacks = true;

export default i18n;
