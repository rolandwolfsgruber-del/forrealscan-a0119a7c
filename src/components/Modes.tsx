import { Shield } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ModesProps {
  language: Language;
}

export const Modes = ({ language }: ModesProps) => {
  const t = translations[language];

  return (
    <section id="modes" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.scan_title}
          </h2>
        </div>

        <div className="flex justify-center max-w-4xl mx-auto">
          {/* Hybrid Scan Card */}
          <Card className="border-2 border-primary hover:border-primary/80 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] shadow-xl relative overflow-hidden rounded-2xl p-2 w-full">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-veritas to-robo opacity-15 blur-3xl" />
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-veritas/20 to-robo/20 flex items-center justify-center">
                  <Shield className="w-9 h-9 text-primary" strokeWidth={2.5} />
                </div>
              </div>
              <CardTitle className="text-2xl">{t.scan_hybrid_title}</CardTitle>
              <CardDescription className="text-base">{t.scan_hybrid_desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-sm text-muted-foreground">{t.scan_hybrid_feat1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-sm text-muted-foreground">{t.scan_hybrid_feat2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-sm text-muted-foreground">{t.scan_hybrid_feat3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-sm text-muted-foreground">{t.scan_hybrid_feat4}</span>
                </li>
              </ul>
              
              {/* Tageslimit Anzeige */}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  {t.scan_limit_label}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
