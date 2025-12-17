import { Check, Sparkles } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { APP_URL } from '@/lib/config';
import { AnimatedSection } from '@/components/ui/animated-section';

interface PricingProps {
  language: Language;
}

// Premium feature translations (simplified, without "coming soon" language)
const premiumFeatures: Record<Language, { title: string; features: string[]; cta: string; badge: string }> = {
  de: {
    title: 'Premium',
    features: [
      'Unbegrenzte ForRealScan-Analysen ohne Tageslimit',
      'Werbefreie Nutzung',
      'Erweiterte Scan-Historie und Sammlung',
      'Prioritäts-Verarbeitung für schnellere Ergebnisse',
    ],
    cta: 'Premium anfragen',
    badge: 'Empfohlen',
  },
  en: {
    title: 'Premium',
    features: [
      'Unlimited ForRealScan analyses without daily limit',
      'Ad-free experience',
      'Extended scan history and collection',
      'Priority processing for faster results',
    ],
    cta: 'Inquire about Premium',
    badge: 'Recommended',
  },
  it: {
    title: 'Premium',
    features: [
      'Analisi ForRealScan illimitate senza limite giornaliero',
      'Esperienza senza pubblicità',
      'Cronologia e raccolta estesa',
      'Elaborazione prioritaria per risultati più veloci',
    ],
    cta: 'Richiedi Premium',
    badge: 'Consigliato',
  },
  es: {
    title: 'Premium',
    features: [
      'Análisis ForRealScan ilimitados sin límite diario',
      'Experiencia sin anuncios',
      'Historial y colección extendidos',
      'Procesamiento prioritario para resultados más rápidos',
    ],
    cta: 'Consultar Premium',
    badge: 'Recomendado',
  },
  fr: {
    title: 'Premium',
    features: [
      'Analyses ForRealScan illimitées sans limite quotidienne',
      'Expérience sans publicité',
      'Historique et collection étendus',
      'Traitement prioritaire pour des résultats plus rapides',
    ],
    cta: 'Demander Premium',
    badge: 'Recommandé',
  },
};

export const Pricing = ({ language }: PricingProps) => {
  const t = translations[language];
  const premium = premiumFeatures[language];

  const handlePremiumInquiry = () => {
    window.location.href = 'mailto:info@forrealscan.com?subject=Premium%20Anfrage%20/%20Premium%20Inquiry';
  };

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-veritas to-robo bg-clip-text text-transparent">
              {t.pricing_title}
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto items-stretch">
          {/* Free Plan */}
          <AnimatedSection delay={0}>
            <Card className="group border-2 border-border hover:border-veritas/40 hover:shadow-xl transition-all duration-500 rounded-2xl h-full relative overflow-hidden">
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(34, 197, 94, 0.08) 0%, transparent 70%)',
                }}
              />

              <CardHeader className="pb-6 relative z-10">
                <CardTitle className="text-2xl mb-2">{t.pricing_free_title}</CardTitle>
                <CardDescription className="text-4xl font-bold text-foreground mt-2">
                  {t.pricing_free_price}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-veritas flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{t.pricing_free_feat1}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-veritas flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{t.pricing_free_feat2}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-veritas flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{t.pricing_free_feat3}</span>
                  </li>
                </ul>

                <Button asChild variant="outline" className="w-full h-12 text-base rounded-xl hover:bg-veritas/10 hover:border-veritas transition-all duration-300">
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                    {t.pricing_free_cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Premium Plan */}
          <AnimatedSection delay={150}>
            <Card className="group border-4 border-robo hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] shadow-2xl relative overflow-hidden rounded-2xl bg-gradient-to-br from-robo/3 to-robo/5 lg:scale-105 h-full transition-all duration-500">
              {/* Animated gradient background */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-robo to-robo-glow opacity-8 blur-3xl animate-pulse-glow" />
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-veritas to-veritas-glow opacity-6 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

              {/* Floating Badge */}
              <div className="absolute -top-1 -right-1 z-20">
                <div className="relative">
                  {/* Glow behind badge */}
                  <div className="absolute inset-0 bg-gradient-to-r from-veritas to-robo blur-md opacity-40 animate-pulse-glow rounded-full" />
                  <div className="relative bg-gradient-to-r from-veritas to-robo text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-xl shadow-lg flex items-center gap-1.5 animate-badge-pulse">
                    <Sparkles className="w-3.5 h-3.5" />
                    {premium.badge}
                  </div>
                </div>
              </div>

              <CardHeader className="pb-6 relative z-10">
                <CardTitle className="text-2xl sm:text-3xl mb-2 bg-gradient-to-r from-robo to-robo-glow bg-clip-text text-transparent">
                  {premium.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <ul className="space-y-4">
                  {premium.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 group/item">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-robo to-robo-glow flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={handlePremiumInquiry}
                  className="w-full bg-gradient-to-r from-veritas to-robo hover:opacity-90 h-auto min-h-12 sm:min-h-14 text-sm sm:text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all py-3 px-4 whitespace-normal leading-tight relative overflow-hidden group/btn"
                >
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10">{premium.cta}</span>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
