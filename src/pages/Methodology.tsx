import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Eye, Brain, AlertTriangle, Lock, HelpCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Methodology = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück
        </Button>

        <h1 className="text-4xl font-bold mb-4">Methodik & Technologie</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Wie ForRealScan KI-generierte Bilder erkennt – transparent erklärt.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Button asChild>
            <a href="https://app.forrealscan.com" target="_blank" rel="noopener noreferrer">
              Jetzt Scan starten
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/examples">
              Beispiele ansehen
            </Link>
          </Button>
        </div>

        <div className="prose prose-gray max-w-none space-y-12">
          {/* Section 1: What ForRealScan Does */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-veritas to-robo flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground m-0">Was ForRealScan macht</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              ForRealScan ist ein Analyse-Tool, das dir hilft, den möglichen KI-Anteil in Bildern einzuschätzen.
              Der Service kombiniert verschiedene Analysemethoden, um Hinweise darauf zu finden, ob ein Bild
              mit KI-Technologie generiert oder stark bearbeitet wurde.
            </p>
            <p className="text-muted-foreground">
              Wichtig zu verstehen: ForRealScan liefert <strong className="text-foreground">Wahrscheinlichkeiten und fundierte Einschätzungen</strong> –
              keine absoluten Urteile. Die Technologie zur Bilderzeugung entwickelt sich ständig weiter,
              und kein Erkennungssystem kann eine hundertprozentige Genauigkeit garantieren.
            </p>
          </section>

          {/* Section 2: How the Scan Works */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-veritas to-robo flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground m-0">So funktioniert der Scan</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Der ForRealScan-Hybrid kombiniert zwei Analyseperspektiven, symbolisiert durch unsere Maskottchen
              Veritas und Robo:
            </p>

            <div className="bg-card border border-border rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-veritas mb-2">Veritas – Der Natur-Blick</h3>
              <p className="text-muted-foreground mb-4">
                Veritas analysiert, ob ein Bild die typischen Eigenschaften einer echten Fotografie aufweist:
                natürliche Lichtverhältnisse, realistische Schatten, organische Texturen bei Haut und Haaren,
                sowie die kleinen Unvollkommenheiten, die echte Fotos auszeichnen.
              </p>
              <h3 className="text-lg font-semibold text-robo mb-2">Robo – Der Logik-Blick</h3>
              <p className="text-muted-foreground">
                Robo sucht nach technischen Mustern, die für KI-generierte Bilder typisch sind:
                auffällige Pixelstrukturen, Kompressionsartefakte, übertriebene Perfektion,
                wiederkehrende Muster und Unstimmigkeiten in Details wie Händen, Zähnen oder Hintergründen.
              </p>
            </div>

            <p className="text-muted-foreground">
              Beide Perspektiven fließen in eine gemeinsame Bewertung ein. Das Ergebnis wird als
              Prozentangabe dargestellt, ergänzt durch eine verständliche Erklärung, welche Faktoren
              zur Einschätzung geführt haben.
            </p>
          </section>

          {/* Section 3: What the Results Mean */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-veritas to-robo flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground m-0">Was die Ergebnisse bedeuten</h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-green-600 mb-1">Niedrige KI-Wahrscheinlichkeit (0–30%)</h4>
                <p className="text-sm text-muted-foreground">
                  Das Bild zeigt überwiegend Merkmale einer authentischen Fotografie.
                  Natürliche Unregelmäßigkeiten und realistische Details sprechen für ein echtes Foto.
                </p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-600 mb-1">Mittlere Unsicherheit (30–70%)</h4>
                <p className="text-sm text-muted-foreground">
                  Das Bild enthält sowohl authentische als auch verdächtige Merkmale.
                  Möglich sind leichte Bearbeitung, Filter oder teilweise KI-Unterstützung.
                </p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-red-600 mb-1">Hohe KI-Wahrscheinlichkeit (70–100%)</h4>
                <p className="text-sm text-muted-foreground">
                  Das Bild zeigt deutliche Anzeichen von KI-Generierung oder starker Manipulation.
                  Typische KI-Muster und technische Artefakte wurden erkannt.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground">
              Jedes Ergebnis wird mit einer kurzen Erklärung versehen, die beschreibt, welche konkreten
              Merkmale zur Einschätzung geführt haben. So kannst du die Bewertung nachvollziehen und
              dir ein eigenes Urteil bilden.
            </p>
          </section>

          {/* Section 4: Limitations */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground m-0">Grenzen & wann es schwierig wird</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Ehrlichkeit ist uns wichtig. ForRealScan hat – wie jedes Erkennungssystem – Grenzen:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>
                <strong className="text-foreground">Stark komprimierte Bilder:</strong> Bei Bildern, die mehrfach
                gespeichert oder über Messenger geteilt wurden, gehen wichtige Details verloren.
              </li>
              <li>
                <strong className="text-foreground">Screenshots:</strong> Text und Interface-Elemente erschweren
                die reine Bildanalyse.
              </li>
              <li>
                <strong className="text-foreground">Hybride Bilder:</strong> Echte Fotos mit KI-Bearbeitung
                (z.B. Gesichtsfilter, Hintergrundänderungen) sind besonders schwer einzuordnen.
              </li>
              <li>
                <strong className="text-foreground">Neueste KI-Modelle:</strong> Die Technologie entwickelt sich
                rasant. Sehr neue Generierungsmodelle können schwerer erkennbar sein.
              </li>
              <li>
                <strong className="text-foreground">Professionelle Fotos:</strong> Studio-Aufnahmen mit perfekter
                Ausleuchtung können fälschlicherweise als "zu perfekt" eingestuft werden.
              </li>
            </ul>
            <p className="text-muted-foreground">
              Wenn ein Ergebnis unsicher ist, zeigt ForRealScan dies deutlich an. In solchen Fällen solltest
              du zusätzliche Recherche betreiben, bevor du Schlüsse ziehst.
            </p>
          </section>

          {/* Section 5: Responsible Use */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-veritas to-robo flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground m-0">Verantwortungsvoller Umgang</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              ForRealScan ist ein Hilfsmittel zur Orientierung – kein Beweisinstrument.
              Die Ergebnisse sollten:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Als Ausgangspunkt für weitere Recherche dienen, nicht als abschließendes Urteil</li>
              <li>Nicht allein als Grundlage für Anschuldigungen oder rechtliche Schritte verwendet werden</li>
              <li>Im Kontext betrachtet werden: Quelle, Absender und Situation spielen eine Rolle</li>
              <li>Mit gesundem Menschenverstand interpretiert werden</li>
            </ul>
            <p className="text-muted-foreground">
              Unser Ziel ist es, dir zu helfen, in einer Welt voller manipulierter Bilder bewusstere
              Entscheidungen zu treffen – nicht, Misstrauen zu säen oder voreilige Schlüsse zu fördern.
            </p>
          </section>

          {/* Section 6: Privacy */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-veritas to-robo flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground m-0">Datenschutz bei der Analyse</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Deine Privatsphäre hat Priorität:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Hochgeladene Bilder werden serverseitig nur zur Analyse verarbeitet und nicht dauerhaft gespeichert</li>
              <li>Ergebnisse und Karten können – je nach Nutzung – lokal auf deinem Gerät in der Sammlung gespeichert werden</li>
              <li>Die Übertragung erfolgt verschlüsselt (HTTPS/TLS)</li>
              <li>Wir verkaufen keine Nutzerdaten</li>
            </ul>
            <p className="text-muted-foreground">
              Weitere Details findest du in unserer <a href="/privacy" className="text-primary hover:underline">Datenschutzerklärung</a>.
            </p>
          </section>

          {/* Summary Box */}
          <section className="bg-muted/50 border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Zusammenfassung / Summary</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-foreground mb-2">Deutsch</h4>
                <p className="text-sm text-muted-foreground">
                  ForRealScan analysiert Bilder auf KI-typische Muster und liefert
                  Wahrscheinlichkeiten statt absoluter Urteile. Die Ergebnisse dienen
                  als Orientierung und sollten im Kontext betrachtet werden.
                  Kein Erkennungssystem ist perfekt – ForRealScan zeigt Unsicherheiten
                  transparent an.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">English</h4>
                <p className="text-sm text-muted-foreground">
                  ForRealScan analyzes images for AI-typical patterns and provides
                  probabilities rather than absolute judgments. Results serve as
                  guidance and should be viewed in context. No detection system
                  is perfect – ForRealScan transparently indicates uncertainties.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
