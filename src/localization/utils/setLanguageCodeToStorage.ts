import { ALLOWED_LANGUAGE_CODES, SELECTED_LANGUAGE_KEY_NAME } from "../i18n";

const setLanguageCodeToStorage = async (languageCode: string) => {
  if (ALLOWED_LANGUAGE_CODES.includes(languageCode) === false) {
    return false;
  }

  await localStorage.setItem(SELECTED_LANGUAGE_KEY_NAME, languageCode);

  return true;
};

export default setLanguageCodeToStorage;
