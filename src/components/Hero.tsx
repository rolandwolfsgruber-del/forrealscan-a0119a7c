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
          <div className="relative mb-20 flex justify-center">
            {/* Dual Glow Background - Larger and More Intense */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[500px] h-[500px] sm:w-[600px] sm:h-[600px]">
                {/* Veritas Glow (Left/Green) - Static, No Animation */}
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-80"
                  style={{
                    background: 'radial-gradient(circle, hsl(var(--veritas-glow)) 0%, transparent 65%)',
                  }}
                />
                {/* Robo Glow (Right/Blue) - Static, No Animation */}
                <div 
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-80"
                  style={{
                    background: 'radial-gradient(circle, hsl(var(--robo-glow)) 0%, transparent 65%)',
                  }}
                />
              </div>
            </div>

            {/* Logo Placeholder - 35-45% Larger */}
            <div className="relative z-10 h-44 w-88 sm:h-56 sm:w-[440px] bg-gradient-to-r from-veritas to-robo rounded-3xl flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl">ForRealScan</span>
            </div>
          </div>

          {/* Headline - positioned below glow with more spacing */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
            {t.hero_title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.hero_subtitle}
          </p>

          {/* CTA Buttons - Larger and Stronger */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-veritas to-robo hover:opacity-90 hover:shadow-xl text-white shadow-lg min-w-[240px] h-14 text-lg font-semibold rounded-xl transition-all"
            >
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                {t.hero_cta_primary}
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('examples')}
              className="min-w-[240px] h-14 text-lg font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              {t.hero_cta_secondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
