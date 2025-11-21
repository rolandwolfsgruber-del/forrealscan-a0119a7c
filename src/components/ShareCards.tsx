import { Share2 } from 'lucide-react';
import { Language, translations } from '@/lib/translations';

interface ShareCardsProps {
  language: Language;
}

export const ShareCards = ({ language }: ShareCardsProps) => {
  const t = translations[language];

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 mb-4 shadow-lg">
            <Share2 className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
            {t.share_title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {t.share_text}
          </p>
        </div>
      </div>
    </section>
  );
};
