import { Zap, Shield, Check } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ModesProps {
  language: Language;
}

export const Modes = ({ language }: ModesProps) => {
  const t = translations[language];

  return (
    <section id="modes" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.modes_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* V3 Standard Scan */}
          <Card className="border-2 hover:border-veritas/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-veritas/10 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-veritas" />
                </div>
                <Badge variant="secondary" className="bg-veritas/20 text-veritas">
                  {t.mode_v3_badge}
                </Badge>
              </div>
              <CardTitle className="text-2xl">{t.mode_v3_title}</CardTitle>
              <CardDescription className="text-base">{t.mode_v3_desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-veritas flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t.mode_v3_feat1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-veritas flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t.mode_v3_feat2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-veritas flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t.mode_v3_feat3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-veritas flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t.mode_v3_feat4}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* V5 UltraDeepScan */}
          <Card className="border-2 border-robo/50 hover:border-robo transition-all duration-300 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-robo/10 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-robo" />
                </div>
                <Badge className="bg-robo text-robo-foreground">
                  {t.mode_v5_badge}
                </Badge>
              </div>
              <CardTitle className="text-2xl">{t.mode_v5_title}</CardTitle>
              <CardDescription className="text-base">{t.mode_v5_desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-robo flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t.mode_v5_feat1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-robo flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t.mode_v5_feat2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-robo flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t.mode_v5_feat3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-robo flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t.mode_v5_feat4}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
