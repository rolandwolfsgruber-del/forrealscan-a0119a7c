export type Language = 'de' | 'en' | 'it' | 'es';

export const translations = {
  de: {
    // Header
    nav_start: 'Start',
    nav_features: 'Funktionen',
    nav_modes: 'Modi',
    nav_pricing: 'Preise',
    nav_faq: 'FAQ',
    cta_app: 'App starten',
    language_label: 'Sprache',
    
    // Hero
    hero_title: 'Echt oder KI? ForRealScan sagt es dir in Sekunden.',
    hero_subtitle: 'Modernste KI-Erkennung für authentische Inhalte. Vertraue auf Veritas & Robo – deine digitalen Detektive.',
    hero_cta_primary: 'App starten',
    hero_cta_secondary: 'Beispiele ansehen',
    
    // How it works
    how_title: 'So funktioniert ForRealScan',
    how_step1_title: 'Bild hochladen',
    how_step1_text: 'Laden Sie Ihr Bild direkt per Drag & Drop oder über die Upload-Funktion hoch.',
    how_step2_title: 'Scan starten',
    how_step2_text: 'Unsere KI analysiert das Bild mit modernsten Algorithmen in Echtzeit.',
    how_step3_title: 'Ergebnis verstehen',
    how_step3_text: 'Erhalten Sie eine klare Einschätzung mit detaillierter Erklärung von Veritas und Robo.',
    
    // Modes
    modes_title: 'Zwei Modi – ein Ziel: Wahrheit.',
    mode_v3_title: 'V3 Standard Scan',
    mode_v3_badge: 'Kostenlos',
    mode_v3_desc: 'Schnelle KI-Score-Erkennung für alltägliche Checks',
    mode_v3_feat1: 'Sofortige Analyse',
    mode_v3_feat2: 'Einfache Erklärung von Veritas & Robo',
    mode_v3_feat3: 'Werbung möglich im Free-Modus',
    mode_v3_feat4: 'Ideal für alltägliche Checks',
    
    mode_v5_title: 'V5 UltraDeepScan',
    mode_v5_badge: 'Empfohlen',
    mode_v5_desc: 'Hybride Tiefenanalyse für maximale Sicherheit',
    mode_v5_feat1: 'V3 AI-Erkennung + V4 Retusche-Analyse',
    mode_v5_feat2: 'Auto-Trigger bei unsicheren Ergebnissen',
    mode_v5_feat3: 'Ultra Verdict kombiniert beide Analysen',
    mode_v5_feat4: 'Limitiert durch 3 Scans pro Tag',
    
    // Examples
    examples_title: 'Siehst du den Unterschied?',
    examples_subtitle: 'Teste dein Auge – unsere KI erkennt es immer.',
    examples_real_label: 'Echtes Foto',
    examples_ai_label: 'KI-generiert',
    examples_veritas_comment: 'Natürliche Schatten und Lichtreflexionen – eindeutig echt.',
    examples_robo_comment: 'Pixel-Muster und Artefakte weisen auf KI-Generierung hin.',
    
    // Mini Game
    game_title: 'Teste dein Auge – Echt oder KI?',
    game_subtitle: 'Bald verfügbar: Unser interaktives Spiel, bei dem du echte von KI-generierten Bildern unterscheiden musst.',
    game_cta: 'Bald verfügbar',
    
    // Use Cases
    cases_title: 'Für wen ist ForRealScan?',
    case1_title: 'Influencer & Creator',
    case1_text: 'Schütze deine Authentizität und beweise die Echtheit deiner Inhalte.',
    case2_title: 'Journalisten & Fact Checker',
    case2_text: 'Überprüfe Bildmaterial schnell und zuverlässig auf Manipulation.',
    case3_title: 'Dating & Social',
    case3_text: 'Erkenne Fake-Profile und KI-generierte Profilbilder sofort.',
    case4_title: 'Fotografie & Marketing',
    case4_text: 'Stelle sicher, dass deine visuellen Assets authentisch und glaubwürdig sind.',
    
    // Pricing
    pricing_title: 'Wähle deinen Plan',
    pricing_free_title: 'Kostenlos',
    pricing_free_price: 'Kostenlos',
    pricing_free_feat1: 'Kostenlose V3 SmartScans',
    pricing_free_feat2: 'Limitierte V5 UltraDeepScans pro Tag (3/Tag)',
    pricing_free_feat3: 'Werbung unterstützt die kostenlose Nutzung',
    pricing_free_cta: 'Kostenlos starten',
    
    pricing_premium_badge: 'Bald verfügbar',
    pricing_premium_title: 'Premium – bald verfügbar',
    pricing_premium_feat1: 'Geplante unbegrenzte V3 Scans',
    pricing_premium_feat2: 'Geplante intensive V5 UltraDeepScans ohne Tageslimit',
    pricing_premium_feat3: 'Geplante werbefreie Nutzung',
    pricing_premium_feat4: 'Geplante Prioritäts-Verarbeitung',
    pricing_premium_feat5: 'Geplante erweiterte Scan-Historie',
    pricing_premium_cta: 'Benachrichtige mich, wenn Premium startet',
    pricing_premium_coming_soon_title: 'Premium in Vorbereitung',
    pricing_premium_coming_soon_message: 'Premium befindet sich in Vorbereitung. Wir informieren dich, sobald es startet.',
    
    // FAQ
    faq_title: 'Häufig gestellte Fragen',
    faq_q1: 'Ist ForRealScan kostenlos?',
    faq_a1: 'Ja! Der V3 Standard Scan ist kostenlos nutzbar. Premium bietet unbegrenzte V5 UltraDeepScans und weitere Features.',
    faq_q2: 'Speichert ihr meine Bilder?',
    faq_a2: 'Nein. Deine Bilder werden nur für die Analyse verarbeitet und nicht dauerhaft gespeichert. Datenschutz hat höchste Priorität.',
    faq_q3: 'Was ist der Unterschied zwischen V3 und V5?',
    faq_a3: 'V3 ist eine schnelle KI-Erkennung. V5 UltraDeepScan kombiniert KI-Erkennung mit Retusche-Analyse für maximale Sicherheit.',
    faq_q4: 'Wie genau ist die Erkennung?',
    faq_a4: 'Unsere Modelle erreichen über 95% Genauigkeit. V5 UltraDeepScan bietet zusätzliche Sicherheit durch hybride Analyse.',
    faq_q5: 'Funktioniert es auf allen Geräten?',
    faq_a5: 'Ja! ForRealScan ist vollständig responsiv und funktioniert auf Desktop, Tablet und Smartphone.',
    faq_q6: 'Warum gibt es Werbung im Free-Modus?',
    faq_a6: 'Werbung ermöglicht uns, den Free-Modus kostenlos anzubieten. Premium-Nutzer erhalten ein werbefreies Erlebnis.',
    faq_q7: 'Kann ich ForRealScan kommerziell nutzen?',
    faq_a7: 'Ja! Mit einem Premium-Plan kannst du ForRealScan unbegrenzt für kommerzielle Zwecke nutzen.',
    faq_q8: 'Welche Bildformate werden unterstützt?',
    faq_a8: 'Wir unterstützen JPG, PNG, WEBP und die meisten gängigen Bildformate bis zu 20MB.',
    
    // Footer
    footer_imprint: 'Impressum',
    footer_privacy: 'Datenschutz',
    footer_contact: 'Kontakt',
    footer_copyright: '© {year} ForRealScan. Alle Rechte vorbehalten.',
  },
  
  en: {
    // Header
    nav_start: 'Start',
    nav_features: 'Features',
    nav_modes: 'Modes',
    nav_pricing: 'Pricing',
    nav_faq: 'FAQ',
    cta_app: 'Launch App',
    language_label: 'Language',
    
    // Hero
    hero_title: 'Real or AI? ForRealScan tells you in seconds.',
    hero_subtitle: 'State-of-the-art AI detection for authentic content. Trust Veritas & Robo – your digital detectives.',
    hero_cta_primary: 'Launch App',
    hero_cta_secondary: 'View Examples',
    
    // How it works
    how_title: 'How ForRealScan Works',
    how_step1_title: 'Upload Image',
    how_step1_text: 'Upload your image directly via drag & drop or the upload function.',
    how_step2_title: 'Start Scan',
    how_step2_text: 'Our AI analyzes the image with cutting-edge algorithms in real-time.',
    how_step3_title: 'Understand Results',
    how_step3_text: 'Get a clear assessment with detailed explanations from Veritas and Robo.',
    
    // Modes
    modes_title: 'Two Modes – One Goal: Truth.',
    mode_v3_title: 'V3 Standard Scan',
    mode_v3_badge: 'Free',
    mode_v3_desc: 'Fast AI score detection for everyday checks',
    mode_v3_feat1: 'Instant analysis',
    mode_v3_feat2: 'Simple explanation by Veritas & Robo',
    mode_v3_feat3: 'Ads possible in free mode',
    mode_v3_feat4: 'Ideal for everyday checks',
    
    mode_v5_title: 'V5 UltraDeepScan',
    mode_v5_badge: 'Recommended',
    mode_v5_desc: 'Hybrid deep analysis for maximum security',
    mode_v5_feat1: 'V3 AI detection + V4 retouch analysis',
    mode_v5_feat2: 'Auto-trigger on uncertain results',
    mode_v5_feat3: 'Ultra Verdict combines both analyses',
    mode_v5_feat4: 'Limited to 3 scans per day',
    
    // Examples
    examples_title: 'Can You Spot the Difference?',
    examples_subtitle: 'Test your eye – our AI always knows.',
    examples_real_label: 'Real Photo',
    examples_ai_label: 'AI-Generated',
    examples_veritas_comment: 'Natural shadows and light reflections – clearly real.',
    examples_robo_comment: 'Pixel patterns and artifacts indicate AI generation.',
    
    // Mini Game
    game_title: 'Test Your Eye – Real or AI?',
    game_subtitle: 'Coming soon: Our interactive game where you distinguish real from AI-generated images.',
    game_cta: 'Coming Soon',
    
    // Use Cases
    cases_title: 'Who Is ForRealScan For?',
    case1_title: 'Influencers & Creators',
    case1_text: 'Protect your authenticity and prove the genuineness of your content.',
    case2_title: 'Journalists & Fact Checkers',
    case2_text: 'Verify images quickly and reliably for manipulation.',
    case3_title: 'Dating & Social',
    case3_text: 'Detect fake profiles and AI-generated profile pictures instantly.',
    case4_title: 'Photography & Marketing',
    case4_text: 'Ensure your visual assets are authentic and credible.',
    
    // Pricing
    pricing_title: 'Choose Your Plan',
    pricing_free_title: 'Free',
    pricing_free_price: 'Free',
    pricing_free_feat1: 'Free V3 SmartScans',
    pricing_free_feat2: 'Limited V5 UltraDeepScans per day (3/day)',
    pricing_free_feat3: 'Ads support the free version',
    pricing_free_cta: 'Start Free',
    
    pricing_premium_badge: 'Coming soon',
    pricing_premium_title: 'Premium – coming soon',
    pricing_premium_feat1: 'Planned unlimited V3 scans',
    pricing_premium_feat2: 'Planned intensive V5 UltraDeepScans without daily limits',
    pricing_premium_feat3: 'Planned ad-free experience',
    pricing_premium_feat4: 'Planned priority processing',
    pricing_premium_feat5: 'Planned extended scan history',
    pricing_premium_cta: 'Notify me when Premium launches',
    pricing_premium_coming_soon_title: 'Premium in Preparation',
    pricing_premium_coming_soon_message: 'Premium is not available yet. We will inform you as soon as it launches.',
    
    // FAQ
    faq_title: 'Frequently Asked Questions',
    faq_q1: 'Is ForRealScan free?',
    faq_a1: 'Yes! The V3 Standard Scan is free to use. Premium offers unlimited V5 UltraDeepScans and more features.',
    faq_q2: 'Do you store my images?',
    faq_a2: 'No. Your images are only processed for analysis and not permanently stored. Privacy is our top priority.',
    faq_q3: 'What\'s the difference between V3 and V5?',
    faq_a3: 'V3 is fast AI detection. V5 UltraDeepScan combines AI detection with retouch analysis for maximum security.',
    faq_q4: 'How accurate is the detection?',
    faq_a4: 'Our models achieve over 95% accuracy. V5 UltraDeepScan offers additional security through hybrid analysis.',
    faq_q5: 'Does it work on all devices?',
    faq_a5: 'Yes! ForRealScan is fully responsive and works on desktop, tablet, and smartphone.',
    faq_q6: 'Why are there ads in free mode?',
    faq_a6: 'Ads allow us to offer the free mode at no cost. Premium users get an ad-free experience.',
    faq_q7: 'Can I use ForRealScan commercially?',
    faq_a7: 'Yes! With a Premium plan, you can use ForRealScan unlimited for commercial purposes.',
    faq_q8: 'What image formats are supported?',
    faq_a8: 'We support JPG, PNG, WEBP and most common image formats up to 20MB.',
    
    // Footer
    footer_imprint: 'Imprint',
    footer_privacy: 'Privacy',
    footer_contact: 'Contact',
    footer_copyright: '© {year} ForRealScan. All rights reserved.',
  },
  
  it: {
    // Header
    nav_start: 'Inizio',
    nav_features: 'Funzioni',
    nav_modes: 'Modalità',
    nav_pricing: 'Prezzi',
    nav_faq: 'FAQ',
    cta_app: 'Avvia App',
    language_label: 'Lingua',
    
    // Hero
    hero_title: 'Reale o AI? ForRealScan te lo dice in secondi.',
    hero_subtitle: 'Rilevamento AI all\'avanguardia per contenuti autentici. Affidati a Veritas & Robo – i tuoi detective digitali.',
    hero_cta_primary: 'Avvia App',
    hero_cta_secondary: 'Vedi Esempi',
    
    // How it works
    how_title: 'Come Funziona ForRealScan',
    how_step1_title: 'Carica Immagine',
    how_step1_text: 'Carica la tua immagine tramite drag & drop o la funzione di caricamento.',
    how_step2_title: 'Avvia Scansione',
    how_step2_text: 'La nostra AI analizza l\'immagine con algoritmi all\'avanguardia in tempo reale.',
    how_step3_title: 'Comprendi Risultati',
    how_step3_text: 'Ottieni una valutazione chiara con spiegazioni dettagliate da Veritas e Robo.',
    
    // Modes
    modes_title: 'Due Modalità – Un Obiettivo: Verità.',
    mode_v3_title: 'V3 Standard Scan',
    mode_v3_badge: 'Gratuito',
    mode_v3_desc: 'Rilevamento AI rapido per controlli quotidiani',
    mode_v3_feat1: 'Analisi istantanea',
    mode_v3_feat2: 'Spiegazione semplice da Veritas & Robo',
    mode_v3_feat3: 'Pubblicità possibile in modalità gratuita',
    mode_v3_feat4: 'Ideale per controlli quotidiani',
    
    mode_v5_title: 'V5 UltraDeepScan',
    mode_v5_badge: 'Consigliato',
    mode_v5_desc: 'Analisi profonda ibrida per massima sicurezza',
    mode_v5_feat1: 'Rilevamento AI V3 + analisi ritocco V4',
    mode_v5_feat2: 'Attivazione automatica su risultati incerti',
    mode_v5_feat3: 'Ultra Verdict combina entrambe le analisi',
    mode_v5_feat4: 'Limitato a 3 scansioni al giorno',
    
    // Examples
    examples_title: 'Riesci a Vedere la Differenza?',
    examples_subtitle: 'Metti alla prova il tuo occhio – la nostra AI lo sa sempre.',
    examples_real_label: 'Foto Reale',
    examples_ai_label: 'Generata da AI',
    examples_veritas_comment: 'Ombre naturali e riflessi di luce – chiaramente reale.',
    examples_robo_comment: 'Pattern di pixel e artefatti indicano generazione AI.',
    
    // Mini Game
    game_title: 'Metti alla Prova il Tuo Occhio – Reale o AI?',
    game_subtitle: 'Prossimamente: Il nostro gioco interattivo dove distingui immagini reali da quelle generate da AI.',
    game_cta: 'Prossimamente',
    
    // Use Cases
    cases_title: 'Per Chi è ForRealScan?',
    case1_title: 'Influencer & Creator',
    case1_text: 'Proteggi la tua autenticità e dimostra la genuinità dei tuoi contenuti.',
    case2_title: 'Giornalisti & Fact Checker',
    case2_text: 'Verifica le immagini rapidamente e in modo affidabile per manipolazioni.',
    case3_title: 'Dating & Social',
    case3_text: 'Rileva profili falsi e foto profilo generate da AI istantaneamente.',
    case4_title: 'Fotografia & Marketing',
    case4_text: 'Assicurati che le tue risorse visive siano autentiche e credibili.',
    
    // Pricing
    pricing_title: 'Scegli il Tuo Piano',
    pricing_free_title: 'Gratuito',
    pricing_free_price: 'Gratuito',
    pricing_free_feat1: 'V3 SmartScans gratuiti',
    pricing_free_feat2: 'V5 UltraDeepScans limitati al giorno (3/giorno)',
    pricing_free_feat3: 'La pubblicità supporta la versione gratuita',
    pricing_free_cta: 'Inizia Gratis',
    
    pricing_premium_badge: 'Prossimamente',
    pricing_premium_title: 'Premium – prossimamente',
    pricing_premium_feat1: 'Scansioni V3 illimitate pianificate',
    pricing_premium_feat2: 'V5 UltraDeepScans intensivi pianificati senza limiti giornalieri',
    pricing_premium_feat3: 'Esperienza senza pubblicità pianificata',
    pricing_premium_feat4: 'Elaborazione prioritaria pianificata',
    pricing_premium_feat5: 'Cronologia estesa pianificata',
    pricing_premium_cta: 'Avvisami quando Premium sarà disponibile',
    pricing_premium_coming_soon_title: 'Premium in Preparazione',
    pricing_premium_coming_soon_message: 'Premium non è ancora disponibile. Ti informeremo non appena sarà lanciato.',
    
    // FAQ
    faq_title: 'Domande Frequenti',
    faq_q1: 'ForRealScan è gratuito?',
    faq_a1: 'Sì! Il V3 Standard Scan è gratuito. Premium offre V5 UltraDeepScan illimitati e più funzionalità.',
    faq_q2: 'Conservate le mie immagini?',
    faq_a2: 'No. Le tue immagini vengono elaborate solo per l\'analisi e non vengono conservate permanentemente. La privacy è la nostra massima priorità.',
    faq_q3: 'Qual è la differenza tra V3 e V5?',
    faq_a3: 'V3 è un rilevamento AI rapido. V5 UltraDeepScan combina rilevamento AI con analisi ritocco per massima sicurezza.',
    faq_q4: 'Quanto è preciso il rilevamento?',
    faq_a4: 'I nostri modelli raggiungono oltre il 95% di precisione. V5 UltraDeepScan offre sicurezza aggiuntiva tramite analisi ibrida.',
    faq_q5: 'Funziona su tutti i dispositivi?',
    faq_a5: 'Sì! ForRealScan è completamente responsive e funziona su desktop, tablet e smartphone.',
    faq_q6: 'Perché ci sono annunci in modalità gratuita?',
    faq_a6: 'Gli annunci ci permettono di offrire la modalità gratuita senza costi. Gli utenti Premium hanno un\'esperienza senza pubblicità.',
    faq_q7: 'Posso usare ForRealScan commercialmente?',
    faq_a7: 'Sì! Con un piano Premium, puoi usare ForRealScan illimitatamente per scopi commerciali.',
    faq_q8: 'Quali formati immagine sono supportati?',
    faq_a8: 'Supportiamo JPG, PNG, WEBP e la maggior parte dei formati immagine comuni fino a 20MB.',
    
    // Footer
    footer_imprint: 'Impressum',
    footer_privacy: 'Privacy',
    footer_contact: 'Contatto',
    footer_copyright: '© {year} ForRealScan. Tutti i diritti riservati.',
  },
  
  es: {
    // Header
    nav_start: 'Inicio',
    nav_features: 'Funciones',
    nav_modes: 'Modos',
    nav_pricing: 'Precios',
    nav_faq: 'FAQ',
    cta_app: 'Iniciar App',
    language_label: 'Idioma',
    
    // Hero
    hero_title: '¿Real o IA? ForRealScan te lo dice en segundos.',
    hero_subtitle: 'Detección de IA de última generación para contenido auténtico. Confía en Veritas & Robo – tus detectives digitales.',
    hero_cta_primary: 'Iniciar App',
    hero_cta_secondary: 'Ver Ejemplos',
    
    // How it works
    how_title: 'Cómo Funciona ForRealScan',
    how_step1_title: 'Subir Imagen',
    how_step1_text: 'Sube tu imagen directamente mediante arrastrar y soltar o la función de carga.',
    how_step2_title: 'Iniciar Escaneo',
    how_step2_text: 'Nuestra IA analiza la imagen con algoritmos de vanguardia en tiempo real.',
    how_step3_title: 'Entender Resultados',
    how_step3_text: 'Obtén una evaluación clara con explicaciones detalladas de Veritas y Robo.',
    
    // Modes
    modes_title: 'Dos Modos – Un Objetivo: Verdad.',
    mode_v3_title: 'V3 Escaneo Estándar',
    mode_v3_badge: 'Gratis',
    mode_v3_desc: 'Detección rápida de puntuación IA para verificaciones diarias',
    mode_v3_feat1: 'Análisis instantáneo',
    mode_v3_feat2: 'Explicación simple por Veritas & Robo',
    mode_v3_feat3: 'Anuncios posibles en modo gratuito',
    mode_v3_feat4: 'Ideal para verificaciones diarias',
    
    mode_v5_title: 'V5 UltraDeepScan',
    mode_v5_badge: 'Recomendado',
    mode_v5_desc: 'Análisis profundo híbrido para máxima seguridad',
    mode_v5_feat1: 'Detección IA V3 + análisis de retoque V4',
    mode_v5_feat2: 'Activación automática en resultados inciertos',
    mode_v5_feat3: 'Ultra Verdict combina ambos análisis',
    mode_v5_feat4: 'Limitado a 3 escaneos por día',
    
    // Examples
    examples_title: '¿Puedes Ver la Diferencia?',
    examples_subtitle: 'Pon a prueba tu ojo – nuestra IA siempre lo sabe.',
    examples_real_label: 'Foto Real',
    examples_ai_label: 'Generada por IA',
    examples_veritas_comment: 'Sombras naturales y reflejos de luz – claramente real.',
    examples_robo_comment: 'Patrones de píxeles y artefactos indican generación por IA.',
    
    // Mini Game
    game_title: 'Pon a Prueba Tu Ojo – ¿Real o IA?',
    game_subtitle: 'Próximamente: Nuestro juego interactivo donde distingues imágenes reales de las generadas por IA.',
    game_cta: 'Próximamente',
    
    // Use Cases
    cases_title: '¿Para Quién es ForRealScan?',
    case1_title: 'Influencers & Creadores',
    case1_text: 'Protege tu autenticidad y demuestra la genuinidad de tu contenido.',
    case2_title: 'Periodistas & Verificadores',
    case2_text: 'Verifica imágenes rápida y confiablemente para manipulación.',
    case3_title: 'Citas & Social',
    case3_text: 'Detecta perfiles falsos y fotos de perfil generadas por IA al instante.',
    case4_title: 'Fotografía & Marketing',
    case4_text: 'Asegúrate de que tus activos visuales sean auténticos y creíbles.',
    
    // Pricing
    pricing_title: 'Elige Tu Plan',
    pricing_free_title: 'Gratis',
    pricing_free_price: 'Gratis',
    pricing_free_feat1: 'V3 SmartScans gratuitos',
    pricing_free_feat2: 'V5 UltraDeepScans limitados por día (3/día)',
    pricing_free_feat3: 'Los anuncios soportan la versión gratuita',
    pricing_free_cta: 'Comenzar Gratis',
    
    pricing_premium_badge: 'Próximamente',
    pricing_premium_title: 'Premium – próximamente',
    pricing_premium_feat1: 'Escaneos V3 ilimitados planificados',
    pricing_premium_feat2: 'V5 UltraDeepScans intensivos planificados sin límites diarios',
    pricing_premium_feat3: 'Experiencia sin anuncios planificada',
    pricing_premium_feat4: 'Procesamiento prioritario planificado',
    pricing_premium_feat5: 'Historial extendido planificado',
    pricing_premium_cta: 'Avísame cuando Premium esté disponible',
    pricing_premium_coming_soon_title: 'Premium en Preparación',
    pricing_premium_coming_soon_message: 'Premium aún no está disponible. Te informaremos tan pronto como se lance.',
    
    // FAQ
    faq_title: 'Preguntas Frecuentes',
    faq_q1: '¿ForRealScan es gratis?',
    faq_a1: '¡Sí! El V3 Escaneo Estándar es de uso gratuito. Premium ofrece V5 UltraDeepScans ilimitados y más funciones.',
    faq_q2: '¿Almacenan mis imágenes?',
    faq_a2: 'No. Tus imágenes solo se procesan para análisis y no se almacenan permanentemente. La privacidad es nuestra máxima prioridad.',
    faq_q3: '¿Cuál es la diferencia entre V3 y V5?',
    faq_a3: 'V3 es detección rápida de IA. V5 UltraDeepScan combina detección de IA con análisis de retoque para máxima seguridad.',
    faq_q4: '¿Qué tan precisa es la detección?',
    faq_a4: 'Nuestros modelos alcanzan más del 95% de precisión. V5 UltraDeepScan ofrece seguridad adicional mediante análisis híbrido.',
    faq_q5: '¿Funciona en todos los dispositivos?',
    faq_a5: '¡Sí! ForRealScan es completamente responsive y funciona en escritorio, tableta y smartphone.',
    faq_q6: '¿Por qué hay anuncios en modo gratuito?',
    faq_a6: 'Los anuncios nos permiten ofrecer el modo gratuito sin costo. Los usuarios Premium obtienen una experiencia sin anuncios.',
    faq_q7: '¿Puedo usar ForRealScan comercialmente?',
    faq_a7: '¡Sí! Con un plan Premium, puedes usar ForRealScan ilimitadamente para propósitos comerciales.',
    faq_q8: '¿Qué formatos de imagen se admiten?',
    faq_a8: 'Admitimos JPG, PNG, WEBP y la mayoría de los formatos de imagen comunes hasta 20MB.',
    
    // Footer
    footer_imprint: 'Aviso Legal',
    footer_privacy: 'Privacidad',
    footer_contact: 'Contacto',
    footer_copyright: '© {year} ForRealScan. Todos los derechos reservados.',
  },
};
