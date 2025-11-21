import { Scale, MessageSquare, AlertTriangle } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface HowItWorksProps {
  language: Language;
}

export const HowItWorks = ({ language }: HowItWorksProps) => {
  const t = translations[language];

  const steps = [
    {
      icon: Scale,
      title: t.how_step1_title,
      description: t.how_step1_text,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MessageSquare,
      title: t.how_step2_title,
      description: t.how_step2_text,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: AlertTriangle,
      title: t.how_step3_title,
      description: t.how_step3_text,
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t.how_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="mb-4">
                    <div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-center mb-4">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
