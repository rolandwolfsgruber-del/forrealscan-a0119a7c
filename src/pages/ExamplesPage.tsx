import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, AlertTriangle, XCircle, Info, Globe } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { LANGUAGE_STORAGE_KEY } from '@/lib/constants';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import squirrelReal from '@/assets/squirrel-real.jpg';
import squirrelAi from '@/assets/squirrel-ai.png';
import butterflyAi from '@/assets/butterfly-ai.webp';

const ExamplesPage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from localStorage, fallback to browser language or 'de'
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && ['de', 'en', 'it', 'es', 'fr'].includes(stored)) {
      return stored as Language;
    }
    const browserLang = navigator.language.split('-')[0];
    if (['de', 'en', 'it', 'es', 'fr'].includes(browserLang)) {
      return browserLang as Language;
    }
    return 'de';
  });

  const t = translations[language];

  // Persist language selection
  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const languages: { code: Language; label: string }[] = [
    { code: 'de', label: 'Deutsch' },
    { code: 'en', label: 'English' },
    { code: 'it', label: 'Italiano' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
  ];

  const examples = [
    {
      id: 1,
      title: t.examples_real_label,
      image: squirrelReal,
      score: 12,
      verdict: 'authentic' as const,
      veritasSays: t.examples_real_veritas,
      roboSays: t.examples_real_robo,
      explanation: t.examples_real_explanation,
    },
    {
      id: 2,
      title: t.examples_ai1_title,
      image: squirrelAi,
      score: 87,
      verdict: 'ai' as const,
      veritasSays: t.examples_ai1_veritas,
      roboSays: t.examples_ai1_robo,
      explanation: t.examples_ai1_explanation,
    },
    {
      id: 3,
      title: t.examples_ai2_title,
      image: butterflyAi,
      score: 94,
      verdict: 'ai' as const,
      veritasSays: t.examples_ai2_veritas,
      roboSays: t.examples_ai2_robo,
      explanation: t.examples_ai2_explanation,
    },
  ];

  const getVerdictIcon = (verdict: 'authentic' | 'uncertain' | 'ai') => {
    switch (verdict) {
      case 'authentic':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'uncertain':
        return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
      case 'ai':
        return <XCircle className="w-6 h-6 text-red-500" />;
      default:
        return null;
    }
  };

  const getScoreColor = (score: number) => {
    if (score <= 30) return 'from-green-500 to-green-600';
    if (score <= 70) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  const getConfidenceLevel = (score: number): string => {
    if (score <= 30) return t.confidence_high;
    if (score <= 70) return t.confidence_medium;
    return t.confidence_high;
  };

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header with Back Button and Language Selector */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.examples_page_back}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                <span className="text-xs uppercase">{language}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={language === lang.code ? 'bg-accent' : ''}
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t.examples_page_title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.examples_page_subtitle}
          </p>
        </div>

        {/* Top Disclaimer Box */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mb-12 flex gap-4">
          <Info className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-foreground">
              {t.examples_page_disclaimer}
            </p>
          </div>
        </div>

        {/* Example Cards */}
        <div className="space-y-12">
          {examples.map((example) => (
            <div
              key={example.id}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative aspect-square md:aspect-auto">
                  <img
                    src={example.image}
                    alt={example.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Score Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`bg-gradient-to-r ${getScoreColor(example.score)} text-white px-4 py-2 rounded-full font-bold shadow-lg`}>
                      {example.score}% AI
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Title and Verdict */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{example.title}</h2>
                    </div>
                    <div className="flex items-center gap-2">
                      {getVerdictIcon(example.verdict)}
                      <span className="text-sm font-medium">
                        {t.confidence_label}: {getConfidenceLevel(example.score)}
                      </span>
                    </div>
                  </div>

                  {/* Veritas & Robo Analysis */}
                  <div className="space-y-4">
                    <div className="bg-veritas/10 border border-veritas/30 rounded-lg p-4">
                      <h4 className="font-semibold text-veritas mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-veritas rounded-full"></span>
                        {t.examples_page_veritas_says}
                      </h4>
                      <p className="text-sm text-muted-foreground">{example.veritasSays}</p>
                    </div>
                    <div className="bg-robo/10 border border-robo/30 rounded-lg p-4">
                      <h4 className="font-semibold text-robo mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-robo rounded-full"></span>
                        {t.examples_page_robo_says}
                      </h4>
                      <p className="text-sm text-muted-foreground">{example.roboSays}</p>
                    </div>
                  </div>

                  {/* Detailed Explanation */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t.examples_page_context_label}</h4>
                    <p className="text-sm text-muted-foreground">{example.explanation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">{t.examples_page_cta_title}</h3>
          <p className="text-muted-foreground mb-6">
            {t.examples_page_cta_text}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-veritas to-robo hover:opacity-90 text-white shadow-lg h-14 px-8 text-lg"
          >
            <a
              href="https://app.forrealscan.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.examples_page_cta_button}
            </a>
          </Button>
        </div>

        {/* Additional Context Section */}
        <div className="mt-16 prose prose-gray max-w-none">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.examples_page_context_title}</h2>
          <p className="text-muted-foreground mb-4">
            {t.examples_page_context_p1}
          </p>
          <p className="text-muted-foreground mb-4">
            {t.examples_page_context_p2}
          </p>
          <p className="text-muted-foreground">
            {t.examples_page_context_p3}{' '}
            <a href="/methodology" className="text-primary hover:underline">
              {t.examples_page_methodology_link}
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExamplesPage;
