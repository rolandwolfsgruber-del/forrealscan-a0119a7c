import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/ui/animated-section';
import squirrelImage from '@/assets/squirrel-real.jpg';
import squirrelAiImage from '@/assets/squirrel-ai.png';

interface ExamplesProps {
  language: Language;
}

export const Examples = ({ language }: ExamplesProps) => {
  const t = translations[language];

  return (
    <section id="examples" className="py-12 sm:py-16 md:py-20 bg-muted/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-veritas to-robo bg-clip-text text-transparent">
              {t.examples_title}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {t.examples_subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          {/* Real Photo Example */}
          <AnimatedSection delay={0} animation="fade-left">
            <Card className="group border-2 border-veritas/40 hover:border-veritas hover:shadow-[0_0_35px_rgba(34,197,94,0.3)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm bg-card/80 rounded-2xl cursor-pointer relative overflow-hidden h-full">
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 30%, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
                }}
              />

              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl group-hover:text-veritas transition-colors duration-300">{t.examples_real_label}</CardTitle>
                  <Badge className="bg-veritas text-veritas-foreground px-3 py-1 shadow-lg">Real</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                {/* Real squirrel photo */}
                <div className="aspect-square rounded-xl overflow-hidden border-2 border-veritas/30 shadow-lg group-hover:shadow-xl group-hover:border-veritas/60 transition-all duration-300">
                  <img
                    src={squirrelImage}
                    alt={t.examples_real_label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Veritas comment with glassmorphism */}
                <div className="bg-veritas/10 border-2 border-veritas/30 rounded-xl p-5 backdrop-blur-sm group-hover:border-veritas/50 transition-colors duration-300">
                  <p className="text-sm text-foreground leading-relaxed">
                    <span className="font-bold text-veritas">Veritas:</span> {t.examples_real_veritas}
                  </p>
                </div>

                {/* Robo comment for real photo */}
                <div className="bg-muted/50 border border-border rounded-xl p-5">
                  <p className="text-sm text-foreground leading-relaxed">
                    <span className="font-bold text-robo">Robo:</span> {t.examples_real_robo}
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* AI Photo Example */}
          <AnimatedSection delay={150} animation="fade-right">
            <Card className="group border-2 border-robo/40 hover:border-robo hover:shadow-[0_0_35px_rgba(59,130,246,0.3)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm bg-card/80 rounded-2xl cursor-pointer relative overflow-hidden h-full">
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                }}
              />

              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl group-hover:text-robo transition-colors duration-300">{t.examples_ai_label}</CardTitle>
                  <Badge className="bg-robo text-robo-foreground px-3 py-1 shadow-lg">AI</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                {/* AI-generated squirrel photo */}
                <div className="aspect-square rounded-xl overflow-hidden border-2 border-robo/30 shadow-lg group-hover:shadow-xl group-hover:border-robo/60 transition-all duration-300">
                  <img
                    src={squirrelAiImage}
                    alt={t.examples_ai_label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Veritas comment for AI photo */}
                <div className="bg-muted/50 border border-border rounded-xl p-5">
                  <p className="text-sm text-foreground leading-relaxed">
                    <span className="font-bold text-veritas">Veritas:</span> {t.examples_ai1_veritas}
                  </p>
                </div>

                {/* Robo comment with glassmorphism */}
                <div className="bg-robo/10 border-2 border-robo/30 rounded-xl p-5 backdrop-blur-sm group-hover:border-robo/50 transition-colors duration-300">
                  <p className="text-sm text-foreground leading-relaxed">
                    <span className="font-bold text-robo">Robo:</span> {t.examples_robo_comment}
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
