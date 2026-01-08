import { useState, useEffect } from 'react';
import { Language } from '@/lib/translations';
import { LANGUAGE_STORAGE_KEY } from '@/lib/constants';
import { SubPageHeader } from '@/components/SubPageHeader';
import { Footer } from '@/components/Footer';
import { useTheme } from '@/hooks/useTheme';

const termsTranslations: Record<Language, {
  title: string;
  lastUpdated: string;
  intro: string;
  section1_title: string;
  section1_text: string;
  section2_title: string;
  section2_text: string;
  section3_title: string;
  section3_text: string;
  section4_title: string;
  section4_text: string;
  section5_title: string;
  section5_text: string;
  section6_title: string;
  section6_text: string;
  section7_title: string;
  section7_text: string;
  section8_title: string;
  section8_text: string;
  section9_title: string;
  section9_text: string;
  section10_title: string;
  section10_text: string;
  back: string;
}> = {
  de: {
    title: 'Allgemeine Geschäftsbedingungen (AGB)',
    lastUpdated: 'Zuletzt aktualisiert: Januar 2026',
    intro: 'Willkommen bei ForRealScan. Durch die Nutzung unserer Website und Dienste erklären Sie sich mit diesen Allgemeinen Geschäftsbedingungen einverstanden. Bitte lesen Sie diese sorgfältig durch.',
    section1_title: '1. Geltungsbereich',
    section1_text: 'Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der Website forrealscan.com und der dazugehörigen Dienste (nachfolgend "ForRealScan" oder "Dienst"). Durch die Nutzung des Dienstes akzeptieren Sie diese Bedingungen vollständig.',
    section2_title: '2. Beschreibung des Dienstes',
    section2_text: 'ForRealScan ist ein KI-gestütztes Tool zur Analyse von Bildern auf mögliche KI-Generierung oder digitale Manipulation. Der Dienst bietet Wahrscheinlichkeitseinschätzungen und technische Analysen, jedoch keine definitiven Urteile über die Authentizität von Bildern.',
    section3_title: '3. Nutzungsbedingungen',
    section3_text: 'Sie dürfen ForRealScan nur für rechtmäßige Zwecke nutzen. Es ist untersagt, den Dienst für illegale Aktivitäten, zur Verleumdung, Belästigung oder für andere rechtswidrige Zwecke zu verwenden. Sie sind für alle Bilder verantwortlich, die Sie hochladen, und müssen sicherstellen, dass Sie die erforderlichen Rechte an diesen Bildern besitzen.',
    section4_title: '4. Haftungsausschluss',
    section4_text: 'ForRealScan bietet Analyseergebnisse als Orientierungshilfe an. Die Ergebnisse stellen keine rechtliche oder forensische Expertise dar. Wir übernehmen keine Haftung für Entscheidungen, die auf Basis unserer Analysen getroffen werden. Der Dienst wird "wie besehen" bereitgestellt, ohne ausdrückliche oder stillschweigende Garantien.',
    section5_title: '5. Geistiges Eigentum',
    section5_text: 'Alle Inhalte auf ForRealScan, einschließlich Texte, Grafiken, Logos und Software, sind urheberrechtlich geschützt und Eigentum von ForRealScan oder seinen Lizenzgebern. Die unbefugte Nutzung, Vervielfältigung oder Verbreitung dieser Inhalte ist untersagt.',
    section6_title: '6. Datenschutz',
    section6_text: 'Ihre Privatsphäre ist uns wichtig. Informationen zur Verarbeitung Ihrer Daten finden Sie in unserer Datenschutzerklärung. Hochgeladene Bilder werden gemäß unserer Datenschutzrichtlinie verarbeitet und nicht ohne Ihre Zustimmung an Dritte weitergegeben.',
    section7_title: '7. Kostenlose und Premium-Dienste',
    section7_text: 'ForRealScan bietet sowohl kostenlose als auch kostenpflichtige Premium-Funktionen an. Die genauen Konditionen für Premium-Dienste werden zum Zeitpunkt des Kaufs mitgeteilt. Wir behalten uns das Recht vor, Preise und Leistungsumfang mit angemessener Vorankündigung zu ändern.',
    section8_title: '8. Verfügbarkeit des Dienstes',
    section8_text: 'Wir bemühen uns, ForRealScan rund um die Uhr verfügbar zu halten. Jedoch können wir keine ununterbrochene Verfügbarkeit garantieren. Wartungsarbeiten und technische Probleme können zu vorübergehenden Unterbrechungen führen.',
    section9_title: '9. Änderungen der AGB',
    section9_text: 'Wir behalten uns das Recht vor, diese AGB jederzeit zu ändern. Wesentliche Änderungen werden auf unserer Website bekannt gegeben. Die fortgesetzte Nutzung des Dienstes nach solchen Änderungen gilt als Zustimmung zu den neuen Bedingungen.',
    section10_title: '10. Anwendbares Recht und Gerichtsstand',
    section10_text: 'Diese AGB unterliegen dem Recht der Republik Italien. Für alle Streitigkeiten aus oder im Zusammenhang mit diesen AGB sind die Gerichte in Bozen, Italien, zuständig.',
    back: 'Zurück',
  },
  en: {
    title: 'Terms of Service',
    lastUpdated: 'Last updated: January 2026',
    intro: 'Welcome to ForRealScan. By using our website and services, you agree to these Terms of Service. Please read them carefully.',
    section1_title: '1. Scope',
    section1_text: 'These Terms of Service apply to the use of the website forrealscan.com and related services (hereinafter "ForRealScan" or "Service"). By using the Service, you accept these terms in full.',
    section2_title: '2. Description of Service',
    section2_text: 'ForRealScan is an AI-powered tool for analyzing images for potential AI generation or digital manipulation. The service provides probability assessments and technical analyses, but not definitive judgments about image authenticity.',
    section3_title: '3. Terms of Use',
    section3_text: 'You may only use ForRealScan for lawful purposes. It is prohibited to use the Service for illegal activities, defamation, harassment, or other unlawful purposes. You are responsible for all images you upload and must ensure you have the necessary rights to those images.',
    section4_title: '4. Disclaimer',
    section4_text: 'ForRealScan provides analysis results as guidance. Results do not constitute legal or forensic expertise. We assume no liability for decisions made based on our analyses. The Service is provided "as is" without express or implied warranties.',
    section5_title: '5. Intellectual Property',
    section5_text: 'All content on ForRealScan, including texts, graphics, logos, and software, is protected by copyright and owned by ForRealScan or its licensors. Unauthorized use, reproduction, or distribution of this content is prohibited.',
    section6_title: '6. Privacy',
    section6_text: 'Your privacy is important to us. Information about the processing of your data can be found in our Privacy Policy. Uploaded images are processed in accordance with our privacy policy and are not shared with third parties without your consent.',
    section7_title: '7. Free and Premium Services',
    section7_text: 'ForRealScan offers both free and paid premium features. The exact terms for premium services will be communicated at the time of purchase. We reserve the right to change prices and scope of services with reasonable notice.',
    section8_title: '8. Service Availability',
    section8_text: 'We strive to keep ForRealScan available around the clock. However, we cannot guarantee uninterrupted availability. Maintenance work and technical issues may result in temporary interruptions.',
    section9_title: '9. Changes to Terms',
    section9_text: 'We reserve the right to change these Terms at any time. Material changes will be announced on our website. Continued use of the Service after such changes constitutes acceptance of the new terms.',
    section10_title: '10. Applicable Law and Jurisdiction',
    section10_text: 'These Terms are governed by the laws of the Republic of Italy. The courts in Bolzano, Italy, have jurisdiction over all disputes arising from or in connection with these Terms.',
    back: 'Back',
  },
  it: {
    title: 'Termini e Condizioni',
    lastUpdated: 'Ultimo aggiornamento: Gennaio 2026',
    intro: 'Benvenuto su ForRealScan. Utilizzando il nostro sito web e i nostri servizi, accetti questi Termini e Condizioni. Ti preghiamo di leggerli attentamente.',
    section1_title: '1. Ambito di applicazione',
    section1_text: 'Questi Termini e Condizioni si applicano all\'uso del sito web forrealscan.com e dei servizi correlati (di seguito "ForRealScan" o "Servizio"). Utilizzando il Servizio, accetti integralmente questi termini.',
    section2_title: '2. Descrizione del Servizio',
    section2_text: 'ForRealScan è uno strumento basato sull\'IA per analizzare immagini per potenziale generazione AI o manipolazione digitale. Il servizio fornisce valutazioni probabilistiche e analisi tecniche, ma non giudizi definitivi sull\'autenticità delle immagini.',
    section3_title: '3. Condizioni d\'uso',
    section3_text: 'Puoi utilizzare ForRealScan solo per scopi leciti. È vietato utilizzare il Servizio per attività illegali, diffamazione, molestie o altri scopi illeciti. Sei responsabile di tutte le immagini che carichi e devi assicurarti di avere i diritti necessari su tali immagini.',
    section4_title: '4. Esclusione di responsabilità',
    section4_text: 'ForRealScan fornisce risultati di analisi come guida. I risultati non costituiscono competenza legale o forense. Non ci assumiamo alcuna responsabilità per decisioni prese sulla base delle nostre analisi. Il Servizio è fornito "così com\'è" senza garanzie esplicite o implicite.',
    section5_title: '5. Proprietà intellettuale',
    section5_text: 'Tutti i contenuti su ForRealScan, inclusi testi, grafiche, loghi e software, sono protetti da copyright e di proprietà di ForRealScan o dei suoi licenziatari. L\'uso non autorizzato, la riproduzione o la distribuzione di questi contenuti è vietata.',
    section6_title: '6. Privacy',
    section6_text: 'La tua privacy è importante per noi. Informazioni sul trattamento dei tuoi dati sono disponibili nella nostra Informativa sulla Privacy. Le immagini caricate vengono elaborate in conformità con la nostra politica sulla privacy e non vengono condivise con terzi senza il tuo consenso.',
    section7_title: '7. Servizi gratuiti e Premium',
    section7_text: 'ForRealScan offre sia funzionalità gratuite che premium a pagamento. Le condizioni esatte per i servizi premium saranno comunicate al momento dell\'acquisto. Ci riserviamo il diritto di modificare i prezzi e l\'ambito dei servizi con ragionevole preavviso.',
    section8_title: '8. Disponibilità del Servizio',
    section8_text: 'Ci impegniamo a mantenere ForRealScan disponibile 24 ore su 24. Tuttavia, non possiamo garantire una disponibilità ininterrotta. Lavori di manutenzione e problemi tecnici possono causare interruzioni temporanee.',
    section9_title: '9. Modifiche ai Termini',
    section9_text: 'Ci riserviamo il diritto di modificare questi Termini in qualsiasi momento. Le modifiche sostanziali saranno annunciate sul nostro sito web. L\'uso continuato del Servizio dopo tali modifiche costituisce accettazione dei nuovi termini.',
    section10_title: '10. Legge applicabile e foro competente',
    section10_text: 'Questi Termini sono regolati dalle leggi della Repubblica Italiana. I tribunali di Bolzano, Italia, hanno giurisdizione su tutte le controversie derivanti da o in connessione con questi Termini.',
    back: 'Indietro',
  },
  es: {
    title: 'Términos y Condiciones',
    lastUpdated: 'Última actualización: Enero 2026',
    intro: 'Bienvenido a ForRealScan. Al utilizar nuestro sitio web y servicios, acepta estos Términos y Condiciones. Por favor, léalos detenidamente.',
    section1_title: '1. Ámbito de aplicación',
    section1_text: 'Estos Términos y Condiciones se aplican al uso del sitio web forrealscan.com y los servicios relacionados (en adelante "ForRealScan" o "Servicio"). Al utilizar el Servicio, acepta estos términos en su totalidad.',
    section2_title: '2. Descripción del Servicio',
    section2_text: 'ForRealScan es una herramienta basada en IA para analizar imágenes en busca de posible generación de IA o manipulación digital. El servicio proporciona evaluaciones de probabilidad y análisis técnicos, pero no juicios definitivos sobre la autenticidad de las imágenes.',
    section3_title: '3. Condiciones de uso',
    section3_text: 'Solo puede utilizar ForRealScan para fines legales. Está prohibido utilizar el Servicio para actividades ilegales, difamación, acoso u otros fines ilícitos. Usted es responsable de todas las imágenes que carga y debe asegurarse de tener los derechos necesarios sobre dichas imágenes.',
    section4_title: '4. Descargo de responsabilidad',
    section4_text: 'ForRealScan proporciona resultados de análisis como orientación. Los resultados no constituyen experiencia legal o forense. No asumimos ninguna responsabilidad por decisiones tomadas en base a nuestros análisis. El Servicio se proporciona "tal cual" sin garantías expresas o implícitas.',
    section5_title: '5. Propiedad intelectual',
    section5_text: 'Todo el contenido de ForRealScan, incluidos textos, gráficos, logotipos y software, está protegido por derechos de autor y es propiedad de ForRealScan o sus licenciantes. El uso no autorizado, la reproducción o distribución de este contenido está prohibido.',
    section6_title: '6. Privacidad',
    section6_text: 'Su privacidad es importante para nosotros. La información sobre el procesamiento de sus datos se encuentra en nuestra Política de Privacidad. Las imágenes cargadas se procesan de acuerdo con nuestra política de privacidad y no se comparten con terceros sin su consentimiento.',
    section7_title: '7. Servicios gratuitos y Premium',
    section7_text: 'ForRealScan ofrece tanto funciones gratuitas como de pago premium. Los términos exactos para los servicios premium se comunicarán en el momento de la compra. Nos reservamos el derecho de cambiar precios y alcance de los servicios con un aviso razonable.',
    section8_title: '8. Disponibilidad del Servicio',
    section8_text: 'Nos esforzamos por mantener ForRealScan disponible las 24 horas. Sin embargo, no podemos garantizar una disponibilidad ininterrumpida. Los trabajos de mantenimiento y problemas técnicos pueden causar interrupciones temporales.',
    section9_title: '9. Cambios en los Términos',
    section9_text: 'Nos reservamos el derecho de cambiar estos Términos en cualquier momento. Los cambios importantes se anunciarán en nuestro sitio web. El uso continuado del Servicio después de dichos cambios constituye la aceptación de los nuevos términos.',
    section10_title: '10. Ley aplicable y jurisdicción',
    section10_text: 'Estos Términos se rigen por las leyes de la República de Italia. Los tribunales de Bolzano, Italia, tienen jurisdicción sobre todas las disputas que surjan de o en conexión con estos Términos.',
    back: 'Volver',
  },
  fr: {
    title: 'Conditions Générales d\'Utilisation',
    lastUpdated: 'Dernière mise à jour : Janvier 2026',
    intro: 'Bienvenue sur ForRealScan. En utilisant notre site web et nos services, vous acceptez ces Conditions Générales d\'Utilisation. Veuillez les lire attentivement.',
    section1_title: '1. Champ d\'application',
    section1_text: 'Ces Conditions Générales d\'Utilisation s\'appliquent à l\'utilisation du site web forrealscan.com et des services associés (ci-après "ForRealScan" ou "Service"). En utilisant le Service, vous acceptez ces conditions dans leur intégralité.',
    section2_title: '2. Description du Service',
    section2_text: 'ForRealScan est un outil basé sur l\'IA pour analyser les images en vue d\'une éventuelle génération par IA ou manipulation numérique. Le service fournit des évaluations de probabilité et des analyses techniques, mais pas de jugements définitifs sur l\'authenticité des images.',
    section3_title: '3. Conditions d\'utilisation',
    section3_text: 'Vous ne pouvez utiliser ForRealScan qu\'à des fins légales. Il est interdit d\'utiliser le Service pour des activités illégales, de la diffamation, du harcèlement ou d\'autres fins illicites. Vous êtes responsable de toutes les images que vous téléchargez et devez vous assurer que vous disposez des droits nécessaires sur ces images.',
    section4_title: '4. Limitation de responsabilité',
    section4_text: 'ForRealScan fournit des résultats d\'analyse à titre indicatif. Les résultats ne constituent pas une expertise juridique ou médico-légale. Nous déclinons toute responsabilité pour les décisions prises sur la base de nos analyses. Le Service est fourni "tel quel" sans garantie expresse ou implicite.',
    section5_title: '5. Propriété intellectuelle',
    section5_text: 'Tout le contenu de ForRealScan, y compris les textes, graphiques, logos et logiciels, est protégé par le droit d\'auteur et appartient à ForRealScan ou à ses concédants. L\'utilisation non autorisée, la reproduction ou la distribution de ce contenu est interdite.',
    section6_title: '6. Confidentialité',
    section6_text: 'Votre vie privée est importante pour nous. Des informations sur le traitement de vos données sont disponibles dans notre Politique de Confidentialité. Les images téléchargées sont traitées conformément à notre politique de confidentialité et ne sont pas partagées avec des tiers sans votre consentement.',
    section7_title: '7. Services gratuits et Premium',
    section7_text: 'ForRealScan propose des fonctionnalités gratuites et premium payantes. Les conditions exactes des services premium seront communiquées au moment de l\'achat. Nous nous réservons le droit de modifier les prix et l\'étendue des services moyennant un préavis raisonnable.',
    section8_title: '8. Disponibilité du Service',
    section8_text: 'Nous nous efforçons de maintenir ForRealScan disponible 24h/24. Cependant, nous ne pouvons pas garantir une disponibilité ininterrompue. Les travaux de maintenance et les problèmes techniques peuvent entraîner des interruptions temporaires.',
    section9_title: '9. Modifications des Conditions',
    section9_text: 'Nous nous réservons le droit de modifier ces Conditions à tout moment. Les modifications importantes seront annoncées sur notre site web. L\'utilisation continue du Service après ces modifications constitue une acceptation des nouvelles conditions.',
    section10_title: '10. Droit applicable et juridiction',
    section10_text: 'Ces Conditions sont régies par les lois de la République d\'Italie. Les tribunaux de Bolzano, Italie, ont compétence pour tous les litiges découlant de ou en relation avec ces Conditions.',
    back: 'Retour',
  },
};

const Terms = () => {
  const { theme, toggleTheme } = useTheme();

  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && ['de', 'en', 'it', 'es', 'fr'].includes(stored)) {
      return stored as Language;
    }
    const browserLang = navigator.language.split('-')[0];
    if (['de', 'en', 'it', 'es', 'fr'].includes(browserLang)) {
      return browserLang as Language;
    }
    return 'de';
  });

  const t = termsTranslations[language];

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <SubPageHeader
            language={language}
            setLanguage={setLanguage}
            theme={theme}
            onThemeToggle={toggleTheme}
            backLabel={t.back}
          />

          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-sm text-muted-foreground mb-8">{t.lastUpdated}</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <p className="text-muted-foreground">{t.intro}</p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.section1_title}</h2>
              <p className="text-muted-foreground">{t.section1_text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.section2_title}</h2>
              <p className="text-muted-foreground">{t.section2_text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.section3_title}</h2>
              <p className="text-muted-foreground">{t.section3_text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.section4_title}</h2>
              <p className="text-muted-foreground">{t.section4_text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.section5_title}</h2>
              <p className="text-muted-foreground">{t.section5_text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.section6_title}</h2>
              <p className="text-muted-foreground">{t.section6_text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.section7_title}</h2>
              <p className="text-muted-foreground">{t.section7_text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.section8_title}</h2>
              <p className="text-muted-foreground">{t.section8_text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.section9_title}</h2>
              <p className="text-muted-foreground">{t.section9_text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.section10_title}</h2>
              <p className="text-muted-foreground">{t.section10_text}</p>
            </section>
          </div>
        </div>
      </div>
      <Footer language={language} theme={theme} />
    </div>
  );
};

export default Terms;
