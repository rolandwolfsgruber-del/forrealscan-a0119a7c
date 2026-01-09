import { useState, useEffect, useRef } from 'react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

  const gradientClass = colorClass === 'green'
    ? 'from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800 group-hover:border-green-400'
    : 'from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800 group-hover:border-blue-400';

  const spinnerColor = colorClass === 'green' ? 'text-green-500' : 'text-blue-500';

  return (
    <div
      ref={containerRef}
      className={`w-full rounded-lg bg-gradient-to-br ${gradientClass} border overflow-hidden transition-colors duration-300 relative`}
      style={{ height: '280px' }}
    >
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-transparent to-transparent">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className={`w-8 h-8 ${spinnerColor} animate-spin`} />
            <span className="text-sm text-muted-foreground">3D lädt...</span>
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
              style="width: 100%; height: 100%; border-radius: 16px; overflow: hidden;">
            </model-viewer>`
          }}
        />
      )}
    </div>
  );
};

export const VeritasRobo = ({ language, theme }: VeritasRoboProps) => {
  const t = translations[language];

  return (
    <section id="veritas-robo" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

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

        {/* Two Cards Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Veritas Card */}
          <AnimatedSection delay={0} animation="fade-left">
            <Card className="group border-t-4 border-t-green-500 hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 100%, rgba(34, 197, 94, 0.2) 0%, transparent 70%)',
                }}
              />

              <CardHeader className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle className="text-xl sm:text-2xl group-hover:text-veritas transition-colors duration-300">{t.veritas_name}</CardTitle>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-sm text-muted-foreground">{t.veritas_subtitle}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t.veritas_description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2 group/item">
                    <span className="text-green-500 mt-1 group-hover/item:scale-125 transition-transform">•</span>
                    <span>{t.veritas_bullet1}</span>
                  </li>
                  <li className="flex items-start gap-2 group/item">
                    <span className="text-green-500 mt-1 group-hover/item:scale-125 transition-transform">•</span>
                    <span>{t.veritas_bullet2}</span>
                  </li>
                  <li className="flex items-start gap-2 group/item">
                    <span className="text-green-500 mt-1 group-hover/item:scale-125 transition-transform">•</span>
                    <span>{t.veritas_bullet3}</span>
                  </li>
                </ul>

                {/* Veritas 3D Viewer - Lazy Loaded (Draco compressed) */}
                <Lazy3DModel
                  src="/models/veritas-owl-compressed.glb"
                  alt="Veritas 3D Modell"
                  colorClass="green"
                />
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Robo Card */}
          <AnimatedSection delay={150} animation="fade-right">
            <Card className="group border-t-4 border-t-blue-500 hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                }}
              />

              <CardHeader className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle className="text-xl sm:text-2xl group-hover:text-robo transition-colors duration-300">{t.robo_name}</CardTitle>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-sm text-muted-foreground">{t.robo_subtitle}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t.robo_description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2 group/item">
                    <span className="text-blue-500 mt-1 group-hover/item:scale-125 transition-transform">•</span>
                    <span>{t.robo_bullet1}</span>
                  </li>
                  <li className="flex items-start gap-2 group/item">
                    <span className="text-blue-500 mt-1 group-hover/item:scale-125 transition-transform">•</span>
                    <span>{t.robo_bullet2}</span>
                  </li>
                  <li className="flex items-start gap-2 group/item">
                    <span className="text-blue-500 mt-1 group-hover/item:scale-125 transition-transform">•</span>
                    <span>{t.robo_bullet3}</span>
                  </li>
                </ul>

                {/* Robo 3D Viewer - Lazy Loaded (Draco compressed) */}
                <Lazy3DModel
                  src="/models/robo-compressed.glb"
                  alt="Robo 3D Modell"
                  colorClass="blue"
                />
              </CardContent>
            </Card>
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
