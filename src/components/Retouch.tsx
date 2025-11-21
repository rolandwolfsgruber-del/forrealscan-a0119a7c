import { Wand2 } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RetouchProps {
  language: Language;
}

export const Retouch = ({ language }: RetouchProps) => {
  const t = translations[language];

  const points = [
    t.retouch_point1,
    t.retouch_point2,
    t.retouch_point3,
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto border-2 hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg">
                <Wand2 className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <CardTitle className="text-2xl sm:text-3xl">
                {t.retouch_title}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.retouch_intro}
            </p>
            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <span className="text-muted-foreground leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
