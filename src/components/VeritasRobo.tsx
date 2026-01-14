import { useState, useEffect, useRef } from 'react';
import { Language, translations } from '@/lib/translations';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Theme } from '@/components/ThemeToggle';
import { Loader2 } from 'lucide-react';

interface VeritasRoboProps {
  language: Language;
  theme?: Theme;
}

// Lazy 3D Model Component with IntersectionObserver
const Lazy3DModel = ({
  src,
  alt,
  colorClass
}: {
  src: string;
  alt: string;
  colorClass: 'green' | 'blue';
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px', threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Listen for model-viewer load event
  useEffect(() => {
    if (!isVisible) return;

    const handleLoad = () => setIsLoaded(true);
    const container = containerRef.current;
    const modelViewer = container?.querySelector('model-viewer');

    if (modelViewer) {
      modelViewer.addEventListener('load', handleLoad);
      return () => modelViewer.removeEventListener('load', handleLoad);
    }
  }, [isVisible]);

  const spinnerColor = colorClass === 'green' ? 'text-green-400' : 'text-blue-400';

  return (
    <div
      ref={containerRef}
      className="w-full rounded-xl overflow-hidden transition-all duration-300 relative bg-transparent"
      style={{ height: '280px' }}
    >
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className={`w-8 h-8 ${spinnerColor} animate-spin`} />
            <span className="text-sm text-white/60">3D lädt...</span>
          </div>
        </div>
      )}

      {/* Model Viewer - only render when visible */}
      {isVisible && (
        <div
          className={`w-full h-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          dangerouslySetInnerHTML={{
            __html: `<model-viewer
              src="${src}"
              alt="${alt}"
              auto-rotate
              camera-controls
              disable-zoom
              exposure="1.1"
              loading="lazy"
              style="width: 100%; height: 100%; border-radius: 16px; overflow: hidden; --poster-color: transparent;">
            </model-viewer>`
          }}
        />
      )}
    </div>
  );
};

// Firefly particles component for Veritas
const Fireflies = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="firefly" />
    <div className="firefly" />
    <div className="firefly" />
    <div className="firefly" />
    <div className="firefly" />
    <div className="firefly" />
  </div>
);

// Light rays component for Veritas
const LightRays = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
    <div className="light-ray" />
    <div className="light-ray" />
    <div className="light-ray" />
  </div>
);

// Cyber particles component for Robo
const CyberParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="cyber-particle" />
    <div className="cyber-particle" />
    <div className="cyber-particle" />
    <div className="cyber-particle" />
    <div className="cyber-particle" />
    <div className="cyber-particle" />
  </div>
);

// Scan line component for Robo
const ScanLine = () => (
  <div className="robo-scan-line" />
);

export const VeritasRobo = ({ language }: VeritasRoboProps) => {
  const t = translations[language];

  return (
    <section id="veritas-robo" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Intro Block */}
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            {t.veritas_robo_label}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-veritas to-robo bg-clip-text text-transparent">
              {t.veritas_robo_title}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.veritas_robo_subtitle}
          </p>
        </AnimatedSection>

        {/* Two Cards Side by Side - Immersive Worlds */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Veritas Card - Forest World */}
          <AnimatedSection delay={0} animation="fade-left">
            <div className="veritas-world veritas-organic-border rounded-2xl p-6 sm:p-8 h-full transition-all duration-500 hover:scale-[1.02]">
              {/* Atmospheric Effects */}
              <Fireflies />
              <LightRays />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-green-400">
                      {t.veritas_name}
                    </h3>
                    <span className="text-white/40">·</span>
                    <span className="text-sm text-green-300/70">{t.veritas_subtitle}</span>
                  </div>
                  <p className="text-white/70 text-sm sm:text-base">
                    {t.veritas_description}
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 group">
                    <span className="w-2 h-2 mt-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50 group-hover:scale-150 transition-transform" />
                    <span className="text-white/90">{t.veritas_bullet1}</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="w-2 h-2 mt-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50 group-hover:scale-150 transition-transform" />
                    <span className="text-white/90">{t.veritas_bullet2}</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="w-2 h-2 mt-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50 group-hover:scale-150 transition-transform" />
                    <span className="text-white/90">{t.veritas_bullet3}</span>
                  </li>
                </ul>

                {/* 3D Model */}
                <Lazy3DModel
                  src="/models/veritas-owl-compressed.glb"
                  alt="Veritas 3D Modell"
                  colorClass="green"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Robo Card - Cyber World */}
          <AnimatedSection delay={150} animation="fade-right">
            <div className="robo-world robo-neon-border rounded-2xl p-6 sm:p-8 h-full transition-all duration-500 hover:scale-[1.02]">
              {/* Atmospheric Effects */}
              <CyberParticles />
              <ScanLine />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-blue-400">
                      {t.robo_name}
                    </h3>
                    <span className="text-white/40">·</span>
                    <span className="text-sm text-blue-300/70">{t.robo_subtitle}</span>
                  </div>
                  <p className="text-white/70 text-sm sm:text-base">
                    {t.robo_description}
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 group">
                    <span className="w-2 h-2 mt-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50 group-hover:scale-150 transition-transform" />
                    <span className="text-white/90">{t.robo_bullet1}</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="w-2 h-2 mt-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50 group-hover:scale-150 transition-transform" />
                    <span className="text-white/90">{t.robo_bullet2}</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="w-2 h-2 mt-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50 group-hover:scale-150 transition-transform" />
                    <span className="text-white/90">{t.robo_bullet3}</span>
                  </li>
                </ul>

                {/* 3D Model */}
                <Lazy3DModel
                  src="/models/robo-compressed.glb"
                  alt="Robo 3D Modell"
                  colorClass="blue"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Explanation Text Block Below Cards */}
        <AnimatedSection delay={300}>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <p className="text-base sm:text-lg text-foreground leading-relaxed mb-6">
                {t.veritas_robo_explanation}
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-4 bg-gradient-to-r from-veritas to-robo bg-clip-text text-transparent inline-block">
                {t.veritas_robo_help_title}
              </h3>

              <div className="space-y-4">
                <div className="group/step">
                  <p className="text-foreground group-hover/step:text-primary transition-colors duration-300">
                    {t.veritas_robo_help_step1}
                  </p>
                </div>
                <div className="group/step">
                  <p className="text-foreground group-hover/step:text-primary transition-colors duration-300">
                    {t.veritas_robo_help_step2}
                  </p>
                </div>
                <div className="group/step">
                  <p className="text-foreground group-hover/step:text-primary transition-colors duration-300">
                    {t.veritas_robo_help_step3}
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-6 italic">
                {t.veritas_robo_disclaimer}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Closing Line */}
        <AnimatedSection delay={400}>
          <p className="text-center text-sm sm:text-base text-muted-foreground mt-8">
            {t.veritas_robo_closing}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
