import { Language, translations } from '@/lib/translations';
import { SUPPORT_EMAIL } from '@/lib/config';

interface FooterProps {
  language: Language;
}

export const Footer = ({ language }: FooterProps) => {
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <div className="h-10 w-32 bg-gradient-to-r from-veritas to-robo rounded-xl flex items-center justify-center text-white font-bold text-sm">
              ForRealScan
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a 
              href="/imprint" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t.footer_imprint}
            </a>
            <a 
              href="/privacy" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t.footer_privacy}
            </a>
            <a 
              href={`mailto:${SUPPORT_EMAIL}`} 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t.footer_contact}
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            {t.footer_copyright.replace('{year}', currentYear.toString())}
          </div>
        </div>
      </div>
    </footer>
  );
};
