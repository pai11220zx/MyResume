import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

const STORAGE_KEY = 'myresume_preferred_language';

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY);
      if (savedLang === 'th' || savedLang === 'en') {
        return savedLang;
      }
    } catch (e) {
      console.warn('Unable to access localStorage:', e);
    }
    return 'th';
  });

  const setLanguage = (lang) => {
    if (lang !== 'th' && lang !== 'en') return;
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      console.warn('Unable to save to localStorage:', e);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'th' ? 'en' : 'th');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Helper translation getter
  const t = (key) => {
    const keys = key.split('.');
    let current = translations[language];
    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        // Fallback to Thai then to key
        let fallback = translations['th'];
        for (const fbKey of keys) {
          if (fallback && fallback[fbKey] !== undefined) {
            fallback = fallback[fbKey];
          } else {
            return key;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  // Helper localized object getter ({ th: "...", en: "..." } or string)
  const getLocalized = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'object') {
      return obj[language] || obj.th || '';
    }
    return obj;
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    isThai: language === 'th',
    isEnglish: language === 'en',
    t,
    getLocalized,
    currentStrings: translations[language] || translations.th
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
