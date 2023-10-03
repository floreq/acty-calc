import { useEffect, useState } from "react";
import getLanguageCodeFromStorage from "../localization/utils/getLanguageCodeFromStorage";
import { useTranslation } from "react-i18next";
import getLanguageCodeFromSystemSettings from "../localization/utils/getLanguageCodeFromSystemSettings";
import { SettingsProvider } from "../context/settingsContext";

function Provider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);

  useEffect(() => {
    getLanguageCodeFromStorage().then((languageCode) => {
      if (languageCode) {
        i18n.changeLanguage(languageCode);
        setIsI18nInitialized(true);
        return;
      }

      const languageCodeFromSettings = getLanguageCodeFromSystemSettings();

      if (languageCodeFromSettings) {
        i18n.changeLanguage(languageCodeFromSettings);
        setIsI18nInitialized(true);
      }
    });
  }, [i18n]);

  return (
    <SettingsProvider>{isI18nInitialized ? children : null}</SettingsProvider>
  );
}

export default Provider;
