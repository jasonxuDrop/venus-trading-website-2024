import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Determine base URL based on environment
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "/sevenuptrading.netlify.app/locales"
    : "/locales";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    ns: ["header", "footer", "page", "products"],
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${baseUrl}/{{lng}}/{{ns}}.json`,
    },
  });

export default i18n;
