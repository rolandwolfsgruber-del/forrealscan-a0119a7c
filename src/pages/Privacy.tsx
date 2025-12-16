import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
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

        <h1 className="text-4xl font-bold mb-8">Privacy Policy / Datenschutzerklärung</h1>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <p className="text-sm text-muted-foreground mb-6">
              <strong>Stand / Last Updated:</strong> Dezember 2024 / December 2024
            </p>
            <p className="text-muted-foreground">
              ForRealScan verpflichtet sich zum Schutz Ihrer Privatsphäre. Diese Datenschutzerklärung erläutert, wie wir Ihre personenbezogenen Daten in Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO) und anderen anwendbaren Datenschutzgesetzen erheben, verwenden und schützen.
            </p>
            <p className="text-muted-foreground mt-2">
              ForRealScan is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal data in compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Verantwortlicher / Data Controller</h2>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Diensteanbieter / Service Provider:</strong> Roland Wolfsgruber (ForRealScan)<br />
              <strong className="text-foreground">Standort / Location:</strong> Südtirol, Italien / South Tyrol, Italy<br />
              <strong className="text-foreground">E-Mail / Email:</strong> <a href="mailto:info@forrealscan.com" className="text-primary hover:underline">info@forrealscan.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Daten, die wir erheben / Data We Collect</h2>
            <div className="text-muted-foreground space-y-3">
              <p><strong className="text-foreground">Hochgeladene Bilder / Images You Upload:</strong> Wenn Sie unseren KI-Analysedienst nutzen, laden Sie Bilder zur Verarbeitung hoch. Diese Bilder werden in Echtzeit verarbeitet und nicht dauerhaft auf unseren Servern gespeichert, es sei denn, Sie speichern Ergebnisse explizit. / When you use our AI analysis service, you upload images for processing. These images are processed in real-time and are not permanently stored on our servers unless you explicitly save results.</p>
              <p><strong className="text-foreground">Technische Daten / Technical Data:</strong> Wir erfassen automatisch technische Informationen wie IP-Adresse, Browsertyp, Geräteinformationen und Zugriffszeiten für Sicherheits- und Analysezwecke. / We automatically collect technical information such as IP address, browser type, device information, and access times for security and analytics purposes.</p>
              <p><strong className="text-foreground">Kontaktinformationen / Contact Information:</strong> Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, erfassen wir Ihren Namen, Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht. / If you contact us via email or contact form, we collect your name, email address, and message content.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Zweck der Datenverarbeitung / Purpose of Data Processing</h2>
            <div className="text-muted-foreground space-y-3">
              <p><strong className="text-foreground">KI-Bildanalyse / AI Image Analysis:</strong> Um unseren Kerndienst zur Erkennung von KI-generierten Inhalten in Bildern bereitzustellen. / To provide our core service of detecting AI-generated content in images.</p>
              <p><strong className="text-foreground">Serviceverbesserung / Service Improvement:</strong> Um Nutzungsmuster zu analysieren und unsere Servicequalität zu verbessern. / To analyze usage patterns and improve our service quality.</p>
              <p><strong className="text-foreground">Kommunikation / Communication:</strong> Um auf Ihre Anfragen zu antworten und Kundensupport zu bieten. / To respond to your inquiries and provide customer support.</p>
              <p><strong className="text-foreground">Rechtliche Compliance / Legal Compliance:</strong> Um geltende Gesetze und Vorschriften einzuhalten. / To comply with applicable laws and regulations.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Cookies und Tracking / Cookies and Tracking</h2>
            <div className="text-muted-foreground space-y-3">
              <p>Wir verwenden Cookies und ähnliche Tracking-Technologien, um Ihre Erfahrung zu verbessern: / We use cookies and similar tracking technologies to enhance your experience:</p>
              <p><strong className="text-foreground">Essentielle Cookies / Essential Cookies:</strong> Erforderlich für die ordnungsgemäße Funktion der Website. / Required for the website to function properly.</p>
              <p><strong className="text-foreground">Analyse-Cookies / Analytics Cookies:</strong> Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren (z.B. Google Analytics). / Help us understand how visitors interact with our website (e.g., Google Analytics).</p>
              <p><strong className="text-foreground">Werbe-Cookies / Advertising Cookies:</strong> Werden verwendet, um relevante Werbung anzuzeigen (z.B. Google AdSense). / Used to display relevant advertisements (e.g., Google AdSense).</p>
              <p>Sie können Cookie-Einstellungen in Ihrem Browser verwalten. / You can manage cookie preferences in your browser settings.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Datenweitergabe und Dritte / Data Sharing and Third Parties</h2>
            <div className="text-muted-foreground space-y-3">
              <p>Wir verkaufen Ihre personenbezogenen Daten nicht. Wir können Daten teilen mit: / We do not sell your personal data. We may share data with:</p>
              <p><strong className="text-foreground">KI-Dienstleister / AI Service Providers:</strong> Drittanbieter-KI-Verarbeitungsdienste, die hochgeladene Bilder analysieren. / Third-party AI processing services that analyze uploaded images.</p>
              <p><strong className="text-foreground">Analyseanbieter / Analytics Providers:</strong> Dienste wie Google Analytics, um die Website-Nutzung zu verstehen. / Services like Google Analytics to understand website usage.</p>
              <p><strong className="text-foreground">Werbenetzwerke / Advertising Networks:</strong> Dienste wie Google AdSense zur Anzeige von Werbung. / Services like Google AdSense for displaying ads.</p>
              <p><strong className="text-foreground">Rechtliche Verpflichtungen / Legal Obligations:</strong> Wenn dies gesetzlich vorgeschrieben ist oder zum Schutz unserer Rechte. / When required by law or to protect our rights.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Ihre Rechte (DSGVO) / Your Rights (GDPR)</h2>
            <div className="text-muted-foreground space-y-3">
              <p>Nach der DSGVO haben Sie folgende Rechte: / Under GDPR, you have the following rights:</p>
              <p><strong className="text-foreground">Auskunftsrecht / Right of Access:</strong> Eine Kopie Ihrer personenbezogenen Daten anfordern. / Request a copy of your personal data.</p>
              <p><strong className="text-foreground">Recht auf Berichtigung / Right to Rectification:</strong> Ungenaue oder unvollständige Daten korrigieren. / Correct inaccurate or incomplete data.</p>
              <p><strong className="text-foreground">Recht auf Löschung / Right to Erasure:</strong> Löschung Ihrer personenbezogenen Daten verlangen ("Recht auf Vergessenwerden"). / Request deletion of your personal data ("right to be forgotten").</p>
              <p><strong className="text-foreground">Recht auf Datenübertragbarkeit / Right to Data Portability:</strong> Ihre Daten in einem strukturierten, maschinenlesbaren Format erhalten. / Receive your data in a structured, machine-readable format.</p>
              <p><strong className="text-foreground">Widerspruchsrecht / Right to Object:</strong> Der Verarbeitung Ihrer Daten für Direktwerbung oder andere Zwecke widersprechen. / Object to processing of your data for direct marketing or other purposes.</p>
              <p><strong className="text-foreground">Recht auf Widerruf der Einwilligung / Right to Withdraw Consent:</strong> Die Einwilligung jederzeit widerrufen, wenn die Verarbeitung auf Einwilligung basiert. / Withdraw consent at any time where processing is based on consent.</p>
              <p>Um diese Rechte auszuüben, kontaktieren Sie uns unter: / To exercise these rights, contact us at: <a href="mailto:info@forrealscan.com" className="text-primary hover:underline">info@forrealscan.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Datenspeicherung / Data Retention</h2>
            <p className="text-muted-foreground">
              Wir bewahren Ihre personenbezogenen Daten nur so lange auf, wie es für die in dieser Richtlinie genannten Zwecke erforderlich ist oder gesetzlich vorgeschrieben. Hochgeladene Bilder werden in Echtzeit verarbeitet und sofort nach der Analyse gelöscht, es sei denn, Sie entscheiden sich, Ergebnisse zu speichern.
            </p>
            <p className="text-muted-foreground mt-2">
              We retain your personal data only as long as necessary for the purposes outlined in this policy or as required by law. Uploaded images are processed in real-time and deleted immediately after analysis unless you choose to save results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Datensicherheit / Data Security</h2>
            <p className="text-muted-foreground">
              Wir implementieren angemessene technische und organisatorische Maßnahmen, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Verlust oder Veränderung zu schützen. Dies umfasst Verschlüsselung, sichere Server und Zugriffskontrollen.
            </p>
            <p className="text-muted-foreground mt-2">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. This includes encryption, secure servers, and access controls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Internationale Datenübertragungen / International Data Transfers</h2>
            <p className="text-muted-foreground">
              Ihre Daten können in Länder außerhalb des Europäischen Wirtschaftsraums (EWR) übertragen und dort verarbeitet werden. Wir stellen sicher, dass angemessene Schutzmaßnahmen vorhanden sind, wie z.B. von der Europäischen Kommission genehmigte Standardvertragsklauseln.
            </p>
            <p className="text-muted-foreground mt-2">
              Your data may be transferred to and processed in countries outside the European Economic Area (EEA). We ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Datenschutz von Kindern / Children's Privacy</h2>
            <p className="text-muted-foreground">
              Unser Service ist nicht für Kinder unter 16 Jahren bestimmt. Wir erfassen wissentlich keine personenbezogenen Daten von Kindern. Wenn Sie glauben, dass wir Daten von einem Kind erhoben haben, kontaktieren Sie uns bitte umgehend.
            </p>
            <p className="text-muted-foreground mt-2">
              Our service is not intended for children under 16 years of age. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Änderungen dieser Richtlinie / Changes to This Policy</h2>
            <p className="text-muted-foreground">
              Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über wesentliche Änderungen informieren, indem wir die neue Richtlinie auf dieser Seite mit einem aktualisierten "Stand"-Datum veröffentlichen.
            </p>
            <p className="text-muted-foreground mt-2">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Kontakt / Contact Us</h2>
            <p className="text-muted-foreground">
              Bei Fragen oder Bedenken zu dieser Datenschutzerklärung oder unseren Datenpraktiken kontaktieren Sie uns bitte unter: / For any questions or concerns about this Privacy Policy or our data practices, please contact us at:<br />
              <strong className="text-foreground">E-Mail / Email:</strong> <a href="mailto:info@forrealscan.com" className="text-primary hover:underline">info@forrealscan.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
