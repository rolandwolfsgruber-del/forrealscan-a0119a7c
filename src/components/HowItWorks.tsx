import { Upload, Scan, CheckCircle } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface HowItWorksProps {
  language: Language;
}

export const HowItWorks = ({ language }: HowItWorksProps) => {
  const t = translations[language];

  const steps = [
    {
      icon: Upload,
      title: t.how_step1_title,
      description: t.how_step1_text,
      color: 'text-veritas',
    },
    {
      icon: Scan,
      title: t.how_step2_title,
      description: t.how_step2_text,
      color: 'text-robo',
    },
    {
      icon: CheckCircle,
      title: t.how_step3_title,
      description: t.how_step3_text,
      color: 'text-veritas',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.how_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 p-2">
              <CardHeader>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-veritas/20 to-robo/20 flex items-center justify-center mb-6 ${step.color}`}>
                  <step.icon className="w-11 h-11" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-xl font-bold">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
