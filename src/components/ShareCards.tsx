import { Share2, Gauge, ScanEye } from 'lucide-react';
import { Language, translations } from '@/lib/translations';

interface ShareCardsProps {
  language: Language;
}

export const ShareCards = ({ language }: ShareCardsProps) => {
  const t = translations[language];

  const cards = [
    {
      image: '/share-cards/skater-1-percent.png',
      alt: 'ForRealScan Result: 1% AI Probability (Real Photo)',
    },
    {
      image: '/share-cards/car-40-percent.png',
      alt: 'ForRealScan Result: 40% AI Probability (Uncertain)',
    },
    {
      image: '/share-cards/fashion-99-percent.png',
      alt: 'ForRealScan Result: 99% AI Probability (AI Generated)',
    },
  ];

  const features = [t.sharecard_feature1, t.sharecard_feature2, t.sharecard_feature3];

  return (
    <section id="share-cards" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              {t.sharecard_title}
            </h2>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {t.sharecard_subtitle}
          </p>
        </div>

        {/* Share Card Images - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-transparent aspect-[9/16]"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-contain rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Features - Icon Grid */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Score */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <Gauge className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <p className="text-lg font-semibold text-foreground leading-relaxed px-4">
                {features[0]}
              </p>
            </div>

            {/* Feature 2: Evidence */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                <ScanEye className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <p className="text-lg font-semibold text-foreground leading-relaxed px-4">
                {features[1]}
              </p>
            </div>

            {/* Feature 3: Social */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                <Share2 className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <p className="text-lg font-semibold text-foreground leading-relaxed px-4">
                {features[2]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
