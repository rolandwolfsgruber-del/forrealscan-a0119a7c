import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/animated-section';

interface VeritasRoboProps {
  language: Language;
}

export const VeritasRobo = ({ language }: VeritasRoboProps) => {
  const t = translations[language];

  return (
    <section id="veritas-robo" className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
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

                {/* Veritas 3D Viewer */}
                <div
                  id="veritas-3d-container"
                  className="w-full rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border border-green-200 dark:border-green-800 overflow-hidden group-hover:border-green-400 transition-colors duration-300"
                  style={{ height: '280px' }}
                  dangerouslySetInnerHTML={{
                    __html: '<model-viewer src="/models/veritas-owl.glb" alt="Veritas 3D Modell" auto-rotate camera-controls disable-zoom exposure="1.1" style="width: 100%; height: 100%; border-radius: 16px; overflow: hidden;"></model-viewer>'
                  }}
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

                {/* Robo 3D Viewer */}
                <div
                  id="robo-3d-container"
                  className="w-full rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border border-blue-200 dark:border-blue-800 overflow-hidden group-hover:border-blue-400 transition-colors duration-300"
                  style={{ height: '280px' }}
                  dangerouslySetInnerHTML={{
                    __html: '<model-viewer src="/models/robo.glb" alt="Robo 3D Modell" auto-rotate camera-controls disable-zoom exposure="1.1" style="width: 100%; height: 100%; border-radius: 16px; overflow: hidden;"></model-viewer>'
                  }}
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
