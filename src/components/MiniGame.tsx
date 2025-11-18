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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto border-2 border-primary/30 bg-gradient-to-br from-veritas/5 via-background to-robo/5">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-veritas to-robo flex items-center justify-center mx-auto mb-4">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl sm:text-4xl font-bold">
              {t.game_title}
            </CardTitle>
            <CardDescription className="text-base mt-2">
              {t.game_subtitle}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-8">
            <Button 
              size="lg" 
              variant="outline"
              disabled
              className="min-w-[200px]"
            >
              {t.game_cta}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
