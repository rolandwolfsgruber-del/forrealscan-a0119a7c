import { Button } from '@/components/ui/button';
import { Language, translations } from '@/lib/translations';
import { APP_URL } from '@/lib/config';

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
    <section id="start" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Hero content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo with Glow Effect */}
          <div className="relative mb-12 flex justify-center">
            {/* Dual Glow Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                {/* Veritas Glow (Left/Green) */}
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-60 animate-glow-shimmer"
                  style={{
                    background: 'radial-gradient(circle, hsl(var(--veritas-glow)) 0%, transparent 70%)',
                  }}
                />
                {/* Robo Glow (Right/Blue) */}
                <div 
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-60 animate-glow-shimmer"
                  style={{
                    background: 'radial-gradient(circle, hsl(var(--robo-glow)) 0%, transparent 70%)',
                    animationDelay: '1s',
                  }}
                />
              </div>
            </div>

            {/* Logo Placeholder */}
            <div className="relative z-10 h-32 w-64 sm:h-40 sm:w-80 bg-gradient-to-r from-veritas to-robo rounded-2xl flex items-center justify-center shadow-2xl animate-float">
              <span className="text-white font-bold text-2xl sm:text-3xl">ForRealScan</span>
            </div>
          </div>

          {/* Headline - positioned below glow to avoid overlap */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t.hero_title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.hero_subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-veritas to-robo hover:opacity-90 text-white shadow-lg min-w-[200px]"
            >
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                {t.hero_cta_primary}
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('examples')}
              className="min-w-[200px]"
            >
              {t.hero_cta_secondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
