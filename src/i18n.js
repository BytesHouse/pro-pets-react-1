import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  //Определение языка браузера
  .use(LanguageDetector)
  //Подгрузка переводов используя http-backend
  .use(Backend)
  //Создание instance
  .use(initReactI18next)
  // Инициализация i18next
  .init({ fallbackLng: "en", debug: false });

export default i18n;
