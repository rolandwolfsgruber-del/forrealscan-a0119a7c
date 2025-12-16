import { useState } from 'react';
import { Language } from '@/lib/translations';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { UseCases } from '@/components/UseCases';
import { HowItWorks } from '@/components/HowItWorks';
import { VeritasRobo } from '@/components/VeritasRobo';
import { StoryCheck } from '@/components/StoryCheck';
import { Retouch } from '@/components/Retouch';
import { ShareCards } from '@/components/ShareCards';
import { Disclaimer } from '@/components/Disclaimer';
import { Modes } from '@/components/Modes';
import { Examples } from '@/components/Examples';
import { MiniGame } from '@/components/MiniGame';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { AdSense } from '@/components/AdSense';

const Index = () => {
  const [language, setLanguage] = useState<Language>('de');

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
        <Retouch language={language} />
        <ShareCards language={language} />
        <Disclaimer language={language} />
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
