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
      <main className="space-y-24">
        <Hero language={language} />
        
        {/* Google AdSense Ad Unit */}
        <div className="container mx-auto px-4">
          <ins className="adsbygoogle"
               style={{ display: 'block', textAlign: 'center', margin: '40px 0' }}
               data-ad-client="ca-pub-7086576267073548"
               data-ad-slot="1234567890"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script dangerouslySetInnerHTML={{
            __html: '(adsbygoogle = window.adsbygoogle || []).push({});'
          }} />
        </div>
        
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
