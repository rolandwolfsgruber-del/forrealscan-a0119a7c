import { Language, translations } from '@/lib/translations';
import { FileText, Shield, Mail, BookOpen, Images, Users, ScrollText, Newspaper } from 'lucide-react';
import { BUILD_ID, BUILD_TIME } from '@/lib/buildInfo';
import { Theme } from '@/components/ThemeToggle';

interface FooterProps {
  language: Language;
  theme: Theme;
}

// Footer-specific translations for new pages
const footerTranslations: Record<Language, {
  methodology: string;
  examples: string;
  about: string;
  terms: string;
  blog: string;
}> = {
  de: { methodology: 'Methodik', examples: 'Beispiele', about: 'Über uns', terms: 'AGB', blog: 'Blog' },
  en: { methodology: 'Methodology', examples: 'Examples', about: 'About', terms: 'Terms', blog: 'Blog' },
  it: { methodology: 'Metodologia', examples: 'Esempi', about: 'Chi siamo', terms: 'Termini', blog: 'Blog' },
  es: { methodology: 'Metodología', examples: 'Ejemplos', about: 'Nosotros', terms: 'Términos', blog: 'Blog' },
  fr: { methodology: 'Méthodologie', examples: 'Exemples', about: 'À propos', terms: 'CGU', blog: 'Blog' },
};

export const Footer = ({ language, theme }: FooterProps) => {
  const t = translations[language];
  const ft = footerTranslations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 sm:py-10 md:py-12 transition-colors duration-500 theme-footer-bg">
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
                href="/about"
                className="flex items-center gap-2 transition-colors duration-500 text-muted-foreground hover:text-primary"
              >
                <Users className="w-4 h-4" />
                {ft.about}
              </a>
              <a
                href="/blog"
                className="flex items-center gap-2 transition-colors duration-500 text-muted-foreground hover:text-primary"
              >
                <Newspaper className="w-4 h-4" />
                {ft.blog}
              </a>
              <a
                href="/methodology"
                className="flex items-center gap-2 transition-colors duration-500 text-muted-foreground hover:text-primary"
              >
                <BookOpen className="w-4 h-4" />
                {ft.methodology}
              </a>
              <a
                href="/examples"
                className="flex items-center gap-2 transition-colors duration-500 text-muted-foreground hover:text-primary"
              >
                <Images className="w-4 h-4" />
                {ft.examples}
              </a>
            </nav>

            {/* Legal Links */}
            <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
              <a
                href="/imprint"
                className="flex items-center gap-2 transition-colors duration-500 text-muted-foreground hover:text-primary"
              >
                <FileText className="w-4 h-4" />
                {t.footer_imprint}
              </a>
              <a
                href="/terms"
                className="flex items-center gap-2 transition-colors duration-500 text-muted-foreground hover:text-primary"
              >
                <ScrollText className="w-4 h-4" />
                {ft.terms}
              </a>
              <a
                href="/privacy"
                className="flex items-center gap-2 transition-colors duration-500 text-muted-foreground hover:text-primary"
              >
                <Shield className="w-4 h-4" />
                {t.footer_privacy}
              </a>
              <a
                href="/contact"
                className="flex items-center gap-2 transition-colors duration-500 text-muted-foreground hover:text-primary"
              >
                <Mail className="w-4 h-4" />
                {t.footer_contact || 'Contact'}
              </a>
            </nav>
          </div>

          {/* Bottom Row: Email and Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-4 border-t border-border">
            <a
              href="mailto:info@forrealscan.com"
              className="text-sm transition-colors duration-500 text-muted-foreground hover:text-primary"
            >
              info@forrealscan.com
            </a>
            <span className="text-xs sm:text-sm text-center md:text-right transition-colors duration-500 text-muted-foreground">
              {t.footer_copyright.replace('{year}', currentYear.toString())}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
