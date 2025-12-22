import { FileText, ImageIcon } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Theme } from '@/components/ThemeToggle';

interface StoryCheckProps {
  language: Language;
  theme?: Theme;
}

export const StoryCheck = ({ language, theme }: StoryCheckProps) => {
  const t = translations[language];

  const cards = [
    {
      icon: FileText,
      title: t.story_text_title,
      description: t.story_text_desc,
      color: 'from-indigo-500 to-purple-500',
      glowColor: 'rgba(99, 102, 241, 0.3)',
    },
    {
      icon: ImageIcon,
      title: t.story_check_title,
      description: t.story_check_desc,
      color: 'from-emerald-500 to-teal-500',
      glowColor: 'rgba(16, 185, 129, 0.3)',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-veritas to-robo bg-clip-text text-transparent">
              {t.story_title}
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <AnimatedSection key={index} delay={index * 150}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-transparent relative overflow-hidden h-full">
                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${card.glowColor} 0%, transparent 70%)`,
                    }}
                  />

                  <CardHeader className="relative z-10">
                    <div className="mb-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white group-hover:rotate-6 transition-transform duration-300" strokeWidth={2} />
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-4 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground leading-relaxed">
                      {card.description}
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
