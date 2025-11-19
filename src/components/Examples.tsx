import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import squirrelImage from '@/assets/squirrel-real.jpg';
import butterflyImage from '@/assets/butterfly-ai.webp';

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
              {/* Real squirrel photo */}
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-veritas/30 shadow-lg">
                <img 
                  src={squirrelImage} 
                  alt="Real photo of a squirrel in nature" 
                  className="w-full h-full object-cover"
                />
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
              {/* AI-generated butterfly photo */}
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-robo/30 shadow-lg">
                <img 
                  src={butterflyImage} 
                  alt="AI-generated photo of a butterfly on a flower" 
                  className="w-full h-full object-cover"
                />
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
