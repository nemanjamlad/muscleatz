
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations, Locale } from '../translations';

type LanguageContextType = {
  locale: Locale;
  t: (key: string, options?: { returnObjects?: boolean }) => any;
  changeLanguage: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('sr');

  const t = (key: string, options?: { returnObjects?: boolean }): any => {
    const keys = key.split('.');
    let translation: any = translations[locale];
    
    for (const k of keys) {
      if (!translation[k]) return key;
      translation = translation[k];
    }
    
    return options?.returnObjects ? translation : String(translation);
  };

  const changeLanguage = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
