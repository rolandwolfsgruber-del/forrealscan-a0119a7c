import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Eye, Brain, AlertTriangle, Lock, HelpCircle, ExternalLink, Zap, Table, CheckCircle } from 'lucide-react';
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
      <div className="flex-1 py-20 px-4 relative z-10">
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
            {/* Section 1: Three Modes */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-veritas to-robo flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground m-0">{t.methodology_modes_title}</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                {t.methodology_modes_intro}
              </p>

              {/* Mode Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Mode</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">{t.methodology_modes_table_question}</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">{t.methodology_modes_table_method}</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">{t.methodology_modes_table_credits}</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">{t.methodology_modes_table_output}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50 hover:bg-muted/50">
                      <td className="py-3 px-4 font-medium text-veritas">{t.methodology_mode_image_name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{t.methodology_mode_image_question}</td>
                      <td className="py-3 px-4 text-muted-foreground">{t.methodology_mode_image_method}</td>
                      <td className="py-3 px-4 text-muted-foreground">{t.methodology_mode_image_credits}</td>
                      <td className="py-3 px-4 text-muted-foreground">{t.methodology_mode_image_output}</td>
                    </tr>
                    <tr className="border-b border-border/50 hover:bg-muted/50">
                      <td className="py-3 px-4 font-medium text-amber-500">{t.methodology_mode_story_name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{t.methodology_mode_story_question}</td>
                      <td className="py-3 px-4 text-muted-foreground">{t.methodology_mode_story_method}</td>
                      <td className="py-3 px-4 text-muted-foreground">{t.methodology_mode_story_credits}</td>
                      <td className="py-3 px-4 text-muted-foreground">{t.methodology_mode_story_output}</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="py-3 px-4 font-medium text-robo">{t.methodology_mode_full_name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{t.methodology_mode_full_question}</td>
                      <td className="py-3 px-4 text-muted-foreground">{t.methodology_mode_full_method}</td>
                      <td className="py-3 px-4 text-muted-foreground">{t.methodology_mode_full_credits}</td>
                      <td className="py-3 px-4 text-muted-foreground">{t.methodology_mode_full_output}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-muted-foreground">
                {t.methodology_modes_outro}
              </p>
            </section>

            {/* Section 2: Dual System */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-veritas to-robo flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground m-0">{t.methodology_dual_title}</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                {t.methodology_dual_intro}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* VERITAS Card */}
                <div className="bg-card border border-veritas/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-veritas mb-1">{t.methodology_veritas_title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{t.methodology_veritas_color}</p>
                  <p className="text-sm text-muted-foreground mb-4">{t.methodology_veritas_intro}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-veritas mt-0.5 shrink-0" />
                      <span>{t.methodology_veritas_point1}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-veritas mt-0.5 shrink-0" />
                      <span>{t.methodology_veritas_point2}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-veritas mt-0.5 shrink-0" />
                      <span>{t.methodology_veritas_point3}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-veritas mt-0.5 shrink-0" />
                      <span>{t.methodology_veritas_point4}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-veritas mt-0.5 shrink-0" />
                      <span>{t.methodology_veritas_point5}</span>
                    </li>
                  </ul>
                </div>

                {/* ROBO Card */}
                <div className="bg-card border border-robo/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-robo mb-1">{t.methodology_robo_title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{t.methodology_robo_color}</p>
                  <p className="text-sm text-muted-foreground mb-4">{t.methodology_robo_intro}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Eye className="w-4 h-4 text-robo mt-0.5 shrink-0" />
                      <span>{t.methodology_robo_point1}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="w-4 h-4 text-robo mt-0.5 shrink-0" />
                      <span>{t.methodology_robo_point2}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="w-4 h-4 text-robo mt-0.5 shrink-0" />
                      <span>{t.methodology_robo_point3}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="w-4 h-4 text-robo mt-0.5 shrink-0" />
                      <span>{t.methodology_robo_point4}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="w-4 h-4 text-robo mt-0.5 shrink-0" />
                      <span>{t.methodology_robo_point5}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="w-4 h-4 text-robo mt-0.5 shrink-0" />
                      <span>{t.methodology_robo_point6}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted/50 border border-border rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-2">{t.methodology_dual_cooperation}</h4>
                <p className="text-muted-foreground text-sm">
                  {t.methodology_dual_cooperation_text}
                </p>
              </div>
            </section>

            {/* Section 3: Understanding Results */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-veritas to-robo flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground m-0">{t.methodology_results_title}</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                {t.methodology_results_intro}
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-4">{t.methodology_results_scale_title}</h3>
              <div className="space-y-4 mb-8">
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

              <h3 className="text-lg font-semibold text-foreground mb-3">{t.methodology_confidence_title}</h3>
              <p className="text-muted-foreground mb-4">{t.methodology_confidence_intro}</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8">
                <li>{t.methodology_confidence_very_high}</li>
                <li>{t.methodology_confidence_high}</li>
                <li>{t.methodology_confidence_moderate}</li>
                <li>{t.methodology_confidence_low}</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">{t.methodology_sources_title}</h3>
              <p className="text-muted-foreground mb-4">{t.methodology_sources_intro}</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t.methodology_sources_tier_a}</li>
                <li>{t.methodology_sources_tier_b}</li>
                <li>{t.methodology_sources_tier_c}</li>
              </ul>
            </section>

            {/* Section 4: Limitations */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground m-0">{t.methodology_limits_title}</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                {t.methodology_limits_intro}
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">{t.methodology_hardscenes_title}</h3>
              <p className="text-muted-foreground mb-4">{t.methodology_hardscenes_intro}</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>{t.methodology_hardscenes_landscape}</li>
                <li>{t.methodology_hardscenes_nightsky}</li>
                <li>{t.methodology_hardscenes_artwork}</li>
                <li>{t.methodology_hardscenes_abstract}</li>
              </ul>
              <p className="text-muted-foreground mb-8">{t.methodology_hardscenes_outro}</p>

              <h3 className="text-lg font-semibold text-foreground mb-3">{t.methodology_other_limits_title}</h3>
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
              <p className="font-medium text-foreground mb-3">{t.methodology_responsible_subtitle}</p>
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
                <li>{t.methodology_privacy_local}</li>
                <li>{t.methodology_privacy_server}</li>
                <li>{t.methodology_privacy_no_training}</li>
                <li>{t.methodology_privacy_encryption}</li>
                <li>{t.methodology_privacy_no_sale}</li>
              </ul>
              <p className="text-muted-foreground">
                {t.methodology_privacy_link}{' '}
                <a href="/privacy" className="text-primary hover:underline">{t.footer_privacy}</a>.
              </p>
            </section>

            {/* Summary Box */}
            <section className="bg-muted/50 border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">{t.methodology_summary_title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t.methodology_summary_text}
              </p>
              <p className="text-sm font-medium text-primary">
                {t.methodology_summary_tagline}
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
