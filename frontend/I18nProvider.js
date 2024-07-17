import React, { createContext, useState, useEffect } from 'react';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import en from './translations/en.json';
import es from './translations/es.json';
import fr from './translations/fr.json';

i18n.fallbacks = true;
i18n.translations = { en, es, fr };

export const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState(RNLocalize.getLocales()[0].languageCode);

  useEffect(() => {
    i18n.locale = language;
  }, [language]);

  return (
    <I18nContext.Provider value={{ setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};
