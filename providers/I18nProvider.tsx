'use client';


import i18n from '@/app/i18n';
import { ReactNode, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

export default function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang && ['en', 'si', 'ta'].includes(savedLang)) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}