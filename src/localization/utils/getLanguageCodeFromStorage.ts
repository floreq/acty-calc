import { ALLOWED_LANGUAGE_CODES, SELECTED_LANGUAGE_KEY_NAME } from "../i18n";

const getLanguageCodeFromStorage = async () => {
  const storedLanguageCode = await localStorage.getItem(
    SELECTED_LANGUAGE_KEY_NAME
  );

  const canReturn =
    storedLanguageCode && ALLOWED_LANGUAGE_CODES.includes(storedLanguageCode);

  if (canReturn) {
    return storedLanguageCode;
  }
};

export default getLanguageCodeFromStorage;
