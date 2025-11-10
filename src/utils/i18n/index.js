import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enLang from "./locales/en.json";
import zhLang from "./locales/zh.json";

const resources = {
  en: {
    translation: enLang,
  },
  zh: {
    translation: zhLang,
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: true
  });


export default i18n;