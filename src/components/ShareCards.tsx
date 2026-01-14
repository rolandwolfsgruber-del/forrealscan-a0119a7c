import { Share2, Gauge, ScanEye } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Theme } from '@/components/ThemeToggle';

interface ShareCardsProps {
  language: Language;
  theme?: Theme;
}

export const ShareCards = ({ language, theme }: ShareCardsProps) => {
  const t = translations[language];

  const cards = [
    {
      image: '/share-cards/skater-1-percent.webp',
      srcSet: '/share-cards/skater-1-percent-400w.webp 400w, /share-cards/skater-1-percent-800w.webp 800w',
      sizes: '(max-width: 768px) 300px, 300px',
      alt: 'ForRealScan Result: 1% AI Probability (Real Photo)',
      width: 300,
      height: 550,
    },
    {
      image: '/share-cards/car-40-percent.webp',
      srcSet: '/share-cards/car-40-percent-400w.webp 400w, /share-cards/car-40-percent-800w.webp 800w',
      sizes: '(max-width: 768px) 337px, 337px',
      alt: 'ForRealScan Result: 40% AI Probability (Uncertain)',
      width: 337,
      height: 550,
    },
    {
      image: '/share-cards/fashion-99-percent.webp',
      srcSet: '/share-cards/fashion-99-percent-400w.webp 400w, /share-cards/fashion-99-percent-800w.webp 800w',
      sizes: '(max-width: 768px) 247px, 247px',
      alt: 'ForRealScan Result: 99% AI Probability (AI Generated)',
      width: 247,
      height: 550,
    },
  ];

  const features = [t.sharecard_feature1, t.sharecard_feature2, t.sharecard_feature3];

  return (
    <section id="share-cards" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-veritas to-robo bg-clip-text text-transparent">
          {t.sharecard_title}
        </span>
      </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {t.sharecard_subtitle}
          </p>
        </div>

        {/* Share Card Images - Uniform Grid with Fixed Height Slots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-center md:h-[550px]"
            >
              <img
                src={card.image}
                srcSet={card.srcSet}
                sizes={card.sizes}
                alt={card.alt}
                className="max-h-full w-auto object-contain shadow-2xl rounded-2xl hover:scale-[1.02] transition-transform"
                loading="lazy"
                width={card.width}
                height={card.height}
                decoding="async"
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
