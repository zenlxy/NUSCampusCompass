import React, { createContext, useState, useContext } from 'react';
import i18n from '../../i18n'; // Ensure correct path to your i18n configuration

interface LanguageContextType {
    language: string;
    changeLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    changeLanguage: (lang: string) => {}
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState('en');

    const changeLanguage = (lang: string) => { 
        console.log(`Changing language to: ${lang}`);
        setLanguage(lang);
        i18n.changeLanguage(lang); 
    };

    console.log(`Current language: ${language}`);

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
