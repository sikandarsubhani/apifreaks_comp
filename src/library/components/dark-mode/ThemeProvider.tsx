'use client';
import { THEME, ThemeContextType } from '../../types/types';
import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<THEME>(THEME.System);
  const [mounted, setMounted] = useState(false);
  const [systemTheme, setSystemTheme] = useState<THEME>(THEME.Light);

  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.Dark : THEME.Light;

  const applyTheme = useCallback((currentTheme: THEME, sysTheme?: THEME) => {
    let actualTheme: THEME = currentTheme;
    if (currentTheme === THEME.System) {
      actualTheme = sysTheme || getSystemTheme();
    }
    document.documentElement.classList.remove('light', 'dark', 'theme-ready');
    document.documentElement.classList.add('theme-ready', actualTheme);
  }, []);

  useEffect(() => {
    let initialTheme: THEME = THEME.System;
    const storedTheme = localStorage.getItem('theme') as THEME | null;
    if (storedTheme === THEME.Light || storedTheme === THEME.Dark) {
      initialTheme = storedTheme;
    } else {
      initialTheme = THEME.System;
    }
    setThemeState(initialTheme);
    const sys = getSystemTheme();
    setSystemTheme(sys);
    applyTheme(initialTheme, sys);
    try {
      localStorage.setItem('theme', initialTheme);
    } catch {
      // Ignore errors if localStorage is not available
    }
    setMounted(true);
  }, [applyTheme]);

  useEffect(() => {
    if (!mounted) return;
    if (theme !== THEME.System) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const sysTheme = getSystemTheme();
      setSystemTheme(sysTheme); // force re-render
      applyTheme(THEME.System, sysTheme);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, applyTheme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    if (theme === THEME.System) {
      // Always compute the latest system theme when switching to System
      const sys = getSystemTheme();
      setSystemTheme(sys);
      applyTheme(THEME.System, sys);
      try {
        localStorage.setItem('theme', THEME.System);
      } catch {
        // Ignore errors if localStorage is not available
      }
    } else {
      applyTheme(theme);
      if (theme === THEME.Light || theme === THEME.Dark) {
        try {
          localStorage.setItem('theme', theme);
        } catch {
          // Ignore errors if localStorage is not available
        }
      }
    }
  }, [theme, systemTheme, applyTheme, mounted]);

  const toggleTheme = () => {
    if (theme === THEME.Light) {
      setThemeState(THEME.Dark);
    } else {
      setThemeState(THEME.Light);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: setThemeState }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;