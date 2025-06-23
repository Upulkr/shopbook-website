import en from '@/locales/en';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import si from '@/locales/si';
import ta from '@/locales/ta';

const resources = {
  en: { translation: en },
  si: { translation: si },
  ta: { translation: ta },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;