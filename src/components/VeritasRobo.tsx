import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface VeritasRoboProps {
  language: Language;
}

export const VeritasRobo = ({ language }: VeritasRoboProps) => {
  const t = translations[language];
  
  return (
    <section id="veritas-robo" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Intro Block */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            {t.veritas_robo_label}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {t.veritas_robo_title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.veritas_robo_subtitle}
          </p>
        </div>

        {/* Two Cards Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Veritas Card */}
          <Card className="border-t-4 border-t-green-500">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <CardTitle className="text-xl sm:text-2xl">{t.veritas_name}</CardTitle>
                <span className="text-muted-foreground">·</span>
                <span className="text-sm text-muted-foreground">{t.veritas_subtitle}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.veritas_description}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{t.veritas_bullet1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{t.veritas_bullet2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{t.veritas_bullet3}</span>
                </li>
              </ul>

              {/* Veritas 3D Viewer */}
              <div 
                id="veritas-3d-container"
                className="w-full rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border border-green-200 dark:border-green-800 overflow-hidden"
                style={{ height: '280px' }}
                dangerouslySetInnerHTML={{
                  __html: '<model-viewer src="/models/veritas-owl.glb" alt="Veritas 3D Modell" auto-rotate camera-controls disable-zoom exposure="1.1" style="width: 100%; height: 100%; border-radius: 16px; overflow: hidden;"></model-viewer>'
                }}
              />
            </CardContent>
          </Card>

          {/* Robo Card */}
          <Card className="border-t-4 border-t-blue-500">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <CardTitle className="text-xl sm:text-2xl">{t.robo_name}</CardTitle>
                <span className="text-muted-foreground">·</span>
                <span className="text-sm text-muted-foreground">{t.robo_subtitle}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.robo_description}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{t.robo_bullet1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{t.robo_bullet2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{t.robo_bullet3}</span>
                </li>
              </ul>

              {/* Robo 3D Viewer */}
              <div 
                id="robo-3d-container"
                className="w-full rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border border-blue-200 dark:border-blue-800 overflow-hidden"
                style={{ height: '280px' }}
                dangerouslySetInnerHTML={{
                  __html: '<model-viewer src="/models/robo.glb" alt="Robo 3D Modell" auto-rotate camera-controls disable-zoom exposure="1.1" style="width: 100%; height: 100%; border-radius: 16px; overflow: hidden;"></model-viewer>'
                }}
              />
            </CardContent>
          </Card>
        </div>

        {/* Explanation Text Block Below Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <p className="text-base sm:text-lg text-foreground leading-relaxed mb-6">
              {t.veritas_robo_explanation}
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              {t.veritas_robo_help_title}
            </h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-foreground">
                  {t.veritas_robo_help_step1}
                </p>
              </div>
              <div>
                <p className="text-foreground">
                  {t.veritas_robo_help_step2}
                </p>
              </div>
              <div>
                <p className="text-foreground">
                  {t.veritas_robo_help_step3}
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-6 italic">
              {t.veritas_robo_disclaimer}
            </p>
          </div>
        </div>

        {/* Closing Line */}
        <p className="text-center text-sm sm:text-base text-muted-foreground mt-8">
          {t.veritas_robo_closing}
        </p>
      </div>
    </section>
  );
};
