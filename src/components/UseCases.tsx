import { Users, FileText, Heart, Camera } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface UseCasesProps {
  language: Language;
}

export const UseCases = ({ language }: UseCasesProps) => {
  const t = translations[language];

  const cases = [
    {
      icon: Users,
      title: t.case1_title,
      description: t.case1_text,
      color: 'from-veritas to-veritas-glow',
    },
    {
      icon: FileText,
      title: t.case2_title,
      description: t.case2_text,
      color: 'from-robo to-robo-glow',
    },
    {
      icon: Heart,
      title: t.case3_title,
      description: t.case3_text,
      color: 'from-veritas to-robo',
    },
    {
      icon: Camera,
      title: t.case4_title,
      description: t.case4_text,
      color: 'from-robo-glow to-veritas-glow',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.cases_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {cases.map((useCase, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 p-2 flex flex-col h-full rounded-2xl">
              <CardHeader className="flex-grow">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-6 shadow-lg hover:shadow-xl transition-shadow`}>
                  <useCase.icon className="w-9 h-9 text-white" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-lg mb-3">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
