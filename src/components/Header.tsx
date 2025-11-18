import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { APP_URL } from '@/lib/config';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Header = ({ language, setLanguage }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'de', label: 'Deutsch' },
    { code: 'en', label: 'English' },
    { code: 'it', label: 'Italiano' },
    { code: 'es', label: 'Español' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="h-10 w-32 bg-gradient-to-r from-veritas to-robo rounded-xl flex items-center justify-center text-white font-bold text-sm">
              ForRealScan
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('start')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t.nav_start}
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t.nav_features}
            </button>
            <button
              onClick={() => scrollToSection('modes')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t.nav_modes}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t.nav_pricing}
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t.nav_faq}
            </button>
          </nav>

          {/* Right side - Language + CTA */}
          <div className="hidden md:flex items-center space-x-4">
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

            <Button asChild className="bg-gradient-to-r from-veritas to-robo hover:opacity-90">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                {t.cta_app}
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('start')}
              className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary"
            >
              {t.nav_start}
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary"
            >
              {t.nav_features}
            </button>
            <button
              onClick={() => scrollToSection('modes')}
              className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary"
            >
              {t.nav_modes}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary"
            >
              {t.nav_pricing}
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary"
            >
              {t.nav_faq}
            </button>
            
            <div className="pt-3 border-t border-border space-y-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Globe className="h-4 w-4" />
                    <span className="text-xs uppercase">{language}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-full">
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

              <Button asChild className="w-full bg-gradient-to-r from-veritas to-robo">
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  {t.cta_app}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
