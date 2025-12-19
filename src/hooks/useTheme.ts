import { useEffect } from 'react';
import { THEME_STORAGE_KEY } from '@/lib/constants';

/**
 * Hook that applies the stored theme class to document.body
 * This should be called at the app level to ensure theme is applied globally
 */
export const useThemeBodyClass = () => {
  useEffect(() => {
    const applyTheme = () => {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      let theme = 'veritas'; // default to light mode

      if (stored && ['veritas', 'robo'].includes(stored)) {
        theme = stored;
      } else if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = 'robo';
      }

      document.body.classList.remove('theme-veritas', 'theme-robo');
      document.body.classList.add(`theme-${theme}`);
    };

    // Apply theme immediately
    applyTheme();

    // Listen for storage changes (when theme is changed on Index page)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === THEME_STORAGE_KEY) {
        applyTheme();
      }
    };

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (!stored) {
        applyTheme();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    mediaQuery.addEventListener('change', handleSystemChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      mediaQuery.removeEventListener('change', handleSystemChange);
    };
  }, []);
};
