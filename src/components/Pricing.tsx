import { Check } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { APP_URL } from '@/lib/config';
import { useToast } from '@/hooks/use-toast';

interface PricingProps {
  language: Language;
}

export const Pricing = ({ language }: PricingProps) => {
  const t = translations[language];
  const { toast } = useToast();

  const handlePremiumNotify = () => {
    toast({
      title: t.pricing_premium_coming_soon_title,
      description: t.pricing_premium_coming_soon_message,
    });
  };

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.pricing_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto items-stretch">
          {/* Free Plan */}
          <Card className="border-2 border-border hover:border-veritas/40 hover:shadow-lg transition-all duration-300 rounded-2xl">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl mb-2">{t.pricing_free_title}</CardTitle>
              <CardDescription className="text-4xl font-bold text-foreground mt-2">
                {t.pricing_free_price}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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
              
              <Button asChild variant="outline" className="w-full h-12 text-base rounded-xl">
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  {t.pricing_free_cta}
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan - Coming Soon Card */}
          <Card className="border-4 border-robo hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] shadow-2xl relative overflow-hidden rounded-2xl bg-gradient-to-br from-robo/5 to-robo/10 lg:scale-105">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-robo to-robo-glow opacity-20 blur-3xl" />
            <div className="absolute top-4 right-4">
              <Badge className="bg-robo text-robo-foreground text-sm px-4 py-1.5 font-semibold">
                {t.pricing_premium_badge}
              </Badge>
            </div>
            <CardHeader className="pb-6 relative z-10">
              <CardTitle className="text-3xl mb-2">{t.pricing_premium_title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
              <ul className="space-y-4">
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
              
              <Button 
                onClick={handlePremiumNotify}
                className="w-full bg-gradient-to-r from-veritas to-robo hover:opacity-90 h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                {t.pricing_premium_cta}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
