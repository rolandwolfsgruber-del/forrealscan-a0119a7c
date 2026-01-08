import { useState, useEffect } from 'react';
import { Language } from '@/lib/translations';
import { LANGUAGE_STORAGE_KEY } from '@/lib/constants';
import { SubPageHeader } from '@/components/SubPageHeader';
import { Footer } from '@/components/Footer';
import { useTheme } from '@/hooks/useTheme';
import { Shield, Target, Users, Lightbulb, Heart, Award } from 'lucide-react';

const aboutTranslations: Record<Language, {
  title: string;
  subtitle: string;
  mission_title: string;
  mission_text: string;
  story_title: string;
  story_p1: string;
  story_p2: string;
  story_p3: string;
  values_title: string;
  value1_title: string;
  value1_text: string;
  value2_title: string;
  value2_text: string;
  value3_title: string;
  value3_text: string;
  value4_title: string;
  value4_text: string;
  team_title: string;
  team_text: string;
  founder_name: string;
  founder_role: string;
  founder_bio: string;
  tech_title: string;
  tech_p1: string;
  tech_p2: string;
  commitment_title: string;
  commitment_text: string;
  contact_title: string;
  contact_text: string;
  back: string;
}> = {
  de: {
    title: 'Über ForRealScan',
    subtitle: 'Technologie für mehr Transparenz in einer KI-geprägten Welt',
    mission_title: 'Unsere Mission',
    mission_text: 'In einer Zeit, in der KI-generierte Bilder immer realistischer werden, ist es wichtiger denn je, echte von künstlichen Inhalten unterscheiden zu können. ForRealScan wurde entwickelt, um Menschen dabei zu helfen, informierte Entscheidungen über die Authentizität von Bildern zu treffen – nicht durch absolute Urteile, sondern durch transparente Analysen und verständliche Wahrscheinlichkeiten.',
    story_title: 'Unsere Geschichte',
    story_p1: 'ForRealScan entstand aus einer einfachen Beobachtung: Die rasante Entwicklung von KI-Bildgeneratoren hat eine neue Realität geschaffen, in der selbst Experten Schwierigkeiten haben, echte Fotos von künstlich erstellten zu unterscheiden.',
    story_p2: 'Mit Sitz in Südtirol, Italien, kombinieren wir modernste KI-Technologie mit einem tiefen Verständnis für die Bedürfnisse von Journalisten, Content-Erstellern, Fotografen und allen, die Wert auf authentische visuelle Kommunikation legen.',
    story_p3: 'Unser Ziel ist es nicht, ein endgültiges Urteil zu fällen, sondern Werkzeuge bereitzustellen, die Menschen befähigen, selbst kritisch zu denken und fundierte Einschätzungen vorzunehmen.',
    values_title: 'Unsere Werte',
    value1_title: 'Transparenz',
    value1_text: 'Wir erklären immer, wie unsere Analysen funktionieren und wo ihre Grenzen liegen.',
    value2_title: 'Verantwortung',
    value2_text: 'Technologie sollte Menschen befähigen, nicht manipulieren oder irreführen.',
    value3_title: 'Zugänglichkeit',
    value3_text: 'Jeder sollte Zugang zu Werkzeugen haben, die Medienkompetenz fördern.',
    value4_title: 'Innovation',
    value4_text: 'Wir entwickeln unsere Methoden kontinuierlich weiter, um mit dem technologischen Fortschritt Schritt zu halten.',
    team_title: 'Das Team',
    team_text: 'ForRealScan wird von einem engagierten Team mit Expertise in KI, Bildverarbeitung und Medienkompetenz entwickelt.',
    founder_name: 'Roland Wolfsgruber',
    founder_role: 'Gründer & Entwickler',
    founder_bio: 'Mit einem Hintergrund in Technologie und einer Leidenschaft für Medienintegrität gründete Roland ForRealScan, um einen Beitrag zu einer informierteren digitalen Gesellschaft zu leisten.',
    tech_title: 'Unsere Technologie',
    tech_p1: 'ForRealScan nutzt einen hybriden Ansatz mit zwei spezialisierten Analysesystemen: "Veritas" für technische Bildanalyse und "Robo" für KI-basierte Mustererkennung. Diese Kombination ermöglicht eine umfassendere Einschätzung als einzelne Methoden allein.',
    tech_p2: 'Unsere Algorithmen werden kontinuierlich verbessert und an neue KI-Generatoren angepasst, um mit der sich schnell entwickelnden Technologielandschaft Schritt zu halten.',
    commitment_title: 'Unser Engagement',
    commitment_text: 'Wir verpflichten uns zu ethischem Umgang mit Technologie, Datenschutz nach europäischen Standards und einer kontinuierlichen Verbesserung unserer Dienste im Dialog mit unserer Nutzergemeinschaft.',
    contact_title: 'Kontakt',
    contact_text: 'Haben Sie Fragen, Anregungen oder möchten Sie mehr über ForRealScan erfahren? Wir freuen uns von Ihnen zu hören.',
    back: 'Zurück',
  },
  en: {
    title: 'About ForRealScan',
    subtitle: 'Technology for transparency in an AI-shaped world',
    mission_title: 'Our Mission',
    mission_text: 'In a time when AI-generated images are becoming increasingly realistic, it\'s more important than ever to distinguish real from artificial content. ForRealScan was developed to help people make informed decisions about image authenticity – not through absolute judgments, but through transparent analyses and understandable probabilities.',
    story_title: 'Our Story',
    story_p1: 'ForRealScan emerged from a simple observation: The rapid development of AI image generators has created a new reality where even experts struggle to distinguish real photos from artificially created ones.',
    story_p2: 'Based in South Tyrol, Italy, we combine cutting-edge AI technology with a deep understanding of the needs of journalists, content creators, photographers, and anyone who values authentic visual communication.',
    story_p3: 'Our goal is not to pass final judgment, but to provide tools that empower people to think critically themselves and make informed assessments.',
    values_title: 'Our Values',
    value1_title: 'Transparency',
    value1_text: 'We always explain how our analyses work and where their limitations lie.',
    value2_title: 'Responsibility',
    value2_text: 'Technology should empower people, not manipulate or mislead them.',
    value3_title: 'Accessibility',
    value3_text: 'Everyone should have access to tools that promote media literacy.',
    value4_title: 'Innovation',
    value4_text: 'We continuously evolve our methods to keep pace with technological progress.',
    team_title: 'The Team',
    team_text: 'ForRealScan is developed by a dedicated team with expertise in AI, image processing, and media literacy.',
    founder_name: 'Roland Wolfsgruber',
    founder_role: 'Founder & Developer',
    founder_bio: 'With a background in technology and a passion for media integrity, Roland founded ForRealScan to contribute to a more informed digital society.',
    tech_title: 'Our Technology',
    tech_p1: 'ForRealScan uses a hybrid approach with two specialized analysis systems: "Veritas" for technical image analysis and "Robo" for AI-based pattern recognition. This combination enables a more comprehensive assessment than individual methods alone.',
    tech_p2: 'Our algorithms are continuously improved and adapted to new AI generators to keep pace with the rapidly evolving technology landscape.',
    commitment_title: 'Our Commitment',
    commitment_text: 'We are committed to ethical use of technology, data protection according to European standards, and continuous improvement of our services in dialogue with our user community.',
    contact_title: 'Contact',
    contact_text: 'Do you have questions, suggestions, or would you like to learn more about ForRealScan? We\'d love to hear from you.',
    back: 'Back',
  },
  it: {
    title: 'Chi Siamo',
    subtitle: 'Tecnologia per la trasparenza in un mondo plasmato dall\'IA',
    mission_title: 'La Nostra Missione',
    mission_text: 'In un\'epoca in cui le immagini generate dall\'IA diventano sempre più realistiche, è più importante che mai distinguere i contenuti reali da quelli artificiali. ForRealScan è stato sviluppato per aiutare le persone a prendere decisioni informate sull\'autenticità delle immagini – non attraverso giudizi assoluti, ma attraverso analisi trasparenti e probabilità comprensibili.',
    story_title: 'La Nostra Storia',
    story_p1: 'ForRealScan è nato da una semplice osservazione: il rapido sviluppo dei generatori di immagini IA ha creato una nuova realtà in cui anche gli esperti faticano a distinguere le foto reali da quelle create artificialmente.',
    story_p2: 'Con sede in Alto Adige, Italia, combiniamo tecnologia IA all\'avanguardia con una profonda comprensione delle esigenze di giornalisti, creatori di contenuti, fotografi e chiunque apprezzi la comunicazione visiva autentica.',
    story_p3: 'Il nostro obiettivo non è emettere un giudizio finale, ma fornire strumenti che permettano alle persone di pensare criticamente e fare valutazioni informate.',
    values_title: 'I Nostri Valori',
    value1_title: 'Trasparenza',
    value1_text: 'Spieghiamo sempre come funzionano le nostre analisi e dove si trovano i loro limiti.',
    value2_title: 'Responsabilità',
    value2_text: 'La tecnologia dovrebbe potenziare le persone, non manipolarle o ingannarle.',
    value3_title: 'Accessibilità',
    value3_text: 'Tutti dovrebbero avere accesso a strumenti che promuovono l\'alfabetizzazione mediatica.',
    value4_title: 'Innovazione',
    value4_text: 'Sviluppiamo continuamente i nostri metodi per stare al passo con il progresso tecnologico.',
    team_title: 'Il Team',
    team_text: 'ForRealScan è sviluppato da un team dedicato con esperienza in IA, elaborazione delle immagini e alfabetizzazione mediatica.',
    founder_name: 'Roland Wolfsgruber',
    founder_role: 'Fondatore & Sviluppatore',
    founder_bio: 'Con un background in tecnologia e una passione per l\'integrità dei media, Roland ha fondato ForRealScan per contribuire a una società digitale più informata.',
    tech_title: 'La Nostra Tecnologia',
    tech_p1: 'ForRealScan utilizza un approccio ibrido con due sistemi di analisi specializzati: "Veritas" per l\'analisi tecnica delle immagini e "Robo" per il riconoscimento di pattern basato su IA. Questa combinazione consente una valutazione più completa rispetto ai singoli metodi.',
    tech_p2: 'I nostri algoritmi vengono continuamente migliorati e adattati ai nuovi generatori IA per stare al passo con il panorama tecnologico in rapida evoluzione.',
    commitment_title: 'Il Nostro Impegno',
    commitment_text: 'Ci impegniamo per un uso etico della tecnologia, la protezione dei dati secondo gli standard europei e il miglioramento continuo dei nostri servizi in dialogo con la nostra comunità di utenti.',
    contact_title: 'Contatti',
    contact_text: 'Hai domande, suggerimenti o vorresti saperne di più su ForRealScan? Saremo lieti di sentirti.',
    back: 'Indietro',
  },
  es: {
    title: 'Sobre ForRealScan',
    subtitle: 'Tecnología para la transparencia en un mundo moldeado por la IA',
    mission_title: 'Nuestra Misión',
    mission_text: 'En una época en que las imágenes generadas por IA son cada vez más realistas, es más importante que nunca distinguir el contenido real del artificial. ForRealScan fue desarrollado para ayudar a las personas a tomar decisiones informadas sobre la autenticidad de las imágenes, no a través de juicios absolutos, sino mediante análisis transparentes y probabilidades comprensibles.',
    story_title: 'Nuestra Historia',
    story_p1: 'ForRealScan surgió de una simple observación: el rápido desarrollo de los generadores de imágenes IA ha creado una nueva realidad en la que incluso los expertos tienen dificultades para distinguir las fotos reales de las creadas artificialmente.',
    story_p2: 'Con sede en Tirol del Sur, Italia, combinamos tecnología IA de vanguardia con una profunda comprensión de las necesidades de periodistas, creadores de contenido, fotógrafos y todos los que valoran la comunicación visual auténtica.',
    story_p3: 'Nuestro objetivo no es emitir un juicio final, sino proporcionar herramientas que permitan a las personas pensar críticamente y hacer evaluaciones informadas.',
    values_title: 'Nuestros Valores',
    value1_title: 'Transparencia',
    value1_text: 'Siempre explicamos cómo funcionan nuestros análisis y dónde están sus limitaciones.',
    value2_title: 'Responsabilidad',
    value2_text: 'La tecnología debe empoderar a las personas, no manipularlas o engañarlas.',
    value3_title: 'Accesibilidad',
    value3_text: 'Todos deberían tener acceso a herramientas que promuevan la alfabetización mediática.',
    value4_title: 'Innovación',
    value4_text: 'Desarrollamos continuamente nuestros métodos para mantenernos al día con el progreso tecnológico.',
    team_title: 'El Equipo',
    team_text: 'ForRealScan es desarrollado por un equipo dedicado con experiencia en IA, procesamiento de imágenes y alfabetización mediática.',
    founder_name: 'Roland Wolfsgruber',
    founder_role: 'Fundador y Desarrollador',
    founder_bio: 'Con experiencia en tecnología y pasión por la integridad de los medios, Roland fundó ForRealScan para contribuir a una sociedad digital más informada.',
    tech_title: 'Nuestra Tecnología',
    tech_p1: 'ForRealScan utiliza un enfoque híbrido con dos sistemas de análisis especializados: "Veritas" para análisis técnico de imágenes y "Robo" para reconocimiento de patrones basado en IA. Esta combinación permite una evaluación más completa que los métodos individuales.',
    tech_p2: 'Nuestros algoritmos se mejoran continuamente y se adaptan a nuevos generadores de IA para seguir el ritmo del panorama tecnológico en rápida evolución.',
    commitment_title: 'Nuestro Compromiso',
    commitment_text: 'Estamos comprometidos con el uso ético de la tecnología, la protección de datos según los estándares europeos y la mejora continua de nuestros servicios en diálogo con nuestra comunidad de usuarios.',
    contact_title: 'Contacto',
    contact_text: '¿Tienes preguntas, sugerencias o te gustaría saber más sobre ForRealScan? Nos encantaría saber de ti.',
    back: 'Volver',
  },
  fr: {
    title: 'À Propos de ForRealScan',
    subtitle: 'Technologie pour la transparence dans un monde façonné par l\'IA',
    mission_title: 'Notre Mission',
    mission_text: 'À une époque où les images générées par l\'IA deviennent de plus en plus réalistes, il est plus important que jamais de distinguer le contenu réel du contenu artificiel. ForRealScan a été développé pour aider les gens à prendre des décisions éclairées sur l\'authenticité des images – non pas par des jugements absolus, mais par des analyses transparentes et des probabilités compréhensibles.',
    story_title: 'Notre Histoire',
    story_p1: 'ForRealScan est né d\'une simple observation : le développement rapide des générateurs d\'images IA a créé une nouvelle réalité où même les experts peinent à distinguer les vraies photos de celles créées artificiellement.',
    story_p2: 'Basés dans le Tyrol du Sud, en Italie, nous combinons une technologie IA de pointe avec une compréhension approfondie des besoins des journalistes, créateurs de contenu, photographes et tous ceux qui accordent de l\'importance à une communication visuelle authentique.',
    story_p3: 'Notre objectif n\'est pas de porter un jugement final, mais de fournir des outils qui permettent aux gens de penser de manière critique et de faire des évaluations éclairées.',
    values_title: 'Nos Valeurs',
    value1_title: 'Transparence',
    value1_text: 'Nous expliquons toujours comment fonctionnent nos analyses et où se trouvent leurs limites.',
    value2_title: 'Responsabilité',
    value2_text: 'La technologie doit autonomiser les gens, pas les manipuler ou les induire en erreur.',
    value3_title: 'Accessibilité',
    value3_text: 'Tout le monde devrait avoir accès à des outils qui favorisent l\'éducation aux médias.',
    value4_title: 'Innovation',
    value4_text: 'Nous développons continuellement nos méthodes pour suivre le rythme du progrès technologique.',
    team_title: 'L\'Équipe',
    team_text: 'ForRealScan est développé par une équipe dévouée avec une expertise en IA, traitement d\'image et éducation aux médias.',
    founder_name: 'Roland Wolfsgruber',
    founder_role: 'Fondateur & Développeur',
    founder_bio: 'Avec un parcours en technologie et une passion pour l\'intégrité des médias, Roland a fondé ForRealScan pour contribuer à une société numérique plus informée.',
    tech_title: 'Notre Technologie',
    tech_p1: 'ForRealScan utilise une approche hybride avec deux systèmes d\'analyse spécialisés : "Veritas" pour l\'analyse technique des images et "Robo" pour la reconnaissance de motifs basée sur l\'IA. Cette combinaison permet une évaluation plus complète que les méthodes individuelles.',
    tech_p2: 'Nos algorithmes sont continuellement améliorés et adaptés aux nouveaux générateurs d\'IA pour suivre le paysage technologique en évolution rapide.',
    commitment_title: 'Notre Engagement',
    commitment_text: 'Nous nous engageons pour une utilisation éthique de la technologie, la protection des données selon les normes européennes et l\'amélioration continue de nos services en dialogue avec notre communauté d\'utilisateurs.',
    contact_title: 'Contact',
    contact_text: 'Vous avez des questions, des suggestions ou souhaitez en savoir plus sur ForRealScan ? Nous serions ravis de vous entendre.',
    back: 'Retour',
  },
};

const About = () => {
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

  const t = aboutTranslations[language];

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const values = [
    { icon: Shield, title: t.value1_title, text: t.value1_text },
    { icon: Heart, title: t.value2_title, text: t.value2_text },
    { icon: Users, title: t.value3_title, text: t.value3_text },
    { icon: Lightbulb, title: t.value4_title, text: t.value4_text },
  ];

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
          <p className="text-xl text-muted-foreground mb-12">{t.subtitle}</p>

          <div className="prose prose-gray max-w-none space-y-12">
            {/* Mission Section */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground m-0">{t.mission_title}</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">{t.mission_text}</p>
            </section>

            {/* Story Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-foreground">{t.story_title}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t.story_p1}</p>
                <p>{t.story_p2}</p>
                <p>{t.story_p3}</p>
              </div>
            </section>

            {/* Values Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-foreground">{t.values_title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <value.icon className="w-6 h-6 text-primary" />
                      <h3 className="font-semibold text-foreground">{value.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{value.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Team Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-foreground">{t.team_title}</h2>
              <p className="text-muted-foreground mb-6">{t.team_text}</p>
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-veritas to-robo flex items-center justify-center text-white font-bold text-xl">
                    RW
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{t.founder_name}</h3>
                    <p className="text-primary text-sm mb-2">{t.founder_role}</p>
                    <p className="text-muted-foreground text-sm">{t.founder_bio}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technology Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground m-0">{t.tech_title}</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>{t.tech_p1}</p>
                <p>{t.tech_p2}</p>
              </div>
            </section>

            {/* Commitment Section */}
            <section className="bg-gradient-to-r from-veritas/10 to-robo/10 rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.commitment_title}</h2>
              <p className="text-muted-foreground">{t.commitment_text}</p>
            </section>

            {/* Contact Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.contact_title}</h2>
              <p className="text-muted-foreground mb-4">{t.contact_text}</p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                {t.contact_title}
              </a>
            </section>
          </div>
        </div>
      </div>
      <Footer language={language} theme={theme} />
    </div>
  );
};

export default About;
