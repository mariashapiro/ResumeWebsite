import { useState, useEffect } from 'react';

export const useTheme = () => {
  const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme || getSystemTheme();
  };

  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const applyTheme = (themeName) => {
    setTheme(themeName);
    localStorage.setItem('portfolio-theme', themeName);
    document.documentElement.setAttribute('data-theme', themeName);
  };

  useEffect(() => {
    // Apply theme on mount
    document.documentElement.setAttribute('data-theme', theme);
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (!savedTheme) {
        const systemTheme = e.matches ? 'dark' : 'light';
        applyTheme(systemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  return {
    theme,
    toggleTheme,
    applyTheme,
    isLight: theme === 'light',
    isDark: theme === 'dark'
  };
};
