import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const translationEn = {
  // navbar
  navbarHome: "Home",
};

const translationUz = {
  // navbar
  navbarHome: "Bosh sahifa",
};

const translationUzR = {
  // navbar
  navbarHome: "Бош сахифа",
};

const translationRu = {
  // navbar
  navbarHome: "Главный",
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEn },
      uz: { translation: translationUz },
      uzr: { translation: translationUzR },
      ru: { translation: translationRu },
    },

    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
