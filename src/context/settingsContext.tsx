import React, { createContext, useState, useContext, useEffect } from "react";

type Settings = {
  autoFocusWeightField: boolean;
  rememberLastWeight: boolean;
};

type UpdateSettings = (
  key: keyof Settings,
  value: Settings[keyof Settings]
) => void;

const defaultSettings: Settings = {
  autoFocusWeightField: false, // Not working correctly on IOS (Safari), not showing keyboard
  rememberLastWeight: true,
};

const SETTINGS_KEY_NAME = "settings";

const SettingsContext = createContext<{
  settings: Settings;
  updateSettings: UpdateSettings;
}>({
  settings: defaultSettings,
  updateSettings: () => {},
});

const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState(defaultSettings);
  const [loading, setLoading] = useState(true);

  const updateSettings = (key: string, value: any) => {
    setSettings((prevOptions) => ({ ...prevOptions, [key]: value }));
  };

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const storedOptions = await localStorage.getItem(SETTINGS_KEY_NAME);
        if (storedOptions) {
          setSettings(JSON.parse(storedOptions));
        }
      } catch (error) {
        console.error("Error loading settings from AsyncStorage:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSettings().then();
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }

    const saveSettings = async () => {
      try {
        await localStorage.setItem(SETTINGS_KEY_NAME, JSON.stringify(settings));
      } catch (error) {
        console.error("Error saving settings to AsyncStorage:", error);
      }
    };

    saveSettings().then();
  }, [loading, settings]);

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {loading ? null : children}
    </SettingsContext.Provider>
  );
};

const useSettings = () => {
  return useContext(SettingsContext);
};

export { SettingsProvider, useSettings };
