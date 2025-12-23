import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Gamepad2, ExternalLink, Eye, Brain, Trophy } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { LANGUAGE_STORAGE_KEY } from '@/lib/constants';
import { SubPageHeader } from '@/components/SubPageHeader';
import { Footer } from '@/components/Footer';
import { useTheme } from '@/hooks/useTheme';

const Game = () => {
  const { theme, toggleTheme } = useTheme();

  const [language, setLanguage] = useState<Language>(() => {
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

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <SubPageHeader
            language={language}
            setLanguage={setLanguage}
            theme={theme}
            onThemeToggle={toggleTheme}
            backLabel={t.common_back}
          />

          <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-veritas to-robo flex items-center justify-center mx-auto mb-8">
            <Gamepad2 className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {t.game_page_title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t.game_page_subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <Eye className="w-10 h-10 text-veritas mx-auto mb-4" />
            <h3 className="font-semibold mb-2">{t.game_feature1_title}</h3>
            <p className="text-sm text-muted-foreground">
              {t.game_feature1_text}
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <Brain className="w-10 h-10 text-robo mx-auto mb-4" />
            <h3 className="font-semibold mb-2">{t.game_feature2_title}</h3>
            <p className="text-sm text-muted-foreground">
              {t.game_feature2_text}
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <Trophy className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">{t.game_feature3_title}</h3>
            <p className="text-sm text-muted-foreground">
              {t.game_feature3_text}
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-veritas to-robo hover:opacity-90 text-white shadow-lg h-14 px-8 text-lg"
          >
            <a
              href="https://game.forrealscan.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Gamepad2 className="mr-2 h-5 w-5" />
              {t.game_start}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-16 prose prose-gray max-w-none">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.game_why_title}</h2>
          <p className="text-muted-foreground mb-4">
            {t.game_why_p1}
          </p>
          <p className="text-muted-foreground">
            {t.game_why_p2}
          </p>
        </div>
        </div>
      </div>
      <Footer language={language} theme={theme} />
    </div>
  );
};

export default Game;
