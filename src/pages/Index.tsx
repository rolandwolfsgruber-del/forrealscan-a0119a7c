import { useState } from 'react';
import { Language } from '@/lib/translations';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Modes } from '@/components/Modes';
import { Examples } from '@/components/Examples';
import { MiniGame } from '@/components/MiniGame';
import { UseCases } from '@/components/UseCases';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [language, setLanguage] = useState<Language>('de');

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <HowItWorks language={language} />
        <Modes language={language} />
        <Examples language={language} />
        <MiniGame language={language} />
        <UseCases language={language} />
        <Pricing language={language} />
        <FAQ language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;
