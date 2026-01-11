import { useState, useEffect, useCallback } from 'react';
import { THEME_STORAGE_KEY } from '@/lib/constants';
import { Theme } from '@/components/ThemeToggle';

/**
 * Get the initial theme from localStorage or system preference
 */
const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'veritas';

  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored && ['veritas', 'robo'].includes(stored)) {
    return stored as Theme;
  }
  // First visit: Always dark mode (Robo) as signature look
  return 'robo';
};

/**
 * Apply theme class to document.body
 */
const applyThemeToBody = (theme: Theme) => {
  document.body.classList.remove('theme-veritas', 'theme-robo');
  document.body.classList.add(`theme-${theme}`);
};

/**
 * Hook that applies the stored theme class to document.body
 * This should be called at the app level to ensure theme is applied globally
 */
export const useThemeBodyClass = () => {
  useEffect(() => {
    const applyTheme = () => {
      const theme = getInitialTheme();
      applyThemeToBody(theme);
    };

    // Apply theme immediately
    applyTheme();

    // Listen for storage changes (when theme is changed on another page)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === THEME_STORAGE_KEY) {
        applyTheme();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
};

/**
 * Hook for managing theme state with toggle functionality
 * Use this in pages that need to display/control the theme
 */
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Apply theme to body and localStorage when it changes
  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    applyThemeToBody(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'veritas' ? 'robo' : 'veritas');
  }, []);

  return { theme, setTheme, toggleTheme };
};
