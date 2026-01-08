import { Check, Coins, Info, Shield, CreditCard, UserCircle, Smartphone } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { APP_URL } from '@/lib/config';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Theme } from '@/components/ThemeToggle';

interface PricingProps {
  language: Language;
  theme?: Theme;
}

// Credit package prices (same for all languages)
const packages = {
  starter: { price: '1,49 €', credits: 20 },
  plus: { price: '2,99 €', credits: 50 },
  pro: { price: '4,99 €', credits: 100 },
};

export const Pricing = ({ language }: PricingProps) => {
  const t = translations[language];

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-veritas to-robo bg-clip-text text-transparent">
              {t.pricing_title}
            </span>
          </h2>
        </AnimatedSection>

        {/* Guest & Account Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-8">
          {/* Guest Mode Card */}
          <AnimatedSection delay={0}>
            <Card className="group border-2 border-border hover:border-veritas/40 hover:shadow-xl transition-all duration-500 rounded-2xl h-full relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(34, 197, 94, 0.08) 0%, transparent 70%)',
                }}
              />

              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-veritas/20 to-veritas/10 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-veritas" />
                  </div>
                  <CardTitle className="text-xl">{t.pricing_guest_title}</CardTitle>
                </div>
                <p className="text-3xl font-bold text-veritas">{t.pricing_guest_credits}</p>
              </CardHeader>
              <CardContent className="space-y-5 relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-veritas flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{t.pricing_guest_feat1}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-veritas flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{t.pricing_guest_feat2}</span>
                  </li>
                </ul>

                <Button asChild variant="outline" className="w-full h-12 text-base rounded-xl hover:bg-veritas/20 hover:border-veritas transition-all duration-300">
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                    {t.pricing_guest_cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* With Account Card */}
          <AnimatedSection delay={100}>
            <Card className="group border-2 border-robo/50 hover:border-robo hover:shadow-xl transition-all duration-500 rounded-2xl h-full relative overflow-hidden bg-gradient-to-br from-robo/5 to-transparent">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
                }}
              />

              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-robo/20 to-robo/10 flex items-center justify-center">
                    <UserCircle className="w-5 h-5 text-robo" />
                  </div>
                  <CardTitle className="text-xl">{t.pricing_account_title}</CardTitle>
                </div>
                <p className="text-3xl font-bold text-robo">{t.pricing_account_credits}</p>
              </CardHeader>
              <CardContent className="space-y-5 relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-robo flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{t.pricing_account_feat1}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-robo flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{t.pricing_account_feat2}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-robo flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{t.pricing_account_feat3}</span>
                  </li>
                </ul>

                <Button asChild className="w-full h-12 text-base rounded-xl bg-gradient-to-r from-robo to-robo-glow hover:opacity-90 transition-all duration-300">
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                    {t.pricing_account_cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Info Box */}
        <AnimatedSection delay={150}>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800/80 dark:to-slate-900/80 rounded-2xl p-6 border border-slate-300 dark:border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-veritas/20 to-robo/20 flex items-center justify-center flex-shrink-0">
                  <Info className="w-5 h-5 text-veritas" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">{t.pricing_info_title}</h3>
                  <p className="text-sm text-muted-foreground">{t.pricing_info_guest}</p>
                  <p className="text-sm text-muted-foreground">{t.pricing_info_account}</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Credit Packages Section */}
        <AnimatedSection delay={200}>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-veritas to-robo bg-clip-text text-transparent">
              {t.pricing_packages_title}
            </span>
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8">
          {/* Starter Package */}
          <AnimatedSection delay={250}>
            <Card className="group border-2 border-border hover:border-veritas/40 hover:shadow-lg transition-all duration-500 rounded-2xl h-full relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(34, 197, 94, 0.06) 0%, transparent 70%)',
                }}
              />

              <CardHeader className="pb-3 relative z-10 text-center">
                <CardTitle className="text-lg">{t.pricing_starter_name}</CardTitle>
                <p className="text-3xl font-bold text-foreground mt-2">{packages.starter.price}</p>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10 text-center">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Coins className="w-5 h-5 text-veritas" />
                  <span className="font-medium">{t.pricing_starter_credits}</span>
                </div>

                <Button asChild variant="outline" className="w-full h-11 rounded-xl hover:bg-veritas/20 hover:border-veritas transition-all duration-300">
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                    {t.pricing_package_cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Plus Package */}
          <AnimatedSection delay={300}>
            <Card className="group border-2 border-border hover:border-veritas/40 hover:shadow-lg transition-all duration-500 rounded-2xl h-full relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(34, 197, 94, 0.06) 0%, transparent 70%)',
                }}
              />

              <CardHeader className="pb-3 relative z-10 text-center">
                <CardTitle className="text-lg">{t.pricing_plus_name}</CardTitle>
                <p className="text-3xl font-bold text-foreground mt-2">{packages.plus.price}</p>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10 text-center">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Coins className="w-5 h-5 text-veritas" />
                  <span className="font-medium">{t.pricing_plus_credits}</span>
                </div>

                <Button asChild variant="outline" className="w-full h-11 rounded-xl hover:bg-veritas/20 hover:border-veritas transition-all duration-300">
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                    {t.pricing_package_cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Pro Package */}
          <AnimatedSection delay={350}>
            <Card className="group border-2 border-border hover:border-veritas/40 hover:shadow-lg transition-all duration-500 rounded-2xl h-full relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(34, 197, 94, 0.06) 0%, transparent 70%)',
                }}
              />

              <CardHeader className="pb-3 relative z-10 text-center">
                <CardTitle className="text-lg">{t.pricing_pro_name}</CardTitle>
                <p className="text-3xl font-bold text-foreground mt-2">{packages.pro.price}</p>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10 text-center">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Coins className="w-5 h-5 text-veritas" />
                  <span className="font-medium">{t.pricing_pro_credits}</span>
                </div>

                <Button asChild variant="outline" className="w-full h-11 rounded-xl hover:bg-veritas/20 hover:border-veritas transition-all duration-300">
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                    {t.pricing_package_cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Trust Elements */}
        <AnimatedSection delay={400}>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-veritas" />
              <span>{t.pricing_trust_onetime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-veritas" />
              <span>{t.pricing_trust_nosub}</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-veritas" />
              <span>{t.pricing_trust_secure}</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
