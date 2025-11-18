import { Language, translations } from '@/lib/translations';
import { SUPPORT_EMAIL } from '@/lib/config';
import { FileText, Shield, Mail } from 'lucide-react';

interface FooterProps {
  language: Language;
}

export const Footer = ({ language }: FooterProps) => {
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 mb-2 md:mb-0">
            <div className="h-8 sm:h-10 w-28 sm:w-32 bg-gradient-to-r from-veritas to-robo rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm">
              ForRealScan
            </div>
          </div>

          {/* Links with Icons */}
          <nav className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-8 text-sm">
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
            <a 
              href="mailto:info@forrealscan.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              📧 info@forrealscan.com
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-xs sm:text-sm text-muted-foreground text-center md:text-left mt-2 md:mt-0">
            {t.footer_copyright.replace('{year}', currentYear.toString())}
          </div>
        </div>
      </div>
    </footer>
  );
};
