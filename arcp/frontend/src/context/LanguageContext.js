import { createContext, useState } from 'react';

const LanguageContext = createContext();
const initialLanguage = 'es';
const translations = require('../Translations.json');

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

    const handleLanguage = (e) => {
        if (e.target.value === 'es') {
            setLanguage('es');
            setTexts(translations.es);
        } else {
            setLanguage('en');
            setTexts(translations.en);
        }
    }
    const data = { texts, handleLanguage };

    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}

export { LanguageProvider };

export default LanguageContext;
