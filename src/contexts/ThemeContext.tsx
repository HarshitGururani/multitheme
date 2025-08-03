import React, { createContext, useContext, useEffect, useState } from 'react';
import { themes } from '../themes/themes';
import type { ThemeContextType, ThemeType } from '../types/theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('theme1');

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('selectedTheme') as ThemeType;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    localStorage.setItem('selectedTheme', theme);
    
    // Add Google Fonts for Theme 3
    if (theme === 'theme3') {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  };

  const value: ThemeContextType = {
    currentTheme,
    theme: themes[currentTheme],
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeContext, ThemeProvider, useTheme };
