import React, { createContext, useState, useEffect, useMemo } from 'react';
import { themes, type Theme } from '../themes';

interface ThemeContextType {
  theme: Theme;
  setTheme: (themeName: string) => void;
  availableThemes: Theme[];
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    return localStorage.getItem('blog-theme') || 'dark';
  });

  const theme = useMemo(() => themes.find(t => t.name === themeName) || themes[0], [themeName]);

  useEffect(() => {
    localStorage.setItem('blog-theme', theme.name);
    const root = document.documentElement;
    for (const [key, value] of Object.entries(theme.colors)) {
      // Fix: Add type assertion to handle potential 'unknown' type for value from Object.entries
      root.style.setProperty(`--color-${key}`, value as string);
    }
  }, [theme]);

  const setTheme = (name: string) => {
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, availableThemes: themes }}>
      {children}
    </ThemeContext.Provider>
  );
};
