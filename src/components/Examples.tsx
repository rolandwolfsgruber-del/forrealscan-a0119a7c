import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExamplesProps {
  language: Language;
}

export const Examples = ({ language }: ExamplesProps) => {
  const t = translations[language];

  return (
    <section id="examples" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.examples_title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.examples_subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Real Photo Example */}
          <Card className="border-2 border-veritas/30 hover:border-veritas transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <CardTitle className="text-xl">{t.examples_real_label}</CardTitle>
                <Badge className="bg-veritas text-veritas-foreground">Real</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Placeholder for real image */}
              <div className="aspect-square bg-gradient-to-br from-veritas/5 to-veritas/20 rounded-xl flex items-center justify-center border border-veritas/20">
                <span className="text-veritas/40 text-sm font-medium">Real Photo Placeholder</span>
              </div>
              
              {/* Veritas comment */}
              <div className="bg-veritas/5 border border-veritas/20 rounded-lg p-4">
                <p className="text-sm text-foreground">
                  <span className="font-semibold text-veritas">Veritas:</span> {t.examples_veritas_comment}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* AI Photo Example */}
          <Card className="border-2 border-robo/30 hover:border-robo transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <CardTitle className="text-xl">{t.examples_ai_label}</CardTitle>
                <Badge className="bg-robo text-robo-foreground">AI</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Placeholder for AI image */}
              <div className="aspect-square bg-gradient-to-br from-robo/5 to-robo/20 rounded-xl flex items-center justify-center border border-robo/20">
                <span className="text-robo/40 text-sm font-medium">AI Photo Placeholder</span>
              </div>
              
              {/* Robo comment */}
              <div className="bg-robo/5 border border-robo/20 rounded-lg p-4">
                <p className="text-sm text-foreground">
                  <span className="font-semibold text-robo">Robo:</span> {t.examples_robo_comment}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
