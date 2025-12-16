import { Button } from '@/components/ui/button';
import { ArrowLeft, Gamepad2, ExternalLink, Eye, Brain, Trophy } from 'lucide-react';

const Game = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück / Back
        </Button>

        <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-veritas to-robo flex items-center justify-center mx-auto mb-8">
            <Gamepad2 className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            ForRealScan Mini-Game
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Teste deine Fähigkeit, echte Fotos von KI-generierten Bildern zu unterscheiden.
            Trainiere dein Auge und lerne, worauf du achten musst.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Test your ability to distinguish real photos from AI-generated images.
            Train your eye and learn what to look for.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <Eye className="w-10 h-10 text-veritas mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Schärfe dein Auge</h3>
            <p className="text-sm text-muted-foreground">
              Lerne, subtile Unterschiede zwischen echten und KI-Bildern zu erkennen.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <Brain className="w-10 h-10 text-robo mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Verstehe KI-Muster</h3>
            <p className="text-sm text-muted-foreground">
              Entdecke typische Artefakte und Merkmale von KI-generierten Bildern.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <Trophy className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Vergleiche dich</h3>
            <p className="text-sm text-muted-foreground">
              Sieh, wie gut du im Vergleich zu anderen Spielern abschneidest.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-veritas to-robo hover:opacity-90 text-white shadow-lg h-14 px-8 text-lg"
          >
            <a
              href="https://game.forrealscan.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Gamepad2 className="mr-2 h-5 w-5" />
              Spiel starten / Start Game
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-16 prose prose-gray max-w-none">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Warum dieses Spiel? / Why this game?</h2>
          <p className="text-muted-foreground mb-4">
            KI-generierte Bilder werden immer realistischer und schwerer zu erkennen. Mit dem ForRealScan Mini-Game
            kannst du spielerisch lernen, worauf du achten musst, um echte von künstlichen Bildern zu unterscheiden.
          </p>
          <p className="text-muted-foreground mb-4">
            AI-generated images are becoming increasingly realistic and harder to detect. With the ForRealScan Mini-Game,
            you can learn playfully what to look for to distinguish real from artificial images.
          </p>
          <p className="text-muted-foreground">
            Das Spiel ergänzt die ForRealScan-Analyse: Während der Scan dir technische Hinweise gibt,
            hilft das Spiel dabei, dein eigenes Urteilsvermögen zu schärfen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Game;
