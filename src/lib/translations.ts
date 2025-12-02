export type Language = 'de' | 'en' | 'it' | 'es';

interface Translations {
  // Header
  nav_start: string;
  nav_features: string;
  nav_scan: string;
  nav_veritas_robo: string;
  nav_game: string;
  nav_pricing: string;
  nav_faq: string;
  cta_app: string;
  language_label: string;
  
  // Hero
  hero_title: string;
  hero_subtitle: string;
  hero_cta_primary: string;
  hero_cta_secondary: string;
  hero_microcopy: string;
  
  // How it works
  how_title: string;
  how_step1_title: string;
  how_step1_text: string;
  how_step2_title: string;
  how_step2_text: string;
  how_step3_title: string;
  how_step3_text: string;
  
  // Story Check & Text
  story_title: string;
  story_text_title: string;
  story_text_desc: string;
  story_check_title: string;
  story_check_desc: string;
  
  // Retouch & Manipulation
  retouch_title: string;
  retouch_intro: string;
  retouch_point1: string;
  retouch_point2: string;
  retouch_point3: string;
  
  // ShareCards
  share_title: string;
  share_text: string;
  
  // Disclaimer
  disclaimer_title: string;
  disclaimer_text: string;
  
  // Scan
  scan_title: string;
  scan_hybrid_title: string;
  scan_hybrid_desc: string;
  scan_hybrid_feat1: string;
  scan_hybrid_feat2: string;
  scan_hybrid_feat3: string;
  scan_hybrid_feat4: string;
  scan_limit_label: string;
  
  // Examples
  examples_title: string;
  examples_subtitle: string;
  examples_real_label: string;
  examples_ai_label: string;
  examples_veritas_comment: string;
  examples_robo_comment: string;
  
  // Mini Game
  game_title: string;
  game_subtitle: string;
  game_cta: string;
  
  // Use Cases
  cases_title: string;
  case1_title: string;
  case1_text: string;
  case1_detail1: string;
  case1_detail2: string;
  case1_detail3: string;
  case2_title: string;
  case2_text: string;
  case2_detail1: string;
  case2_detail2: string;
  case2_detail3: string;
  case3_title: string;
  case3_text: string;
  case3_detail1: string;
  case3_detail2: string;
  case3_detail3: string;
  case4_title: string;
  case4_text: string;
  case4_detail1: string;
  case4_detail2: string;
  case4_detail3: string;
  
  // Pricing
  pricing_title: string;
  pricing_free_title: string;
  pricing_free_price: string;
  pricing_free_feat1: string;
  pricing_free_feat2: string;
  pricing_free_feat3: string;
  pricing_free_cta: string;
  pricing_premium_badge: string;
  pricing_premium_title: string;
  pricing_premium_feat1: string;
  pricing_premium_feat2: string;
  pricing_premium_feat3: string;
  pricing_premium_feat4: string;
  pricing_premium_feat5: string;
  pricing_premium_cta: string;
  pricing_premium_coming_soon_title: string;
  pricing_premium_coming_soon_message: string;
  
  // FAQ
  faq_title: string;
  faq_q1: string;
  faq_a1: string;
  faq_q2: string;
  faq_a2: string;
  faq_q3: string;
  faq_a3: string;
  faq_q4: string;
  faq_a4: string;
  faq_q5: string;
  faq_a5: string;
  faq_q6: string;
  faq_a6: string;
  faq_q7: string;
  faq_a7: string;
  faq_q8: string;
  faq_a8: string;
  
  // Footer
  footer_imprint: string;
  footer_privacy: string;
  footer_contact: string;
  footer_copyright: string;
  
  // Veritas & Robo Section
  veritas_robo_label: string;
  veritas_robo_title: string;
  veritas_robo_subtitle: string;
  
  veritas_name: string;
  veritas_subtitle: string;
  veritas_description: string;
  veritas_bullet1: string;
  veritas_bullet2: string;
  veritas_bullet3: string;
  
  robo_name: string;
  robo_subtitle: string;
  robo_description: string;
  robo_bullet1: string;
  robo_bullet2: string;
  robo_bullet3: string;
  
  veritas_robo_explanation: string;
  veritas_robo_help_title: string;
  veritas_robo_help_step1: string;
  veritas_robo_help_step2: string;
  veritas_robo_help_step3: string;
  veritas_robo_disclaimer: string;
  veritas_robo_closing: string;
}

export const translations: Record<Language, Translations> = {
  de: {
    // Header
    nav_start: 'Start',
    nav_features: 'Funktionen',
    nav_scan: 'Scan',
    nav_veritas_robo: 'Veritas & Robo',
    nav_game: 'Spiel',
    nav_pricing: 'Preise',
    nav_faq: 'FAQ',
    cta_app: 'App starten',
    language_label: 'Sprache',
    
    // Hero
    hero_title: 'Erkenne, wie viel KI in deinen Bildern steckt',
    hero_subtitle: 'Lade dein Bild hoch und erhalte mit dem ForRealScan-Hybrid einen Prozentwert – mit KI-Hinweisen, Unsicherheitszonen und technischen Details, damit du besser einschätzen kannst, was echt ist.',
    hero_cta_primary: 'Jetzt prüfen',
    hero_cta_secondary: 'Beispiele ansehen',
    hero_microcopy: 'Kostenlos testen, keine Anmeldung nötig.',
    
    // How it works
    how_title: 'Wie funktioniert ForRealScan?',
    how_step1_title: 'Wahrscheinlichkeiten statt harte Urteile',
    how_step1_text: 'Der ForRealScan-Hybrid zeigt dir eine geschätzte Wahrscheinlichkeit, ob KI-Generierung oder starke Bearbeitung im Spiel ist. Es geht um fundierte Hinweise – nicht um endgültige Urteile.',
    how_step2_title: 'Echte Erklärungen statt nur Prozentzahlen',
    how_step2_text: 'Mit dem Hybrid-Scan erhältst du verständliche Erklärungen: Welche Bild- oder Textstellen wirken eher natürlich, welche eher KI-typisch und warum.',
    how_step3_title: 'Unsicherheits-Zonen werden klar markiert',
    how_step3_text: 'Wenn ein Ergebnis unsicher ist – zum Beispiel bei schwierigen Bildern – weist der ForRealScan-Hybrid deutlich darauf hin, statt Sicherheit vorzutäuschen.',
    
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
    
    // Scan
    scan_title: 'Ein Scan – maximale Klarheit.',
    scan_hybrid_title: 'ForRealScan (Hybrid-Scan)',
    scan_hybrid_desc: 'Kombinierte Bild- und Forensik-Analyse für dein Bild.',
    scan_hybrid_feat1: 'Schätzt die KI-Wahrscheinlichkeit deines Bildes (0–100 %).',
    scan_hybrid_feat2: 'Nutzt zusätzliche Forensik-Signale für Manipulation und Retusche.',
    scan_hybrid_feat3: 'Liefert klares Ergebnis: authentisch, KI oder unsicher – mit kurzer Erklärung.',
    scan_hybrid_feat4: 'Bis zu 5 Bilder pro Tag mit ForRealScan prüfen.',
    scan_limit_label: 'Tageslimit: 0/5',
    
    // Examples
    examples_title: 'Siehst du den Unterschied?',
    examples_subtitle: 'KI-generierte Bilder werden immer realer, doch ForRealScan hilft dir den Unterschied zu sehen.',
    examples_real_label: 'Echtes Foto',
    examples_ai_label: 'KI-generiert',
    examples_veritas_comment: 'Natürliche Schatten und Lichtreflexionen – eindeutig echt.',
    examples_robo_comment: 'Pixel-Muster und Artefakte weisen auf KI-Generierung hin.',
    
    // Mini Game
    game_title: 'Siehst du den Unterschied?',
    game_subtitle: 'Teste dein Auge – ForRealScan zeigt dir anschließend die Auflösung.',
    game_cta: 'Spiel starten',
    
    // Use Cases
    cases_title: 'Für wen ist ForRealScan?',
    case1_title: 'Influencer & Creator',
    case1_text: 'Schütze deine Authentizität und beweise die Echtheit deiner Inhalte.',
    case1_detail1: 'Zeige deiner Community mit einem ForRealScan-Hybrid-Ergebnis, dass deine Fotos echt sind – selbst wenn du leicht retuschierst.',
    case1_detail2: 'Vergleiche echte Fotos mit KI-Bildern, um deinen eigenen Bildstil bewusster zu wählen.',
    case1_detail3: 'Prüfe Kampagnenmotive mit dem Hybrid-Scan, bevor du sie mit Marken oder Agenturen teilst.',
    case2_title: 'Journalisten & Fact Checker',
    case2_text: 'Überprüfe Bildmaterial schnell und transparent auf mögliche Manipulation.',
    case2_detail1: 'Scanne Pressefotos mit dem Hybrid-Scan, bevor du sie in Artikeln verwendest.',
    case2_detail2: 'Nutze den Story-Check, um zu sehen, ob Bild und Text grob zueinander passen.',
    case2_detail3: 'Dokumentiere deine Prüfung mit einem knappen ForRealScan-Hybrid-Ergebnis für deine Leser:innen.',
    case3_title: 'Dating & Social',
    case3_text: 'Erkenne verdächtige Profilbilder und unrealistische Inszenierungen frühzeitig.',
    case3_detail1: 'Prüfe Profilbilder mit dem Hybrid-Scan, bevor du jemandem vertraust.',
    case3_detail2: 'Erkenne stark retuschierte oder KI-erzeugte Selfies, die ein falsches Bild vermitteln.',
    case3_detail3: 'Scanne Screenshots von viralen Posts, um sie vor dem Teilen besser einschätzen zu können.',
    case4_title: 'Fotografie & Marketing',
    case4_text: 'Mache die Authentizität deiner visuellen Assets sichtbar.',
    case4_detail1: 'Zeige Kund:innen, welche Bilder echte Fotos sind und wo digitale Bearbeitung im Spiel ist.',
    case4_detail2: 'Scanne Produktfotos und Kampagnenmotive mit dem Hybrid-Scan vor der Veröffentlichung.',
    case4_detail3: 'Nutze ForRealScan-Hybrid-Ergebnisse als Transparenz-Pluspunkt in Pitches und Präsentationen.',
    
    // Pricing
    pricing_title: 'Wähle deinen Plan',
    pricing_free_title: 'Kostenlos',
    pricing_free_price: 'Kostenlos',
    pricing_free_feat1: 'Bis zu 5 Bilder pro Tag mit ForRealScan prüfen.',
    pricing_free_feat2: 'Geplante Werbung unterstützt die kostenlose Nutzung.',
    pricing_free_feat3: 'Kein Konto nötig für die ersten Scans.',
    pricing_free_cta: 'Kostenlos starten',
    
    pricing_premium_badge: 'Bald verfügbar',
    pricing_premium_title: 'Premium – bald verfügbar',
    pricing_premium_feat1: 'Geplante unbegrenzte ForRealScan-Analysen ohne Tageslimit.',
    pricing_premium_feat2: 'Geplante werbefreie Nutzung.',
    pricing_premium_feat3: 'Geplante erweiterte Scan-Historie und Sammlung.',
    pricing_premium_feat4: 'Geplante Prioritäts-Verarbeitung.',
    pricing_premium_feat5: '',
    pricing_premium_cta: 'Benachrichtige mich, wenn Premium startet',
    pricing_premium_coming_soon_title: 'Premium in Vorbereitung',
    pricing_premium_coming_soon_message: 'Premium befindet sich in Vorbereitung. Wir informieren dich, sobald es startet.',
    
    // FAQ
    faq_title: 'Häufig gestellte Fragen',
    faq_q1: 'Ist ForRealScan kostenlos?',
    faq_a1: 'Ja! Der ForRealScan-Hybrid-Scan ist bis zu 5-mal pro Tag kostenlos nutzbar. Premium bietet unbegrenzte Scans und weitere Features.',
    faq_q2: 'Wie zuverlässig sind die Einschätzungen?',
    faq_a2: 'ForRealScan liefert dir fundierte Wahrscheinlichkeiten und technische Hinweise. In vielen Tests können KI-Bilder sehr zuverlässig erkannt werden – trotzdem gibt es nie eine Garantie von 100 %. Deshalb zeigen wir dir immer auch Unsicherheitsbereiche und erklären, warum ein Ergebnis so ausfällt, damit du es besser einordnen kannst.',
    faq_q3: 'Gibt es verschiedene Scan-Modi?',
    faq_a3: 'Früher gab es zwei Modi, heute nutzt ForRealScan einen Hybrid-Scan, der Bildanalyse und Forensik kombiniert – du musst nichts auswählen. Der Hybrid-Scan liefert dir automatisch die beste verfügbare Einschätzung.',
    faq_q4: 'Funktioniert es auf allen Geräten?',
    faq_a4: 'Ja! ForRealScan ist vollständig responsiv und funktioniert auf Desktop, Tablet und Smartphone.',
    faq_q5: 'Warum gibt es Werbung im Free-Modus?',
    faq_a5: 'Werbung ermöglicht uns, den Free-Modus kostenlos anzubieten. Premium-Nutzer erhalten ein werbefreies Erlebnis.',
    faq_q6: 'Kann ich ForRealScan kommerziell nutzen?',
    faq_a6: 'Ja! Mit einem Premium-Plan kannst du ForRealScan unbegrenzt für kommerzielle Zwecke nutzen.',
    faq_q7: 'Speichert ihr meine Bilder?',
    faq_a7: 'Nein. Deine Bilder werden nur für die Analyse verarbeitet und nicht dauerhaft gespeichert. Datenschutz hat höchste Priorität.',
    faq_q8: 'Welche Bildformate werden unterstützt?',
    faq_a8: 'Wir unterstützen JPG, PNG, WEBP und die meisten gängigen Bildformate bis zu 20MB.',
    
    // Footer
    footer_imprint: 'Impressum',
    footer_privacy: 'Datenschutz',
    footer_contact: 'Kontakt',
    footer_copyright: '© {year} ForRealScan. Alle Rechte vorbehalten.',
    
    // Veritas & Robo Section
    veritas_robo_label: 'Die Köpfe hinter deinem Scan',
    veritas_robo_title: 'Lerne Veritas & Robo kennen',
    veritas_robo_subtitle: 'Zwei Perspektiven auf jedes Bild: Veritas achtet auf das natürliche Gesamtbild, Robo auf technische Pixelmuster. Gemeinsam erklären sie dir, wie das Ergebnis zustande kommt – verständlich und ohne Fachchinesisch.',
    
    veritas_name: 'Veritas',
    veritas_subtitle: 'der Natur-Blick',
    veritas_description: 'Konzentriert sich darauf, ob sich ein Bild wie eine echte Aufnahme anfühlt.',
    veritas_bullet1: 'Licht, Schatten und Reflexionen wirken natürlich.',
    veritas_bullet2: 'Details wie Haut, Haare und Hintergrund haben Tiefe.',
    veritas_bullet3: 'Mag kleine Unperfektheiten, wie man sie von echten Fotos kennt.',
    
    robo_name: 'Robo',
    robo_subtitle: 'der Logik-Blick',
    robo_description: 'Analysiert Muster, Pixel und technische Spuren von KI-Bildern.',
    robo_bullet1: 'Erkennt auffällige Pixelmuster und Kompressions-Artefakte.',
    robo_bullet2: 'Achtet auf übertriebene Perfektion und Wiederholungen.',
    robo_bullet3: 'Spürt Unstimmigkeiten auf, die typisch für KI-generierte Bilder sind.',
    
    veritas_robo_explanation: 'Veritas steht für den „Natur-Blick": Licht, Schatten, Tiefe und das Gesamtgefühl eines Bildes. Robo übernimmt den „Logik-Blick": Pixel, Muster und typische Spuren von KI-Generierung. Beide schauen auf dasselbe Bild – aber aus zwei Richtungen – und treffen sich dann in einer gemeinsamen Einschätzung.',
    veritas_robo_help_title: 'So helfen sie dir:',
    veritas_robo_help_step1: '1. Zwei Perspektiven – Veritas prüft das Bildgefühl, Robo die technischen Details.',
    veritas_robo_help_step2: '2. Hinweise für „echt" oder „KI" – Beide suchen nach typischen Spuren, die für oder gegen KI sprechen.',
    veritas_robo_help_step3: '3. Erklärung in Klartext – Aus den Hinweisen wird eine ruhige, neutrale Erklärung, die du ohne Vorwissen verstehst.',
    veritas_robo_disclaimer: 'Ohne Modellnamen, ohne Provider-Werbung – nur eine ehrliche Einschätzung, die du nachvollziehen kannst.',
    veritas_robo_closing: 'Veritas und Robo sehen sich jedes Bild aus zwei Richtungen an – am Ende bekommst du eine gemeinsame, ausgewogene Einschätzung pro ForRealScan-Hybrid-Scan.',
  },
  
  en: {
    // Header
    nav_start: 'Start',
    nav_features: 'Features',
    nav_scan: 'Scan',
    nav_veritas_robo: 'Veritas & Robo',
    nav_game: 'Game',
    nav_pricing: 'Pricing',
    nav_faq: 'FAQ',
    cta_app: 'Launch App',
    language_label: 'Language',
    
    // Hero
    hero_title: 'Discover How Much AI is in Your Images',
    hero_subtitle: 'Upload your image and get a percentage value with the ForRealScan-Hybrid – with AI indicators, uncertainty zones, and technical details to help you better assess what\'s real.',
    hero_cta_primary: 'Check Now',
    hero_cta_secondary: 'View Examples',
    hero_microcopy: 'Try for free, no registration required.',
    
    // How it works
    how_title: 'How ForRealScan Works',
    how_step1_title: 'Probabilities instead of hard judgments',
    how_step1_text: 'The ForRealScan-Hybrid shows you an estimated probability of whether AI generation or heavy editing is involved. It\'s about well-founded hints – not final judgments.',
    how_step2_title: 'Real explanations instead of just percentages',
    how_step2_text: 'With the Hybrid scan, you get understandable explanations: Which image or text parts seem more natural, which are more typical of AI and why.',
    how_step3_title: 'Uncertainty zones are clearly marked',
    how_step3_text: 'If a result is uncertain – for example with difficult images – the ForRealScan-Hybrid clearly points this out instead of pretending certainty.',
    
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
    
    // Scan
    scan_title: 'One Scan – Maximum Clarity.',
    scan_hybrid_title: 'ForRealScan (Hybrid-Scan)',
    scan_hybrid_desc: 'Combined image and forensic analysis for your image.',
    scan_hybrid_feat1: 'Estimates AI probability of your image (0–100%).',
    scan_hybrid_feat2: 'Uses additional forensic signals for manipulation and retouching.',
    scan_hybrid_feat3: 'Delivers clear result: authentic, AI or uncertain – with brief explanation.',
    scan_hybrid_feat4: 'Check up to 5 images per day with ForRealScan.',
    scan_limit_label: 'Daily limit: 0/5',
    
    // Examples
    examples_title: 'Can You Spot the Difference?',
    examples_subtitle: 'AI-generated images are becoming more realistic, but ForRealScan helps you see the difference.',
    examples_real_label: 'Real Photo',
    examples_ai_label: 'AI-Generated',
    examples_veritas_comment: 'Natural shadows and light reflections – clearly real.',
    examples_robo_comment: 'Pixel patterns and artifacts indicate AI generation.',
    
    // Mini Game
    game_title: 'Can You Spot the Difference?',
    game_subtitle: 'Test your eye – ForRealScan will show you the answer afterwards.',
    game_cta: 'Start Game',
    
    // Use Cases
    cases_title: 'Who Is ForRealScan For?',
    case1_title: 'Influencers & Creators',
    case1_text: 'Protect your authenticity and prove the genuineness of your content.',
    case1_detail1: 'Show your community with a ForRealScan-Hybrid result that your photos are real – even if you retouch slightly.',
    case1_detail2: 'Compare real photos with AI images to choose your own image style more consciously.',
    case1_detail3: 'Check campaign motifs with the Hybrid scan before sharing them with brands or agencies.',
    case2_title: 'Journalists & Fact Checkers',
    case2_text: 'Verify image material quickly and transparently for possible manipulation.',
    case2_detail1: 'Scan press photos with the Hybrid scan before using them in articles.',
    case2_detail2: 'Use the Story-Check to see if image and text roughly match.',
    case2_detail3: 'Document your review with a brief ForRealScan-Hybrid result for your readers.',
    case3_title: 'Dating & Social',
    case3_text: 'Recognize suspicious profile pictures and unrealistic staging early.',
    case3_detail1: 'Check profile pictures with the Hybrid scan before you trust someone.',
    case3_detail2: 'Recognize heavily retouched or AI-generated selfies that convey a false image.',
    case3_detail3: 'Scan screenshots of viral posts to better assess them before sharing.',
    case4_title: 'Photography & Marketing',
    case4_text: 'Make the authenticity of your visual assets visible.',
    case4_detail1: 'Show clients which images are real photos and where digital editing is involved.',
    case4_detail2: 'Scan product photos and campaign motifs with the Hybrid scan before publication.',
    case4_detail3: 'Use ForRealScan-Hybrid results as a transparency plus in pitches and presentations.',
    
    // Pricing
    pricing_title: 'Choose Your Plan',
    pricing_free_title: 'Free',
    pricing_free_price: 'Free',
    pricing_free_feat1: 'Check up to 5 images per day with ForRealScan.',
    pricing_free_feat2: 'Planned ads support the free version.',
    pricing_free_feat3: 'No account needed for first scans.',
    pricing_free_cta: 'Start Free',
    
    pricing_premium_badge: 'Coming soon',
    pricing_premium_title: 'Premium – coming soon',
    pricing_premium_feat1: 'Planned unlimited ForRealScan analyses without daily limit.',
    pricing_premium_feat2: 'Planned ad-free experience.',
    pricing_premium_feat3: 'Planned extended scan history and collection.',
    pricing_premium_feat4: 'Planned priority processing.',
    pricing_premium_feat5: '',
    pricing_premium_cta: 'Notify me when Premium launches',
    pricing_premium_coming_soon_title: 'Premium in Preparation',
    pricing_premium_coming_soon_message: 'Premium is not available yet. We will inform you as soon as it launches.',
    
    // FAQ
    faq_title: 'Frequently Asked Questions',
    faq_q1: 'Is ForRealScan free?',
    faq_a1: 'Yes! The ForRealScan-Hybrid scan is free to use up to 5 times per day. Premium offers unlimited scans and more features.',
    faq_q2: 'How reliable are the assessments?',
    faq_a2: 'ForRealScan provides you with well-founded probabilities and technical indicators. In many tests, AI images can be recognized very reliably – but there is never a 100% guarantee. That\'s why we always show you uncertainty ranges and explain why a result turns out the way it does, so you can better evaluate it.',
    faq_q3: 'Are there different scan modes?',
    faq_a3: 'Previously there were two modes, today ForRealScan uses a Hybrid scan that combines image analysis and forensics – you don\'t have to choose anything. The Hybrid scan automatically delivers the best available assessment.',
    faq_q4: 'Does it work on all devices?',
    faq_a4: 'Yes! ForRealScan is fully responsive and works on desktop, tablet, and smartphone.',
    faq_q5: 'Why are there ads in free mode?',
    faq_a5: 'Ads allow us to offer the free mode at no cost. Premium users get an ad-free experience.',
    faq_q6: 'Can I use ForRealScan commercially?',
    faq_a6: 'Yes! With a Premium plan, you can use ForRealScan unlimited for commercial purposes.',
    faq_q7: 'Do you store my images?',
    faq_a7: 'No. Your images are only processed for analysis and not permanently stored. Privacy is our top priority.',
    faq_q8: 'What image formats are supported?',
    faq_a8: 'We support JPG, PNG, WEBP and most common image formats up to 20MB.',
    
    // Footer
    footer_imprint: 'Imprint',
    footer_privacy: 'Privacy',
    footer_contact: 'Contact',
    footer_copyright: '© {year} ForRealScan. All rights reserved.',
    
    // Veritas & Robo Section
    veritas_robo_label: 'The minds behind your scan',
    veritas_robo_title: 'Meet Veritas & Robo',
    veritas_robo_subtitle: 'Two perspectives on every image: Veritas focuses on the natural overall picture, Robo on technical pixel patterns. Together they explain how the result came about – understandably and without technical jargon.',
    
    veritas_name: 'Veritas',
    veritas_subtitle: 'the Nature View',
    veritas_description: 'Focuses on whether an image feels like a real photograph.',
    veritas_bullet1: 'Light, shadows and reflections appear natural.',
    veritas_bullet2: 'Details like skin, hair and background have depth.',
    veritas_bullet3: 'Appreciates small imperfections typical of real photos.',
    
    robo_name: 'Robo',
    robo_subtitle: 'the Logic View',
    robo_description: 'Analyzes patterns, pixels and technical traces of AI images.',
    robo_bullet1: 'Detects conspicuous pixel patterns and compression artifacts.',
    robo_bullet2: 'Watches for excessive perfection and repetitions.',
    robo_bullet3: 'Spots inconsistencies typical of AI-generated images.',
    
    veritas_robo_explanation: 'Veritas stands for the "Nature View": light, shadows, depth and the overall feeling of an image. Robo takes the "Logic View": pixels, patterns and typical traces of AI generation. Both look at the same image – but from two directions – and then meet in a common assessment.',
    veritas_robo_help_title: 'How they help you:',
    veritas_robo_help_step1: '1. Two Perspectives – Veritas checks the image feeling, Robo the technical details.',
    veritas_robo_help_step2: '2. Clues for "real" or "AI" – Both look for typical traces that speak for or against AI.',
    veritas_robo_help_step3: '3. Explanation in Plain Language – From the clues comes a calm, neutral explanation that you understand without prior knowledge.',
    veritas_robo_disclaimer: 'No model names, no provider advertising – just an honest assessment you can understand.',
    veritas_robo_closing: 'Veritas and Robo look at every image from two directions – in the end you get a joint, balanced assessment per ForRealScan-Hybrid scan.',
  },
  
  it: {
    // Header
    nav_start: 'Inizio',
    nav_features: 'Funzioni',
    nav_scan: 'Scan',
    nav_veritas_robo: 'Veritas & Robo',
    nav_game: 'Gioco',
    nav_pricing: 'Prezzi',
    nav_faq: 'FAQ',
    cta_app: 'Avvia App',
    language_label: 'Lingua',
    
    // Hero
    hero_title: 'Riconosci quanta IA c\'è nelle tue immagini',
    hero_subtitle: 'Carica la tua immagine e ottieni un valore percentuale con ForRealScan-Hybrid – con indicatori IA, zone di incertezza e dettagli tecnici per valutare meglio ciò che è reale.',
    hero_cta_primary: 'Verifica Ora',
    hero_cta_secondary: 'Vedi Esempi',
    hero_microcopy: 'Prova gratuita, nessuna registrazione richiesta.',
    
    // How it works
    how_title: 'Come Funziona ForRealScan',
    how_step1_title: 'Probabilità invece di giudizi duri',
    how_step1_text: 'ForRealScan-Hybrid ti mostra una probabilità stimata se è coinvolta la generazione IA o un\'editing pesante. Si tratta di suggerimenti fondati – non giudizi finali.',
    how_step2_title: 'Spiegazioni reali invece di sole percentuali',
    how_step2_text: 'Con Hybrid scan, ottieni spiegazioni comprensibili: Quali parti di immagine o testo sembrano più naturali, quali sono più tipiche dell\'IA e perché.',
    how_step3_title: 'Le zone di incertezza sono chiaramente marcate',
    how_step3_text: 'Se un risultato è incerto – ad esempio con immagini difficili – ForRealScan-Hybrid lo indica chiaramente invece di fingere certezza.',
    
    // Story Check & Text
    story_title: 'Controlla immagini, testi e storia nell\'interazione',
    story_text_title: 'Valuta meglio i testi per il contenuto IA',
    story_text_desc: 'ForRealScan ti aiuta a valutare meglio i testi più lunghi: Quali passaggi suonano molto generici o uniformi, dove si mostra la scrittura personale? I passaggi cospicui possono essere contrassegnati e spiegati brevemente – sempre con la chiara nota che si tratta di valutazioni e probabilità.',
    story_check_title: 'Story-Check per screenshot e post',
    story_check_desc: 'Quando immagine e testo si uniscono – ad esempio in un post sui social media – ForRealScan può verificare se immagine, descrizione e affermazione corrispondono approssimativamente. Questo ti aiuta a riconoscere più velocemente se una storia drammatica sembra davvero plausibile o più come uno scenario fantastico IA.',
    
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
    
    // Scan
    scan_title: 'Un Scan – Massima Chiarezza.',
    scan_hybrid_title: 'ForRealScan (Hybrid-Scan)',
    scan_hybrid_desc: 'Analisi combinata di immagini e forensi per la tua immagine.',
    scan_hybrid_feat1: 'Stima la probabilità IA della tua immagine (0–100%).',
    scan_hybrid_feat2: 'Utilizza segnali forensi aggiuntivi per manipolazione e ritocco.',
    scan_hybrid_feat3: 'Fornisce risultato chiaro: autentico, IA o incerto – con breve spiegazione.',
    scan_hybrid_feat4: 'Controlla fino a 5 immagini al giorno con ForRealScan.',
    scan_limit_label: 'Limite giornaliero: 0/5',
    
    // Examples
    examples_title: 'Riesci a Vedere la Differenza?',
    examples_subtitle: 'Le immagini generate dall\'IA diventano sempre più realistiche, ma ForRealScan ti aiuta a vedere la differenza.',
    examples_real_label: 'Foto Reale',
    examples_ai_label: 'Generata da IA',
    examples_veritas_comment: 'Ombre naturali e riflessi di luce – chiaramente reale.',
    examples_robo_comment: 'Pattern di pixel e artefatti indicano generazione IA.',
    
    // Mini Game
    game_title: 'Vedi la Differenza?',
    game_subtitle: 'Testa il tuo occhio – ForRealScan ti mostrerà la soluzione dopo.',
    game_cta: 'Inizia il Gioco',
    
    // Use Cases
    cases_title: 'Per Chi è ForRealScan?',
    case1_title: 'Influencer & Creator',
    case1_text: 'Proteggi la tua autenticità e dimostra la genuinità dei tuoi contenuti.',
    case1_detail1: 'Mostra alla tua community con un risultato ForRealScan-Hybrid che le tue foto sono reali – anche se ritocchi leggermente.',
    case1_detail2: 'Confronta foto reali con immagini IA per scegliere il tuo stile di immagine più consapevolmente.',
    case1_detail3: 'Controlla i motivi della campagna con Hybrid scan prima di condividerli con marchi o agenzie.',
    case2_title: 'Giornalisti & Fact Checker',
    case2_text: 'Verifica le immagini rapidamente e in modo trasparente per possibili manipolazioni.',
    case2_detail1: 'Scansiona foto stampa con Hybrid scan prima di usarle in articoli.',
    case2_detail2: 'Usa lo Story-Check per vedere se immagine e testo corrispondono approssimativamente.',
    case2_detail3: 'Documenta la tua revisione con un breve risultato ForRealScan-Hybrid per i tuoi lettori.',
    case3_title: 'Dating & Social',
    case3_text: 'Riconosci le foto profilo sospette e la messa in scena irrealistica in anticipo.',
    case3_detail1: 'Controlla le foto profilo con Hybrid scan prima di fidarti di qualcuno.',
    case3_detail2: 'Riconosci selfie fortemente ritoccati o generati da IA che trasmettono un\'immagine falsa.',
    case3_detail3: 'Scansiona screenshot di post virali per valutarli meglio prima di condividerli.',
    case4_title: 'Fotografia & Marketing',
    case4_text: 'Rendi visibile l\'autenticità delle tue risorse visive.',
    case4_detail1: 'Mostra ai clienti quali immagini sono foto reali e dove è coinvolta l\'editing digitale.',
    case4_detail2: 'Scansiona foto di prodotti e motivi di campagna con Hybrid scan prima della pubblicazione.',
    case4_detail3: 'Usa i risultati ForRealScan-Hybrid come punto di forza della trasparenza in pitch e presentazioni.',
    
    // Pricing
    pricing_title: 'Scegli il Tuo Piano',
    pricing_free_title: 'Gratuito',
    pricing_free_price: 'Gratuito',
    pricing_free_feat1: 'Controlla fino a 5 immagini al giorno con ForRealScan.',
    pricing_free_feat2: 'Pubblicità pianificata supporta la versione gratuita.',
    pricing_free_feat3: 'Nessun account necessario per le prime scansioni.',
    pricing_free_cta: 'Inizia Gratis',
    
    pricing_premium_badge: 'Prossimamente',
    pricing_premium_title: 'Premium – prossimamente',
    pricing_premium_feat1: 'Analisi ForRealScan illimitate previste senza limite giornaliero.',
    pricing_premium_feat2: 'Esperienza senza pubblicità pianificata.',
    pricing_premium_feat3: 'Cronologia e raccolta estesa pianificate.',
    pricing_premium_feat4: 'Elaborazione prioritaria pianificata.',
    pricing_premium_feat5: '',
    pricing_premium_cta: 'Avvisami quando Premium sarà disponibile',
    pricing_premium_coming_soon_title: 'Premium in Preparazione',
    pricing_premium_coming_soon_message: 'Premium non è ancora disponibile. Ti informeremo non appena sarà lanciato.',
    
    // FAQ
    faq_title: 'Domande Frequenti',
    faq_q1: 'ForRealScan è gratuito?',
    faq_a1: 'Sì! ForRealScan-Hybrid scan è gratuito fino a 5 volte al giorno. Premium offre scansioni illimitate e più funzionalità.',
    faq_q2: 'Quanto sono affidabili le valutazioni?',
    faq_a2: 'ForRealScan fornisce probabilità ben fondate e indicatori tecnici. In molti test, le immagini IA possono essere riconosciute in modo molto affidabile – ma non c\'è mai una garanzia del 100%. Per questo motivo, ti mostriamo sempre anche intervalli di incertezza e spieghiamo perché un risultato è quello che è, in modo che tu possa valutarlo meglio.',
    faq_q3: 'Ci sono diverse modalità di scansione?',
    faq_a3: 'In precedenza c\'erano due modalità, oggi ForRealScan utilizza un Hybrid scan che combina analisi di immagini e forensi – non devi scegliere nulla. L\'Hybrid scan fornisce automaticamente la migliore valutazione disponibile.',
    faq_q4: 'Funziona su tutti i dispositivi?',
    faq_a4: 'Sì! ForRealScan è completamente responsive e funziona su desktop, tablet e smartphone.',
    faq_q5: 'Perché ci sono annunci in modalità gratuita?',
    faq_a5: 'Gli annunci ci permettono di offrire la modalità gratuita senza costi. Gli utenti Premium hanno un\'esperienza senza pubblicità.',
    faq_q6: 'Posso usare ForRealScan commercialmente?',
    faq_a6: 'Sì! Con un piano Premium, puoi usare ForRealScan illimitatamente per scopi commerciali.',
    faq_q7: 'Conservate le mie immagini?',
    faq_a7: 'No. Le tue immagini vengono elaborate solo per l\'analisi e non vengono conservate permanentemente. La privacy è la nostra massima priorità.',
    faq_q8: 'Quali formati immagine sono supportati?',
    faq_a8: 'Supportiamo JPG, PNG, WEBP e la maggior parte dei formati immagine comuni fino a 20MB.',
    
    // Footer
    footer_imprint: 'Impressum',
    footer_privacy: 'Privacy',
    footer_contact: 'Contatto',
    footer_copyright: '© {year} ForRealScan. Tutti i diritti riservati.',
    
    // Veritas & Robo Section
    veritas_robo_label: 'Le menti dietro la tua scansione',
    veritas_robo_title: 'Incontra Veritas & Robo',
    veritas_robo_subtitle: 'Due prospettive su ogni immagine: Veritas si concentra sull\'immagine naturale complessiva, Robo sui modelli tecnici di pixel. Insieme spiegano come è emerso il risultato – comprensibilmente e senza gergo tecnico.',
    
    veritas_name: 'Veritas',
    veritas_subtitle: 'la Vista Naturale',
    veritas_description: 'Si concentra sul fatto che un\'immagine sembri una fotografia reale.',
    veritas_bullet1: 'Luce, ombre e riflessi appaiono naturali.',
    veritas_bullet2: 'Dettagli come pelle, capelli e sfondo hanno profondità.',
    veritas_bullet3: 'Apprezza piccole imperfezioni tipiche delle foto reali.',
    
    robo_name: 'Robo',
    robo_subtitle: 'la Vista Logica',
    robo_description: 'Analizza modelli, pixel e tracce tecniche delle immagini IA.',
    robo_bullet1: 'Rileva modelli di pixel cospicui e artefatti di compressione.',
    robo_bullet2: 'Osserva la perfezione eccessiva e le ripetizioni.',
    robo_bullet3: 'Individua incoerenze tipiche delle immagini generate da IA.',
    
    veritas_robo_explanation: 'Veritas rappresenta la "Vista Naturale": luce, ombre, profondità e la sensazione complessiva di un\'immagine. Robo assume la "Vista Logica": pixel, modelli e tracce tipiche della generazione IA. Entrambi guardano la stessa immagine – ma da due direzioni – e poi si incontrano in una valutazione comune.',
    veritas_robo_help_title: 'Come ti aiutano:',
    veritas_robo_help_step1: '1. Due Prospettive – Veritas controlla la sensazione dell\'immagine, Robo i dettagli tecnici.',
    veritas_robo_help_step2: '2. Indizi per "reale" o "IA" – Entrambi cercano tracce tipiche che parlano a favore o contro l\'IA.',
    veritas_robo_help_step3: '3. Spiegazione in Linguaggio Chiaro – Dagli indizi emerge una spiegazione calma e neutrale che comprendi senza conoscenze preliminari.',
    veritas_robo_disclaimer: 'Nessun nome di modello, nessuna pubblicità di provider – solo una valutazione onesta che puoi comprendere.',
    veritas_robo_closing: 'Veritas e Robo guardano ogni immagine da due direzioni – alla fine ottieni una valutazione congiunta ed equilibrata per ForRealScan-Hybrid scan.',
  },
  
  es: {
    // Header
    nav_start: 'Inicio',
    nav_features: 'Funciones',
    nav_scan: 'Scan',
    nav_veritas_robo: 'Veritas & Robo',
    nav_game: 'Juego',
    nav_pricing: 'Precios',
    nav_faq: 'FAQ',
    cta_app: 'Iniciar App',
    language_label: 'Idioma',
    
    // Hero
    hero_title: 'Descubre Cuánta IA Hay en Tus Imágenes',
    hero_subtitle: 'Sube tu imagen y obtén un valor porcentual con ForRealScan-Hybrid – con indicadores de IA, zonas de incertidumbre y detalles técnicos para evaluar mejor lo que es real.',
    hero_cta_primary: 'Verificar Ahora',
    hero_cta_secondary: 'Ver Ejemplos',
    hero_microcopy: 'Prueba gratuita, sin necesidad de registro.',
    
    // How it works
    how_title: 'Cómo Funciona ForRealScan',
    how_step1_title: 'Probabilidades en lugar de juicios duros',
    how_step1_text: 'ForRealScan-Hybrid te muestra una probabilidad estimada de si está involucrada la generación de IA o edición pesada. Se trata de pistas bien fundadas – no juicios finales.',
    how_step2_title: 'Explicaciones reales en lugar de solo porcentajes',
    how_step2_text: 'Con Hybrid scan, obtienes explicaciones comprensibles: ¿Qué partes de imagen o texto parecen más naturales, cuáles son más típicas de IA y por qué.',
    how_step3_title: 'Las zonas de incertidumbre se marcan claramente',
    how_step3_text: 'Si un resultado es incierto – por ejemplo con imágenes difíciles – ForRealScan-Hybrid lo señala claramente en lugar de fingir certeza.',
    
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
    
    // Scan
    scan_title: 'Un Scan – Máxima Claridad.',
    scan_hybrid_title: 'ForRealScan (Hybrid-Scan)',
    scan_hybrid_desc: 'Análisis combinado de imagen y forense para tu imagen.',
    scan_hybrid_feat1: 'Estima probabilidad IA de tu imagen (0–100%).',
    scan_hybrid_feat2: 'Usa señales forenses adicionales para manipulación y retoque.',
    scan_hybrid_feat3: 'Proporciona resultado claro: auténtico, IA o incierto – con breve explicación.',
    scan_hybrid_feat4: 'Verifica hasta 5 imágenes por día con ForRealScan.',
    scan_limit_label: 'Límite diario: 0/5',
    
    // Examples
    examples_title: '¿Puedes Ver la Diferencia?',
    examples_subtitle: 'Las imágenes generadas por IA son cada vez más realistas, pero ForRealScan te ayuda a ver la diferencia.',
    examples_real_label: 'Foto Real',
    examples_ai_label: 'Generada por IA',
    examples_veritas_comment: 'Sombras naturales y reflejos de luz – claramente real.',
    examples_robo_comment: 'Patrones de píxeles y artefactos indican generación por IA.',
    
    // Mini Game
    game_title: '¿Ves la Diferencia?',
    game_subtitle: 'Pon a prueba tu ojo – ForRealScan te mostrará la solución después.',
    game_cta: 'Iniciar Juego',
    
    // Use Cases
    cases_title: '¿Para Quién es ForRealScan?',
    case1_title: 'Influencers & Creadores',
    case1_text: 'Protege tu autenticidad y demuestra la genuinidad de tu contenido.',
    case1_detail1: 'Muestra a tu comunidad con un resultado ForRealScan-Hybrid que tus fotos son reales – incluso si retoques ligeramente.',
    case1_detail2: 'Compara fotos reales con imágenes IA para elegir tu propio estilo de imagen más conscientemente.',
    case1_detail3: 'Verifica motivos de campaña con Hybrid scan antes de compartirlos con marcas o agencias.',
    case2_title: 'Periodistas & Verificadores',
    case2_text: 'Verifica imágenes rápida y transparentemente para posible manipulación.',
    case2_detail1: 'Escanea fotos de prensa con Hybrid scan antes de usarlas en artículos.',
    case2_detail2: 'Usa el Story-Check para ver si imagen y texto coinciden aproximadamente.',
    case2_detail3: 'Documenta tu revisión con un breve resultado ForRealScan-Hybrid para tus lectores.',
    case3_title: 'Citas & Social',
    case3_text: 'Reconoce fotos de perfil sospechosas y escenificación irreal temprano.',
    case3_detail1: 'Verifica fotos de perfil con Hybrid scan antes de confiar en alguien.',
    case3_detail2: 'Reconoce selfies fuertemente retocados o generados por IA que transmiten una imagen falsa.',
    case3_detail3: 'Escanea capturas de pantalla de publicaciones virales para evaluarlas mejor antes de compartirlas.',
    case4_title: 'Fotografía & Marketing',
    case4_text: 'Haz visible la autenticidad de tus activos visuales.',
    case4_detail1: 'Muestra a los clientes qué imágenes son fotos reales y dónde está involucrada la edición digital.',
    case4_detail2: 'Escanea fotos de productos y motivos de campaña con Hybrid scan antes de la publicación.',
    case4_detail3: 'Usa los resultados ForRealScan-Hybrid como un plus de transparencia en presentaciones y propuestas.',
    
    // Pricing
    pricing_title: 'Elige Tu Plan',
    pricing_free_title: 'Gratis',
    pricing_free_price: 'Gratis',
    pricing_free_feat1: 'Verifica hasta 5 imágenes por día con ForRealScan.',
    pricing_free_feat2: 'Anuncios planificados soportan la versión gratuita.',
    pricing_free_feat3: 'No se necesita cuenta para los primeros escaneos.',
    pricing_free_cta: 'Comenzar Gratis',
    
    pricing_premium_badge: 'Próximamente',
    pricing_premium_title: 'Premium – próximamente',
    pricing_premium_feat1: 'Análisis ForRealScan ilimitados planificados sin límite diario.',
    pricing_premium_feat2: 'Experiencia sin anuncios planificada.',
    pricing_premium_feat3: 'Historial extendido y colección planificados.',
    pricing_premium_feat4: 'Procesamiento prioritario planificado.',
    pricing_premium_feat5: '',
    pricing_premium_cta: 'Avísame cuando Premium esté disponible',
    pricing_premium_coming_soon_title: 'Premium en Preparación',
    pricing_premium_coming_soon_message: 'Premium aún no está disponible. Te informaremos tan pronto como se lance.',
    
    // FAQ
    faq_title: 'Preguntas Frecuentes',
    faq_q1: '¿ForRealScan es gratis?',
    faq_a1: '¡Sí! ForRealScan-Hybrid scan es gratis hasta 5 veces por día. Premium ofrece escaneos ilimitados y más funciones.',
    faq_q2: '¿Qué tan confiables son las evaluaciones?',
    faq_a2: 'ForRealScan proporciona probabilidades bien fundamentadas e indicadores técnicos. En muchas pruebas, las imágenes de IA se pueden reconocer de manera muy confiable, pero nunca hay una garantía del 100%. Por eso siempre te mostramos rangos de incertidumbre y explicamos por qué un resultado es como es, para que puedas evaluarlo mejor.',
    faq_q3: '¿Hay diferentes modos de escaneo?',
    faq_a3: 'Anteriormente había dos modos, hoy ForRealScan utiliza un Hybrid scan que combina análisis de imagen y forense – no tienes que elegir nada. El Hybrid scan proporciona automáticamente la mejor evaluación disponible.',
    faq_q4: '¿Funciona en todos los dispositivos?',
    faq_a4: '¡Sí! ForRealScan es totalmente responsive y funciona en escritorio, tableta y teléfono inteligente.',
    faq_q5: '¿Por qué hay anuncios en modo gratuito?',
    faq_a5: 'Los anuncios nos permiten ofrecer el modo gratuito sin costo. Los usuarios Premium obtienen una experiencia sin anuncios.',
    faq_q6: '¿Puedo usar ForRealScan comercialmente?',
    faq_a6: '¡Sí! Con un plan Premium, puedes usar ForRealScan ilimitadamente para propósitos comerciales.',
    faq_q7: '¿Almacenan mis imágenes?',
    faq_a7: 'No. Tus imágenes solo se procesan para análisis y no se almacenan permanentemente. La privacidad es nuestra máxima prioridad.',
    faq_q8: '¿Qué formatos de imagen son compatibles?',
    faq_a8: 'Admitimos JPG, PNG, WEBP y la mayoría de los formatos de imagen comunes hasta 20MB.',
    
    // Footer
    footer_imprint: 'Impressum',
    footer_privacy: 'Privacidad',
    footer_contact: 'Contacto',
    footer_copyright: '© {year} ForRealScan. Todos los derechos reservados.',
    
    // Veritas & Robo Section
    veritas_robo_label: 'Las mentes detrás de tu escaneo',
    veritas_robo_title: 'Conoce a Veritas & Robo',
    veritas_robo_subtitle: 'Dos perspectivas sobre cada imagen: Veritas se centra en la imagen general natural, Robo en patrones técnicos de píxeles. Juntos explican cómo surgió el resultado – comprensiblemente y sin jerga técnica.',
    
    veritas_name: 'Veritas',
    veritas_subtitle: 'la Vista Natural',
    veritas_description: 'Se centra en si una imagen se siente como una fotografía real.',
    veritas_bullet1: 'Luz, sombras y reflejos aparecen naturales.',
    veritas_bullet2: 'Detalles como piel, cabello y fondo tienen profundidad.',
    veritas_bullet3: 'Aprecia pequeñas imperfecciones típicas de las fotos reales.',
    
    robo_name: 'Robo',
    robo_subtitle: 'la Vista Lógica',
    robo_description: 'Analiza patrones, píxeles y rastros técnicos de imágenes de IA.',
    robo_bullet1: 'Detecta patrones de píxeles conspicuos y artefactos de compresión.',
    robo_bullet2: 'Observa la perfección excesiva y las repeticiones.',
    robo_bullet3: 'Detecta inconsistencias típicas de imágenes generadas por IA.',
    
    veritas_robo_explanation: 'Veritas representa la "Vista Natural": luz, sombras, profundidad y la sensación general de una imagen. Robo asume la "Vista Lógica": píxeles, patrones y rastros típicos de generación de IA. Ambos miran la misma imagen – pero desde dos direcciones – y luego se encuentran en una evaluación común.',
    veritas_robo_help_title: 'Cómo te ayudan:',
    veritas_robo_help_step1: '1. Dos Perspectivas – Veritas verifica la sensación de la imagen, Robo los detalles técnicos.',
    veritas_robo_help_step2: '2. Pistas para "real" o "IA" – Ambos buscan rastros típicos que hablan a favor o en contra de la IA.',
    veritas_robo_help_step3: '3. Explicación en Lenguaje Claro – De las pistas surge una explicación calmada y neutral que entiendes sin conocimientos previos.',
    veritas_robo_disclaimer: 'Sin nombres de modelos, sin publicidad de proveedores – solo una evaluación honesta que puedes entender.',
    veritas_robo_closing: 'Veritas y Robo miran cada imagen desde dos direcciones – al final obtienes una evaluación conjunta y equilibrada por ForRealScan-Hybrid scan.',
  },
};