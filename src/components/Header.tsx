import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, ChevronDown, BookOpen, Images, Users, Newspaper, Gamepad2 } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { APP_URL } from '@/lib/config';
import logoMaster from '@/assets/logo-transparent.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { ThemeToggle, Theme } from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';

// Header-specific translations for additional nav items
const headerTranslations: Record<Language, {
  methodology: string;
  examples: string;
  about: string;
  blog: string;
  more: string;
  product: string;
}> = {
  de: { methodology: 'Methodik', examples: 'Beispiele', about: 'Über uns', blog: 'Blog', more: 'Mehr', product: 'Produkt' },
  en: { methodology: 'Methodology', examples: 'Examples', about: 'About', blog: 'Blog', more: 'More', product: 'Product' },
  it: { methodology: 'Metodologia', examples: 'Esempi', about: 'Chi siamo', blog: 'Blog', more: 'Altro', product: 'Prodotto' },
  es: { methodology: 'Metodología', examples: 'Ejemplos', about: 'Nosotros', blog: 'Blog', more: 'Más', product: 'Producto' },
  fr: { methodology: 'Méthodologie', examples: 'Exemples', about: 'À propos', blog: 'Blog', more: 'Plus', product: 'Produit' },
};

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  onThemeToggle: () => void;
}

export const Header = ({ language, setLanguage, theme, onThemeToggle }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('start');
  const [scrolled, setScrolled] = useState(false);
  const t = translations[language];
  const ht = headerTranslations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      
      const sections = ['start', 'how-it-works', 'modes', 'veritas-robo', 'game', 'pricing', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: 'de', label: 'Deutsch' },
    { code: 'en', label: 'English' },
    { code: 'it', label: 'Italiano' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
  ];

  // Primary nav items (shown flat in header)
  const primaryNavItems: { id: string; label: string; href?: string; isScroll?: boolean }[] = [
    { id: 'start', label: t.nav_start, isScroll: true },
    { id: 'how-it-works', label: t.nav_features, isScroll: true },
    { id: 'methodology', label: ht.methodology, href: '/methodology' },
    { id: 'examples', label: ht.examples, href: '/examples' },
    { id: 'pricing', label: t.nav_pricing, isScroll: true },
    { id: 'faq', label: t.nav_faq, isScroll: true },
  ];

  // Secondary nav items (shown in "More" dropdown)
  const moreNavItems: { id: string; label: string; href?: string; isScroll?: boolean; icon?: React.ReactNode }[] = [
    { id: 'about', label: ht.about, href: '/about', icon: <Users className="w-4 h-4" /> },
    { id: 'blog', label: ht.blog, href: '/blog', icon: <Newspaper className="w-4 h-4" /> },
    { id: 'modes', label: t.nav_scan, isScroll: true, icon: <BookOpen className="w-4 h-4" /> },
    { id: 'veritas-robo', label: t.nav_veritas_robo, isScroll: true },
    { id: 'game', label: t.nav_game, href: 'https://game.forrealscan.com', icon: <Gamepad2 className="w-4 h-4" /> },
  ];

  // Mobile nav - grouped by category
  const mobileProductItems: { id: string; label: string; href?: string; isScroll?: boolean }[] = [
    { id: 'start', label: t.nav_start, isScroll: true },
    { id: 'how-it-works', label: t.nav_features, isScroll: true },
    { id: 'modes', label: t.nav_scan, isScroll: true },
    { id: 'methodology', label: ht.methodology, href: '/methodology' },
    { id: 'examples', label: ht.examples, href: '/examples' },
  ];

  const mobileMoreItems: { id: string; label: string; href?: string; isScroll?: boolean }[] = [
    { id: 'about', label: ht.about, href: '/about' },
    { id: 'blog', label: ht.blog, href: '/blog' },
    { id: 'veritas-robo', label: t.nav_veritas_robo, isScroll: true },
    { id: 'game', label: t.nav_game, href: 'https://game.forrealscan.com' },
    { id: 'pricing', label: t.nav_pricing, isScroll: true },
    { id: 'faq', label: t.nav_faq, isScroll: true },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/5 transition-colors duration-500",
      theme === 'robo' ? "bg-[#0c0f1e]/80" : "bg-white/70"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className={`flex-shrink-0 transition-opacity duration-300 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}>
            <img
              src={logoMaster}
              alt="ForRealScan Logo"
              className="h-12 sm:h-14 w-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              width={56}
              height={56}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {primaryNavItems.map((item) => (
              item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-[14px] lg:text-[15px] font-medium transition-all duration-200 relative group text-foreground hover:text-primary"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 w-0 group-hover:w-full" />
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-[14px] lg:text-[15px] font-medium transition-all duration-200 relative group ${
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                      activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              )
            ))}

            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-[14px] lg:text-[15px] font-medium transition-all duration-200 flex items-center gap-1 text-foreground hover:text-primary">
                  {ht.more}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {moreNavItems.map((item) => (
                  item.href && !item.href.startsWith('http') ? (
                    <DropdownMenuItem key={item.id} asChild>
                      <a href={item.href} className="flex items-center gap-2 cursor-pointer">
                        {item.icon}
                        {item.label}
                      </a>
                    </DropdownMenuItem>
                  ) : item.href ? (
                    <DropdownMenuItem key={item.id} asChild>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
                        {item.icon}
                        {item.label}
                      </a>
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      {item.icon}
                      {item.label}
                    </DropdownMenuItem>
                  )
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Right side - Theme Toggle + Language + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle theme={theme} onToggle={onThemeToggle} />

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

          {/* Mobile menu button - Theme, Language and Menu */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle theme={theme} onToggle={onThemeToggle} size="sm" />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 px-2 h-9">
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

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-9 w-9"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={cn(
          "md:hidden border-t border-border backdrop-blur-lg transition-colors duration-500",
          theme === 'robo' ? "bg-[#0c0f1e]/95" : "bg-white/95"
        )}>
          <div className="container mx-auto px-4 py-3 space-y-1">
            {/* Product Section */}
            <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {ht.product}
            </div>
            {mobileProductItems.map((item) => (
              item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  className="block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors text-foreground hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}

            {/* More Section */}
            <div className="px-4 py-2 pt-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider border-t border-border mt-2">
              {ht.more}
            </div>
            {mobileMoreItems.map((item) => (
              item.href && item.href.startsWith('http') ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors text-foreground hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  className="block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors text-foreground hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}

            <div className="pt-3 border-t border-border mt-2">
              <Button asChild className="w-full h-12 bg-gradient-to-r from-veritas to-robo hover:opacity-90 text-base font-semibold">
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
