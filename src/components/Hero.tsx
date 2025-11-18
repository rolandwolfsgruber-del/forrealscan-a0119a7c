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
    <section id="start" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Hero content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo with Glow Effect - Fully Free-Floating */}
          <div className="relative mb-16 flex justify-center">
            {/* Wide Soft Glow Behind Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[600px] h-[500px] sm:w-[700px] sm:h-[600px]">
                {/* Veritas Glow (Left/Green) */}
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full blur-[100px] opacity-60"
                  style={{
                    background: 'radial-gradient(circle, #22c55e 0%, transparent 70%)',
                  }}
                />
                {/* Robo Glow (Right/Blue) */}
                <div 
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full blur-[100px] opacity-60"
                  style={{
                    background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
                  }}
                />
              </div>
            </div>

            {/* ForRealScan Master Logo - No Container, No Background */}
            <img 
              src={logoMaster} 
              alt="ForRealScan Logo" 
              className="relative z-10 w-[320px] h-auto sm:w-[400px] object-contain"
              style={{ imageRendering: 'crisp-edges' }}
            />
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
