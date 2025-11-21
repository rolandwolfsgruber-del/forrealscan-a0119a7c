import { Button } from '@/components/ui/button';
import { Language, translations } from '@/lib/translations';
import { APP_URL } from '@/lib/config';
import logoMaster from '@/assets/logo-master.png';

interface HeroProps {
  language: Language;
}

export const Hero = ({ language }: HeroProps) => {
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="start" className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Hero content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo with Glow Effect - Dark Square Container */}
          <div className="relative mb-8 sm:mb-12 md:mb-16 flex justify-center">
            {/* Soft Glow Behind Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[450px] md:w-[600px] md:h-[550px]">
                {/* Veritas Glow (Left/Green) */}
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] rounded-full blur-[80px] sm:blur-[100px] opacity-60"
                  style={{
                    background: 'radial-gradient(circle, #22c55e 0%, transparent 70%)',
                  }}
                />
                {/* Robo Glow (Right/Blue) */}
                <div 
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] rounded-full blur-[80px] sm:blur-[100px] opacity-60"
                  style={{
                    background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
                  }}
                />
              </div>
            </div>

            {/* Dark Rounded Square Container - App Style */}
            <div className="relative z-10 bg-[#0f1a20] rounded-[40px] sm:rounded-[60px] md:rounded-[70px] p-3 sm:p-4 md:p-6 shadow-2xl w-[220px] sm:w-[280px] md:w-[360px] aspect-square flex items-center justify-center">
              {/* ForRealScan Master Logo */}
              <img 
                src={logoMaster} 
                alt="ForRealScan Logo" 
                className="w-full h-auto object-contain"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
          </div>

          {/* Headline - positioned below glow with more spacing */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 sm:mb-6 leading-tight px-2">
            {t.hero_title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            {t.hero_subtitle}
          </p>

          {/* CTA Buttons - Touch-friendly on mobile */}
          <div className="flex flex-col gap-3 justify-center items-center px-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center w-full">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-veritas to-robo hover:opacity-90 hover:shadow-xl text-white shadow-lg w-full sm:w-auto sm:min-w-[240px] h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-xl transition-all"
              >
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  {t.hero_cta_primary}
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('examples')}
                className="w-full sm:w-auto sm:min-w-[240px] h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                {t.hero_cta_secondary}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {t.hero_microcopy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
