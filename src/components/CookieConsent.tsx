import { useState, useEffect } from 'react';
import { Language } from '@/lib/translations';
import { LANGUAGE_STORAGE_KEY } from '@/lib/constants';
import { Cookie, X } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'forrealscan_cookie_consent';

const cookieTranslations: Record<Language, {
  title: string;
  text: string;
  accept: string;
  reject: string;
  settings: string;
  privacyLink: string;
}> = {
  de: {
    title: 'Cookie-Einstellungen',
    text: 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern, den Website-Traffic zu analysieren und personalisierte Werbung anzuzeigen. Mit "Akzeptieren" stimmen Sie der Verwendung aller Cookies zu.',
    accept: 'Alle akzeptieren',
    reject: 'Nur notwendige',
    settings: 'Einstellungen',
    privacyLink: 'Datenschutzerklärung',
  },
  en: {
    title: 'Cookie Settings',
    text: 'We use cookies to improve your experience on our website, analyze website traffic, and display personalized advertising. By clicking "Accept", you consent to the use of all cookies.',
    accept: 'Accept All',
    reject: 'Necessary Only',
    settings: 'Settings',
    privacyLink: 'Privacy Policy',
  },
  it: {
    title: 'Impostazioni Cookie',
    text: 'Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito web, analizzare il traffico del sito e mostrare pubblicità personalizzata. Cliccando su "Accetta", acconsenti all\'uso di tutti i cookie.',
    accept: 'Accetta tutti',
    reject: 'Solo necessari',
    settings: 'Impostazioni',
    privacyLink: 'Informativa sulla Privacy',
  },
  es: {
    title: 'Configuración de Cookies',
    text: 'Usamos cookies para mejorar su experiencia en nuestro sitio web, analizar el tráfico del sitio y mostrar publicidad personalizada. Al hacer clic en "Aceptar", acepta el uso de todas las cookies.',
    accept: 'Aceptar todas',
    reject: 'Solo necesarias',
    settings: 'Configuración',
    privacyLink: 'Política de Privacidad',
  },
  fr: {
    title: 'Paramètres des Cookies',
    text: 'Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic du site et afficher de la publicité personnalisée. En cliquant sur "Accepter", vous consentez à l\'utilisation de tous les cookies.',
    accept: 'Tout accepter',
    reject: 'Nécessaires uniquement',
    settings: 'Paramètres',
    privacyLink: 'Politique de Confidentialité',
  },
};

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState<Language>('de');

  useEffect(() => {
    // Check if consent has been given
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }

    // Get language preference
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && ['de', 'en', 'it', 'es', 'fr'].includes(stored)) {
      setLanguage(stored as Language);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (['de', 'en', 'it', 'es', 'fr'].includes(browserLang)) {
        setLanguage(browserLang as Language);
      }
    }
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && ['de', 'en', 'it', 'es', 'fr'].includes(stored)) {
      setLanguage(stored as Language);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
    // Enable analytics and advertising cookies
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      });
    }
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
    setIsVisible(false);
    // Only essential cookies
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      });
    }
  };

  if (!isVisible) return null;

  const t = cookieTranslations[language];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border border-border rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex w-12 h-12 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Cookie className="w-5 h-5 sm:hidden text-primary" />
                  {t.title}
                </h3>
                <button
                  onClick={handleReject}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {t.text}{' '}
                <a href="/privacy" className="text-primary hover:underline">
                  {t.privacyLink}
                </a>
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAccept}
                  className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
                >
                  {t.accept}
                </button>
                <button
                  onClick={handleReject}
                  className="px-6 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors text-sm"
                >
                  {t.reject}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
