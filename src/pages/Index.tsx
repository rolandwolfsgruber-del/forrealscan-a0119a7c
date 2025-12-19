import { useState, useEffect } from 'react';
import { Language } from '@/lib/translations';
import { LANGUAGE_STORAGE_KEY, THEME_STORAGE_KEY } from '@/lib/constants';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { UseCases } from '@/components/UseCases';
import { HowItWorks } from '@/components/HowItWorks';
import { VeritasRobo } from '@/components/VeritasRobo';
import { StoryCheck } from '@/components/StoryCheck';
import { ShareCards } from '@/components/ShareCards';
import { Modes } from '@/components/Modes';
import { Examples } from '@/components/Examples';
import { MiniGame } from '@/components/MiniGame';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { AdSense } from '@/components/AdSense';
import { Theme } from '@/components/ThemeToggle';

const Index = () => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from localStorage, fallback to browser language or 'de'
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && ['de', 'en', 'it', 'es', 'fr'].includes(stored)) {
      return stored as Language;
    }
    const browserLang = navigator.language.split('-')[0];
    if (['de', 'en', 'it', 'es', 'fr'].includes(browserLang)) {
      return browserLang as Language;
    }
    return 'de';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    // Try to get theme from localStorage
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && ['veritas', 'robo'].includes(stored)) {
      return stored as Theme;
    }
    // Fallback to system preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'robo';
    }
    return 'veritas';
  });

  // Persist language selection
  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  // Persist theme selection and apply to body
  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    // Remove both theme classes and add the current one
    document.body.classList.remove('theme-veritas', 'theme-robo');
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't explicitly set a preference
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (!stored) {
        setTheme(e.matches ? 'robo' : 'veritas');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleThemeToggle = () => {
    setTheme(prev => prev === 'veritas' ? 'robo' : 'veritas');
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <Header language={language} setLanguage={setLanguage} theme={theme} onThemeToggle={handleThemeToggle} />
      <main className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
        <Hero language={language} theme={theme} />
        <VeritasRobo language={language} theme={theme} />
        <AdSense />
        <UseCases language={language} theme={theme} />
        <HowItWorks language={language} theme={theme} />
        <StoryCheck language={language} theme={theme} />
        <ShareCards language={language} theme={theme} />
        <Modes language={language} theme={theme} />
        <Examples language={language} theme={theme} />
        <MiniGame language={language} theme={theme} />
        <Pricing language={language} theme={theme} />
        <FAQ language={language} theme={theme} />
      </main>
      <Footer language={language} theme={theme} />
    </div>
  );
};

export default Index;
