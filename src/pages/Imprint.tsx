import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Imprint = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <h1 className="text-4xl font-bold mb-8">Impressum / Legal Notice</h1>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Angaben gemäß § 5 TMG / Information according to § 5 TMG</h2>
            <div className="text-muted-foreground space-y-2">
              <p><strong className="text-foreground">Diensteanbieter / Service Provider:</strong> Roland Wolfsgruber</p>
              <p><strong className="text-foreground">Standort / Location:</strong> Südtirol / South Tyrol, Italien / Italy</p>
              <p><strong className="text-foreground">E-Mail / Email:</strong> <a href="mailto:info@forrealscan.com" className="text-primary hover:underline">info@forrealscan.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Verantwortlich für den Inhalt / Responsible for Content</h2>
            <p className="text-muted-foreground">
              Roland Wolfsgruber<br />
              E-Mail: <a href="mailto:info@forrealscan.com" className="text-primary hover:underline">info@forrealscan.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">EU-Streitschlichtung / EU Dispute Resolution</h2>
            <p className="text-muted-foreground">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>
            </p>
            <p className="text-muted-foreground mt-2">
              The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Haftungsausschluss / Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Haftung für Inhalte / Liability for Content:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-muted-foreground mb-4">
              The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness, or topicality. According to statutory provisions, we are responsible for our own content on these pages. However, we are not obligated to monitor transmitted or stored third-party information or investigate circumstances pointing to illegal activity.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Haftung für Links / Liability for Links:</strong> Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p className="text-muted-foreground mb-4">
              Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Urheberrecht / Copyright:</strong> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem italienischen und internationalen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p className="text-muted-foreground mt-2">
              The content and works created by the site operators on these pages are subject to Italian and international copyright law. Duplication, processing, distribution, or any form of commercialization beyond the scope of copyright law requires the prior written consent of the respective author or creator.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Kontakt / Contact</h2>
            <p className="text-muted-foreground">
              Bei Fragen oder Anliegen erreichen Sie uns unter: / For questions or concerns, please contact us at:<br />
              <a href="mailto:info@forrealscan.com" className="text-primary hover:underline">info@forrealscan.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
