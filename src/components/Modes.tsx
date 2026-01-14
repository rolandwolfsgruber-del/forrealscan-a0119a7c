import { Image, BookOpen, ShieldCheck } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/ui/animated-section';
import { APP_URL } from '@/lib/config';
import { Theme } from '@/components/ThemeToggle';

interface ModesProps {
  language: Language;
  theme?: Theme;
}

export const Modes = ({ language, theme }: ModesProps) => {
  const t = translations[language];

  const scanModes = [
    {
      id: 'image',
      icon: Image,
      title: t.scan_image_title,
      desc: t.scan_image_desc,
      features: [t.scan_image_feat1, t.scan_image_feat2],
      credits: t.scan_image_credits,
      creditsValue: t.scan_image_credits_value,
      color: 'veritas',
      delay: 0,
      highlighted: false,
    },
    {
      id: 'story',
      icon: BookOpen,
      title: t.scan_story_title,
      desc: t.scan_story_desc,
      features: [t.scan_story_feat1, t.scan_story_feat2],
      credits: t.scan_story_credits,
      creditsValue: t.scan_story_credits_value,
      color: 'robo',
      delay: 150,
      highlighted: false,
    },
    {
      id: 'full',
      icon: ShieldCheck,
      title: t.scan_full_title,
      desc: t.scan_full_desc,
      features: [t.scan_full_feat1, t.scan_full_feat2, t.scan_full_feat3],
      credits: t.scan_full_credits,
      creditsValue: t.scan_full_credits_value,
      color: 'gradient',
      delay: 300,
      highlighted: true,
    },
  ];

  return (
    <section id="modes" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.scan_section_title}
          </h2>
          <button
            className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors cursor-pointer"
            onClick={() => {/* Placeholder for comparison modal */}}
          >
            {t.scan_compare_link}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto pt-4">
          {scanModes.map((mode) => {
            const IconComponent = mode.icon;
            const isHighlighted = mode.highlighted;

            return (
              <AnimatedSection key={mode.id} delay={mode.delay}>
                <Card
                  className={`
                    relative h-full flex flex-col
                    ${isHighlighted
                      ? 'border-[3px] border-primary md:scale-105 shadow-2xl hover:shadow-[0_0_50px_rgba(34,197,94,0.3)]'
                      : 'border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-xl'
                    }
                    transition-all duration-300 rounded-2xl overflow-hidden
                  `}
                >
                  {/* Highlighted Badge */}
                  {isHighlighted && (
                    <Badge
                      className="absolute top-3 right-4 z-10 bg-primary text-primary-foreground font-semibold"
                    >
                      {t.scan_most_popular}
                    </Badge>
                  )}

                  {/* Background gradient effect */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 opacity-15 blur-3xl ${
                      mode.color === 'veritas' ? 'bg-veritas' :
                      mode.color === 'robo' ? 'bg-robo' :
                      'bg-gradient-to-br from-veritas to-robo'
                    }`}
                  />

                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          mode.color === 'veritas' ? 'bg-veritas/20' :
                          mode.color === 'robo' ? 'bg-robo/20' :
                          'bg-gradient-to-br from-veritas/20 to-robo/20'
                        }`}
                      >
                        <IconComponent
                          className={`w-7 h-7 ${
                            mode.color === 'veritas' ? 'text-veritas' :
                            mode.color === 'robo' ? 'text-robo' :
                            'text-primary'
                          }`}
                          strokeWidth={2}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-foreground">{mode.creditsValue}</span>
                        <span className="text-sm text-muted-foreground">{mode.credits}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{mode.title}</CardTitle>
                    <CardDescription className="text-sm">{mode.desc}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-2 mb-6 flex-1">
                      {mode.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            mode.color === 'veritas' ? 'bg-veritas' :
                            mode.color === 'robo' ? 'bg-robo' :
                            'bg-primary'
                          }`} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className={`w-full mt-auto ${
                        isHighlighted
                          ? 'bg-primary hover:bg-primary/90'
                          : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                      }`}
                    >
                      <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                        {t.scan_cta}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
