import { Button } from '@/components/ui/button';
import { ArrowLeft, Gamepad2 } from 'lucide-react';
const Game = () => {
  return <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <Button variant="ghost" className="mb-8" onClick={() => window.history.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-veritas to-robo flex items-center justify-center mx-auto mb-8">
          <Gamepad2 className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Coming Soon</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Teste bald deine Fähigkeit, echte Fotos von KI-Bildern zu unterscheiden – das ForRealScan Mini-Game ist in Vorbereitung
        </p>

        <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-lg">
          <span className="text-sm text-muted-foreground">Expected launch: Q1 2026</span>
        </div>
      </div>
    </div>;
};
export default Game;