import { Button } from '@/components/ui/button';
import { ArrowLeft, Globe } from 'lucide-react';
import { Language } from '@/lib/translations';
import { ThemeToggle, Theme } from '@/components/ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface SubPageHeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  onThemeToggle: () => void;
  backLabel?: string;
}

const languages: { code: Language; label: string }[] = [
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' },
  { code: 'it', label: 'Italiano' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
];

export const SubPageHeader = ({
  language,
  setLanguage,
  theme,
  onThemeToggle,
  backLabel = 'Back',
}: SubPageHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <Button
        variant="ghost"
        onClick={() => window.history.back()}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {backLabel}
      </Button>

      <div className="flex items-center gap-2">
        <ThemeToggle theme={theme} onToggle={onThemeToggle} size="sm" />

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
    </div>
  );
};
