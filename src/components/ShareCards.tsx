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
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
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

        {/* Share Card Images - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-slate-900 aspect-[9/16]"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="absolute inset-0 w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-lg text-muted-foreground">
                <span className="text-primary text-2xl mt-0.5 flex-shrink-0">✓</span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
