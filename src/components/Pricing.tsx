import { Check } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { APP_URL } from '@/lib/config';

interface PricingProps {
  language: Language;
}

export const Pricing = ({ language }: PricingProps) => {
  const t = translations[language];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.pricing_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="border-2 hover:border-veritas/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">{t.pricing_free_title}</CardTitle>
              <CardDescription className="text-3xl font-bold text-foreground mt-2">
                {t.pricing_free_price}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
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
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-veritas flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t.pricing_free_feat4}</span>
                </li>
              </ul>
              
              <Button asChild variant="outline" className="w-full">
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  {t.pricing_free_cta}
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="border-2 border-robo shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-robo to-robo-glow opacity-10 blur-3xl" />
            <CardHeader>
              <CardTitle className="text-2xl">{t.pricing_premium_title}</CardTitle>
              <CardDescription className="text-3xl font-bold text-foreground mt-2">
                {t.pricing_premium_price}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-robo flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t.pricing_premium_feat1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-robo flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t.pricing_premium_feat2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-robo flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t.pricing_premium_feat3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-robo flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t.pricing_premium_feat4}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-robo flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t.pricing_premium_feat5}</span>
                </li>
              </ul>
              
              <Button asChild className="w-full bg-gradient-to-r from-veritas to-robo hover:opacity-90">
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  {t.pricing_premium_cta}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
