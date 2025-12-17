import { Scale, MessageSquare, AlertTriangle } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/animated-section';

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
      glowColor: 'rgba(59, 130, 246, 0.4)',
    },
    {
      icon: MessageSquare,
      title: t.how_step2_title,
      description: t.how_step2_text,
      color: 'from-purple-500 to-pink-500',
      glowColor: 'rgba(168, 85, 247, 0.4)',
    },
    {
      icon: AlertTriangle,
      title: t.how_step3_title,
      description: t.how_step3_text,
      color: 'from-amber-500 to-orange-500',
      glowColor: 'rgba(245, 158, 11, 0.4)',
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
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
              {t.how_title}
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={index} delay={index * 150}>
                <Card
                  className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-transparent relative overflow-hidden h-full"
                  style={{
                    ['--glow-color' as string]: step.glowColor,
                  }}
                >
                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${step.glowColor} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Animated border on hover */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${step.glowColor}, transparent, ${step.glowColor})`,
                      padding: '2px',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                      WebkitMaskComposite: 'xor',
                    }}
                  />

                  <CardHeader className="relative z-10">
                    <div className="mb-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white group-hover:rotate-6 transition-transform duration-300" strokeWidth={2} />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-center mb-4 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {step.description}
                    </p>
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
