import { Gamepad2 } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MiniGameProps {
  language: Language;
}

export const MiniGame = ({ language }: MiniGameProps) => {
  const t = translations[language];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-2 border-primary/30 hover:border-primary/60 hover:shadow-[0_0_40px_rgba(34,197,94,0.2)] transition-all duration-300 p-12 rounded-3xl bg-gradient-to-br from-veritas/5 to-robo/5 backdrop-blur-sm">
            <CardHeader>
              <div className="w-28 h-28 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-veritas/30 to-robo/30 flex items-center justify-center shadow-xl">
                <Gamepad2 className="w-16 h-16 text-primary" strokeWidth={2.5} />
              </div>
              <CardTitle className="text-4xl font-bold mb-6">
                {t.game_title}
              </CardTitle>
              <CardDescription className="text-xl leading-relaxed">
                {t.game_subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <Button 
                asChild
                size="lg"
                variant="outline"
                disabled
                className="min-w-[260px] h-14 text-lg font-semibold rounded-xl"
              >
                <a href="/game">
                  {t.game_cta}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
