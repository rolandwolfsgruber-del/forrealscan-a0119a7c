import { Language, translations } from '@/lib/translations';
import { FileText, Shield, Mail, BookOpen, Images } from 'lucide-react';

interface FooterProps {
  language: Language;
}

// Footer-specific translations for new pages
const footerTranslations: Record<Language, { methodology: string; examples: string }> = {
  de: { methodology: 'Methodik', examples: 'Beispiele' },
  en: { methodology: 'Methodology', examples: 'Examples' },
  it: { methodology: 'Metodologia', examples: 'Esempi' },
  es: { methodology: 'Metodología', examples: 'Ejemplos' },
  fr: { methodology: 'Méthodologie', examples: 'Exemples' },
};

export const Footer = ({ language }: FooterProps) => {
  const t = translations[language];
  const ft = footerTranslations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {/* Top Row: Logo and Main Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <div className="h-8 sm:h-10 w-28 sm:w-32 bg-gradient-to-r from-veritas to-robo rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                  ForRealScan
                </div>
              </a>
            </div>

            {/* Content Links */}
            <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
              <a
                href="/methodology"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                {ft.methodology}
              </a>
              <a
                href="/examples"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Images className="w-4 h-4" />
                {ft.examples}
              </a>
            </nav>

            {/* Legal Links */}
            <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
              <a
                href="/imprint"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <FileText className="w-4 h-4" />
                {t.footer_imprint}
              </a>
              <a
                href="/privacy"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Shield className="w-4 h-4" />
                {t.footer_privacy}
              </a>
              <a
                href="/contact"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {t.footer_contact || 'Contact'}
              </a>
            </nav>
          </div>

          {/* Bottom Row: Email and Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 pt-4 border-t border-border">
            <a
              href="mailto:info@forrealscan.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              info@forrealscan.com
            </a>
            <div className="text-xs sm:text-sm text-muted-foreground text-center md:text-right">
              {t.footer_copyright.replace('{year}', currentYear.toString())}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
