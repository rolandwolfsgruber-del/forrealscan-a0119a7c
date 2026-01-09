import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Language, translations } from '@/lib/translations';
import { APP_URL } from '@/lib/config';
import logoMaster from '@/assets/logo-master.webp';
import { Theme } from '@/components/ThemeToggle';

interface HeroProps {
  language: Language;
  theme?: Theme;
}
export const Hero = ({
  language,
  theme
}: HeroProps) => {
  const t = translations[language];
  const logoRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({
    x: 0,
    y: 0
  });
  const [isHovering, setIsHovering] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // 3D Tilt effect handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!logoRef.current) return;
    const rect = logoRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate tilt (max 15 degrees)
    const tiltX = mouseY / (rect.height / 2) * -10;
    const tiltY = mouseX / (rect.width / 2) * 10;
    setTilt({
      x: tiltX,
      y: tiltY
    });
  };
  const handleMouseLeave = () => {
    setTilt({
      x: 0,
      y: 0
    });
    setIsHovering(false);
  };
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  return <section id="start" className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-16">
      {/* Background - transparent to show spores */}

      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
      backgroundSize: '32px 32px'
    }} />

      {/* Hero content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo with Animated Gradient Border & Glow Effect */}
          <div className="relative mb-8 sm:mb-12 md:mb-16 flex justify-center">
            {/* Animated Glow Behind Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[450px] md:w-[600px] md:h-[550px]">
                {/* Veritas Glow (Left/Green) - Now Pulsing */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] rounded-full blur-[60px] sm:blur-[70px] animate-pulse-glow" style={{
                background: 'radial-gradient(circle, #22c55e 0%, transparent 70%)'
              }} />
                {/* Robo Glow (Right/Blue) - Now Pulsing with delay */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] rounded-full blur-[60px] sm:blur-[70px] animate-pulse-glow" style={{
                background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
                animationDelay: '2s'
              }} />
              </div>
            </div>

            {/* Animated Gradient Border Container */}
            <div ref={logoRef} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative z-10 p-[3px] sm:p-[4px] rounded-[42px] sm:rounded-[62px] md:rounded-[72px] cursor-pointer group" style={{
            background: 'linear-gradient(135deg, #22c55e, #3b82f6, #22c55e, #3b82f6)',
            backgroundSize: '300% 300%',
            animation: 'gradient-rotate 4s linear infinite',
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: isHovering ? 'none' : 'transform 0.5s ease-out'
          }}>
              {/* Inner glow on hover */}
              <div className="absolute inset-[3px] sm:inset-[4px] rounded-[40px] sm:rounded-[60px] md:rounded-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
              boxShadow: '0 0 30px 5px rgba(34, 197, 94, 0.15), 0 0 30px 5px rgba(59, 130, 246, 0.15)'
            }} />

              {/* Dark Container */}
              <div className="relative bg-[#0f1a20] rounded-[40px] sm:rounded-[60px] md:rounded-[70px] p-3 sm:p-4 md:p-6 shadow-2xl w-[220px] sm:w-[280px] md:w-[360px] aspect-square flex items-center justify-center overflow-hidden">
                {/* Scan Line Effect */}
                <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-veritas to-transparent opacity-70 animate-scan-line pointer-events-none" style={{
                boxShadow: '0 0 10px 3px rgba(34, 197, 94, 0.3)'
              }} />

                {/* ForRealScan Master Logo - Responsive with srcset */}
                <img
                  alt="ForRealScan - KI-Erkennungstool zur Analyse von Bild-Authentizität, zeigt stilisiertes Auge mit Veritas (grün) und Robo (blau) Elementen"
                  className="w-full h-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
                  style={{ imageRendering: 'crisp-edges' }}
                  src="/lovable-uploads/ed0e1459-52f3-4131-9d2f-c4342e615982.webp"
                  srcSet="/lovable-uploads/hero-logo-400w.webp 400w, /lovable-uploads/hero-logo-800w.webp 800w, /lovable-uploads/hero-logo-1200w.webp 1200w"
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, 360px"
                  width={360}
                  height={360}
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          {/* Headline with Animated Gradient Text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight px-2">
            <span className="animated-gradient-text">
              {t.hero_title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            {t.hero_subtitle}
          </p>

          {/* CTA Buttons - Touch-friendly on mobile */}
          <div className="flex flex-col gap-3 justify-center items-center px-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center w-full">
              {/* Primary CTA with Shimmer Effect */}
              <Button asChild size="lg" className="relative bg-gradient-to-r from-veritas to-robo hover:opacity-90 hover:shadow-xl text-white shadow-lg w-full sm:w-auto sm:min-w-[240px] h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-xl transition-all overflow-hidden group">
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  {/* Shimmer overlay */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10">{t.hero_cta_primary}</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('examples')} className="w-full sm:w-auto sm:min-w-[240px] h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-xl hover:shadow-lg transition-all hover:border-primary/50">
                {t.hero_cta_secondary}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {t.hero_microcopy}
            </p>
          </div>
        </div>
      </div>
    </section>;
};