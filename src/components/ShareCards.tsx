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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.sharecard_title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {t.sharecard_subtitle}
          </p>
        </div>

        {/* Share Card Images - Uniform Grid with Fixed Height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-transparent h-[500px] w-full flex items-center justify-center"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="h-full object-contain rounded-2xl drop-shadow-2xl transition-transform duration-300 hover:scale-[1.02] hover:drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
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
