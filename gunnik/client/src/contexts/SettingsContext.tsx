import React from "react";

export interface ISettings {
    ipAddress?: string | null,
    portAddress?: string | null,
    idHash?: string | null
}

interface ContextProps {
    settings: ISettings | null;
    setSettings: (settings: ISettings) => void;
}

const SettingsContext = React.createContext<ContextProps>({
    settings: null,
    setSettings: () => null
});

export const SettingsProvider = SettingsContext.Provider;

export default SettingsContext;