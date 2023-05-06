import GunSettingsComponent from '@components/GunSettingsComponent';
import { ISettings, SettingsProvider } from '@contexts/SettingsContext';
import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [settings, setSettings] = useState<ISettings | null>(null);
  const settingsHook = { settings, setSettings };

  useEffect(() => {
    let localDataSettings = localStorage.getItem('gunnik-settings');
    if (localDataSettings) {
      let localSettings: ISettings = JSON.parse(localDataSettings);
      if (localSettings) {
        setSettings(localSettings);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gunnik-settings', JSON.stringify(settings));
  }, [settings]);

  return (
    <div className="main-border">
      <SettingsProvider value={settingsHook}>
        <GunSettingsComponent />
      </SettingsProvider>
    </div>
  )
}
