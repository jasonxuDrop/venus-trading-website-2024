import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) 
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    fallbackLng: 'en', 
    debug: true, 
    ns: ['header', 'footer', 'page', 'products'],
    interpolation: {
      escapeValue: false, 
    },
    backend: {
      loadPath: '/venus-trading-website-2024/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;