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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.cases_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cases.map((useCase, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4`}>
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-lg">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
