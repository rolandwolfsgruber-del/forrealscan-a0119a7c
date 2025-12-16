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

const Privacy = () => {
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

        <h1 className="text-4xl font-bold mb-4">{t.privacy_title}</h1>
        <p className="text-sm text-muted-foreground mb-8">{t.privacy_last_updated}</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <p className="text-muted-foreground">{t.privacy_intro}</p>

          {/* Section 1: Data Controller */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.privacy_controller_title}</h2>
            <div className="text-muted-foreground space-y-2">
              <p><strong className="text-foreground">{t.privacy_controller_provider}</strong> Roland Wolfsgruber</p>
              <p><strong className="text-foreground">{t.privacy_controller_location}</strong> Südtirol / South Tyrol, Italien / Italy</p>
              <p><strong className="text-foreground">{t.privacy_controller_email}</strong> <a href="mailto:info@forrealscan.com" className="text-primary hover:underline">info@forrealscan.com</a></p>
            </div>
          </section>

          {/* Section 2: Data We Collect */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.privacy_data_title}</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-3">
              <li>{t.privacy_data_images}</li>
              <li>{t.privacy_data_technical}</li>
              <li>{t.privacy_data_contact}</li>
            </ul>
          </section>

          {/* Section 3: Purpose */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.privacy_purpose_title}</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>{t.privacy_purpose_analysis}</li>
              <li>{t.privacy_purpose_improvement}</li>
              <li>{t.privacy_purpose_communication}</li>
              <li>{t.privacy_purpose_legal}</li>
            </ul>
          </section>

          {/* Section 4: Cookies */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.privacy_cookies_title}</h2>
            <p className="text-muted-foreground mb-4">{t.privacy_cookies_intro}</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>{t.privacy_cookies_essential}</li>
              <li>{t.privacy_cookies_analytics}</li>
              <li>{t.privacy_cookies_advertising}</li>
            </ul>
            <p className="text-muted-foreground mt-4">{t.privacy_cookies_manage}</p>
          </section>

          {/* Section 5: Data Sharing */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.privacy_sharing_title}</h2>
            <p className="text-muted-foreground mb-4">{t.privacy_sharing_intro}</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>{t.privacy_sharing_ai}</li>
              <li>{t.privacy_sharing_analytics}</li>
              <li>{t.privacy_sharing_advertising}</li>
              <li>{t.privacy_sharing_legal}</li>
            </ul>
          </section>

          {/* Section 6: Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.privacy_rights_title}</h2>
            <p className="text-muted-foreground mb-4">{t.privacy_rights_intro}</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>{t.privacy_rights_access}</li>
              <li>{t.privacy_rights_rectification}</li>
              <li>{t.privacy_rights_erasure}</li>
              <li>{t.privacy_rights_portability}</li>
              <li>{t.privacy_rights_object}</li>
              <li>{t.privacy_rights_withdraw}</li>
            </ul>
            <p className="text-muted-foreground mt-4">{t.privacy_rights_exercise} <a href="mailto:info@forrealscan.com" className="text-primary hover:underline">info@forrealscan.com</a></p>
          </section>

          {/* Section 7: Data Retention */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.privacy_retention_title}</h2>
            <p className="text-muted-foreground">{t.privacy_retention_text}</p>
          </section>

          {/* Section 8: Data Security */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.privacy_security_title}</h2>
            <p className="text-muted-foreground">{t.privacy_security_text}</p>
          </section>

          {/* Section 9: International Transfers */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.privacy_international_title}</h2>
            <p className="text-muted-foreground">{t.privacy_international_text}</p>
          </section>

          {/* Section 10: Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.privacy_children_title}</h2>
            <p className="text-muted-foreground">{t.privacy_children_text}</p>
          </section>

          {/* Section 11: Changes */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.privacy_changes_title}</h2>
            <p className="text-muted-foreground">{t.privacy_changes_text}</p>
          </section>

          {/* Section 12: Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.privacy_contact_title}</h2>
            <p className="text-muted-foreground">
              {t.privacy_contact_text}<br />
              <a href="mailto:info@forrealscan.com" className="text-primary hover:underline">info@forrealscan.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
