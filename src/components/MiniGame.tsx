import { Gamepad2 } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
interface MiniGameProps {
  language: Language;
}
export const MiniGame = ({
  language
}: MiniGameProps) => {
  const t = translations[language];
  return <section id="game" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-2 border-primary/30 hover:border-primary/60 hover:shadow-[0_0_40px_rgba(34,197,94,0.2)] hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-veritas/5 to-robo/5 backdrop-blur-sm">
            <CardHeader>
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-6 sm:mb-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-veritas/30 to-robo/30 flex items-center justify-center shadow-xl">
                <Gamepad2 className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary" strokeWidth={2.5} />
              </div>
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                {t.game_title}
              </CardTitle>
              <CardDescription className="text-base sm:text-lg md:text-xl leading-relaxed px-2">
                {t.game_subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 sm:pt-8">
              <Button asChild size="lg" className="w-full sm:w-auto sm:min-w-[260px] h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-xl bg-gradient-to-r from-veritas to-robo hover:opacity-90 shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all duration-300">
                <a href="https://game.forrealscan.com" target="_blank" rel="noopener noreferrer" className="text-center">
                  {t.game_cta}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};