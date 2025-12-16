import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';
import squirrelReal from '@/assets/squirrel-real.jpg';
import squirrelAi from '@/assets/squirrel-ai.png';
import butterflyAi from '@/assets/butterfly-ai.webp';

const ExamplesPage = () => {
  const examples = [
    {
      id: 1,
      title: 'Echtes Eichhörnchen-Foto',
      titleEn: 'Real Squirrel Photo',
      image: squirrelReal,
      score: 12,
      verdict: 'authentic',
      veritasSays: 'Natürliche Fellstruktur mit individuellen Haarverläufen. Realistisches Lichtspiel auf dem Fell. Organische Unregelmäßigkeiten im Hintergrund.',
      roboSays: 'Keine auffälligen Pixelmuster oder Kompressionsanomalien. Rauschen entspricht einer echten Kameraaufnahme. Keine Wiederholungsmuster erkennbar.',
      explanation: 'Dieses Bild zeigt typische Merkmale einer authentischen Naturfotografie: Die Fellstruktur weist natürliche Unregelmäßigkeiten auf, das Bokeh im Hintergrund ist organisch, und das Bildrauschen entspricht dem einer echten Kamera. Kleine Details wie einzelne Fellhaare und natürliche Schattenwürfe sind weitere Indikatoren für ein echtes Foto.',
      explanationEn: 'This image shows typical characteristics of authentic nature photography: The fur texture shows natural irregularities, the background bokeh is organic, and the image noise matches that of a real camera.',
    },
    {
      id: 2,
      title: 'KI-generiertes Eichhörnchen',
      titleEn: 'AI-generated Squirrel',
      image: squirrelAi,
      score: 87,
      verdict: 'ai',
      veritasSays: 'Das Fell wirkt zu gleichmäßig und "gemalt". Die Augen haben eine unnatürlich perfekte Spiegelung. Der Übergang zum Hintergrund ist zu weich.',
      roboSays: 'Typische GAN-Artefakte in den Fellstrukturen erkannt. Pixelmuster deuten auf Stable Diffusion oder ähnliches Modell hin. Auffällige Glättung in Detailbereichen.',
      explanation: 'Obwohl auf den ersten Blick realistisch, zeigt dieses Bild mehrere KI-typische Merkmale: Das Fell ist zu gleichmäßig texturiert, die Augenspiegelungen sind perfekt symmetrisch, und es fehlen die kleinen Unvollkommenheiten echten Fotos. Besonders auffällig ist die "plastische" Qualität des Fells und der zu sanfte Übergang zwischen Subjekt und Hintergrund.',
      explanationEn: 'Although realistic at first glance, this image shows several AI-typical characteristics: The fur is too uniformly textured, eye reflections are perfectly symmetrical, and the small imperfections of real photos are missing.',
    },
    {
      id: 3,
      title: 'KI-generierter Schmetterling',
      titleEn: 'AI-generated Butterfly',
      image: butterflyAi,
      score: 94,
      verdict: 'ai',
      veritasSays: 'Die Flügelmuster sind zu perfekt symmetrisch. Die Farben wirken übersättigt und unnatürlich leuchtend. Die Körperstruktur ist anatomisch vereinfacht.',
      roboSays: 'Deutliche Wiederholungsmuster in der Flügelstruktur. Hochfrequenzdetails fehlen komplett. Typische Midjourney/DALL-E Signatur in den Farbübergängen.',
      explanation: 'Dieses Bild zeigt die typischen Kennzeichen einer KI-Generierung: übertriebene Farbsättigung, unnatürlich perfekte Symmetrie, und vereinfachte anatomische Details. Die Flügelmuster wiederholen sich auf eine Weise, die in der Natur nicht vorkommt. Zudem fehlen die feinen Strukturen wie Flügelschuppen, die echte Schmetterlingsfotos auszeichnen.',
      explanationEn: 'This image shows typical signs of AI generation: exaggerated color saturation, unnaturally perfect symmetry, and simplified anatomical details. The wing patterns repeat in ways that dont occur in nature.',
    },
  ];

  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case 'authentic':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'uncertain':
        return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
      case 'ai':
        return <XCircle className="w-6 h-6 text-red-500" />;
      default:
        return null;
    }
  };

  const getScoreColor = (score: number) => {
    if (score <= 30) return 'from-green-500 to-green-600';
    if (score <= 70) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  const getScoreLabel = (score: number) => {
    if (score <= 30) return { de: 'Wahrscheinlich echt', en: 'Likely authentic' };
    if (score <= 70) return { de: 'Unsicher', en: 'Uncertain' };
    return { de: 'Wahrscheinlich KI', en: 'Likely AI' };
  };

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück / Back
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Beispiel-Analysen</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            So sehen ForRealScan-Ergebnisse aus – mit Erklärungen, wie du sie interpretieren kannst.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
            See how ForRealScan results look – with explanations on how to interpret them.
          </p>
        </div>

        {/* Disclaimer Box */}
        <div className="bg-muted/50 border border-border rounded-xl p-6 mb-12 flex gap-4">
          <Info className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-foreground mb-1">Hinweis / Note</h3>
            <p className="text-sm text-muted-foreground">
              Die folgenden Beispiele zeigen, wie ForRealScan Bilder analysiert. Die Ergebnisse sind
              Wahrscheinlichkeiten und fundierte Einschätzungen – keine absoluten Urteile.
              Jedes Bild kann je nach Kontext und Quelle unterschiedlich zu bewerten sein.
            </p>
          </div>
        </div>

        {/* Example Cards */}
        <div className="space-y-12">
          {examples.map((example) => (
            <div
              key={example.id}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative aspect-square md:aspect-auto">
                  <img
                    src={example.image}
                    alt={example.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Score Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`bg-gradient-to-r ${getScoreColor(example.score)} text-white px-4 py-2 rounded-full font-bold shadow-lg`}>
                      {example.score}% KI
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Title and Verdict */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{example.title}</h2>
                      <p className="text-sm text-muted-foreground">{example.titleEn}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getVerdictIcon(example.verdict)}
                      <span className="text-sm font-medium">
                        {getScoreLabel(example.score).de}
                      </span>
                    </div>
                  </div>

                  {/* Veritas & Robo Analysis */}
                  <div className="space-y-4">
                    <div className="bg-veritas/10 border border-veritas/30 rounded-lg p-4">
                      <h4 className="font-semibold text-veritas mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-veritas rounded-full"></span>
                        Veritas sagt:
                      </h4>
                      <p className="text-sm text-muted-foreground">{example.veritasSays}</p>
                    </div>
                    <div className="bg-robo/10 border border-robo/30 rounded-lg p-4">
                      <h4 className="font-semibold text-robo mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-robo rounded-full"></span>
                        Robo sagt:
                      </h4>
                      <p className="text-sm text-muted-foreground">{example.roboSays}</p>
                    </div>
                  </div>

                  {/* Detailed Explanation */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Einordnung / Context</h4>
                    <p className="text-sm text-muted-foreground mb-2">{example.explanation}</p>
                    <p className="text-sm text-muted-foreground italic">{example.explanationEn}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Eigene Bilder prüfen?</h3>
          <p className="text-muted-foreground mb-6">
            Teste ForRealScan kostenlos – bis zu 5 Analysen pro Tag, ohne Anmeldung.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-veritas to-robo hover:opacity-90 text-white shadow-lg h-14 px-8 text-lg"
          >
            <a
              href="https://app.forrealscan.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jetzt Bild analysieren / Analyze Image Now
            </a>
          </Button>
        </div>

        {/* Additional Context Section */}
        <div className="mt-16 prose prose-gray max-w-none">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Wie du die Ergebnisse nutzen solltest</h2>
          <p className="text-muted-foreground mb-4">
            Die Beispiele oben zeigen, dass ForRealScan sowohl echte Fotos als auch KI-generierte Bilder
            mit guter Genauigkeit einordnen kann. Trotzdem gilt: Die Ergebnisse sind Orientierungshilfen,
            keine absoluten Beweise.
          </p>
          <p className="text-muted-foreground mb-4">
            Bei Bildern mit mittleren Werten (30-70%) ist besondere Vorsicht geboten. Diese können
            leicht bearbeitete echte Fotos, teilweise KI-generierte Bilder oder einfach schwer
            einzuordnende Aufnahmen sein. In solchen Fällen empfehlen wir, weitere Faktoren zu
            berücksichtigen: Woher stammt das Bild? Wer hat es gepostet? Gibt es andere Versionen?
          </p>
          <p className="text-muted-foreground">
            Mehr über unsere Methodik erfährst du auf der <a href="/methodology" className="text-primary hover:underline">Methodik-Seite</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExamplesPage;
