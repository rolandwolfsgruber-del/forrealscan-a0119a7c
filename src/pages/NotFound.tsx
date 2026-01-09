import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Language, translations } from '@/lib/translations';
import { LANGUAGE_STORAGE_KEY } from '@/lib/constants';

const NotFound = () => {
  const location = useLocation();

  const [language] = useState<Language>(() => {
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

  const t = translations[language];

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted relative z-10">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t.notfound_title}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t.notfound_message}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {t.notfound_home}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
