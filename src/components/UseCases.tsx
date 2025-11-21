import { useState } from 'react';
import { Users, Newspaper, Heart, Camera, ChevronDown } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface UseCasesProps {
  language: Language;
}

export const UseCases = ({ language }: UseCasesProps) => {
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
      color: 'from-purple-500 to-pink-500',
      title: t.case1_title,
      description: t.case1_text,
      details: [t.case1_detail1, t.case1_detail2, t.case1_detail3],
    },
    {
      icon: Newspaper,
      color: 'from-blue-500 to-cyan-500',
      title: t.case2_title,
      description: t.case2_text,
      details: [t.case2_detail1, t.case2_detail2, t.case2_detail3],
    },
    {
      icon: Heart,
      color: 'from-rose-500 to-red-500',
      title: t.case3_title,
      description: t.case3_text,
      details: [t.case3_detail1, t.case3_detail2, t.case3_detail3],
    },
    {
      icon: Camera,
      color: 'from-amber-500 to-orange-500',
      title: t.case4_title,
      description: t.case4_text,
      details: [t.case4_detail1, t.case4_detail2, t.case4_detail3],
    },
  ];

  return (
    <section id="use-cases" className="py-12 sm:py-16 md:py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t.cases_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {cases.map((useCase, index) => {
            const Icon = useCase.icon;
            const isOpen = openCards.includes(index);
            
            return (
              <Collapsible 
                key={index}
                open={isOpen}
                onOpenChange={() => toggleCard(index)}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                  <CollapsibleTrigger className="w-full text-left">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div 
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      <CardTitle className="text-xl mb-2">{useCase.title}</CardTitle>
                      <CardDescription className="text-base">
                        {useCase.description}
                      </CardDescription>
                    </CardHeader>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardContent className="pt-0">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
