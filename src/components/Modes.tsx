import { Image, BookOpen, ShieldCheck, Lightbulb, Gift, Target, Check, ArrowRight } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { APP_URL } from '@/lib/config';
import { Theme } from '@/components/ThemeToggle';

interface ModesProps {
  language: Language;
  theme?: Theme;
}

// Custom SVG Icons matching App design
const ImageScanIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="4" y="8" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="12" cy="16" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M4 28l8-8 6 6 8-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="36" cy="32" r="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <path d="M42 38l4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M33 32l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StoryScanIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="8" y="4" width="28" height="36" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <path d="M14 12h16M14 18h16M14 24h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="36" cy="36" r="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <path d="M33 36l3 3 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FullScanIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M24 4L6 14v16c0 10 18 14 18 14s18-4 18-14V14L24 4z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M24 16v16M16 24h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="2" fill="currentColor"/>
  </svg>
);

export const Modes = ({ language, theme }: ModesProps) => {
  const t = translations[language];
  const isDark = theme === 'robo';

  const scanModes = [
    {
      id: 'image',
      Icon: ImageScanIcon,
      title: t.scan_image_title,
      subtitle: t.scan_image_subtitle,
      desc: t.scan_image_desc,
      credits: t.scan_image_credits,
      creditsValue: t.scan_image_credits_value,
      color: 'veritas' as const,
      learn: [t.scan_image_learn_1, t.scan_image_learn_2, t.scan_image_learn_3, t.scan_image_learn_4],
      get: [t.scan_image_get_1, t.scan_image_get_2, t.scan_image_get_3],
      ideal: [t.scan_image_ideal_1, t.scan_image_ideal_2, t.scan_image_ideal_3],
      delay: 0,
      highlighted: false,
    },
    {
      id: 'story',
      Icon: StoryScanIcon,
      title: t.scan_story_title,
      subtitle: t.scan_story_subtitle,
      desc: t.scan_story_desc,
      credits: t.scan_story_credits,
      creditsValue: t.scan_story_credits_value,
      color: 'robo' as const,
      learn: [t.scan_story_learn_1, t.scan_story_learn_2, t.scan_story_learn_3, t.scan_story_learn_4],
      get: [t.scan_story_get_1, t.scan_story_get_2, t.scan_story_get_3],
      ideal: [t.scan_story_ideal_1, t.scan_story_ideal_2, t.scan_story_ideal_3],
      delay: 150,
      highlighted: false,
    },
    {
      id: 'full',
      Icon: FullScanIcon,
      title: t.scan_full_title,
      subtitle: t.scan_full_subtitle,
      desc: t.scan_full_desc,
      credits: t.scan_full_credits,
      creditsValue: t.scan_full_credits_value,
      color: 'fullscan' as const,
      learn: [t.scan_full_learn_1, t.scan_full_learn_2, t.scan_full_learn_3],
      get: [t.scan_full_get_1, t.scan_full_get_2, t.scan_full_get_3, t.scan_full_get_4],
      ideal: [t.scan_full_ideal_1, t.scan_full_ideal_2, t.scan_full_ideal_3],
      delay: 300,
      highlighted: true,
    },
  ];

  const getColorClasses = (color: 'veritas' | 'robo' | 'fullscan') => {
    const colors = {
      veritas: {
        text: 'text-veritas',
        bg: 'bg-veritas/20',
        border: 'border-veritas/30',
        glow: isDark ? 'card-glow-veritas-dark' : 'card-glow-veritas-light',
        accent: '#35c66b',
      },
      robo: {
        text: 'text-robo',
        bg: 'bg-robo/20',
        border: 'border-robo/30',
        glow: isDark ? 'card-glow-robo-dark' : 'card-glow-robo-light',
        accent: '#5b7fff',
      },
      fullscan: {
        text: 'text-fullscan',
        bg: 'bg-fullscan/20',
        border: 'border-fullscan/30',
        glow: isDark ? 'card-glow-fullscan-dark' : 'card-glow-fullscan-light',
        accent: '#8b5cf6',
      },
    };
    return colors[color];
  };

  return (
    <section id="modes" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t.scan_section_title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            {t.scan_section_subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto">
          {scanModes.map((mode) => {
            const colorClasses = getColorClasses(mode.color);
            const isHighlighted = mode.highlighted;

            return (
              <AnimatedSection key={mode.id} delay={mode.delay}>
                <Card
                  className={`
                    relative h-full flex flex-col p-5 sm:p-6
                    border rounded-2xl
                    transition-all duration-300
                    ${colorClasses.glow}
                    ${isHighlighted ? 'md:scale-[1.02]' : ''}
                    ${isDark
                      ? 'bg-gradient-to-b from-slate-900/90 to-slate-950/95 border-white/10'
                      : 'bg-gradient-to-b from-white to-gray-50/80 border-gray-200/60'
                    }
                  `}
                >
                  {/* Header: Icon + Credits Badge */}
                  <div className="flex items-start justify-between mb-3">
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${colorClasses.bg}`}
                    >
                      <mode.Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${colorClasses.text}`} />
                    </div>

                    {/* Credits Badge or Premium Badge */}
                    {isHighlighted ? (
                      <span className={isDark ? 'premium-badge-dark' : 'premium-badge-light'}>
                        {t.scan_premium_badge}
                      </span>
                    ) : (
                      <span className={isDark ? 'credit-badge-dark' : 'credit-badge-light'}>
                        {mode.creditsValue} {mode.credits}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5 mb-3">
                    <h3 className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {mode.title}
                    </h3>
                    <p className={`text-sm font-medium leading-snug ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                      {mode.subtitle}
                    </p>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {mode.desc}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className={`border-t mt-4 pt-4 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                    {/* Categories */}
                    <div className="space-y-4">
                      {/* WAS DU ERFÄHRST */}
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className={`p-1 rounded-md ${isDark ? 'bg-slate-700/50' : 'bg-gray-100'}`}>
                            <Lightbulb className={`h-3.5 w-3.5 ${colorClasses.text}`} />
                          </div>
                          <span className={`text-xs font-semibold uppercase tracking-wide ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            {t.scan_cat_learn}
                          </span>
                        </div>
                        <ul className="space-y-1.5 pl-6">
                          {mode.learn.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className={`mt-1.5 ${colorClasses.text}`}>•</span>
                              <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* DU ERHÄLTST */}
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className={`p-1 rounded-md ${isDark ? 'bg-slate-700/50' : 'bg-gray-100'}`}>
                            <Gift className={`h-3.5 w-3.5 ${colorClasses.text}`} />
                          </div>
                          <span className={`text-xs font-semibold uppercase tracking-wide ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            {t.scan_cat_get}
                          </span>
                        </div>
                        <ul className="space-y-1.5 pl-6">
                          {mode.get.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className={`h-3 w-3 mt-0.5 flex-shrink-0 ${colorClasses.text}`} />
                              <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* IDEAL FÜR */}
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className={`p-1 rounded-md ${isDark ? 'bg-slate-700/50' : 'bg-gray-100'}`}>
                            <Target className={`h-3.5 w-3.5 ${colorClasses.text}`} />
                          </div>
                          <span className={`text-xs font-semibold uppercase tracking-wide ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            {t.scan_cat_ideal}
                          </span>
                        </div>
                        <ul className="space-y-1.5 pl-6">
                          {mode.ideal.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ArrowRight className={`h-3 w-3 mt-0.5 flex-shrink-0 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                              <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className={`w-full mt-6 ${
                      isHighlighted
                        ? 'bg-fullscan hover:bg-fullscan/90 text-white'
                        : isDark
                          ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                      {t.scan_cta}
                    </a>
                  </Button>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
