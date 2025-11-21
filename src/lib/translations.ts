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
    hero_title: 'Erkenne, wie viel KI in deinen Bildern steckt',
    hero_subtitle: 'Lade Bilder oder Screenshots hoch und erhalte eine klare Einschätzung mit Prozentwert, visuellen Hinweisen und kurzen Erklärungen, wie echt oder künstlich ein Motiv wirkt.',
    hero_cta_primary: 'Jetzt prüfen',
    hero_cta_secondary: 'Beispiele ansehen',
    
    // How it works
    how_title: 'Wie funktioniert ForRealScan?',
    how_step1_title: 'Wahrscheinlichkeiten statt harte Urteile',
    how_step1_text: 'ForRealScan zeigt dir eine geschätzte Wahrscheinlichkeit, ob KI-Generierung oder starke Bearbeitung im Spiel ist. Es geht um fundierte Hinweise – nicht um endgültige Urteile.',
    how_step2_title: 'Echte Erklärungen statt nur Prozentzahlen',
    how_step2_text: 'Zu jedem Scan erhältst du verständliche Erklärungen: Welche Bild- oder Textstellen wirken eher natürlich, welche eher KI-typisch und warum.',
    how_step3_title: 'Unsicherheits-Zonen werden klar markiert',
    how_step3_text: 'Wenn ein Ergebnis unsicher ist – zum Beispiel bei sehr kurzen Texten oder schwierigen Bildern – weist ForRealScan deutlich darauf hin, statt Sicherheit vorzutäuschen.',
    
    // Story Check & Text
    story_title: 'Bilder, Texte und Story im Zusammenspiel prüfen',
    story_text_title: 'Texte besser auf KI-Anteil einschätzen',
    story_text_desc: 'ForRealScan hilft dir dabei, längere Texte besser einzuschätzen: Welche Passagen klingen sehr generisch oder gleichförmig, wo zeigt sich persönliche Handschrift? Auffällige Stellen können markiert und kurz erklärt werden – immer mit dem klaren Hinweis, dass es sich um Einschätzungen und Wahrscheinlichkeiten handelt.',
    story_check_title: 'Story-Check für Screenshots und Posts',
    story_check_desc: 'Wenn Bild und Text zusammenkommen – zum Beispiel in einem Social-Media-Post – kann ForRealScan prüfen, ob Bild, Beschreibung und Behauptung grob zusammenpassen. So erkennst du schneller, ob eine dramatische Story wirklich plausibel wirkt oder eher wie ein KI-Fantasie-Szenario.',
    
    // Retouch & Manipulation
    retouch_title: 'Digitale Bearbeitung verständlich erklärt',
    retouch_intro: 'Nicht jede Bearbeitung ist schlecht – aber es hilft, sie zu erkennen. ForRealScan zeigt dir, wo ein Bild stark geglättet, nachgeschärft oder deutlich verändert wurde.',
    retouch_point1: 'Hautglättung, Lichtanpassungen oder starke Filter können als mögliche Retusche gekennzeichnet werden.',
    retouch_point2: 'Auffällige Veränderungen an Gesichtszügen oder Proportionen können vorsichtig benannt werden.',
    retouch_point3: 'Erklärtexte bleiben neutral und sachlich, damit du dir selbst ein Urteil bilden kannst.',
    
    // ShareCards
    share_title: 'Ergebnisse teilen, wo sie gebraucht werden',
    share_text: 'Scans können als kompakte Ergebnis-Karten geteilt werden, zum Beispiel in Chats oder unter Social-Media-Posts. So machst du deine Einschätzung für andere nachvollziehbar – inklusive Hinweis auf Unsicherheiten.',
    
    // Disclaimer
    disclaimer_title: 'Wichtiger Hinweis',
    disclaimer_text: 'ForRealScan liefert dir fundierte technische Einschätzungen und Wahrscheinlichkeiten. Die Ergebnisse sind keine juristischen Beweise, helfen dir aber dabei, bewusster zu entscheiden – und sollten nicht als alleinige Grundlage für Vorwürfe oder harte Anschuldigungen dienen.',
    
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
    case1_detail1: 'Zeige deiner Community mit einem ForRealScan-Ergebnis, dass deine Fotos echt sind – selbst wenn du leicht retuschierst.',
    case1_detail2: 'Vergleiche echte Fotos mit KI-Bildern, um deinen eigenen Bildstil bewusster zu wählen.',
    case1_detail3: 'Prüfe Kampagnenmotive, bevor du sie mit Marken oder Agenturen teilst.',
    case2_title: 'Journalisten & Fact Checker',
    case2_text: 'Überprüfe Bildmaterial schnell und transparent auf mögliche Manipulation.',
    case2_detail1: 'Scanne Pressefotos und Social-Media-Screenshots, bevor du sie in Artikeln oder Beiträgen verwendest.',
    case2_detail2: 'Nutze den Story-Check, um zu sehen, ob Bild und Text grob zueinander passen.',
    case2_detail3: 'Dokumentiere deine Prüfung mit einem knappen ForRealScan-Ergebnis für deine Leser:innen.',
    case3_title: 'Dating & Social',
    case3_text: 'Erkenne verdächtige Profilbilder und unrealistische Inszenierungen frühzeitig.',
    case3_detail1: 'Prüfe Profilbilder, bevor du jemandem vertraust oder persönliche Informationen teilst.',
    case3_detail2: 'Erkenne stark retuschierte oder KI-erzeugte Selfies, die ein falsches Bild vermitteln.',
    case3_detail3: 'Scanne Screenshots von viralen Posts, um sie vor dem Teilen besser einschätzen zu können.',
    case4_title: 'Fotografie & Marketing',
    case4_text: 'Mache die Authentizität deiner visuellen Assets sichtbar.',
    case4_detail1: 'Zeige Kund:innen, welche Bilder echte Fotos sind und wo digitale Bearbeitung im Spiel ist.',
    case4_detail2: 'Scanne Produktfotos und Kampagnenmotive vor der Veröffentlichung.',
    case4_detail3: 'Nutze ForRealScan-Ergebnisse als Transparenz-Pluspunkt in Pitches und Präsentationen.',
    
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
    case1_detail1: 'Show your community with a ForRealScan result that your photos are real – even if you retouch slightly.',
    case1_detail2: 'Compare real photos with AI images to choose your own image style more consciously.',
    case1_detail3: 'Check campaign motifs before sharing them with brands or agencies.',
    case2_title: 'Journalists & Fact Checkers',
    case2_text: 'Verify image material quickly and transparently for possible manipulation.',
    case2_detail1: 'Scan press photos and social media screenshots before using them in articles or posts.',
    case2_detail2: 'Use the Story-Check to see if image and text roughly match.',
    case2_detail3: 'Document your review with a brief ForRealScan result for your readers.',
    case3_title: 'Dating & Social',
    case3_text: 'Recognize suspicious profile pictures and unrealistic staging early.',
    case3_detail1: 'Check profile pictures before you trust someone or share personal information.',
    case3_detail2: 'Recognize heavily retouched or AI-generated selfies that convey a false image.',
    case3_detail3: 'Scan screenshots of viral posts to better assess them before sharing.',
    case4_title: 'Photography & Marketing',
    case4_text: 'Make the authenticity of your visual assets visible.',
    case4_detail1: 'Show clients which images are real photos and where digital editing is involved.',
    case4_detail2: 'Scan product photos and campaign motifs before publication.',
    case4_detail3: 'Use ForRealScan results as a transparency plus in pitches and presentations.',
    
    // How it works
    how_title: 'How ForRealScan Works',
    how_step1_title: 'Probabilities instead of hard judgments',
    how_step1_text: 'ForRealScan shows you an estimated probability of whether AI generation or heavy editing is involved. It\'s about well-founded hints – not final judgments.',
    how_step2_title: 'Real explanations instead of just percentages',
    how_step2_text: 'With each scan, you get understandable explanations: Which image or text parts seem more natural, which are more typical of AI and why.',
    how_step3_title: 'Uncertainty zones are clearly marked',
    how_step3_text: 'If a result is uncertain – for example with very short texts or difficult images – ForRealScan clearly points this out instead of pretending certainty.',
    
    // Story Check & Text
    story_title: 'Check images, texts and story in interplay',
    story_text_title: 'Better assess texts for AI content',
    story_text_desc: 'ForRealScan helps you better assess longer texts: Which passages sound very generic or uniform, where does personal handwriting show? Conspicuous passages can be marked and briefly explained – always with the clear note that these are assessments and probabilities.',
    story_check_title: 'Story-Check for screenshots and posts',
    story_check_desc: 'When image and text come together – for example in a social media post – ForRealScan can check whether image, description and claim roughly match. This helps you recognize faster whether a dramatic story really seems plausible or more like an AI fantasy scenario.',
    
    // Retouch & Manipulation
    retouch_title: 'Digital editing explained understandably',
    retouch_intro: 'Not every edit is bad – but it helps to recognize it. ForRealScan shows you where an image was heavily smoothed, sharpened or significantly changed.',
    retouch_point1: 'Skin smoothing, light adjustments or strong filters can be marked as possible retouching.',
    retouch_point2: 'Conspicuous changes to facial features or proportions can be cautiously named.',
    retouch_point3: 'Explanatory texts remain neutral and factual so you can form your own judgment.',
    
    // ShareCards
    share_title: 'Share results where they are needed',
    share_text: 'Scans can be shared as compact result cards, for example in chats or under social media posts. This makes your assessment comprehensible for others – including notes on uncertainties.',
    
    // Disclaimer
    disclaimer_title: 'Important Note',
    disclaimer_text: 'ForRealScan provides you with well-founded technical assessments and probabilities. The results are not legal evidence, but help you make more conscious decisions – and should not serve as the sole basis for accusations or harsh allegations.',
    
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
    case1_detail1: 'Mostra alla tua community con un risultato ForRealScan che le tue foto sono reali – anche se ritocchi leggermente.',
    case1_detail2: 'Confronta foto reali con immagini AI per scegliere il tuo stile di immagine più consapevolmente.',
    case1_detail3: 'Controlla i motivi della campagna prima di condividerli con marchi o agenzie.',
    case2_title: 'Giornalisti & Fact Checker',
    case2_text: 'Verifica le immagini rapidamente e in modo trasparente per possibili manipolazioni.',
    case2_detail1: 'Scansiona foto stampa e screenshot dei social media prima di usarli in articoli o post.',
    case2_detail2: 'Usa lo Story-Check per vedere se immagine e testo corrispondono approssimativamente.',
    case2_detail3: 'Documenta la tua revisione con un breve risultato ForRealScan per i tuoi lettori.',
    case3_title: 'Dating & Social',
    case3_text: 'Riconosci le foto profilo sospette e la messa in scena irrealistica in anticipo.',
    case3_detail1: 'Controlla le foto profilo prima di fidarti di qualcuno o condividere informazioni personali.',
    case3_detail2: 'Riconosci selfie fortemente ritoccati o generati da AI che trasmettono un\'immagine falsa.',
    case3_detail3: 'Scansiona screenshot di post virali per valutarli meglio prima di condividerli.',
    case4_title: 'Fotografia & Marketing',
    case4_text: 'Rendi visibile l\'autenticità delle tue risorse visive.',
    case4_detail1: 'Mostra ai clienti quali immagini sono foto reali e dove è coinvolta l\'editing digitale.',
    case4_detail2: 'Scansiona foto di prodotti e motivi di campagna prima della pubblicazione.',
    case4_detail3: 'Usa i risultati ForRealScan come punto di forza della trasparenza in pitch e presentazioni.',
    
    // How it works
    how_title: 'Come Funziona ForRealScan',
    how_step1_title: 'Probabilità invece di giudizi duri',
    how_step1_text: 'ForRealScan ti mostra una probabilità stimata se è coinvolta la generazione AI o un\'editing pesante. Si tratta di suggerimenti fondati – non giudizi finali.',
    how_step2_title: 'Spiegazioni reali invece di sole percentuali',
    how_step2_text: 'Con ogni scansione, ottieni spiegazioni comprensibili: Quali parti di immagine o testo sembrano più naturali, quali sono più tipiche dell\'AI e perché.',
    how_step3_title: 'Le zone di incertezza sono chiaramente marcate',
    how_step3_text: 'Se un risultato è incerto – ad esempio con testi molto brevi o immagini difficili – ForRealScan lo indica chiaramente invece di fingere certezza.',
    
    // Story Check & Text
    story_title: 'Controlla immagini, testi e storia nell\'interazione',
    story_text_title: 'Valuta meglio i testi per il contenuto AI',
    story_text_desc: 'ForRealScan ti aiuta a valutare meglio i testi più lunghi: Quali passaggi suonano molto generici o uniformi, dove si mostra la scrittura personale? I passaggi cospicui possono essere contrassegnati e spiegati brevemente – sempre con la chiara nota che si tratta di valutazioni e probabilità.',
    story_check_title: 'Story-Check per screenshot e post',
    story_check_desc: 'Quando immagine e testo si uniscono – ad esempio in un post sui social media – ForRealScan può verificare se immagine, descrizione e affermazione corrispondono approssimativamente. Questo ti aiuta a riconoscere più velocemente se una storia drammatica sembra davvero plausibile o più come uno scenario fantastico AI.',
    
    // Retouch & Manipulation
    retouch_title: 'Editing digitale spiegato in modo comprensibile',
    retouch_intro: 'Non ogni modifica è cattiva – ma aiuta riconoscerla. ForRealScan ti mostra dove un\'immagine è stata fortemente levigata, nitidizzata o significativamente cambiata.',
    retouch_point1: 'Levigatura della pelle, regolazioni della luce o filtri forti possono essere contrassegnati come possibile ritocco.',
    retouch_point2: 'Cambiamenti cospicui ai lineamenti del viso o alle proporzioni possono essere nominati con cautela.',
    retouch_point3: 'I testi esplicativi rimangono neutrali e fattuali in modo da poter formare il tuo giudizio.',
    
    // ShareCards
    share_title: 'Condividi i risultati dove sono necessari',
    share_text: 'Le scansioni possono essere condivise come carte risultato compatte, ad esempio in chat o sotto post sui social media. Questo rende la tua valutazione comprensibile per gli altri – incluse note sulle incertezze.',
    
    // Disclaimer
    disclaimer_title: 'Nota Importante',
    disclaimer_text: 'ForRealScan ti fornisce valutazioni tecniche ben fondate e probabilità. I risultati non sono prove legali, ma ti aiutano a prendere decisioni più consapevoli – e non dovrebbero servire come unica base per accuse o dure allegazioni.',
    
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
    case1_detail1: 'Muestra a tu comunidad con un resultado ForRealScan que tus fotos son reales – incluso si retoques ligeramente.',
    case1_detail2: 'Compara fotos reales con imágenes AI para elegir tu propio estilo de imagen más conscientemente.',
    case1_detail3: 'Verifica motivos de campaña antes de compartirlos con marcas o agencias.',
    case2_title: 'Periodistas & Verificadores',
    case2_text: 'Verifica imágenes rápida y transparentemente para posible manipulación.',
    case2_detail1: 'Escanea fotos de prensa y capturas de pantalla de redes sociales antes de usarlas en artículos o publicaciones.',
    case2_detail2: 'Usa el Story-Check para ver si imagen y texto coinciden aproximadamente.',
    case2_detail3: 'Documenta tu revisión con un breve resultado ForRealScan para tus lectores.',
    case3_title: 'Citas & Social',
    case3_text: 'Reconoce fotos de perfil sospechosas y escenificación irreal temprano.',
    case3_detail1: 'Verifica fotos de perfil antes de confiar en alguien o compartir información personal.',
    case3_detail2: 'Reconoce selfies fuertemente retocados o generados por IA que transmiten una imagen falsa.',
    case3_detail3: 'Escanea capturas de pantalla de publicaciones virales para evaluarlas mejor antes de compartirlas.',
    case4_title: 'Fotografía & Marketing',
    case4_text: 'Haz visible la autenticidad de tus activos visuales.',
    case4_detail1: 'Muestra a los clientes qué imágenes son fotos reales y dónde está involucrada la edición digital.',
    case4_detail2: 'Escanea fotos de productos y motivos de campaña antes de la publicación.',
    case4_detail3: 'Usa los resultados ForRealScan como un plus de transparencia en presentaciones y propuestas.',
    
    // How it works
    how_title: 'Cómo Funciona ForRealScan',
    how_step1_title: 'Probabilidades en lugar de juicios duros',
    how_step1_text: 'ForRealScan te muestra una probabilidad estimada de si está involucrada la generación de IA o edición pesada. Se trata de pistas bien fundadas – no juicios finales.',
    how_step2_title: 'Explicaciones reales en lugar de solo porcentajes',
    how_step2_text: 'Con cada escaneo, obtienes explicaciones comprensibles: ¿Qué partes de imagen o texto parecen más naturales, cuáles son más típicas de IA y por qué.',
    how_step3_title: 'Las zonas de incertidumbre se marcan claramente',
    how_step3_text: 'Si un resultado es incierto – por ejemplo con textos muy cortos o imágenes difíciles – ForRealScan lo señala claramente en lugar de fingir certeza.',
    
    // Story Check & Text
    story_title: 'Verifica imágenes, textos e historia en interacción',
    story_text_title: 'Evalúa mejor los textos para contenido de IA',
    story_text_desc: 'ForRealScan te ayuda a evaluar mejor textos más largos: ¿Qué pasajes suenan muy genéricos o uniformes, dónde se muestra escritura personal? Los pasajes conspicuos pueden marcarse y explicarse brevemente – siempre con la nota clara de que se trata de evaluaciones y probabilidades.',
    story_check_title: 'Story-Check para capturas de pantalla y publicaciones',
    story_check_desc: 'Cuando imagen y texto se unen – por ejemplo en una publicación en redes sociales – ForRealScan puede verificar si imagen, descripción y afirmación coinciden aproximadamente. Esto te ayuda a reconocer más rápido si una historia dramática realmente parece plausible o más como un escenario de fantasía de IA.',
    
    // Retouch & Manipulation
    retouch_title: 'Edición digital explicada comprensiblemente',
    retouch_intro: 'No toda edición es mala – pero ayuda reconocerla. ForRealScan te muestra dónde una imagen fue fuertemente suavizada, afilada o significativamente cambiada.',
    retouch_point1: 'Suavizado de piel, ajustes de luz o filtros fuertes pueden marcarse como posible retoque.',
    retouch_point2: 'Cambios conspicuos en rasgos faciales o proporciones pueden nombrarse cautelosamente.',
    retouch_point3: 'Los textos explicativos permanecen neutrales y factuales para que puedas formar tu propio juicio.',
    
    // ShareCards
    share_title: 'Comparte resultados donde sean necesarios',
    share_text: 'Los escaneos pueden compartirse como tarjetas de resultado compactas, por ejemplo en chats o bajo publicaciones en redes sociales. Esto hace que tu evaluación sea comprensible para otros – incluyendo notas sobre incertidumbres.',
    
    // Disclaimer
    disclaimer_title: 'Nota Importante',
    disclaimer_text: 'ForRealScan te proporciona evaluaciones técnicas bien fundadas y probabilidades. Los resultados no son pruebas legales, pero te ayudan a tomar decisiones más conscientes – y no deben servir como única base para acusaciones o alegaciones duras.',
    
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
