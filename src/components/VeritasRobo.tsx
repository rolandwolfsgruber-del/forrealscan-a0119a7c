import { Language } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface VeritasRoboProps {
  language: Language;
}

export const VeritasRobo = ({ language }: VeritasRoboProps) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Intro Block */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Die Köpfe hinter deinem Scan
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Lerne Veritas & Robo kennen
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Zwei Perspektiven auf jedes Bild: Veritas achtet auf das natürliche Gesamtbild, 
            Robo auf technische Pixelmuster. Gemeinsam erklären sie dir, wie das Ergebnis 
            zustande kommt – verständlich und ohne Fachchinesisch.
          </p>
        </div>

        {/* Two Cards Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Veritas Card */}
          <Card className="border-t-4 border-t-green-500">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <CardTitle className="text-xl sm:text-2xl">Veritas</CardTitle>
                <span className="text-muted-foreground">·</span>
                <span className="text-sm text-muted-foreground">der Natur-Blick</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Konzentriert sich darauf, ob sich ein Bild wie eine echte Aufnahme anfühlt.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Licht, Schatten und Reflexionen wirken natürlich.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Details wie Haut, Haare und Hintergrund haben Tiefe.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Mag kleine Unperfektheiten, wie man sie von echten Fotos kennt.</span>
                </li>
              </ul>

              {/* Veritas 3D Viewer */}
              <div 
                id="veritas-3d-container"
                className="w-full rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border border-green-200 dark:border-green-800 overflow-hidden"
                style={{ height: '280px' }}
                dangerouslySetInnerHTML={{
                  __html: '<spline-viewer url="https://prod.spline.design/RZDaoDrUZUFxYHC7/scene.splinecode" style="width: 100%; height: 100%;"></spline-viewer>'
                }}
              />
            </CardContent>
          </Card>

          {/* Robo Card */}
          <Card className="border-t-4 border-t-blue-500">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <CardTitle className="text-xl sm:text-2xl">Robo</CardTitle>
                <span className="text-muted-foreground">·</span>
                <span className="text-sm text-muted-foreground">der Logik-Blick</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Analysiert Muster, Pixel und technische Spuren von KI-Bildern.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Erkennt auffällige Pixelmuster und Kompressions-Artefakte.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Achtet auf übertriebene Perfektion und Wiederholungen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Spürt Unstimmigkeiten auf, die typisch für KI-generierte Bilder sind.</span>
                </li>
              </ul>

              {/* Robo 3D Viewer */}
              <div 
                id="robo-3d-container"
                className="w-full rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border border-blue-200 dark:border-blue-800 overflow-hidden"
                style={{ height: '280px' }}
                dangerouslySetInnerHTML={{
                  __html: '<spline-viewer url="https://prod.spline.design/dK3td2XDeszHbzD1/scene.splinecode" style="width: 100%; height: 100%;"></spline-viewer>'
                }}
              />
            </CardContent>
          </Card>
        </div>

        {/* Explanation Text Block Below Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <p className="text-base sm:text-lg text-foreground leading-relaxed mb-6">
              Veritas steht für den „Natur-Blick": Licht, Schatten, Tiefe und das Gesamtgefühl 
              eines Bildes. Robo übernimmt den „Logik-Blick": Pixel, Muster und typische Spuren 
              von KI-Generierung. Beide schauen auf dasselbe Bild – aber aus zwei Richtungen – 
              und treffen sich dann in einer gemeinsamen Einschätzung.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              So helfen sie dir:
            </h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-foreground">
                  <span className="font-semibold">1. Zwei Perspektiven</span> – Veritas prüft 
                  das Bildgefühl, Robo die technischen Details.
                </p>
              </div>
              <div>
                <p className="text-foreground">
                  <span className="font-semibold">2. Hinweise für „echt" oder „KI"</span> – 
                  Beide suchen nach typischen Spuren, die für oder gegen KI sprechen.
                </p>
              </div>
              <div>
                <p className="text-foreground">
                  <span className="font-semibold">3. Erklärung in Klartext</span> – Aus den 
                  Hinweisen wird eine ruhige, neutrale Erklärung, die du ohne Vorwissen verstehst.
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-6 italic">
              Ohne Modellnamen, ohne Provider-Werbung – nur eine ehrliche Einschätzung, 
              die du nachvollziehen kannst.
            </p>
          </div>
        </div>

        {/* Closing Line */}
        <p className="text-center text-sm sm:text-base text-muted-foreground mt-8">
          Veritas und Robo sehen ein Bild aus zwei Richtungen – am Ende bekommst du eine 
          gemeinsame, ausgewogene Einschätzung pro Scan.
        </p>
      </div>
    </section>
  );
};
