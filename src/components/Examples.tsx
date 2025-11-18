import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExamplesProps {
  language: Language;
}

export const Examples = ({ language }: ExamplesProps) => {
  const t = translations[language];

  return (
    <section id="examples" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.examples_title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {t.examples_subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          {/* Real Photo Example */}
          <Card className="border-2 border-veritas/40 hover:border-veritas hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] transition-all duration-300 backdrop-blur-sm bg-card/80 rounded-2xl">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <CardTitle className="text-xl">{t.examples_real_label}</CardTitle>
                <Badge className="bg-veritas text-veritas-foreground px-3 py-1">Real</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Placeholder for real image with enhanced styling */}
              <div className="aspect-square bg-gradient-to-br from-veritas/10 to-veritas/25 rounded-xl flex items-center justify-center border-2 border-veritas/30 shadow-lg min-h-[330px]">
                <span className="text-veritas/40 text-sm font-medium">Real Photo Placeholder</span>
              </div>
              
              {/* Veritas comment with glassmorphism */}
              <div className="bg-veritas/10 border-2 border-veritas/30 rounded-xl p-5 backdrop-blur-sm">
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-bold text-veritas">Veritas:</span> {t.examples_veritas_comment}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* AI Photo Example */}
          <Card className="border-2 border-robo/40 hover:border-robo hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-300 backdrop-blur-sm bg-card/80 rounded-2xl">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <CardTitle className="text-xl">{t.examples_ai_label}</CardTitle>
                <Badge className="bg-robo text-robo-foreground px-3 py-1">AI</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Placeholder for AI image with enhanced styling */}
              <div className="aspect-square bg-gradient-to-br from-robo/10 to-robo/25 rounded-xl flex items-center justify-center border-2 border-robo/30 shadow-lg min-h-[330px]">
                <span className="text-robo/40 text-sm font-medium">AI Photo Placeholder</span>
              </div>
              
              {/* Robo comment with glassmorphism */}
              <div className="bg-robo/10 border-2 border-robo/30 rounded-xl p-5 backdrop-blur-sm">
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-bold text-robo">Robo:</span> {t.examples_robo_comment}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
