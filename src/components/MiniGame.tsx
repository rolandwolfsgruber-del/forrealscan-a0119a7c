import { Gamepad2 } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Theme } from '@/components/ThemeToggle';

interface MiniGameProps {
  language: Language;
  theme?: Theme;
}

export const MiniGame = ({ language, theme }: MiniGameProps) => {
  const t = translations[language];

  return (
    <section id="game" className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-scale">
            <Card className="group border-2 border-primary/30 hover:border-primary/60 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)] hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-veritas/3 to-robo/3 backdrop-blur-sm relative overflow-hidden">
              {/* Animated gradient background orbs */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-veritas to-veritas-glow opacity-5 blur-3xl animate-pulse-glow" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-robo to-robo-glow opacity-5 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

              <CardHeader className="relative z-10">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-6 sm:mb-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-veritas/30 to-robo/30 flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <Gamepad2 className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary group-hover:rotate-6 transition-transform duration-300" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-veritas to-robo bg-clip-text text-transparent">
                    {t.game_title}
                  </span>
                </CardTitle>
                <CardDescription className="text-base sm:text-lg md:text-xl leading-relaxed px-2">
                  {t.game_subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 sm:pt-8 relative z-10">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto sm:min-w-[260px] h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-xl bg-gradient-to-r from-veritas to-robo hover:opacity-90 shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition-all duration-300 relative overflow-hidden group/btn"
                >
                  <a href="https://game.forrealscan.com" target="_blank" rel="noopener noreferrer" className="text-center">
                    {/* Shimmer effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                    <span className="relative z-10">{t.game_cta}</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
