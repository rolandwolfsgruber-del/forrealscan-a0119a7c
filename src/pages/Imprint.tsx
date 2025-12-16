import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Globe } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { LANGUAGE_STORAGE_KEY } from '@/lib/constants';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Imprint = () => {
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

  const languages: { code: Language; label: string }[] = [
    { code: 'de', label: 'Deutsch' },
    { code: 'en', label: 'English' },
    { code: 'it', label: 'Italiano' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
  ];

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header with Back Button and Language Selector */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.common_back}
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

        <h1 className="text-4xl font-bold mb-8">{t.imprint_title}</h1>

        <div className="prose prose-gray max-w-none space-y-8">
          {/* Section: Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.imprint_info_title}</h2>
            <div className="text-muted-foreground space-y-2">
              <p><strong className="text-foreground">{t.imprint_provider}</strong> Roland Wolfsgruber</p>
              <p><strong className="text-foreground">{t.imprint_location}</strong> Südtirol / South Tyrol, Italien / Italy</p>
              <p><strong className="text-foreground">{t.imprint_email}</strong> <a href="mailto:info@forrealscan.com" className="text-primary hover:underline">info@forrealscan.com</a></p>
            </div>
          </section>

          {/* Section: Responsible */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.imprint_responsible_title}</h2>
            <p className="text-muted-foreground">
              Roland Wolfsgruber<br />
              E-Mail: <a href="mailto:info@forrealscan.com" className="text-primary hover:underline">info@forrealscan.com</a>
            </p>
          </section>

          {/* Section: EU Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.imprint_dispute_title}</h2>
            <p className="text-muted-foreground">
              {t.imprint_dispute_text} <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>
            </p>
          </section>

          {/* Section: Disclaimer */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.imprint_disclaimer_title}</h2>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">{t.imprint_liability_content_title}</strong> {t.imprint_liability_content_text}
            </p>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">{t.imprint_liability_links_title}</strong> {t.imprint_liability_links_text}
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">{t.imprint_copyright_title}</strong> {t.imprint_copyright_text}
            </p>
          </section>

          {/* Section: Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.imprint_contact_title}</h2>
            <p className="text-muted-foreground">
              {t.imprint_contact_text}<br />
              <a href="mailto:info@forrealscan.com" className="text-primary hover:underline">info@forrealscan.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
