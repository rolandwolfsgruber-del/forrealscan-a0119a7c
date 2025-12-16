import { useState, useEffect } from 'react';
import { Language } from '@/lib/translations';
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

const LANGUAGE_STORAGE_KEY = 'forrealscan-language';

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

  // Persist language selection
  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage} />
      <main className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
        <Hero language={language} />
        <VeritasRobo language={language} />
        <AdSense />
        <UseCases language={language} />
        <HowItWorks language={language} />
        <StoryCheck language={language} />
        <ShareCards language={language} />
        <Modes language={language} />
        <Examples language={language} />
        <MiniGame language={language} />
        <Pricing language={language} />
        <FAQ language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;
