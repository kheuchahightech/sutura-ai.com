import { useState, useEffect, useCallback } from 'react';

export type Theme = 'dark' | 'light';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = localStorage.getItem('sutura-theme');
    return stored === 'light' ? 'light' : 'dark';
  });

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem('sutura-theme', t);
  }, []);

  const toggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return { theme, setTheme, toggle, isDark: theme === 'dark' };
}
