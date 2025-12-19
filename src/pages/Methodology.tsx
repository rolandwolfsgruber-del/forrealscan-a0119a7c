import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Eye, Brain, AlertTriangle, Lock, HelpCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Language, translations } from '@/lib/translations';
import { LANGUAGE_STORAGE_KEY } from '@/lib/constants';
import { SubPageHeader } from '@/components/SubPageHeader';
import { Footer } from '@/components/Footer';
import { useTheme } from '@/hooks/useTheme';

const Methodology = () => {
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
      <div className="flex-1 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <SubPageHeader
            language={language}
            setLanguage={setLanguage}
            theme={theme}
            onThemeToggle={toggleTheme}
            backLabel={t.common_back}
          />

          <h1 className="text-4xl font-bold mb-4">{t.methodology_title}</h1>
        <p className="text-xl text-muted-foreground mb-6">
          {t.methodology_subtitle}
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Button asChild>
            <a href="https://app.forrealscan.com" target="_blank" rel="noopener noreferrer">
              {t.methodology_cta_scan}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/examples">
              {t.methodology_cta_examples}
            </Link>
          </Button>
        </div>

        <div className="prose prose-gray max-w-none space-y-12">
          {/* Section 1: What ForRealScan Does */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-veritas to-robo flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground m-0">{t.methodology_what_title}</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              {t.methodology_what_p1}
            </p>
            <p className="text-muted-foreground">
              {t.methodology_what_p2}
            </p>
          </section>

          {/* Section 2: How the Scan Works */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-veritas to-robo flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground m-0">{t.methodology_how_title}</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              {t.methodology_how_intro}
            </p>

            <div className="bg-card border border-border rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-veritas mb-2">{t.methodology_veritas_title}</h3>
              <p className="text-muted-foreground mb-4">
                {t.methodology_veritas_text}
              </p>
              <h3 className="text-lg font-semibold text-robo mb-2">{t.methodology_robo_title}</h3>
              <p className="text-muted-foreground">
                {t.methodology_robo_text}
              </p>
            </div>

            <p className="text-muted-foreground">
              {t.methodology_how_outro}
            </p>
          </section>

          {/* Section 3: What the Results Mean */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-veritas to-robo flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground m-0">{t.methodology_results_title}</h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-green-600 mb-1">{t.methodology_results_low_title}</h4>
                <p className="text-sm text-muted-foreground">
                  {t.methodology_results_low_text}
                </p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-600 mb-1">{t.methodology_results_mid_title}</h4>
                <p className="text-sm text-muted-foreground">
                  {t.methodology_results_mid_text}
                </p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-red-600 mb-1">{t.methodology_results_high_title}</h4>
                <p className="text-sm text-muted-foreground">
                  {t.methodology_results_high_text}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground">
              {t.methodology_results_outro}
            </p>
          </section>

          {/* Section 4: Limitations */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground m-0">{t.methodology_limits_title}</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              {t.methodology_limits_intro}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>{t.methodology_limits_compressed}</li>
              <li>{t.methodology_limits_screenshots}</li>
              <li>{t.methodology_limits_hybrid}</li>
              <li>{t.methodology_limits_new_models}</li>
              <li>{t.methodology_limits_professional}</li>
            </ul>
            <p className="text-muted-foreground">
              {t.methodology_limits_outro}
            </p>
          </section>

          {/* Section 5: Responsible Use */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-veritas to-robo flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground m-0">{t.methodology_responsible_title}</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              {t.methodology_responsible_intro}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>{t.methodology_responsible_point1}</li>
              <li>{t.methodology_responsible_point2}</li>
              <li>{t.methodology_responsible_point3}</li>
              <li>{t.methodology_responsible_point4}</li>
            </ul>
            <p className="text-muted-foreground">
              {t.methodology_responsible_outro}
            </p>
          </section>

          {/* Section 6: Privacy */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-veritas to-robo flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground m-0">{t.methodology_privacy_title}</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              {t.methodology_privacy_intro}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>{t.methodology_privacy_point1}</li>
              <li>{t.methodology_privacy_point2}</li>
              <li>{t.methodology_privacy_point3}</li>
              <li>{t.methodology_privacy_point4}</li>
            </ul>
            <p className="text-muted-foreground">
              {t.methodology_privacy_link}{' '}
              <a href="/privacy" className="text-primary hover:underline">{t.footer_privacy}</a>.
            </p>
          </section>

          {/* Summary Box */}
          <section className="bg-muted/50 border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">{t.methodology_summary_title}</h3>
            <p className="text-sm text-muted-foreground">
              {t.methodology_summary_text}
            </p>
          </section>
        </div>
        </div>
      </div>
      <Footer language={language} theme={theme} />
    </div>
  );
};

export default Methodology;
