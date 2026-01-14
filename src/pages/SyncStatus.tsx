import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { debugFlagIsEnabled } from '@/lib/buildInfo';
import { GitHubSyncStatus } from '@/components/GitHubSyncStatus';
import { SubPageHeader } from '@/components/SubPageHeader';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldAlert, Home } from 'lucide-react';
import { Language } from '@/lib/translations';
import { Theme } from '@/components/ThemeToggle';
import { LANGUAGE_STORAGE_KEY, THEME_STORAGE_KEY } from '@/lib/constants';

const getStoredLanguage = (): Language => {
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (stored && ['de', 'en', 'it', 'es', 'fr'].includes(stored)) {
    return stored as Language;
  }
  return 'de';
};

const getStoredTheme = (): Theme => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'veritas' || stored === 'robo') {
    return stored;
  }
  return 'robo';
};

const DebugRequiredMessage = ({ 
  language, 
  setLanguage, 
  theme, 
  onThemeToggle 
}: { 
  language: Language; 
  setLanguage: (lang: Language) => void;
  theme: Theme;
  onThemeToggle: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="container mx-auto px-4 pt-6">
        <SubPageHeader 
          language={language} 
          setLanguage={setLanguage} 
          theme={theme} 
          onThemeToggle={onThemeToggle}
          backLabel="Zurück"
        />
      </div>
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="max-w-md border-amber-500/50 bg-amber-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-500">
              <ShieldAlert className="h-5 w-5" />
              Debug-Modus erforderlich
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Diese Seite ist nur im Debug-Modus verfügbar. 
              Füge <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">?debug=1</code> zur URL hinzu, um den Debug-Modus zu aktivieren.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/')}
              >
                <Home className="h-4 w-4 mr-1.5" />
                Zur Startseite
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => {
                  window.location.href = '/sync-status?debug=1';
                }}
              >
                Debug aktivieren
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer language={language} theme={theme} />
    </div>
  );
};

const SyncStatus = () => {
  const [isDebugEnabled, setIsDebugEnabled] = useState<boolean | null>(null);
  const [language, setLanguage] = useState<Language>(getStoredLanguage);
  const [theme, setTheme] = useState<Theme>(getStoredTheme);
  const navigate = useNavigate();

  useEffect(() => {
    setIsDebugEnabled(debugFlagIsEnabled());
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  };

  const handleThemeToggle = () => {
    const newTheme: Theme = theme === 'robo' ? 'veritas' : 'robo';
    setTheme(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  };

  // Loading state
  if (isDebugEnabled === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-veritas to-robo opacity-50" />
          <p className="text-muted-foreground text-sm">Laden...</p>
        </div>
      </div>
    );
  }

  // Debug mode not enabled
  if (!isDebugEnabled) {
    return (
      <DebugRequiredMessage 
        language={language} 
        setLanguage={handleLanguageChange}
        theme={theme}
        onThemeToggle={handleThemeToggle}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="container mx-auto px-4 pt-6">
        <SubPageHeader 
          language={language} 
          setLanguage={handleLanguageChange} 
          theme={theme} 
          onThemeToggle={handleThemeToggle}
          backLabel="Zurück"
        />
      </div>
      <main id="main-content" className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">
              GitHub Sync Status
            </h1>
            <p className="text-muted-foreground mt-2">
              Vergleich zwischen Lovable Build und GitHub Repository
            </p>
          </div>

          <div className="flex justify-center">
            <GitHubSyncStatus />
          </div>
        </div>
      </main>
      <Footer language={language} theme={theme} />
    </div>
  );
};

export default SyncStatus;
