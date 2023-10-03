import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pl from "./pl";
import en from "./en";

export const SELECTED_LANGUAGE_KEY_NAME = "selectedLanguage";
export const ALLOWED_LANGUAGE_CODES = ["pl", "en"];
export const DEFAULT_LANGUAGE_CODE = ALLOWED_LANGUAGE_CODES[0];

const resources = {
  pl,
  en,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: DEFAULT_LANGUAGE_CODE,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
