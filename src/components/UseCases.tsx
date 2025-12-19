import { useState } from 'react';
import { Users, Newspaper, Heart, Camera, ChevronDown } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Theme } from '@/components/ThemeToggle';

interface UseCasesProps {
  language: Language;
  theme?: Theme;
}

export const UseCases = ({ language, theme }: UseCasesProps) => {
  const t = translations[language];
  const [openCards, setOpenCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setOpenCards(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const cases = [
    {
      icon: Users,
      color: 'from-veritas via-veritas/80 to-veritas/60',
      glowColor: 'rgba(34, 197, 94, 0.3)',
      title: t.case1_title,
      description: t.case1_text,
      details: [t.case1_detail1, t.case1_detail2, t.case1_detail3],
    },
    {
      icon: Newspaper,
      color: 'from-robo via-robo/80 to-robo/60',
      glowColor: 'rgba(59, 130, 246, 0.3)',
      title: t.case2_title,
      description: t.case2_text,
      details: [t.case2_detail1, t.case2_detail2, t.case2_detail3],
    },
    {
      icon: Heart,
      color: 'from-veritas/70 via-robo/60 to-robo/80',
      glowColor: 'rgba(139, 92, 246, 0.3)',
      title: t.case3_title,
      description: t.case3_text,
      details: [t.case3_detail1, t.case3_detail2, t.case3_detail3],
    },
    {
      icon: Camera,
      color: 'from-robo/60 via-veritas/50 to-veritas/70',
      glowColor: 'rgba(45, 165, 170, 0.3)',
      title: t.case4_title,
      description: t.case4_text,
      details: [t.case4_detail1, t.case4_detail2, t.case4_detail3],
    },
  ];

  return (
    <section id="use-cases" className="py-12 sm:py-16 md:py-20 bg-muted/20 relative overflow-hidden">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-veritas to-robo bg-clip-text text-transparent">
              {t.cases_title}
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {cases.map((useCase, index) => {
            const Icon = useCase.icon;
            const isOpen = openCards.includes(index);

            return (
              <AnimatedSection key={index} delay={index * 100}>
                <Collapsible
                  open={isOpen}
                  onOpenChange={() => toggleCard(index)}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer h-full border-2 hover:border-transparent relative overflow-hidden">
                    {/* Hover glow effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${useCase.glowColor} 0%, transparent 70%)`,
                      }}
                    />

                    <CollapsibleTrigger className="w-full text-left">
                      <CardHeader className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                          >
                            <Icon className="w-7 h-7 text-white group-hover:rotate-6 transition-transform duration-300" strokeWidth={2} />
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">{useCase.title}</CardTitle>
                        <CardDescription className="text-base">
                          {useCase.description}
                        </CardDescription>
                      </CardHeader>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <CardContent className="pt-0 relative z-10">
                        <div className="mt-4 pt-4 border-t border-border">
                          <ul className="space-y-3">
                            {useCase.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span className="text-sm text-muted-foreground leading-relaxed">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
