import React, { createContext, useState } from 'react';

export const GeralContext = createContext();

export const GeralProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentOption, setCurrentOption] = useState(1)

  const updateDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <GeralContext.Provider value={{ isDarkMode, updateDarkMode, currentOption, setCurrentOption }}>
      {children}
    </GeralContext.Provider>
  );
};