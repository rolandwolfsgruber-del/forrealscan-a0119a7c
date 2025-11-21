import { AlertCircle } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface DisclaimerProps {
  language: Language;
}

export const Disclaimer = ({ language }: DisclaimerProps) => {
  const t = translations[language];

  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Alert className="max-w-4xl mx-auto bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
          <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500" />
          <AlertTitle className="text-lg font-semibold text-amber-900 dark:text-amber-100">
            {t.disclaimer_title}
          </AlertTitle>
          <AlertDescription className="text-amber-800 dark:text-amber-200 leading-relaxed mt-2">
            {t.disclaimer_text}
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};
