import { ALLOWED_LANGUAGE_CODES } from "../i18n";

const getLanguageCodeFromSystemSettings = () => {
  const languageCode = navigator?.language?.split?.("-")?.[0];

  if (ALLOWED_LANGUAGE_CODES.includes(languageCode)) {
    return languageCode;
  }
};

export default getLanguageCodeFromSystemSettings;
