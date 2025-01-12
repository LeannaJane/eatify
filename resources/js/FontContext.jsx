import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
export const PreferencesContext = createContext();

// FontContext Provider Component
export const PreferencesProvider = ({ children }) => {
  const [selectedFontStyle, setSelectedFontStyle] = useState(() => {
    // Load initial font style from localStorage or default to 'default'
    return localStorage.getItem('selectedFontStyle') || 'default';
  });

  const [notification, setNotification] = useState(() => {
    // Load initial font style from localStorage or default to 'default'
    return localStorage.getItem('notifications') == 'true' || false;
  });

  const [selectedTheme, setSelectedTheme] = useState(() => {
    // Load initial font style from localStorage or default to 'default'
    return localStorage.getItem('selectedTheme') || 'light-theme';
  });

  useEffect(() => {
    // Update localStorage whenever fontStyle changes
    localStorage.setItem('selectedFontStyle', selectedFontStyle);
  }, [selectedFontStyle]);

  useEffect(() => {
    // Update localStorage whenever fontStyle changes
    localStorage.setItem('notifications', notification);
  }, [notification]);

  useEffect(() => {
    // Update localStorage whenever fontStyle changes
    localStorage.setItem('selectedTheme', selectedTheme);
  }, [selectedTheme]);

  return (
    <PreferencesContext.Provider value={{ selectedFontStyle, notification, selectedTheme, setSelectedFontStyle, setNotification, setSelectedTheme }}>
      <div className={`${selectedFontStyle} ${selectedTheme}`}>{children}</div>
    </PreferencesContext.Provider>
  );
};

export const useFont = () => {
    return useContext(PreferencesContext);
};

