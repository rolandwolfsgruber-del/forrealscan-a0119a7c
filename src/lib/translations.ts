export type Language = 'de' | 'en' | 'it' | 'es' | 'fr';

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
  
  // ShareCards (Old - kept for compatibility)
  share_title: string;
  share_text: string;

  // ShareCards Visual Showcase (New)
  sharecard_title: string;
  sharecard_subtitle: string;
  sharecard_feature1: string;
  sharecard_feature2: string;
  sharecard_feature3: string;

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

  // Examples Page (dedicated page)
  examples_page_title: string;
  examples_page_subtitle: string;
  examples_page_disclaimer: string;
  examples_page_back: string;
  examples_page_cta_title: string;
  examples_page_cta_text: string;
  examples_page_cta_button: string;
  examples_page_context_title: string;
  examples_page_context_p1: string;
  examples_page_context_p2: string;
  examples_page_context_p3: string;
  examples_page_methodology_link: string;
  examples_page_veritas_says: string;
  examples_page_robo_says: string;
  examples_page_context_label: string;

  // Examples - Confidence labels
  confidence_high: string;
  confidence_medium: string;
  confidence_low: string;
  confidence_label: string;

  // Examples - Real photo specific comments
  examples_real_veritas: string;
  examples_real_robo: string;
  examples_real_explanation: string;

  // Examples - AI photo comments
  examples_ai1_title: string;
  examples_ai1_veritas: string;
  examples_ai1_robo: string;
  examples_ai1_explanation: string;

  examples_ai2_title: string;
  examples_ai2_veritas: string;
  examples_ai2_robo: string;
  examples_ai2_explanation: string;

  // Common
  common_back: string;

  // Methodology Page
  methodology_title: string;
  methodology_subtitle: string;
  methodology_cta_scan: string;
  methodology_cta_examples: string;
  methodology_what_title: string;
  methodology_what_p1: string;
  methodology_what_p2: string;
  methodology_how_title: string;
  methodology_how_intro: string;
  methodology_veritas_title: string;
  methodology_veritas_text: string;
  methodology_robo_title: string;
  methodology_robo_text: string;
  methodology_how_outro: string;
  methodology_results_title: string;
  methodology_results_low_title: string;
  methodology_results_low_text: string;
  methodology_results_mid_title: string;
  methodology_results_mid_text: string;
  methodology_results_high_title: string;
  methodology_results_high_text: string;
  methodology_results_outro: string;
  methodology_limits_title: string;
  methodology_limits_intro: string;
  methodology_limits_compressed: string;
  methodology_limits_screenshots: string;
  methodology_limits_hybrid: string;
  methodology_limits_new_models: string;
  methodology_limits_professional: string;
  methodology_limits_outro: string;
  methodology_responsible_title: string;
  methodology_responsible_intro: string;
  methodology_responsible_point1: string;
  methodology_responsible_point2: string;
  methodology_responsible_point3: string;
  methodology_responsible_point4: string;
  methodology_responsible_outro: string;
  methodology_privacy_title: string;
  methodology_privacy_intro: string;
  methodology_privacy_point1: string;
  methodology_privacy_point2: string;
  methodology_privacy_point3: string;
  methodology_privacy_point4: string;
  methodology_privacy_link: string;
  methodology_summary_title: string;
  methodology_summary_text: string;

  // Privacy Page
  privacy_title: string;
  privacy_last_updated: string;
  privacy_intro: string;
  privacy_controller_title: string;
  privacy_controller_provider: string;
  privacy_controller_location: string;
  privacy_controller_email: string;
  privacy_data_title: string;
  privacy_data_images: string;
  privacy_data_technical: string;
  privacy_data_contact: string;
  privacy_purpose_title: string;
  privacy_purpose_analysis: string;
  privacy_purpose_improvement: string;
  privacy_purpose_communication: string;
  privacy_purpose_legal: string;
  privacy_cookies_title: string;
  privacy_cookies_intro: string;
  privacy_cookies_essential: string;
  privacy_cookies_analytics: string;
  privacy_cookies_advertising: string;
  privacy_cookies_manage: string;
  privacy_sharing_title: string;
  privacy_sharing_intro: string;
  privacy_sharing_ai: string;
  privacy_sharing_analytics: string;
  privacy_sharing_advertising: string;
  privacy_sharing_legal: string;
  privacy_rights_title: string;
  privacy_rights_intro: string;
  privacy_rights_access: string;
  privacy_rights_rectification: string;
  privacy_rights_erasure: string;
  privacy_rights_portability: string;
  privacy_rights_object: string;
  privacy_rights_withdraw: string;
  privacy_rights_exercise: string;
  privacy_retention_title: string;
  privacy_retention_text: string;
  privacy_security_title: string;
  privacy_security_text: string;
  privacy_international_title: string;
  privacy_international_text: string;
  privacy_children_title: string;
  privacy_children_text: string;
  privacy_changes_title: string;
  privacy_changes_text: string;
  privacy_contact_title: string;
  privacy_contact_text: string;

  // Imprint Page
  imprint_title: string;
  imprint_info_title: string;
  imprint_provider: string;
  imprint_location: string;
  imprint_email: string;
  imprint_responsible_title: string;
  imprint_dispute_title: string;
  imprint_dispute_text: string;
  imprint_disclaimer_title: string;
  imprint_liability_content_title: string;
  imprint_liability_content_text: string;
  imprint_liability_links_title: string;
  imprint_liability_links_text: string;
  imprint_copyright_title: string;
  imprint_copyright_text: string;
  imprint_contact_title: string;
  imprint_contact_text: string;

  // Contact Page
  contact_title: string;
  contact_subtitle: string;
  contact_name: string;
  contact_name_placeholder: string;
  contact_email: string;
  contact_email_placeholder: string;
  contact_message: string;
  contact_message_placeholder: string;
  contact_send: string;
  contact_sending: string;
  contact_success_title: string;
  contact_success_message: string;
  contact_direct: string;

  // Game Page
  game_page_title: string;
  game_page_subtitle: string;
  game_feature1_title: string;
  game_feature1_text: string;
  game_feature2_title: string;
  game_feature2_text: string;
  game_feature3_title: string;
  game_feature3_text: string;
  game_start: string;
  game_why_title: string;
  game_why_p1: string;
  game_why_p2: string;

  // NotFound Page
  notfound_title: string;
  notfound_message: string;
  notfound_home: string;

  // ComingSoon Page
  comingsoon_redirect: string;
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
    cta_app: 'Bild jetzt prüfen',
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
    
    // ShareCards (Old - kept for compatibility)
    share_title: 'Ergebnisse teilen, wo sie gebraucht werden',
    share_text: 'Scans können als kompakte Ergebnis-Karten geteilt werden, zum Beispiel in Chats oder unter Social-Media-Posts. So machst du deine Einschätzung für andere nachvollziehbar – inklusive Hinweis auf Unsicherheiten.',

    // ShareCards Visual Showcase (New)
    sharecard_title: 'Dein Ergebnis auf einen Blick',
    sharecard_subtitle: 'Klare Analysen als kompakte Karte – bereit zum Teilen oder Speichern.',
    sharecard_feature1: 'Sofort verständlicher Score (0–100%)',
    sharecard_feature2: 'Detaillierte visuelle Beweisführung',
    sharecard_feature3: 'Optimiert für Social Media & Chats',

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
    examples_title: 'Täuschend echt: Der direkte Vergleich',
    examples_subtitle: 'KI-generierte Bilder werden immer perfekter. ForRealScan macht die Details sichtbar.',
    examples_real_label: 'Echtes Foto',
    examples_ai_label: 'KI-generiert',
    examples_veritas_comment: 'Natürliche Schatten und Lichtreflexionen – eindeutig echt.',
    examples_robo_comment: 'Pixel-Muster und Artefakte weisen auf KI-Generierung hin.',
    
    // Mini Game
    game_title: 'Teste dein Auge',
    game_subtitle: 'Erkennst du Fake oder Realität? Mach jetzt den Selbsttest und finde es heraus.',
    game_cta: 'Quiz starten',
    
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

    // Examples Page (dedicated page)
    examples_page_title: 'Beispiel-Analysen',
    examples_page_subtitle: 'So sehen ForRealScan-Ergebnisse aus – mit Erklärungen, wie du sie interpretieren kannst.',
    examples_page_disclaimer: 'Hinweis: Das sind Demo-Beispiele (statisch), die zeigen, wie ForRealScan-Ergebnisse aussehen. Für eine echte Analyse lade bitte ein eigenes Bild hoch.',
    examples_page_back: 'Zurück',
    examples_page_cta_title: 'Eigene Bilder prüfen?',
    examples_page_cta_text: 'Teste ForRealScan kostenlos – bis zu 5 Analysen pro Tag, ohne Anmeldung.',
    examples_page_cta_button: 'Jetzt Bild analysieren',
    examples_page_context_title: 'Wie du die Ergebnisse nutzen solltest',
    examples_page_context_p1: 'Die Beispiele oben zeigen, dass ForRealScan sowohl echte Fotos als auch KI-generierte Bilder mit guter Genauigkeit einordnen kann. Trotzdem gilt: Die Ergebnisse sind Orientierungshilfen, keine absoluten Beweise.',
    examples_page_context_p2: 'Bei Bildern mit mittleren Werten (30-70%) ist besondere Vorsicht geboten. Diese können leicht bearbeitete echte Fotos, teilweise KI-generierte Bilder oder einfach schwer einzuordnende Aufnahmen sein. In solchen Fällen empfehlen wir, weitere Faktoren zu berücksichtigen: Woher stammt das Bild? Wer hat es gepostet? Gibt es andere Versionen?',
    examples_page_context_p3: 'Mehr über unsere Methodik erfährst du auf der',
    examples_page_methodology_link: 'Methodik-Seite',
    examples_page_veritas_says: 'Veritas sagt:',
    examples_page_robo_says: 'Robo sagt:',
    examples_page_context_label: 'Einordnung',

    // Examples - Confidence labels
    confidence_high: 'hoch',
    confidence_medium: 'mittel',
    confidence_low: 'niedrig',
    confidence_label: 'Konfidenz',

    // Examples - Real photo specific comments
    examples_real_veritas: 'Natürliche Unregelmäßigkeiten in der Fellstruktur. Plausibles Licht- und Schattenspiel. Organisches Bokeh im Hintergrund.',
    examples_real_robo: 'Keine starken KI-Muster erkannt. Bildrauschen entspricht einer echten Kameraaufnahme. Keine auffälligen Wiederholungsmuster.',
    examples_real_explanation: 'Dieses Bild zeigt typische Merkmale einer authentischen Naturfotografie: Die Fellstruktur weist natürliche Unregelmäßigkeiten auf, das Bokeh im Hintergrund ist organisch, und das Bildrauschen entspricht dem einer echten Kamera.',

    // Examples - AI photo comments
    examples_ai1_title: 'KI-generiertes Eichhörnchen',
    examples_ai1_veritas: 'Das Fell wirkt zu gleichmäßig und „gemalt". Die Augen haben eine unnatürlich perfekte Spiegelung. Der Übergang zum Hintergrund ist zu weich.',
    examples_ai1_robo: 'Typische GAN-Artefakte in den Fellstrukturen erkannt. Pixelmuster deuten auf Stable Diffusion oder ähnliches Modell hin. Auffällige Glättung in Detailbereichen.',
    examples_ai1_explanation: 'Obwohl auf den ersten Blick realistisch, zeigt dieses Bild mehrere KI-typische Merkmale: Das Fell ist zu gleichmäßig texturiert, die Augenspiegelungen sind perfekt symmetrisch, und es fehlen die kleinen Unvollkommenheiten echter Fotos.',

    examples_ai2_title: 'KI-generierter Schmetterling',
    examples_ai2_veritas: 'Die Flügelmuster sind zu perfekt symmetrisch. Die Farben wirken übersättigt und unnatürlich leuchtend. Die Körperstruktur ist anatomisch vereinfacht.',
    examples_ai2_robo: 'Deutliche Wiederholungsmuster in der Flügelstruktur. Hochfrequenzdetails fehlen komplett. Typische Midjourney/DALL-E Signatur in den Farbübergängen.',
    examples_ai2_explanation: 'Dieses Bild zeigt die typischen Kennzeichen einer KI-Generierung: übertriebene Farbsättigung, unnatürlich perfekte Symmetrie, und vereinfachte anatomische Details.',

    // Common
    common_back: 'Zurück',

    // Methodology Page
    methodology_title: 'Methodik & Technologie',
    methodology_subtitle: 'Wie ForRealScan KI-generierte Bilder erkennt – transparent erklärt.',
    methodology_cta_scan: 'Jetzt Scan starten',
    methodology_cta_examples: 'Beispiele ansehen',
    methodology_what_title: 'Was ForRealScan macht',
    methodology_what_p1: 'ForRealScan ist ein Analyse-Tool, das dir hilft, den möglichen KI-Anteil in Bildern einzuschätzen. Der Service kombiniert verschiedene Analysemethoden, um Hinweise darauf zu finden, ob ein Bild mit KI-Technologie generiert oder stark bearbeitet wurde.',
    methodology_what_p2: 'Wichtig zu verstehen: ForRealScan liefert Wahrscheinlichkeiten und fundierte Einschätzungen – keine absoluten Urteile. Die Technologie zur Bilderzeugung entwickelt sich ständig weiter, und kein Erkennungssystem kann eine hundertprozentige Genauigkeit garantieren.',
    methodology_how_title: 'So funktioniert der Scan',
    methodology_how_intro: 'Der ForRealScan-Hybrid kombiniert zwei Analyseperspektiven, symbolisiert durch unsere Maskottchen Veritas und Robo:',
    methodology_veritas_title: 'Veritas – Der Natur-Blick',
    methodology_veritas_text: 'Veritas analysiert, ob ein Bild die typischen Eigenschaften einer echten Fotografie aufweist: natürliche Lichtverhältnisse, realistische Schatten, organische Texturen bei Haut und Haaren, sowie die kleinen Unvollkommenheiten, die echte Fotos auszeichnen.',
    methodology_robo_title: 'Robo – Der Logik-Blick',
    methodology_robo_text: 'Robo sucht nach technischen Mustern, die für KI-generierte Bilder typisch sind: auffällige Pixelstrukturen, Kompressionsartefakte, übertriebene Perfektion, wiederkehrende Muster und Unstimmigkeiten in Details wie Händen, Zähnen oder Hintergründen.',
    methodology_how_outro: 'Beide Perspektiven fließen in eine gemeinsame Bewertung ein. Das Ergebnis wird als Prozentangabe dargestellt, ergänzt durch eine verständliche Erklärung, welche Faktoren zur Einschätzung geführt haben.',
    methodology_results_title: 'Was die Ergebnisse bedeuten',
    methodology_results_low_title: 'Niedrige KI-Wahrscheinlichkeit (0–30%)',
    methodology_results_low_text: 'Das Bild zeigt überwiegend Merkmale einer authentischen Fotografie. Natürliche Unregelmäßigkeiten und realistische Details sprechen für ein echtes Foto.',
    methodology_results_mid_title: 'Mittlere Unsicherheit (30–70%)',
    methodology_results_mid_text: 'Das Bild enthält sowohl authentische als auch verdächtige Merkmale. Möglich sind leichte Bearbeitung, Filter oder teilweise KI-Unterstützung.',
    methodology_results_high_title: 'Hohe KI-Wahrscheinlichkeit (70–100%)',
    methodology_results_high_text: 'Das Bild zeigt deutliche Anzeichen von KI-Generierung oder starker Manipulation. Typische KI-Muster und technische Artefakte wurden erkannt.',
    methodology_results_outro: 'Jedes Ergebnis wird mit einer kurzen Erklärung versehen, die beschreibt, welche konkreten Merkmale zur Einschätzung geführt haben. So kannst du die Bewertung nachvollziehen und dir ein eigenes Urteil bilden.',
    methodology_limits_title: 'Grenzen & wann es schwierig wird',
    methodology_limits_intro: 'Ehrlichkeit ist uns wichtig. ForRealScan hat – wie jedes Erkennungssystem – Grenzen:',
    methodology_limits_compressed: 'Stark komprimierte Bilder: Bei Bildern, die mehrfach gespeichert oder über Messenger geteilt wurden, gehen wichtige Details verloren.',
    methodology_limits_screenshots: 'Screenshots: Text und Interface-Elemente erschweren die reine Bildanalyse.',
    methodology_limits_hybrid: 'Hybride Bilder: Echte Fotos mit KI-Bearbeitung (z.B. Gesichtsfilter, Hintergrundänderungen) sind besonders schwer einzuordnen.',
    methodology_limits_new_models: 'Neueste KI-Modelle: Die Technologie entwickelt sich rasant. Sehr neue Generierungsmodelle können schwerer erkennbar sein.',
    methodology_limits_professional: 'Professionelle Fotos: Studio-Aufnahmen mit perfekter Ausleuchtung können fälschlicherweise als "zu perfekt" eingestuft werden.',
    methodology_limits_outro: 'Wenn ein Ergebnis unsicher ist, zeigt ForRealScan dies deutlich an. In solchen Fällen solltest du zusätzliche Recherche betreiben, bevor du Schlüsse ziehst.',
    methodology_responsible_title: 'Verantwortungsvoller Umgang',
    methodology_responsible_intro: 'ForRealScan ist ein Hilfsmittel zur Orientierung – kein Beweisinstrument. Die Ergebnisse sollten:',
    methodology_responsible_point1: 'Als Ausgangspunkt für weitere Recherche dienen, nicht als abschließendes Urteil',
    methodology_responsible_point2: 'Nicht allein als Grundlage für Anschuldigungen oder rechtliche Schritte verwendet werden',
    methodology_responsible_point3: 'Im Kontext betrachtet werden: Quelle, Absender und Situation spielen eine Rolle',
    methodology_responsible_point4: 'Mit gesundem Menschenverstand interpretiert werden',
    methodology_responsible_outro: 'Unser Ziel ist es, dir zu helfen, in einer Welt voller manipulierter Bilder bewusstere Entscheidungen zu treffen – nicht, Misstrauen zu säen oder voreilige Schlüsse zu fördern.',
    methodology_privacy_title: 'Datenschutz bei der Analyse',
    methodology_privacy_intro: 'Deine Privatsphäre hat Priorität:',
    methodology_privacy_point1: 'Hochgeladene Bilder werden serverseitig nur zur Analyse verarbeitet und nicht dauerhaft gespeichert',
    methodology_privacy_point2: 'Ergebnisse und Karten können – je nach Nutzung – lokal auf deinem Gerät in der Sammlung gespeichert werden',
    methodology_privacy_point3: 'Die Übertragung erfolgt verschlüsselt (HTTPS/TLS)',
    methodology_privacy_point4: 'Wir verkaufen keine Nutzerdaten',
    methodology_privacy_link: 'Weitere Details findest du in unserer Datenschutzerklärung.',
    methodology_summary_title: 'Zusammenfassung',
    methodology_summary_text: 'ForRealScan analysiert Bilder auf KI-typische Muster und liefert Wahrscheinlichkeiten statt absoluter Urteile. Die Ergebnisse dienen als Orientierung und sollten im Kontext betrachtet werden. Kein Erkennungssystem ist perfekt – ForRealScan zeigt Unsicherheiten transparent an.',

    // Privacy Page
    privacy_title: 'Datenschutzerklärung',
    privacy_last_updated: 'Stand: Dezember 2025',
    privacy_intro: 'ForRealScan verpflichtet sich zum Schutz Ihrer Privatsphäre. Diese Datenschutzerklärung erläutert, wie wir Ihre personenbezogenen Daten in Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO) und anderen anwendbaren Datenschutzgesetzen erheben, verwenden und schützen.',
    privacy_controller_title: '1. Verantwortlicher',
    privacy_controller_provider: 'Diensteanbieter:',
    privacy_controller_location: 'Standort:',
    privacy_controller_email: 'E-Mail:',
    privacy_data_title: '2. Daten, die wir erheben',
    privacy_data_images: 'Hochgeladene Bilder: Wenn Sie unseren KI-Analysedienst nutzen, laden Sie Bilder zur Verarbeitung hoch. Diese Bilder werden in Echtzeit verarbeitet und nicht dauerhaft auf unseren Servern gespeichert, es sei denn, Sie speichern Ergebnisse explizit.',
    privacy_data_technical: 'Technische Daten: Wir erfassen automatisch technische Informationen wie IP-Adresse, Browsertyp, Geräteinformationen und Zugriffszeiten für Sicherheits- und Analysezwecke.',
    privacy_data_contact: 'Kontaktinformationen: Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, erfassen wir Ihren Namen, Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht.',
    privacy_purpose_title: '3. Zweck der Datenverarbeitung',
    privacy_purpose_analysis: 'KI-Bildanalyse: Um unseren Kerndienst zur Erkennung von KI-generierten Inhalten in Bildern bereitzustellen.',
    privacy_purpose_improvement: 'Serviceverbesserung: Um Nutzungsmuster zu analysieren und unsere Servicequalität zu verbessern.',
    privacy_purpose_communication: 'Kommunikation: Um auf Ihre Anfragen zu antworten und Kundensupport zu bieten.',
    privacy_purpose_legal: 'Rechtliche Compliance: Um geltende Gesetze und Vorschriften einzuhalten.',
    privacy_cookies_title: '4. Cookies und Tracking',
    privacy_cookies_intro: 'Wir verwenden Cookies und ähnliche Tracking-Technologien, um Ihre Erfahrung zu verbessern:',
    privacy_cookies_essential: 'Essentielle Cookies: Erforderlich für die ordnungsgemäße Funktion der Website.',
    privacy_cookies_analytics: 'Analyse-Cookies: Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren (z.B. Google Analytics).',
    privacy_cookies_advertising: 'Werbe-Cookies: Werden verwendet, um relevante Werbung anzuzeigen (z.B. Google AdSense).',
    privacy_cookies_manage: 'Sie können Cookie-Einstellungen in Ihrem Browser verwalten.',
    privacy_sharing_title: '5. Datenweitergabe und Dritte',
    privacy_sharing_intro: 'Wir verkaufen Ihre personenbezogenen Daten nicht. Wir können Daten teilen mit:',
    privacy_sharing_ai: 'KI-Dienstleister: Drittanbieter-KI-Verarbeitungsdienste, die hochgeladene Bilder analysieren.',
    privacy_sharing_analytics: 'Analyseanbieter: Dienste wie Google Analytics, um die Website-Nutzung zu verstehen.',
    privacy_sharing_advertising: 'Werbenetzwerke: Dienste wie Google AdSense zur Anzeige von Werbung.',
    privacy_sharing_legal: 'Rechtliche Verpflichtungen: Wenn dies gesetzlich vorgeschrieben ist oder zum Schutz unserer Rechte.',
    privacy_rights_title: '6. Ihre Rechte (DSGVO)',
    privacy_rights_intro: 'Nach der DSGVO haben Sie folgende Rechte:',
    privacy_rights_access: 'Auskunftsrecht: Eine Kopie Ihrer personenbezogenen Daten anfordern.',
    privacy_rights_rectification: 'Recht auf Berichtigung: Ungenaue oder unvollständige Daten korrigieren.',
    privacy_rights_erasure: 'Recht auf Löschung: Löschung Ihrer personenbezogenen Daten verlangen ("Recht auf Vergessenwerden").',
    privacy_rights_portability: 'Recht auf Datenübertragbarkeit: Ihre Daten in einem strukturierten, maschinenlesbaren Format erhalten.',
    privacy_rights_object: 'Widerspruchsrecht: Der Verarbeitung Ihrer Daten für Direktwerbung oder andere Zwecke widersprechen.',
    privacy_rights_withdraw: 'Recht auf Widerruf der Einwilligung: Die Einwilligung jederzeit widerrufen, wenn die Verarbeitung auf Einwilligung basiert.',
    privacy_rights_exercise: 'Um diese Rechte auszuüben, kontaktieren Sie uns unter:',
    privacy_retention_title: '7. Datenspeicherung',
    privacy_retention_text: 'Wir bewahren Ihre personenbezogenen Daten nur so lange auf, wie es für die in dieser Richtlinie genannten Zwecke erforderlich ist oder gesetzlich vorgeschrieben. Hochgeladene Bilder werden in Echtzeit verarbeitet und sofort nach der Analyse gelöscht, es sei denn, Sie entscheiden sich, Ergebnisse zu speichern.',
    privacy_security_title: '8. Datensicherheit',
    privacy_security_text: 'Wir implementieren angemessene technische und organisatorische Maßnahmen, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Verlust oder Veränderung zu schützen. Dies umfasst Verschlüsselung, sichere Server und Zugriffskontrollen.',
    privacy_international_title: '9. Internationale Datenübertragungen',
    privacy_international_text: 'Ihre Daten können in Länder außerhalb des Europäischen Wirtschaftsraums (EWR) übertragen und dort verarbeitet werden. Wir stellen sicher, dass angemessene Schutzmaßnahmen vorhanden sind, wie z.B. von der Europäischen Kommission genehmigte Standardvertragsklauseln.',
    privacy_children_title: '10. Datenschutz von Kindern',
    privacy_children_text: 'Unser Service ist nicht für Kinder unter 16 Jahren bestimmt. Wir erfassen wissentlich keine personenbezogenen Daten von Kindern. Wenn Sie glauben, dass wir Daten von einem Kind erhoben haben, kontaktieren Sie uns bitte umgehend.',
    privacy_changes_title: '11. Änderungen dieser Richtlinie',
    privacy_changes_text: 'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über wesentliche Änderungen informieren, indem wir die neue Richtlinie auf dieser Seite mit einem aktualisierten "Stand"-Datum veröffentlichen.',
    privacy_contact_title: '12. Kontakt',
    privacy_contact_text: 'Bei Fragen oder Bedenken zu dieser Datenschutzerklärung oder unseren Datenpraktiken kontaktieren Sie uns bitte unter:',

    // Imprint Page
    imprint_title: 'Impressum',
    imprint_info_title: 'Angaben gemäß § 5 TMG',
    imprint_provider: 'Diensteanbieter:',
    imprint_location: 'Standort:',
    imprint_email: 'E-Mail:',
    imprint_responsible_title: 'Verantwortlich für den Inhalt',
    imprint_dispute_title: 'EU-Streitschlichtung',
    imprint_dispute_text: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
    imprint_disclaimer_title: 'Haftungsausschluss',
    imprint_liability_content_title: 'Haftung für Inhalte:',
    imprint_liability_content_text: 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
    imprint_liability_links_title: 'Haftung für Links:',
    imprint_liability_links_text: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
    imprint_copyright_title: 'Urheberrecht:',
    imprint_copyright_text: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem italienischen und internationalen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
    imprint_contact_title: 'Kontakt',
    imprint_contact_text: 'Bei Fragen oder Anliegen erreichen Sie uns unter:',

    // Contact Page
    contact_title: 'Kontakt',
    contact_subtitle: 'Haben Sie Fragen? Wir freuen uns von Ihnen zu hören. Senden Sie uns eine Nachricht und wir antworten so schnell wie möglich.',
    contact_name: 'Name',
    contact_name_placeholder: 'Ihr Name',
    contact_email: 'E-Mail',
    contact_email_placeholder: 'ihre.email@beispiel.de',
    contact_message: 'Nachricht',
    contact_message_placeholder: 'Ihre Nachricht...',
    contact_send: 'Nachricht senden',
    contact_sending: 'Wird gesendet...',
    contact_success_title: 'Nachricht gesendet!',
    contact_success_message: 'Vielen Dank für Ihre Nachricht. Wir melden uns bald bei Ihnen unter',
    contact_direct: 'Sie können uns auch direkt erreichen unter:',

    // Game Page
    game_page_title: 'ForRealScan Mini-Game',
    game_page_subtitle: 'Teste deine Fähigkeit, echte Fotos von KI-generierten Bildern zu unterscheiden. Trainiere dein Auge und lerne, worauf du achten musst.',
    game_feature1_title: 'Schärfe dein Auge',
    game_feature1_text: 'Lerne, subtile Unterschiede zwischen echten und KI-Bildern zu erkennen.',
    game_feature2_title: 'Verstehe KI-Muster',
    game_feature2_text: 'Entdecke typische Artefakte und Merkmale von KI-generierten Bildern.',
    game_feature3_title: 'Vergleiche dich',
    game_feature3_text: 'Sieh, wie gut du im Vergleich zu anderen Spielern abschneidest.',
    game_start: 'Quiz starten',
    game_why_title: 'Warum dieses Spiel?',
    game_why_p1: 'KI-generierte Bilder werden immer realistischer und schwerer zu erkennen. Mit dem ForRealScan Mini-Game kannst du spielerisch lernen, worauf du achten musst, um echte von künstlichen Bildern zu unterscheiden.',
    game_why_p2: 'Das Spiel ergänzt die ForRealScan-Analyse: Während der Scan dir technische Hinweise gibt, hilft das Spiel dabei, dein eigenes Urteilsvermögen zu schärfen.',

    // NotFound Page
    notfound_title: '404',
    notfound_message: 'Seite nicht gefunden',
    notfound_home: 'Zurück zur Startseite',

    // ComingSoon Page
    comingsoon_redirect: 'Weiterleitung zu game.forrealscan.com...',
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
    cta_app: 'Check Image Now',
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
    
    // ShareCards (Old - kept for compatibility)
    share_title: 'Share results where they are needed',
    share_text: 'Scans can be shared as compact result cards, for example in chats or under social media posts. This makes your assessment comprehensible for others – including notes on uncertainties.',

    // ShareCards Visual Showcase (New)
    sharecard_title: 'Your result at a glance',
    sharecard_subtitle: 'Clear analyses as compact cards – ready to share or save.',
    sharecard_feature1: 'Instantly understandable score (0–100%)',
    sharecard_feature2: 'Detailed visual evidence',
    sharecard_feature3: 'Optimized for social media & chats',

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

    // Examples Page (dedicated page)
    examples_page_title: 'Example Analyses',
    examples_page_subtitle: 'See how ForRealScan results look – with explanations on how to interpret them.',
    examples_page_disclaimer: 'Note: These are static demo examples showing how ForRealScan results look. For a real analysis, please upload your own image.',
    examples_page_back: 'Back',
    examples_page_cta_title: 'Want to check your own images?',
    examples_page_cta_text: 'Try ForRealScan for free – up to 5 analyses per day, no registration required.',
    examples_page_cta_button: 'Analyze Image Now',
    examples_page_context_title: 'How to use these results',
    examples_page_context_p1: 'The examples above show that ForRealScan can classify both real photos and AI-generated images with good accuracy. However, the results are guides, not absolute proof.',
    examples_page_context_p2: 'Images with medium values (30-70%) require special caution. These could be lightly edited real photos, partially AI-generated images, or simply hard-to-classify shots. In such cases, we recommend considering additional factors: Where does the image come from? Who posted it? Are there other versions?',
    examples_page_context_p3: 'Learn more about our methodology on the',
    examples_page_methodology_link: 'Methodology page',
    examples_page_veritas_says: 'Veritas says:',
    examples_page_robo_says: 'Robo says:',
    examples_page_context_label: 'Context',

    // Examples - Confidence labels
    confidence_high: 'high',
    confidence_medium: 'medium',
    confidence_low: 'low',
    confidence_label: 'Confidence',

    // Examples - Real photo specific comments
    examples_real_veritas: 'Natural irregularities in fur texture. Plausible light and shadow interplay. Organic bokeh in the background.',
    examples_real_robo: 'No strong AI patterns detected. Image noise matches a real camera shot. No conspicuous repetition patterns.',
    examples_real_explanation: 'This image shows typical characteristics of authentic nature photography: The fur texture has natural irregularities, the background bokeh is organic, and the image noise matches that of a real camera.',

    // Examples - AI photo comments
    examples_ai1_title: 'AI-Generated Squirrel',
    examples_ai1_veritas: 'The fur looks too uniform and "painted". The eyes have unnaturally perfect reflections. The transition to the background is too soft.',
    examples_ai1_robo: 'Typical GAN artifacts detected in fur structures. Pixel patterns suggest Stable Diffusion or similar model. Notable smoothing in detail areas.',
    examples_ai1_explanation: 'Although realistic at first glance, this image shows several AI-typical characteristics: The fur is too uniformly textured, eye reflections are perfectly symmetrical, and the small imperfections of real photos are missing.',

    examples_ai2_title: 'AI-Generated Butterfly',
    examples_ai2_veritas: 'The wing patterns are too perfectly symmetrical. The colors appear oversaturated and unnaturally bright. The body structure is anatomically simplified.',
    examples_ai2_robo: 'Clear repetition patterns in wing structure. High-frequency details completely missing. Typical Midjourney/DALL-E signature in color transitions.',
    examples_ai2_explanation: 'This image shows typical signs of AI generation: exaggerated color saturation, unnaturally perfect symmetry, and simplified anatomical details.',

    // Common
    common_back: 'Back',

    // Methodology Page
    methodology_title: 'Methodology & Technology',
    methodology_subtitle: 'How ForRealScan detects AI-generated images – transparently explained.',
    methodology_cta_scan: 'Start Scan Now',
    methodology_cta_examples: 'View Examples',
    methodology_what_title: 'What ForRealScan Does',
    methodology_what_p1: 'ForRealScan is an analysis tool that helps you assess the possible AI content in images. The service combines various analysis methods to find indicators of whether an image was generated with AI technology or heavily edited.',
    methodology_what_p2: 'Important to understand: ForRealScan provides probabilities and well-founded assessments – not absolute judgments. Image generation technology is constantly evolving, and no detection system can guarantee one hundred percent accuracy.',
    methodology_how_title: 'How the Scan Works',
    methodology_how_intro: 'The ForRealScan-Hybrid combines two analysis perspectives, symbolized by our mascots Veritas and Robo:',
    methodology_veritas_title: 'Veritas – The Nature View',
    methodology_veritas_text: 'Veritas analyzes whether an image has the typical characteristics of a real photograph: natural lighting, realistic shadows, organic textures in skin and hair, and the small imperfections that distinguish real photos.',
    methodology_robo_title: 'Robo – The Logic View',
    methodology_robo_text: 'Robo looks for technical patterns typical of AI-generated images: conspicuous pixel structures, compression artifacts, exaggerated perfection, recurring patterns, and inconsistencies in details like hands, teeth, or backgrounds.',
    methodology_how_outro: 'Both perspectives flow into a common assessment. The result is displayed as a percentage, supplemented by an understandable explanation of which factors led to the assessment.',
    methodology_results_title: 'What the Results Mean',
    methodology_results_low_title: 'Low AI Probability (0–30%)',
    methodology_results_low_text: 'The image predominantly shows characteristics of authentic photography. Natural irregularities and realistic details suggest a real photo.',
    methodology_results_mid_title: 'Medium Uncertainty (30–70%)',
    methodology_results_mid_text: 'The image contains both authentic and suspicious features. Light editing, filters, or partial AI assistance are possible.',
    methodology_results_high_title: 'High AI Probability (70–100%)',
    methodology_results_high_text: 'The image shows clear signs of AI generation or heavy manipulation. Typical AI patterns and technical artifacts were detected.',
    methodology_results_outro: 'Each result is accompanied by a brief explanation describing which specific features led to the assessment. This allows you to understand the evaluation and form your own judgment.',
    methodology_limits_title: 'Limitations & When It Gets Difficult',
    methodology_limits_intro: 'Honesty is important to us. ForRealScan has – like any detection system – limitations:',
    methodology_limits_compressed: 'Heavily compressed images: Images that have been saved multiple times or shared via messenger lose important details.',
    methodology_limits_screenshots: 'Screenshots: Text and interface elements complicate pure image analysis.',
    methodology_limits_hybrid: 'Hybrid images: Real photos with AI editing (e.g., face filters, background changes) are particularly difficult to classify.',
    methodology_limits_new_models: 'Latest AI models: Technology is evolving rapidly. Very new generation models may be harder to detect.',
    methodology_limits_professional: 'Professional photos: Studio shots with perfect lighting can be incorrectly classified as "too perfect".',
    methodology_limits_outro: 'When a result is uncertain, ForRealScan clearly indicates this. In such cases, you should do additional research before drawing conclusions.',
    methodology_responsible_title: 'Responsible Use',
    methodology_responsible_intro: 'ForRealScan is a guidance tool – not evidence. The results should:',
    methodology_responsible_point1: 'Serve as a starting point for further research, not as a final verdict',
    methodology_responsible_point2: 'Not be used alone as the basis for accusations or legal action',
    methodology_responsible_point3: 'Be considered in context: source, sender, and situation play a role',
    methodology_responsible_point4: 'Be interpreted with common sense',
    methodology_responsible_outro: 'Our goal is to help you make more conscious decisions in a world full of manipulated images – not to sow distrust or encourage hasty conclusions.',
    methodology_privacy_title: 'Privacy During Analysis',
    methodology_privacy_intro: 'Your privacy is a priority:',
    methodology_privacy_point1: 'Uploaded images are only processed server-side for analysis and are not permanently stored',
    methodology_privacy_point2: 'Results and cards can – depending on usage – be stored locally on your device in the collection',
    methodology_privacy_point3: 'Transmission is encrypted (HTTPS/TLS)',
    methodology_privacy_point4: 'We do not sell user data',
    methodology_privacy_link: 'More details can be found in our Privacy Policy.',
    methodology_summary_title: 'Summary',
    methodology_summary_text: 'ForRealScan analyzes images for AI-typical patterns and provides probabilities rather than absolute judgments. Results serve as guidance and should be viewed in context. No detection system is perfect – ForRealScan transparently indicates uncertainties.',

    // Privacy Page
    privacy_title: 'Privacy Policy',
    privacy_last_updated: 'Last Updated: December 2025',
    privacy_intro: 'ForRealScan is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal data in compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.',
    privacy_controller_title: '1. Data Controller',
    privacy_controller_provider: 'Service Provider:',
    privacy_controller_location: 'Location:',
    privacy_controller_email: 'Email:',
    privacy_data_title: '2. Data We Collect',
    privacy_data_images: 'Images You Upload: When you use our AI analysis service, you upload images for processing. These images are processed in real-time and are not permanently stored on our servers unless you explicitly save results.',
    privacy_data_technical: 'Technical Data: We automatically collect technical information such as IP address, browser type, device information, and access times for security and analytics purposes.',
    privacy_data_contact: 'Contact Information: If you contact us via email or contact form, we collect your name, email address, and message content.',
    privacy_purpose_title: '3. Purpose of Data Processing',
    privacy_purpose_analysis: 'AI Image Analysis: To provide our core service of detecting AI-generated content in images.',
    privacy_purpose_improvement: 'Service Improvement: To analyze usage patterns and improve our service quality.',
    privacy_purpose_communication: 'Communication: To respond to your inquiries and provide customer support.',
    privacy_purpose_legal: 'Legal Compliance: To comply with applicable laws and regulations.',
    privacy_cookies_title: '4. Cookies and Tracking',
    privacy_cookies_intro: 'We use cookies and similar tracking technologies to enhance your experience:',
    privacy_cookies_essential: 'Essential Cookies: Required for the website to function properly.',
    privacy_cookies_analytics: 'Analytics Cookies: Help us understand how visitors interact with our website (e.g., Google Analytics).',
    privacy_cookies_advertising: 'Advertising Cookies: Used to display relevant advertisements (e.g., Google AdSense).',
    privacy_cookies_manage: 'You can manage cookie preferences in your browser settings.',
    privacy_sharing_title: '5. Data Sharing and Third Parties',
    privacy_sharing_intro: 'We do not sell your personal data. We may share data with:',
    privacy_sharing_ai: 'AI Service Providers: Third-party AI processing services that analyze uploaded images.',
    privacy_sharing_analytics: 'Analytics Providers: Services like Google Analytics to understand website usage.',
    privacy_sharing_advertising: 'Advertising Networks: Services like Google AdSense for displaying ads.',
    privacy_sharing_legal: 'Legal Obligations: When required by law or to protect our rights.',
    privacy_rights_title: '6. Your Rights (GDPR)',
    privacy_rights_intro: 'Under GDPR, you have the following rights:',
    privacy_rights_access: 'Right of Access: Request a copy of your personal data.',
    privacy_rights_rectification: 'Right to Rectification: Correct inaccurate or incomplete data.',
    privacy_rights_erasure: 'Right to Erasure: Request deletion of your personal data ("right to be forgotten").',
    privacy_rights_portability: 'Right to Data Portability: Receive your data in a structured, machine-readable format.',
    privacy_rights_object: 'Right to Object: Object to processing of your data for direct marketing or other purposes.',
    privacy_rights_withdraw: 'Right to Withdraw Consent: Withdraw consent at any time where processing is based on consent.',
    privacy_rights_exercise: 'To exercise these rights, contact us at:',
    privacy_retention_title: '7. Data Retention',
    privacy_retention_text: 'We retain your personal data only as long as necessary for the purposes outlined in this policy or as required by law. Uploaded images are processed in real-time and deleted immediately after analysis unless you choose to save results.',
    privacy_security_title: '8. Data Security',
    privacy_security_text: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. This includes encryption, secure servers, and access controls.',
    privacy_international_title: '9. International Data Transfers',
    privacy_international_text: 'Your data may be transferred to and processed in countries outside the European Economic Area (EEA). We ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.',
    privacy_children_title: '10. Children\'s Privacy',
    privacy_children_text: 'Our service is not intended for children under 16 years of age. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us immediately.',
    privacy_changes_title: '11. Changes to This Policy',
    privacy_changes_text: 'We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated "Last Updated" date.',
    privacy_contact_title: '12. Contact Us',
    privacy_contact_text: 'For any questions or concerns about this Privacy Policy or our data practices, please contact us at:',

    // Imprint Page
    imprint_title: 'Legal Notice',
    imprint_info_title: 'Information according to § 5 TMG',
    imprint_provider: 'Service Provider:',
    imprint_location: 'Location:',
    imprint_email: 'Email:',
    imprint_responsible_title: 'Responsible for Content',
    imprint_dispute_title: 'EU Dispute Resolution',
    imprint_dispute_text: 'The European Commission provides a platform for online dispute resolution (OS):',
    imprint_disclaimer_title: 'Disclaimer',
    imprint_liability_content_title: 'Liability for Content:',
    imprint_liability_content_text: 'The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents\' accuracy, completeness, or topicality. According to statutory provisions, we are responsible for our own content on these pages. However, we are not obligated to monitor transmitted or stored third-party information or investigate circumstances pointing to illegal activity.',
    imprint_liability_links_title: 'Liability for Links:',
    imprint_liability_links_text: 'Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages.',
    imprint_copyright_title: 'Copyright:',
    imprint_copyright_text: 'The content and works created by the site operators on these pages are subject to Italian and international copyright law. Duplication, processing, distribution, or any form of commercialization beyond the scope of copyright law requires the prior written consent of the respective author or creator.',
    imprint_contact_title: 'Contact',
    imprint_contact_text: 'For questions or concerns, please contact us at:',

    // Contact Page
    contact_title: 'Contact Us',
    contact_subtitle: 'Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
    contact_name: 'Name',
    contact_name_placeholder: 'Your name',
    contact_email: 'Email',
    contact_email_placeholder: 'your.email@example.com',
    contact_message: 'Message',
    contact_message_placeholder: 'Your message...',
    contact_send: 'Send Message',
    contact_sending: 'Sending...',
    contact_success_title: 'Message Sent!',
    contact_success_message: 'Thank you for contacting us. We\'ll get back to you soon at',
    contact_direct: 'You can also reach us directly at:',

    // Game Page
    game_page_title: 'ForRealScan Mini-Game',
    game_page_subtitle: 'Test your ability to distinguish real photos from AI-generated images. Train your eye and learn what to look for.',
    game_feature1_title: 'Sharpen Your Eye',
    game_feature1_text: 'Learn to recognize subtle differences between real and AI images.',
    game_feature2_title: 'Understand AI Patterns',
    game_feature2_text: 'Discover typical artifacts and characteristics of AI-generated images.',
    game_feature3_title: 'Compare Yourself',
    game_feature3_text: 'See how well you perform compared to other players.',
    game_start: 'Start Quiz',
    game_why_title: 'Why This Game?',
    game_why_p1: 'AI-generated images are becoming increasingly realistic and harder to detect. With the ForRealScan Mini-Game, you can learn playfully what to look for to distinguish real from artificial images.',
    game_why_p2: 'The game complements the ForRealScan analysis: While the scan gives you technical hints, the game helps sharpen your own judgment.',

    // NotFound Page
    notfound_title: '404',
    notfound_message: 'Page not found',
    notfound_home: 'Return to Home',

    // ComingSoon Page
    comingsoon_redirect: 'Redirecting to game.forrealscan.com...',
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
    cta_app: 'Controlla Immagine Ora',
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
    
    // ShareCards (Old - kept for compatibility)
    share_title: 'Condividi i risultati dove sono necessari',
    share_text: 'Le scansioni possono essere condivise come carte risultato compatte, ad esempio in chat o sotto post sui social media. Questo rende la tua valutazione comprensibile per gli altri – incluse note sulle incertezze.',

    // ShareCards Visual Showcase (New)
    sharecard_title: 'Il tuo risultato a colpo d\'occhio',
    sharecard_subtitle: 'Analisi chiare come carte compatte – pronte per la condivisione o il salvataggio.',
    sharecard_feature1: 'Punteggio immediatamente comprensibile (0–100%)',
    sharecard_feature2: 'Prove visive dettagliate',
    sharecard_feature3: 'Ottimizzato per social media e chat',

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

    // Examples Page (dedicated page)
    examples_page_title: 'Analisi di Esempio',
    examples_page_subtitle: 'Scopri come appaiono i risultati di ForRealScan – con spiegazioni su come interpretarli.',
    examples_page_disclaimer: 'Nota: questi sono esempi demo statici che mostrano come appaiono i risultati di ForRealScan. Per un\'analisi reale, carica la tua immagine.',
    examples_page_back: 'Indietro',
    examples_page_cta_title: 'Vuoi controllare le tue immagini?',
    examples_page_cta_text: 'Prova ForRealScan gratuitamente – fino a 5 analisi al giorno, senza registrazione.',
    examples_page_cta_button: 'Analizza immagine ora',
    examples_page_context_title: 'Come utilizzare questi risultati',
    examples_page_context_p1: 'Gli esempi sopra mostrano che ForRealScan può classificare sia foto reali che immagini generate da IA con buona accuratezza. Tuttavia, i risultati sono guide, non prove assolute.',
    examples_page_context_p2: 'Le immagini con valori medi (30-70%) richiedono particolare attenzione. Potrebbero essere foto reali leggermente modificate, immagini parzialmente generate da IA o semplicemente scatti difficili da classificare. In questi casi, consigliamo di considerare fattori aggiuntivi: Da dove viene l\'immagine? Chi l\'ha pubblicata? Esistono altre versioni?',
    examples_page_context_p3: 'Scopri di più sulla nostra metodologia nella',
    examples_page_methodology_link: 'pagina Metodologia',
    examples_page_veritas_says: 'Veritas dice:',
    examples_page_robo_says: 'Robo dice:',
    examples_page_context_label: 'Contesto',

    // Examples - Confidence labels
    confidence_high: 'alta',
    confidence_medium: 'media',
    confidence_low: 'bassa',
    confidence_label: 'Affidabilità',

    // Examples - Real photo specific comments
    examples_real_veritas: 'Irregolarità naturali nella struttura del pelo. Interazione plausibile di luce e ombre. Bokeh organico sullo sfondo.',
    examples_real_robo: 'Nessun forte pattern IA rilevato. Il rumore dell\'immagine corrisponde a uno scatto reale. Nessun pattern di ripetizione evidente.',
    examples_real_explanation: 'Questa immagine mostra caratteristiche tipiche della fotografia naturalistica autentica: La struttura del pelo presenta irregolarità naturali, il bokeh di sfondo è organico e il rumore dell\'immagine corrisponde a quello di una vera fotocamera.',

    // Examples - AI photo comments
    examples_ai1_title: 'Scoiattolo Generato da IA',
    examples_ai1_veritas: 'Il pelo appare troppo uniforme e "dipinto". Gli occhi hanno riflessi innaturalmente perfetti. La transizione allo sfondo è troppo morbida.',
    examples_ai1_robo: 'Rilevati tipici artefatti GAN nelle strutture del pelo. I pattern di pixel suggeriscono Stable Diffusion o modello simile. Levigatura evidente nelle aree di dettaglio.',
    examples_ai1_explanation: 'Sebbene realistico a prima vista, questa immagine mostra diverse caratteristiche tipiche dell\'IA: Il pelo è texturizzato troppo uniformemente, i riflessi degli occhi sono perfettamente simmetrici e mancano le piccole imperfezioni delle foto reali.',

    examples_ai2_title: 'Farfalla Generata da IA',
    examples_ai2_veritas: 'I pattern delle ali sono troppo perfettamente simmetrici. I colori appaiono sovrasaturi e innaturalmente brillanti. La struttura corporea è anatomicamente semplificata.',
    examples_ai2_robo: 'Chiari pattern di ripetizione nella struttura delle ali. Dettagli ad alta frequenza completamente assenti. Tipica firma Midjourney/DALL-E nelle transizioni di colore.',
    examples_ai2_explanation: 'Questa immagine mostra segni tipici della generazione IA: saturazione del colore esagerata, simmetria innaturalmente perfetta e dettagli anatomici semplificati.',

    // Common
    common_back: 'Indietro',

    // Methodology Page
    methodology_title: 'Metodologia e Tecnologia',
    methodology_subtitle: 'Come ForRealScan rileva le immagini generate dall\'IA – spiegato in modo trasparente.',
    methodology_cta_scan: 'Avvia Scansione',
    methodology_cta_examples: 'Vedi Esempi',
    methodology_what_title: 'Cosa fa ForRealScan',
    methodology_what_p1: 'ForRealScan è uno strumento di analisi che ti aiuta a valutare il possibile contenuto IA nelle immagini. Il servizio combina vari metodi di analisi per trovare indicatori se un\'immagine è stata generata con tecnologia IA o pesantemente modificata.',
    methodology_what_p2: 'Importante da capire: ForRealScan fornisce probabilità e valutazioni fondate – non giudizi assoluti. La tecnologia di generazione delle immagini è in continua evoluzione e nessun sistema di rilevamento può garantire una precisione del cento percento.',
    methodology_how_title: 'Come Funziona la Scansione',
    methodology_how_intro: 'ForRealScan-Hybrid combina due prospettive di analisi, simboleggiate dalle nostre mascotte Veritas e Robo:',
    methodology_veritas_title: 'Veritas – La Vista Naturale',
    methodology_veritas_text: 'Veritas analizza se un\'immagine ha le caratteristiche tipiche di una fotografia reale: illuminazione naturale, ombre realistiche, texture organiche nella pelle e nei capelli, e le piccole imperfezioni che distinguono le foto reali.',
    methodology_robo_title: 'Robo – La Vista Logica',
    methodology_robo_text: 'Robo cerca pattern tecnici tipici delle immagini generate dall\'IA: strutture pixel evidenti, artefatti di compressione, perfezione esagerata, pattern ricorrenti e incongruenze nei dettagli come mani, denti o sfondi.',
    methodology_how_outro: 'Entrambe le prospettive confluiscono in una valutazione comune. Il risultato viene visualizzato come percentuale, integrata da una spiegazione comprensibile dei fattori che hanno portato alla valutazione.',
    methodology_results_title: 'Cosa Significano i Risultati',
    methodology_results_low_title: 'Bassa Probabilità IA (0–30%)',
    methodology_results_low_text: 'L\'immagine mostra prevalentemente caratteristiche di fotografia autentica. Irregolarità naturali e dettagli realistici suggeriscono una foto reale.',
    methodology_results_mid_title: 'Incertezza Media (30–70%)',
    methodology_results_mid_text: 'L\'immagine contiene sia caratteristiche autentiche che sospette. Sono possibili modifiche leggere, filtri o assistenza parziale dell\'IA.',
    methodology_results_high_title: 'Alta Probabilità IA (70–100%)',
    methodology_results_high_text: 'L\'immagine mostra chiari segni di generazione IA o forte manipolazione. Sono stati rilevati pattern IA tipici e artefatti tecnici.',
    methodology_results_outro: 'Ogni risultato è accompagnato da una breve spiegazione che descrive quali caratteristiche specifiche hanno portato alla valutazione. Questo ti permette di comprendere la valutazione e formare il tuo giudizio.',
    methodology_limits_title: 'Limitazioni e Quando Diventa Difficile',
    methodology_limits_intro: 'L\'onestà è importante per noi. ForRealScan ha – come ogni sistema di rilevamento – delle limitazioni:',
    methodology_limits_compressed: 'Immagini molto compresse: Le immagini salvate più volte o condivise via messenger perdono dettagli importanti.',
    methodology_limits_screenshots: 'Screenshot: Testo ed elementi dell\'interfaccia complicano l\'analisi pura dell\'immagine.',
    methodology_limits_hybrid: 'Immagini ibride: Foto reali con modifiche IA (es. filtri viso, cambi di sfondo) sono particolarmente difficili da classificare.',
    methodology_limits_new_models: 'Ultimi modelli IA: La tecnologia evolve rapidamente. I modelli di generazione più nuovi possono essere più difficili da rilevare.',
    methodology_limits_professional: 'Foto professionali: Scatti in studio con illuminazione perfetta possono essere classificati erroneamente come "troppo perfetti".',
    methodology_limits_outro: 'Quando un risultato è incerto, ForRealScan lo indica chiaramente. In questi casi, dovresti fare ricerche aggiuntive prima di trarre conclusioni.',
    methodology_responsible_title: 'Uso Responsabile',
    methodology_responsible_intro: 'ForRealScan è uno strumento di orientamento – non una prova. I risultati dovrebbero:',
    methodology_responsible_point1: 'Servire come punto di partenza per ulteriori ricerche, non come verdetto finale',
    methodology_responsible_point2: 'Non essere usati da soli come base per accuse o azioni legali',
    methodology_responsible_point3: 'Essere considerati nel contesto: fonte, mittente e situazione hanno un ruolo',
    methodology_responsible_point4: 'Essere interpretati con buon senso',
    methodology_responsible_outro: 'Il nostro obiettivo è aiutarti a prendere decisioni più consapevoli in un mondo pieno di immagini manipolate – non seminare sfiducia o incoraggiare conclusioni affrettate.',
    methodology_privacy_title: 'Privacy Durante l\'Analisi',
    methodology_privacy_intro: 'La tua privacy è una priorità:',
    methodology_privacy_point1: 'Le immagini caricate vengono elaborate solo lato server per l\'analisi e non vengono memorizzate permanentemente',
    methodology_privacy_point2: 'I risultati e le schede possono – a seconda dell\'uso – essere salvati localmente sul tuo dispositivo nella collezione',
    methodology_privacy_point3: 'La trasmissione è crittografata (HTTPS/TLS)',
    methodology_privacy_point4: 'Non vendiamo dati degli utenti',
    methodology_privacy_link: 'Maggiori dettagli nella nostra Informativa sulla Privacy.',
    methodology_summary_title: 'Riepilogo',
    methodology_summary_text: 'ForRealScan analizza le immagini per pattern tipici dell\'IA e fornisce probabilità invece di giudizi assoluti. I risultati servono come guida e dovrebbero essere visti nel contesto. Nessun sistema di rilevamento è perfetto – ForRealScan indica trasparentemente le incertezze.',

    // Privacy Page
    privacy_title: 'Informativa sulla Privacy',
    privacy_last_updated: 'Ultimo aggiornamento: Dicembre 2025',
    privacy_intro: 'ForRealScan si impegna a proteggere la tua privacy. Questa Informativa sulla Privacy spiega come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR) e altre leggi applicabili sulla protezione dei dati.',
    privacy_controller_title: '1. Titolare del Trattamento',
    privacy_controller_provider: 'Fornitore del servizio:',
    privacy_controller_location: 'Sede:',
    privacy_controller_email: 'Email:',
    privacy_data_title: '2. Dati che Raccogliamo',
    privacy_data_images: 'Immagini caricate: Quando utilizzi il nostro servizio di analisi IA, carichi immagini per l\'elaborazione. Queste immagini vengono elaborate in tempo reale e non vengono memorizzate permanentemente sui nostri server a meno che tu non salvi esplicitamente i risultati.',
    privacy_data_technical: 'Dati tecnici: Raccogliamo automaticamente informazioni tecniche come indirizzo IP, tipo di browser, informazioni sul dispositivo e tempi di accesso per scopi di sicurezza e analisi.',
    privacy_data_contact: 'Informazioni di contatto: Se ci contatti via email o modulo di contatto, raccogliamo il tuo nome, indirizzo email e contenuto del messaggio.',
    privacy_purpose_title: '3. Finalità del Trattamento dei Dati',
    privacy_purpose_analysis: 'Analisi immagini IA: Per fornire il nostro servizio principale di rilevamento di contenuti generati dall\'IA nelle immagini.',
    privacy_purpose_improvement: 'Miglioramento del servizio: Per analizzare i pattern di utilizzo e migliorare la qualità del nostro servizio.',
    privacy_purpose_communication: 'Comunicazione: Per rispondere alle tue richieste e fornire supporto clienti.',
    privacy_purpose_legal: 'Conformità legale: Per rispettare le leggi e i regolamenti applicabili.',
    privacy_cookies_title: '4. Cookie e Tracciamento',
    privacy_cookies_intro: 'Utilizziamo cookie e tecnologie di tracciamento simili per migliorare la tua esperienza:',
    privacy_cookies_essential: 'Cookie essenziali: Necessari per il corretto funzionamento del sito web.',
    privacy_cookies_analytics: 'Cookie analitici: Ci aiutano a capire come i visitatori interagiscono con il nostro sito (es. Google Analytics).',
    privacy_cookies_advertising: 'Cookie pubblicitari: Utilizzati per mostrare annunci pertinenti (es. Google AdSense).',
    privacy_cookies_manage: 'Puoi gestire le preferenze dei cookie nelle impostazioni del browser.',
    privacy_sharing_title: '5. Condivisione dei Dati e Terze Parti',
    privacy_sharing_intro: 'Non vendiamo i tuoi dati personali. Possiamo condividere dati con:',
    privacy_sharing_ai: 'Fornitori di servizi IA: Servizi di elaborazione IA di terze parti che analizzano le immagini caricate.',
    privacy_sharing_analytics: 'Fornitori di analisi: Servizi come Google Analytics per comprendere l\'utilizzo del sito.',
    privacy_sharing_advertising: 'Reti pubblicitarie: Servizi come Google AdSense per la visualizzazione di annunci.',
    privacy_sharing_legal: 'Obblighi legali: Quando richiesto dalla legge o per proteggere i nostri diritti.',
    privacy_rights_title: '6. I Tuoi Diritti (GDPR)',
    privacy_rights_intro: 'Ai sensi del GDPR, hai i seguenti diritti:',
    privacy_rights_access: 'Diritto di accesso: Richiedere una copia dei tuoi dati personali.',
    privacy_rights_rectification: 'Diritto di rettifica: Correggere dati inesatti o incompleti.',
    privacy_rights_erasure: 'Diritto alla cancellazione: Richiedere la cancellazione dei tuoi dati personali ("diritto all\'oblio").',
    privacy_rights_portability: 'Diritto alla portabilità dei dati: Ricevere i tuoi dati in un formato strutturato e leggibile da macchina.',
    privacy_rights_object: 'Diritto di opposizione: Opporsi al trattamento dei tuoi dati per marketing diretto o altri scopi.',
    privacy_rights_withdraw: 'Diritto di revocare il consenso: Revocare il consenso in qualsiasi momento quando il trattamento si basa sul consenso.',
    privacy_rights_exercise: 'Per esercitare questi diritti, contattaci a:',
    privacy_retention_title: '7. Conservazione dei Dati',
    privacy_retention_text: 'Conserviamo i tuoi dati personali solo per il tempo necessario agli scopi descritti in questa informativa o come richiesto dalla legge. Le immagini caricate vengono elaborate in tempo reale e cancellate immediatamente dopo l\'analisi, a meno che tu non scelga di salvare i risultati.',
    privacy_security_title: '8. Sicurezza dei Dati',
    privacy_security_text: 'Implementiamo misure tecniche e organizzative appropriate per proteggere i tuoi dati personali da accessi non autorizzati, perdita o alterazione. Questo include crittografia, server sicuri e controlli di accesso.',
    privacy_international_title: '9. Trasferimenti Internazionali di Dati',
    privacy_international_text: 'I tuoi dati possono essere trasferiti e trattati in paesi al di fuori dello Spazio Economico Europeo (SEE). Garantiamo che siano in atto salvaguardie appropriate, come le Clausole Contrattuali Standard approvate dalla Commissione Europea.',
    privacy_children_title: '10. Privacy dei Minori',
    privacy_children_text: 'Il nostro servizio non è destinato a minori di 16 anni. Non raccogliamo consapevolmente dati personali da minori. Se ritieni che abbiamo raccolto dati da un minore, contattaci immediatamente.',
    privacy_changes_title: '11. Modifiche a Questa Informativa',
    privacy_changes_text: 'Potremmo aggiornare questa Informativa sulla Privacy di tanto in tanto. Ti informeremo di modifiche significative pubblicando la nuova informativa su questa pagina con una data "Ultimo aggiornamento" aggiornata.',
    privacy_contact_title: '12. Contattaci',
    privacy_contact_text: 'Per qualsiasi domanda o dubbio su questa Informativa sulla Privacy o sulle nostre pratiche relative ai dati, contattaci a:',

    // Imprint Page
    imprint_title: 'Note Legali',
    imprint_info_title: 'Informazioni ai sensi del § 5 TMG',
    imprint_provider: 'Fornitore del servizio:',
    imprint_location: 'Sede:',
    imprint_email: 'Email:',
    imprint_responsible_title: 'Responsabile del Contenuto',
    imprint_dispute_title: 'Risoluzione delle Controversie UE',
    imprint_dispute_text: 'La Commissione Europea fornisce una piattaforma per la risoluzione delle controversie online (OS):',
    imprint_disclaimer_title: 'Disclaimer',
    imprint_liability_content_title: 'Responsabilità per i contenuti:',
    imprint_liability_content_text: 'I contenuti delle nostre pagine sono stati creati con la massima cura. Tuttavia, non possiamo garantire l\'accuratezza, la completezza o l\'attualità dei contenuti. Secondo le disposizioni di legge, siamo responsabili dei nostri contenuti su queste pagine. Tuttavia, non siamo obbligati a monitorare le informazioni di terzi trasmesse o memorizzate o a indagare su circostanze che indicano attività illegali.',
    imprint_liability_links_title: 'Responsabilità per i link:',
    imprint_liability_links_text: 'La nostra offerta contiene link a siti web esterni di terze parti, sui cui contenuti non abbiamo alcuna influenza. Pertanto, non possiamo assumerci alcuna responsabilità per questi contenuti esterni. Il rispettivo fornitore o operatore delle pagine è sempre responsabile dei contenuti delle pagine collegate.',
    imprint_copyright_title: 'Diritto d\'autore:',
    imprint_copyright_text: 'I contenuti e le opere create dagli operatori del sito su queste pagine sono soggetti al diritto d\'autore italiano e internazionale. La duplicazione, l\'elaborazione, la distribuzione o qualsiasi forma di commercializzazione al di fuori dell\'ambito del diritto d\'autore richiede il previo consenso scritto del rispettivo autore o creatore.',
    imprint_contact_title: 'Contatto',
    imprint_contact_text: 'Per domande o dubbi, contattaci a:',

    // Contact Page
    contact_title: 'Contattaci',
    contact_subtitle: 'Hai domande? Ci farebbe piacere sentirti. Inviaci un messaggio e risponderemo il prima possibile.',
    contact_name: 'Nome',
    contact_name_placeholder: 'Il tuo nome',
    contact_email: 'Email',
    contact_email_placeholder: 'tua.email@esempio.it',
    contact_message: 'Messaggio',
    contact_message_placeholder: 'Il tuo messaggio...',
    contact_send: 'Invia Messaggio',
    contact_sending: 'Invio in corso...',
    contact_success_title: 'Messaggio Inviato!',
    contact_success_message: 'Grazie per averci contattato. Ti risponderemo presto a',
    contact_direct: 'Puoi anche raggiungerci direttamente a:',

    // Game Page
    game_page_title: 'ForRealScan Mini-Game',
    game_page_subtitle: 'Metti alla prova la tua capacità di distinguere foto reali da immagini generate dall\'IA. Allena il tuo occhio e impara cosa cercare.',
    game_feature1_title: 'Affina il Tuo Occhio',
    game_feature1_text: 'Impara a riconoscere le sottili differenze tra immagini reali e IA.',
    game_feature2_title: 'Comprendi i Pattern dell\'IA',
    game_feature2_text: 'Scopri artefatti e caratteristiche tipiche delle immagini generate dall\'IA.',
    game_feature3_title: 'Confrontati',
    game_feature3_text: 'Vedi come ti comporti rispetto agli altri giocatori.',
    game_start: 'Inizia il Quiz',
    game_why_title: 'Perché Questo Gioco?',
    game_why_p1: 'Le immagini generate dall\'IA stanno diventando sempre più realistiche e difficili da rilevare. Con il ForRealScan Mini-Game, puoi imparare giocando cosa cercare per distinguere le immagini reali da quelle artificiali.',
    game_why_p2: 'Il gioco complementa l\'analisi ForRealScan: Mentre la scansione ti dà suggerimenti tecnici, il gioco aiuta ad affinare il tuo giudizio personale.',

    // NotFound Page
    notfound_title: '404',
    notfound_message: 'Pagina non trovata',
    notfound_home: 'Torna alla Home',

    // ComingSoon Page
    comingsoon_redirect: 'Reindirizzamento a game.forrealscan.com...',
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
    cta_app: 'Comprobar Imagen Ahora',
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
    
    // ShareCards (Old - kept for compatibility)
    share_title: 'Comparte resultados donde sean necesarios',
    share_text: 'Los escaneos pueden compartirse como tarjetas de resultado compactas, por ejemplo en chats o bajo publicaciones en redes sociales. Esto hace que tu evaluación sea comprensible para otros – incluyendo notas sobre incertidumbres.',

    // ShareCards Visual Showcase (New)
    sharecard_title: 'Tu resultado de un vistazo',
    sharecard_subtitle: 'Análisis claros como tarjetas compactas – listos para compartir o guardar.',
    sharecard_feature1: 'Puntuación inmediatamente comprensible (0–100%)',
    sharecard_feature2: 'Evidencia visual detallada',
    sharecard_feature3: 'Optimizado para redes sociales y chats',

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

    // Examples Page (dedicated page)
    examples_page_title: 'Análisis de Ejemplo',
    examples_page_subtitle: 'Mira cómo se ven los resultados de ForRealScan – con explicaciones sobre cómo interpretarlos.',
    examples_page_disclaimer: 'Nota: estos son ejemplos de demostración estáticos que muestran cómo se ven los resultados de ForRealScan. Para un análisis real, sube tu propia imagen.',
    examples_page_back: 'Volver',
    examples_page_cta_title: '¿Quieres verificar tus propias imágenes?',
    examples_page_cta_text: 'Prueba ForRealScan gratis – hasta 5 análisis por día, sin necesidad de registro.',
    examples_page_cta_button: 'Analizar imagen ahora',
    examples_page_context_title: 'Cómo usar estos resultados',
    examples_page_context_p1: 'Los ejemplos anteriores muestran que ForRealScan puede clasificar tanto fotos reales como imágenes generadas por IA con buena precisión. Sin embargo, los resultados son guías, no pruebas absolutas.',
    examples_page_context_p2: 'Las imágenes con valores medios (30-70%) requieren especial precaución. Podrían ser fotos reales ligeramente editadas, imágenes parcialmente generadas por IA o simplemente tomas difíciles de clasificar. En estos casos, recomendamos considerar factores adicionales: ¿De dónde viene la imagen? ¿Quién la publicó? ¿Hay otras versiones?',
    examples_page_context_p3: 'Aprende más sobre nuestra metodología en la',
    examples_page_methodology_link: 'página de Metodología',
    examples_page_veritas_says: 'Veritas dice:',
    examples_page_robo_says: 'Robo dice:',
    examples_page_context_label: 'Contexto',

    // Examples - Confidence labels
    confidence_high: 'alta',
    confidence_medium: 'media',
    confidence_low: 'baja',
    confidence_label: 'Confianza',

    // Examples - Real photo specific comments
    examples_real_veritas: 'Irregularidades naturales en la textura del pelaje. Interacción plausible de luz y sombras. Bokeh orgánico en el fondo.',
    examples_real_robo: 'No se detectaron patrones fuertes de IA. El ruido de la imagen coincide con una toma de cámara real. Sin patrones de repetición evidentes.',
    examples_real_explanation: 'Esta imagen muestra características típicas de la fotografía de naturaleza auténtica: La textura del pelaje tiene irregularidades naturales, el bokeh del fondo es orgánico y el ruido de la imagen coincide con el de una cámara real.',

    // Examples - AI photo comments
    examples_ai1_title: 'Ardilla Generada por IA',
    examples_ai1_veritas: 'El pelaje se ve demasiado uniforme y "pintado". Los ojos tienen reflejos antinaturalmente perfectos. La transición al fondo es demasiado suave.',
    examples_ai1_robo: 'Se detectaron típicos artefactos GAN en las estructuras del pelaje. Los patrones de píxeles sugieren Stable Diffusion o modelo similar. Suavizado notable en áreas de detalle.',
    examples_ai1_explanation: 'Aunque realista a primera vista, esta imagen muestra varias características típicas de IA: El pelaje tiene textura demasiado uniforme, los reflejos de los ojos son perfectamente simétricos y faltan las pequeñas imperfecciones de las fotos reales.',

    examples_ai2_title: 'Mariposa Generada por IA',
    examples_ai2_veritas: 'Los patrones de las alas son demasiado perfectamente simétricos. Los colores aparecen sobresaturados y antinaturalmente brillantes. La estructura corporal está anatómicamente simplificada.',
    examples_ai2_robo: 'Patrones de repetición claros en la estructura de las alas. Detalles de alta frecuencia completamente ausentes. Firma típica de Midjourney/DALL-E en las transiciones de color.',
    examples_ai2_explanation: 'Esta imagen muestra signos típicos de generación por IA: saturación de color exagerada, simetría antinaturalmente perfecta y detalles anatómicos simplificados.',

    // Common
    common_back: 'Volver',

    // Methodology Page
    methodology_title: 'Metodología y Tecnología',
    methodology_subtitle: 'Cómo ForRealScan detecta imágenes generadas por IA – explicado de forma transparente.',
    methodology_cta_scan: 'Iniciar Escaneo',
    methodology_cta_examples: 'Ver Ejemplos',
    methodology_what_title: 'Qué Hace ForRealScan',
    methodology_what_p1: 'ForRealScan es una herramienta de análisis que te ayuda a evaluar el posible contenido de IA en imágenes. El servicio combina varios métodos de análisis para encontrar indicadores de si una imagen fue generada con tecnología de IA o muy editada.',
    methodology_what_p2: 'Importante entender: ForRealScan proporciona probabilidades y evaluaciones fundamentadas – no juicios absolutos. La tecnología de generación de imágenes evoluciona constantemente y ningún sistema de detección puede garantizar una precisión del cien por ciento.',
    methodology_how_title: 'Cómo Funciona el Escaneo',
    methodology_how_intro: 'El ForRealScan-Hybrid combina dos perspectivas de análisis, simbolizadas por nuestras mascotas Veritas y Robo:',
    methodology_veritas_title: 'Veritas – La Vista Natural',
    methodology_veritas_text: 'Veritas analiza si una imagen tiene las características típicas de una fotografía real: iluminación natural, sombras realistas, texturas orgánicas en piel y cabello, y las pequeñas imperfecciones que distinguen las fotos reales.',
    methodology_robo_title: 'Robo – La Vista Lógica',
    methodology_robo_text: 'Robo busca patrones técnicos típicos de imágenes generadas por IA: estructuras de píxeles evidentes, artefactos de compresión, perfección exagerada, patrones recurrentes e inconsistencias en detalles como manos, dientes o fondos.',
    methodology_how_outro: 'Ambas perspectivas fluyen hacia una evaluación común. El resultado se muestra como porcentaje, complementado con una explicación comprensible de qué factores llevaron a la evaluación.',
    methodology_results_title: 'Qué Significan los Resultados',
    methodology_results_low_title: 'Baja Probabilidad de IA (0–30%)',
    methodology_results_low_text: 'La imagen muestra predominantemente características de fotografía auténtica. Irregularidades naturales y detalles realistas sugieren una foto real.',
    methodology_results_mid_title: 'Incertidumbre Media (30–70%)',
    methodology_results_mid_text: 'La imagen contiene características tanto auténticas como sospechosas. Son posibles ediciones ligeras, filtros o asistencia parcial de IA.',
    methodology_results_high_title: 'Alta Probabilidad de IA (70–100%)',
    methodology_results_high_text: 'La imagen muestra claras señales de generación por IA o manipulación fuerte. Se detectaron patrones típicos de IA y artefactos técnicos.',
    methodology_results_outro: 'Cada resultado va acompañado de una breve explicación que describe qué características específicas llevaron a la evaluación. Esto te permite comprender la evaluación y formar tu propio juicio.',
    methodology_limits_title: 'Limitaciones y Cuándo Se Complica',
    methodology_limits_intro: 'La honestidad es importante para nosotros. ForRealScan tiene – como cualquier sistema de detección – limitaciones:',
    methodology_limits_compressed: 'Imágenes muy comprimidas: Las imágenes guardadas múltiples veces o compartidas por messenger pierden detalles importantes.',
    methodology_limits_screenshots: 'Capturas de pantalla: El texto y los elementos de interfaz complican el análisis puro de la imagen.',
    methodology_limits_hybrid: 'Imágenes híbridas: Fotos reales con edición de IA (ej. filtros faciales, cambios de fondo) son particularmente difíciles de clasificar.',
    methodology_limits_new_models: 'Últimos modelos de IA: La tecnología evoluciona rápidamente. Los modelos de generación más nuevos pueden ser más difíciles de detectar.',
    methodology_limits_professional: 'Fotos profesionales: Tomas de estudio con iluminación perfecta pueden clasificarse incorrectamente como "demasiado perfectas".',
    methodology_limits_outro: 'Cuando un resultado es incierto, ForRealScan lo indica claramente. En tales casos, debes hacer investigación adicional antes de sacar conclusiones.',
    methodology_responsible_title: 'Uso Responsable',
    methodology_responsible_intro: 'ForRealScan es una herramienta de orientación – no una prueba. Los resultados deberían:',
    methodology_responsible_point1: 'Servir como punto de partida para investigación adicional, no como veredicto final',
    methodology_responsible_point2: 'No usarse solos como base para acusaciones o acciones legales',
    methodology_responsible_point3: 'Considerarse en contexto: fuente, remitente y situación juegan un papel',
    methodology_responsible_point4: 'Interpretarse con sentido común',
    methodology_responsible_outro: 'Nuestro objetivo es ayudarte a tomar decisiones más conscientes en un mundo lleno de imágenes manipuladas – no sembrar desconfianza o fomentar conclusiones apresuradas.',
    methodology_privacy_title: 'Privacidad Durante el Análisis',
    methodology_privacy_intro: 'Tu privacidad es una prioridad:',
    methodology_privacy_point1: 'Las imágenes subidas solo se procesan en el servidor para análisis y no se almacenan permanentemente',
    methodology_privacy_point2: 'Los resultados y tarjetas pueden – según el uso – guardarse localmente en tu dispositivo en la colección',
    methodology_privacy_point3: 'La transmisión está encriptada (HTTPS/TLS)',
    methodology_privacy_point4: 'No vendemos datos de usuarios',
    methodology_privacy_link: 'Más detalles en nuestra Política de Privacidad.',
    methodology_summary_title: 'Resumen',
    methodology_summary_text: 'ForRealScan analiza imágenes en busca de patrones típicos de IA y proporciona probabilidades en lugar de juicios absolutos. Los resultados sirven como guía y deben verse en contexto. Ningún sistema de detección es perfecto – ForRealScan indica las incertidumbres de forma transparente.',

    // Privacy Page
    privacy_title: 'Política de Privacidad',
    privacy_last_updated: 'Última actualización: Diciembre 2025',
    privacy_intro: 'ForRealScan se compromete a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tus datos personales de conformidad con el Reglamento General de Protección de Datos (RGPD) y otras leyes de protección de datos aplicables.',
    privacy_controller_title: '1. Responsable del Tratamiento',
    privacy_controller_provider: 'Proveedor del servicio:',
    privacy_controller_location: 'Ubicación:',
    privacy_controller_email: 'Email:',
    privacy_data_title: '2. Datos que Recopilamos',
    privacy_data_images: 'Imágenes que subes: Cuando usas nuestro servicio de análisis de IA, subes imágenes para procesar. Estas imágenes se procesan en tiempo real y no se almacenan permanentemente en nuestros servidores a menos que guardes explícitamente los resultados.',
    privacy_data_technical: 'Datos técnicos: Recopilamos automáticamente información técnica como dirección IP, tipo de navegador, información del dispositivo y tiempos de acceso para fines de seguridad y análisis.',
    privacy_data_contact: 'Información de contacto: Si nos contactas por email o formulario de contacto, recopilamos tu nombre, dirección de email y contenido del mensaje.',
    privacy_purpose_title: '3. Finalidad del Tratamiento de Datos',
    privacy_purpose_analysis: 'Análisis de imágenes IA: Para proporcionar nuestro servicio principal de detección de contenido generado por IA en imágenes.',
    privacy_purpose_improvement: 'Mejora del servicio: Para analizar patrones de uso y mejorar la calidad de nuestro servicio.',
    privacy_purpose_communication: 'Comunicación: Para responder a tus consultas y proporcionar soporte al cliente.',
    privacy_purpose_legal: 'Cumplimiento legal: Para cumplir con las leyes y regulaciones aplicables.',
    privacy_cookies_title: '4. Cookies y Seguimiento',
    privacy_cookies_intro: 'Usamos cookies y tecnologías de seguimiento similares para mejorar tu experiencia:',
    privacy_cookies_essential: 'Cookies esenciales: Necesarias para el funcionamiento correcto del sitio web.',
    privacy_cookies_analytics: 'Cookies analíticas: Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio (ej. Google Analytics).',
    privacy_cookies_advertising: 'Cookies publicitarias: Se usan para mostrar anuncios relevantes (ej. Google AdSense).',
    privacy_cookies_manage: 'Puedes gestionar las preferencias de cookies en la configuración de tu navegador.',
    privacy_sharing_title: '5. Compartición de Datos y Terceros',
    privacy_sharing_intro: 'No vendemos tus datos personales. Podemos compartir datos con:',
    privacy_sharing_ai: 'Proveedores de servicios de IA: Servicios de procesamiento de IA de terceros que analizan las imágenes subidas.',
    privacy_sharing_analytics: 'Proveedores de análisis: Servicios como Google Analytics para entender el uso del sitio.',
    privacy_sharing_advertising: 'Redes publicitarias: Servicios como Google AdSense para mostrar anuncios.',
    privacy_sharing_legal: 'Obligaciones legales: Cuando lo requiere la ley o para proteger nuestros derechos.',
    privacy_rights_title: '6. Tus Derechos (RGPD)',
    privacy_rights_intro: 'Bajo el RGPD, tienes los siguientes derechos:',
    privacy_rights_access: 'Derecho de acceso: Solicitar una copia de tus datos personales.',
    privacy_rights_rectification: 'Derecho de rectificación: Corregir datos inexactos o incompletos.',
    privacy_rights_erasure: 'Derecho de supresión: Solicitar la eliminación de tus datos personales ("derecho al olvido").',
    privacy_rights_portability: 'Derecho a la portabilidad de datos: Recibir tus datos en un formato estructurado y legible por máquina.',
    privacy_rights_object: 'Derecho de oposición: Oponerte al procesamiento de tus datos para marketing directo u otros fines.',
    privacy_rights_withdraw: 'Derecho a retirar el consentimiento: Retirar el consentimiento en cualquier momento cuando el procesamiento se base en el consentimiento.',
    privacy_rights_exercise: 'Para ejercer estos derechos, contáctanos en:',
    privacy_retention_title: '7. Retención de Datos',
    privacy_retention_text: 'Conservamos tus datos personales solo el tiempo necesario para los fines descritos en esta política o según lo requiera la ley. Las imágenes subidas se procesan en tiempo real y se eliminan inmediatamente después del análisis, a menos que elijas guardar los resultados.',
    privacy_security_title: '8. Seguridad de Datos',
    privacy_security_text: 'Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales contra acceso no autorizado, pérdida o alteración. Esto incluye encriptación, servidores seguros y controles de acceso.',
    privacy_international_title: '9. Transferencias Internacionales de Datos',
    privacy_international_text: 'Tus datos pueden ser transferidos y procesados en países fuera del Espacio Económico Europeo (EEE). Aseguramos que existan salvaguardas apropiadas, como las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea.',
    privacy_children_title: '10. Privacidad de Menores',
    privacy_children_text: 'Nuestro servicio no está dirigido a menores de 16 años. No recopilamos conscientemente datos personales de menores. Si crees que hemos recopilado datos de un menor, contáctanos inmediatamente.',
    privacy_changes_title: '11. Cambios en Esta Política',
    privacy_changes_text: 'Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos de cambios significativos publicando la nueva política en esta página con una fecha de "Última actualización" actualizada.',
    privacy_contact_title: '12. Contáctanos',
    privacy_contact_text: 'Para cualquier pregunta o inquietud sobre esta Política de Privacidad o nuestras prácticas de datos, contáctanos en:',

    // Imprint Page
    imprint_title: 'Aviso Legal',
    imprint_info_title: 'Información según § 5 TMG',
    imprint_provider: 'Proveedor del servicio:',
    imprint_location: 'Ubicación:',
    imprint_email: 'Email:',
    imprint_responsible_title: 'Responsable del Contenido',
    imprint_dispute_title: 'Resolución de Disputas de la UE',
    imprint_dispute_text: 'La Comisión Europea proporciona una plataforma para la resolución de disputas en línea (OS):',
    imprint_disclaimer_title: 'Descargo de Responsabilidad',
    imprint_liability_content_title: 'Responsabilidad por el contenido:',
    imprint_liability_content_text: 'Los contenidos de nuestras páginas han sido creados con el máximo cuidado. Sin embargo, no podemos garantizar la exactitud, integridad o actualidad de los contenidos. Según las disposiciones legales, somos responsables de nuestro propio contenido en estas páginas. Sin embargo, no estamos obligados a monitorear la información de terceros transmitida o almacenada o investigar circunstancias que indiquen actividad ilegal.',
    imprint_liability_links_title: 'Responsabilidad por enlaces:',
    imprint_liability_links_text: 'Nuestra oferta contiene enlaces a sitios web externos de terceros, sobre cuyos contenidos no tenemos influencia. Por lo tanto, no podemos asumir ninguna responsabilidad por estos contenidos externos. El respectivo proveedor u operador de las páginas es siempre responsable de los contenidos de las páginas enlazadas.',
    imprint_copyright_title: 'Derechos de autor:',
    imprint_copyright_text: 'El contenido y las obras creadas por los operadores del sitio en estas páginas están sujetos a la ley de derechos de autor italiana e internacional. La duplicación, el procesamiento, la distribución o cualquier forma de comercialización más allá del alcance de la ley de derechos de autor requiere el consentimiento previo por escrito del respectivo autor o creador.',
    imprint_contact_title: 'Contacto',
    imprint_contact_text: 'Para preguntas o inquietudes, contáctanos en:',

    // Contact Page
    contact_title: 'Contáctanos',
    contact_subtitle: '¿Tienes preguntas? Nos encantaría saber de ti. Envíanos un mensaje y responderemos lo antes posible.',
    contact_name: 'Nombre',
    contact_name_placeholder: 'Tu nombre',
    contact_email: 'Email',
    contact_email_placeholder: 'tu.email@ejemplo.com',
    contact_message: 'Mensaje',
    contact_message_placeholder: 'Tu mensaje...',
    contact_send: 'Enviar Mensaje',
    contact_sending: 'Enviando...',
    contact_success_title: '¡Mensaje Enviado!',
    contact_success_message: 'Gracias por contactarnos. Te responderemos pronto a',
    contact_direct: 'También puedes contactarnos directamente en:',

    // Game Page
    game_page_title: 'ForRealScan Mini-Game',
    game_page_subtitle: 'Pon a prueba tu capacidad para distinguir fotos reales de imágenes generadas por IA. Entrena tu ojo y aprende qué buscar.',
    game_feature1_title: 'Afina Tu Ojo',
    game_feature1_text: 'Aprende a reconocer diferencias sutiles entre imágenes reales y de IA.',
    game_feature2_title: 'Comprende los Patrones de IA',
    game_feature2_text: 'Descubre artefactos y características típicas de las imágenes generadas por IA.',
    game_feature3_title: 'Compárate',
    game_feature3_text: 'Mira qué tan bien te desempeñas en comparación con otros jugadores.',
    game_start: 'Iniciar Quiz',
    game_why_title: '¿Por Qué Este Juego?',
    game_why_p1: 'Las imágenes generadas por IA son cada vez más realistas y difíciles de detectar. Con el ForRealScan Mini-Game, puedes aprender de forma lúdica qué buscar para distinguir imágenes reales de artificiales.',
    game_why_p2: 'El juego complementa el análisis de ForRealScan: Mientras el escaneo te da pistas técnicas, el juego ayuda a afinar tu propio juicio.',

    // NotFound Page
    notfound_title: '404',
    notfound_message: 'Página no encontrada',
    notfound_home: 'Volver al Inicio',

    // ComingSoon Page
    comingsoon_redirect: 'Redirigiendo a game.forrealscan.com...',
  },

  fr: {
    // Header
    nav_start: 'Accueil',
    nav_features: 'Fonctionnalités',
    nav_scan: 'Scan',
    nav_veritas_robo: 'Veritas & Robo',
    nav_game: 'Jeu',
    nav_pricing: 'Tarifs',
    nav_faq: 'FAQ',
    cta_app: 'Vérifier l\'Image Maintenant',
    language_label: 'Langue',
    
    // Hero
    hero_title: 'Découvrez la part d\'IA dans vos images',
    hero_subtitle: 'Téléchargez votre image et obtenez un pourcentage avec ForRealScan-Hybrid – avec des indicateurs IA, des zones d\'incertitude et des détails techniques pour mieux évaluer ce qui est réel.',
    hero_cta_primary: 'Vérifier maintenant',
    hero_cta_secondary: 'Voir les exemples',
    hero_microcopy: 'Essai gratuit, sans inscription.',
    
    // How it works
    how_title: 'Comment fonctionne ForRealScan',
    how_step1_title: 'Des probabilités plutôt que des jugements catégoriques',
    how_step1_text: 'ForRealScan-Hybrid vous montre une probabilité estimée de génération IA ou de retouche importante. Il s\'agit d\'indices fondés – pas de verdicts définitifs.',
    how_step2_title: 'De vraies explications, pas seulement des pourcentages',
    how_step2_text: 'Avec le scan Hybrid, vous obtenez des explications compréhensibles : quelles parties de l\'image ou du texte semblent plus naturelles, lesquelles sont plus typiques de l\'IA et pourquoi.',
    how_step3_title: 'Les zones d\'incertitude sont clairement marquées',
    how_step3_text: 'Si un résultat est incertain – par exemple avec des images difficiles – ForRealScan-Hybrid le signale clairement au lieu de feindre la certitude.',
    
    // Story Check & Text
    story_title: 'Vérifiez images, textes et récits ensemble',
    story_text_title: 'Mieux évaluer le contenu IA dans les textes',
    story_text_desc: 'ForRealScan vous aide à mieux évaluer les textes longs : quels passages sonnent très génériques ou uniformes, où se manifeste l\'écriture personnelle ? Les passages suspects peuvent être marqués et brièvement expliqués – toujours avec la note claire qu\'il s\'agit d\'évaluations et de probabilités.',
    story_check_title: 'Story-Check pour captures d\'écran et publications',
    story_check_desc: 'Quand image et texte se rejoignent – par exemple dans une publication sur les réseaux sociaux – ForRealScan peut vérifier si image, description et affirmation correspondent approximativement. Cela vous aide à reconnaître plus rapidement si une histoire dramatique semble vraiment plausible ou plutôt comme un scénario de fantaisie IA.',
    
    // Retouch & Manipulation
    retouch_title: 'L\'édition numérique expliquée clairement',
    retouch_intro: 'Toute retouche n\'est pas mauvaise – mais il est utile de la reconnaître. ForRealScan vous montre où une image a été fortement lissée, accentuée ou significativement modifiée.',
    retouch_point1: 'Le lissage de la peau, les ajustements de lumière ou les filtres forts peuvent être marqués comme retouche possible.',
    retouch_point2: 'Les changements notables des traits du visage ou des proportions peuvent être mentionnés avec prudence.',
    retouch_point3: 'Les textes explicatifs restent neutres et factuels pour que vous puissiez former votre propre jugement.',
    
    // ShareCards (Old - kept for compatibility)
    share_title: 'Partagez les résultats là où ils sont nécessaires',
    share_text: 'Les scans peuvent être partagés sous forme de cartes de résultat compactes, par exemple dans des chats ou sous des publications sur les réseaux sociaux. Cela rend votre évaluation compréhensible pour les autres – y compris les notes sur les incertitudes.',

    // ShareCards Visual Showcase (New)
    sharecard_title: 'Votre résultat en un coup d\'œil',
    sharecard_subtitle: 'Analyses claires sous forme de cartes compactes – prêtes à partager ou à sauvegarder.',
    sharecard_feature1: 'Score immédiatement compréhensible (0–100%)',
    sharecard_feature2: 'Preuves visuelles détaillées',
    sharecard_feature3: 'Optimisé pour les réseaux sociaux et les chats',

    // Disclaimer
    disclaimer_title: 'Note importante',
    disclaimer_text: 'ForRealScan vous fournit des évaluations techniques bien fondées et des probabilités. Les résultats ne sont pas des preuves juridiques, mais vous aident à prendre des décisions plus éclairées – et ne doivent pas servir de base unique pour des accusations ou des allégations sévères.',
    
    // Scan
    scan_title: 'Un Scan – Une clarté maximale.',
    scan_hybrid_title: 'ForRealScan (Hybrid-Scan)',
    scan_hybrid_desc: 'Analyse combinée d\'image et forensique pour votre image.',
    scan_hybrid_feat1: 'Estime la probabilité IA de votre image (0–100%).',
    scan_hybrid_feat2: 'Utilise des signaux forensiques supplémentaires pour la manipulation et la retouche.',
    scan_hybrid_feat3: 'Fournit un résultat clair : authentique, IA ou incertain – avec une brève explication.',
    scan_hybrid_feat4: 'Vérifiez jusqu\'à 5 images par jour avec ForRealScan.',
    scan_limit_label: 'Limite quotidienne : 0/5',
    
    // Examples
    examples_title: 'Voyez-vous la différence ?',
    examples_subtitle: 'Les images générées par IA deviennent de plus en plus réalistes, mais ForRealScan vous aide à voir la différence.',
    examples_real_label: 'Photo réelle',
    examples_ai_label: 'Générée par IA',
    examples_veritas_comment: 'Ombres naturelles et reflets de lumière – clairement réelle.',
    examples_robo_comment: 'Les motifs de pixels et les artefacts indiquent une génération par IA.',
    
    // Mini Game
    game_title: 'Voyez-vous la différence ?',
    game_subtitle: 'Testez votre œil – ForRealScan vous montrera la solution ensuite.',
    game_cta: 'Démarrer le jeu',
    
    // Use Cases
    cases_title: 'À qui s\'adresse ForRealScan ?',
    case1_title: 'Influenceurs & Créateurs',
    case1_text: 'Protégez votre authenticité et prouvez la véracité de vos contenus.',
    case1_detail1: 'Montrez à votre communauté avec un résultat ForRealScan-Hybrid que vos photos sont réelles – même si vous retouchez légèrement.',
    case1_detail2: 'Comparez des photos réelles avec des images IA pour choisir votre propre style d\'image plus consciemment.',
    case1_detail3: 'Vérifiez les visuels de campagne avec le scan Hybrid avant de les partager avec des marques ou des agences.',
    case2_title: 'Journalistes & Vérificateurs',
    case2_text: 'Vérifiez rapidement et de manière transparente les images pour détecter d\'éventuelles manipulations.',
    case2_detail1: 'Scannez les photos de presse avec le scan Hybrid avant de les utiliser dans des articles.',
    case2_detail2: 'Utilisez le Story-Check pour voir si l\'image et le texte correspondent approximativement.',
    case2_detail3: 'Documentez votre vérification avec un bref résultat ForRealScan-Hybrid pour vos lecteurs.',
    case3_title: 'Rencontres & Social',
    case3_text: 'Reconnaissez tôt les photos de profil suspectes et les mises en scène irréalistes.',
    case3_detail1: 'Vérifiez les photos de profil avec le scan Hybrid avant de faire confiance à quelqu\'un.',
    case3_detail2: 'Reconnaissez les selfies fortement retouchés ou générés par IA qui transmettent une fausse image.',
    case3_detail3: 'Scannez les captures d\'écran de publications virales pour mieux les évaluer avant de les partager.',
    case4_title: 'Photographie & Marketing',
    case4_text: 'Rendez visible l\'authenticité de vos visuels.',
    case4_detail1: 'Montrez aux clients quelles images sont de vraies photos et où l\'édition numérique est impliquée.',
    case4_detail2: 'Scannez les photos de produits et les visuels de campagne avec le scan Hybrid avant publication.',
    case4_detail3: 'Utilisez les résultats ForRealScan-Hybrid comme atout de transparence dans vos présentations.',
    
    // Pricing
    pricing_title: 'Choisissez votre formule',
    pricing_free_title: 'Gratuit',
    pricing_free_price: 'Gratuit',
    pricing_free_feat1: 'Vérifiez jusqu\'à 5 images par jour avec ForRealScan.',
    pricing_free_feat2: 'Les publicités prévues soutiennent la version gratuite.',
    pricing_free_feat3: 'Pas de compte nécessaire pour les premiers scans.',
    pricing_free_cta: 'Commencer gratuitement',
    
    pricing_premium_badge: 'Bientôt disponible',
    pricing_premium_title: 'Premium – bientôt disponible',
    pricing_premium_feat1: 'Analyses ForRealScan illimitées prévues sans limite quotidienne.',
    pricing_premium_feat2: 'Expérience sans publicité prévue.',
    pricing_premium_feat3: 'Historique étendu et collection prévus.',
    pricing_premium_feat4: 'Traitement prioritaire prévu.',
    pricing_premium_feat5: '',
    pricing_premium_cta: 'Prévenez-moi au lancement de Premium',
    pricing_premium_coming_soon_title: 'Premium en préparation',
    pricing_premium_coming_soon_message: 'Premium n\'est pas encore disponible. Nous vous informerons dès son lancement.',
    
    // FAQ
    faq_title: 'Questions fréquentes',
    faq_q1: 'ForRealScan est-il gratuit ?',
    faq_a1: 'Oui ! Le scan ForRealScan-Hybrid est gratuit jusqu\'à 5 fois par jour. Premium offre des scans illimités et plus de fonctionnalités.',
    faq_q2: 'Quelle est la fiabilité des évaluations ?',
    faq_a2: 'ForRealScan vous fournit des probabilités bien fondées et des indicateurs techniques. Dans de nombreux tests, les images IA peuvent être reconnues de manière très fiable – mais il n\'y a jamais de garantie à 100%. C\'est pourquoi nous vous montrons toujours les zones d\'incertitude et expliquons pourquoi un résultat est tel qu\'il est, afin que vous puissiez mieux l\'évaluer.',
    faq_q3: 'Y a-t-il différents modes de scan ?',
    faq_a3: 'Auparavant, il y avait deux modes, aujourd\'hui ForRealScan utilise un scan Hybrid qui combine l\'analyse d\'image et la forensique – vous n\'avez rien à choisir. Le scan Hybrid fournit automatiquement la meilleure évaluation disponible.',
    faq_q4: 'Fonctionne-t-il sur tous les appareils ?',
    faq_a4: 'Oui ! ForRealScan est entièrement responsive et fonctionne sur ordinateur, tablette et smartphone.',
    faq_q5: 'Pourquoi y a-t-il des publicités en mode gratuit ?',
    faq_a5: 'Les publicités nous permettent d\'offrir le mode gratuit sans frais. Les utilisateurs Premium bénéficient d\'une expérience sans publicité.',
    faq_q6: 'Puis-je utiliser ForRealScan commercialement ?',
    faq_a6: 'Oui ! Avec un plan Premium, vous pouvez utiliser ForRealScan de manière illimitée à des fins commerciales.',
    faq_q7: 'Stockez-vous mes images ?',
    faq_a7: 'Non. Vos images ne sont traitées que pour l\'analyse et ne sont pas stockées de manière permanente. La confidentialité est notre priorité absolue.',
    faq_q8: 'Quels formats d\'image sont pris en charge ?',
    faq_a8: 'Nous prenons en charge JPG, PNG, WEBP et la plupart des formats d\'image courants jusqu\'à 20 Mo.',
    
    // Footer
    footer_imprint: 'Mentions légales',
    footer_privacy: 'Confidentialité',
    footer_contact: 'Contact',
    footer_copyright: '© {year} ForRealScan. Tous droits réservés.',
    
    // Veritas & Robo Section
    veritas_robo_label: 'Les cerveaux derrière votre scan',
    veritas_robo_title: 'Découvrez Veritas & Robo',
    veritas_robo_subtitle: 'Deux perspectives sur chaque image : Veritas se concentre sur l\'image naturelle globale, Robo sur les motifs techniques de pixels. Ensemble, ils expliquent comment le résultat a été obtenu – de manière compréhensible et sans jargon technique.',
    
    veritas_name: 'Veritas',
    veritas_subtitle: 'la Vue Naturelle',
    veritas_description: 'Se concentre sur le fait qu\'une image ressemble à une vraie photographie.',
    veritas_bullet1: 'La lumière, les ombres et les reflets paraissent naturels.',
    veritas_bullet2: 'Les détails comme la peau, les cheveux et l\'arrière-plan ont de la profondeur.',
    veritas_bullet3: 'Apprécie les petites imperfections typiques des vraies photos.',
    
    robo_name: 'Robo',
    robo_subtitle: 'la Vue Logique',
    robo_description: 'Analyse les motifs, les pixels et les traces techniques des images IA.',
    robo_bullet1: 'Détecte les motifs de pixels visibles et les artefacts de compression.',
    robo_bullet2: 'Surveille la perfection excessive et les répétitions.',
    robo_bullet3: 'Repère les incohérences typiques des images générées par IA.',
    
    veritas_robo_explanation: 'Veritas représente la « Vue Naturelle » : lumière, ombres, profondeur et le ressenti global d\'une image. Robo adopte la « Vue Logique » : pixels, motifs et traces typiques de la génération IA. Les deux regardent la même image – mais sous deux angles – puis se rejoignent dans une évaluation commune.',
    veritas_robo_help_title: 'Comment ils vous aident :',
    veritas_robo_help_step1: '1. Deux perspectives – Veritas vérifie le ressenti de l\'image, Robo les détails techniques.',
    veritas_robo_help_step2: '2. Indices pour « réel » ou « IA » – Les deux recherchent des traces typiques qui parlent pour ou contre l\'IA.',
    veritas_robo_help_step3: '3. Explication en langage clair – À partir des indices, une explication calme et neutre que vous comprenez sans connaissances préalables.',
    veritas_robo_disclaimer: 'Pas de noms de modèles, pas de publicité de fournisseurs – juste une évaluation honnête que vous pouvez comprendre.',
    veritas_robo_closing: 'Veritas et Robo regardent chaque image sous deux angles – à la fin, vous obtenez une évaluation commune et équilibrée par scan ForRealScan-Hybrid.',

    // Examples Page (dedicated page)
    examples_page_title: 'Exemples d\'analyses',
    examples_page_subtitle: 'Découvrez à quoi ressemblent les résultats ForRealScan – avec des explications sur leur interprétation.',
    examples_page_disclaimer: 'Remarque : il s\'agit d\'exemples de démonstration statiques montrant à quoi ressemblent les résultats ForRealScan. Pour une analyse réelle, téléversez votre propre image.',
    examples_page_back: 'Retour',
    examples_page_cta_title: 'Envie de vérifier vos propres images ?',
    examples_page_cta_text: 'Essayez ForRealScan gratuitement – jusqu\'à 5 analyses par jour, sans inscription.',
    examples_page_cta_button: 'Analyser une image maintenant',
    examples_page_context_title: 'Comment utiliser ces résultats',
    examples_page_context_p1: 'Les exemples ci-dessus montrent que ForRealScan peut classifier avec une bonne précision aussi bien les photos réelles que les images générées par IA. Cependant, les résultats sont des guides, pas des preuves absolues.',
    examples_page_context_p2: 'Les images avec des valeurs moyennes (30-70%) nécessitent une attention particulière. Il peut s\'agir de photos réelles légèrement retouchées, d\'images partiellement générées par IA ou simplement de clichés difficiles à classifier. Dans ces cas, nous recommandons de considérer d\'autres facteurs : D\'où vient l\'image ? Qui l\'a publiée ? Existe-t-il d\'autres versions ?',
    examples_page_context_p3: 'En savoir plus sur notre méthodologie sur la',
    examples_page_methodology_link: 'page Méthodologie',
    examples_page_veritas_says: 'Veritas dit :',
    examples_page_robo_says: 'Robo dit :',
    examples_page_context_label: 'Contexte',

    // Examples - Confidence labels
    confidence_high: 'élevée',
    confidence_medium: 'moyenne',
    confidence_low: 'faible',
    confidence_label: 'Confiance',

    // Examples - Real photo specific comments
    examples_real_veritas: 'Irrégularités naturelles dans la texture du pelage. Interaction plausible de la lumière et des ombres. Bokeh organique en arrière-plan.',
    examples_real_robo: 'Aucun motif IA fort détecté. Le bruit de l\'image correspond à une prise de vue réelle. Aucun motif de répétition évident.',
    examples_real_explanation: 'Cette image montre des caractéristiques typiques de la photographie de nature authentique : La texture du pelage présente des irrégularités naturelles, le bokeh de l\'arrière-plan est organique et le bruit de l\'image correspond à celui d\'un vrai appareil photo.',

    // Examples - AI photo comments
    examples_ai1_title: 'Écureuil Généré par IA',
    examples_ai1_veritas: 'Le pelage semble trop uniforme et « peint ». Les yeux ont des reflets anormalement parfaits. La transition vers l\'arrière-plan est trop douce.',
    examples_ai1_robo: 'Artefacts GAN typiques détectés dans les structures du pelage. Les motifs de pixels suggèrent Stable Diffusion ou un modèle similaire. Lissage notable dans les zones de détail.',
    examples_ai1_explanation: 'Bien que réaliste au premier abord, cette image présente plusieurs caractéristiques typiques de l\'IA : Le pelage est texturé de manière trop uniforme, les reflets des yeux sont parfaitement symétriques et les petites imperfections des vraies photos sont absentes.',

    examples_ai2_title: 'Papillon Généré par IA',
    examples_ai2_veritas: 'Les motifs des ailes sont trop parfaitement symétriques. Les couleurs apparaissent sursaturées et anormalement brillantes. La structure corporelle est anatomiquement simplifiée.',
    examples_ai2_robo: 'Motifs de répétition clairs dans la structure des ailes. Détails haute fréquence complètement absents. Signature typique de Midjourney/DALL-E dans les transitions de couleurs.',
    examples_ai2_explanation: 'Cette image montre des signes typiques de génération par IA : saturation des couleurs exagérée, symétrie anormalement parfaite et détails anatomiques simplifiés.',

    // Common
    common_back: 'Retour',

    // Methodology Page
    methodology_title: 'Méthodologie et Technologie',
    methodology_subtitle: 'Comment ForRealScan détecte les images générées par IA – expliqué de manière transparente.',
    methodology_cta_scan: 'Lancer le Scan',
    methodology_cta_examples: 'Voir les Exemples',
    methodology_what_title: 'Ce que fait ForRealScan',
    methodology_what_p1: 'ForRealScan est un outil d\'analyse qui vous aide à évaluer le contenu potentiel d\'IA dans les images. Le service combine diverses méthodes d\'analyse pour trouver des indicateurs si une image a été générée avec la technologie IA ou fortement modifiée.',
    methodology_what_p2: 'Important à comprendre : ForRealScan fournit des probabilités et des évaluations fondées – pas des jugements absolus. La technologie de génération d\'images évolue constamment, et aucun système de détection ne peut garantir une précision de cent pour cent.',
    methodology_how_title: 'Comment fonctionne le Scan',
    methodology_how_intro: 'Le ForRealScan-Hybrid combine deux perspectives d\'analyse, symbolisées par nos mascottes Veritas et Robo :',
    methodology_veritas_title: 'Veritas – La Vue Nature',
    methodology_veritas_text: 'Veritas analyse si une image a les caractéristiques typiques d\'une vraie photographie : éclairage naturel, ombres réalistes, textures organiques de la peau et des cheveux, et les petites imperfections qui distinguent les vraies photos.',
    methodology_robo_title: 'Robo – La Vue Logique',
    methodology_robo_text: 'Robo recherche des motifs techniques typiques des images générées par IA : structures de pixels évidentes, artefacts de compression, perfection exagérée, motifs récurrents et incohérences dans les détails comme les mains, les dents ou les arrière-plans.',
    methodology_how_outro: 'Les deux perspectives confluent vers une évaluation commune. Le résultat est affiché en pourcentage, complété par une explication compréhensible des facteurs ayant conduit à l\'évaluation.',
    methodology_results_title: 'Ce que signifient les Résultats',
    methodology_results_low_title: 'Faible Probabilité IA (0–30%)',
    methodology_results_low_text: 'L\'image montre principalement des caractéristiques de photographie authentique. Les irrégularités naturelles et les détails réalistes suggèrent une vraie photo.',
    methodology_results_mid_title: 'Incertitude Moyenne (30–70%)',
    methodology_results_mid_text: 'L\'image contient à la fois des caractéristiques authentiques et suspectes. Des retouches légères, des filtres ou une assistance partielle de l\'IA sont possibles.',
    methodology_results_high_title: 'Haute Probabilité IA (70–100%)',
    methodology_results_high_text: 'L\'image montre des signes clairs de génération par IA ou de forte manipulation. Des motifs IA typiques et des artefacts techniques ont été détectés.',
    methodology_results_outro: 'Chaque résultat est accompagné d\'une brève explication décrivant quelles caractéristiques spécifiques ont conduit à l\'évaluation. Cela vous permet de comprendre l\'évaluation et de former votre propre jugement.',
    methodology_limits_title: 'Limitations et Quand ça devient Difficile',
    methodology_limits_intro: 'L\'honnêteté est importante pour nous. ForRealScan a – comme tout système de détection – des limitations :',
    methodology_limits_compressed: 'Images très compressées : Les images enregistrées plusieurs fois ou partagées via messenger perdent des détails importants.',
    methodology_limits_screenshots: 'Captures d\'écran : Le texte et les éléments d\'interface compliquent l\'analyse pure de l\'image.',
    methodology_limits_hybrid: 'Images hybrides : Les vraies photos avec édition IA (ex. filtres de visage, changements d\'arrière-plan) sont particulièrement difficiles à classifier.',
    methodology_limits_new_models: 'Derniers modèles IA : La technologie évolue rapidement. Les modèles de génération très récents peuvent être plus difficiles à détecter.',
    methodology_limits_professional: 'Photos professionnelles : Les prises de vue en studio avec un éclairage parfait peuvent être incorrectement classifiées comme "trop parfaites".',
    methodology_limits_outro: 'Quand un résultat est incertain, ForRealScan l\'indique clairement. Dans de tels cas, vous devriez faire des recherches supplémentaires avant de tirer des conclusions.',
    methodology_responsible_title: 'Utilisation Responsable',
    methodology_responsible_intro: 'ForRealScan est un outil d\'orientation – pas une preuve. Les résultats devraient :',
    methodology_responsible_point1: 'Servir de point de départ pour des recherches supplémentaires, pas comme verdict final',
    methodology_responsible_point2: 'Ne pas être utilisés seuls comme base pour des accusations ou des actions légales',
    methodology_responsible_point3: 'Être considérés dans le contexte : la source, l\'expéditeur et la situation jouent un rôle',
    methodology_responsible_point4: 'Être interprétés avec bon sens',
    methodology_responsible_outro: 'Notre objectif est de vous aider à prendre des décisions plus conscientes dans un monde plein d\'images manipulées – pas de semer la méfiance ou d\'encourager des conclusions hâtives.',
    methodology_privacy_title: 'Confidentialité pendant l\'Analyse',
    methodology_privacy_intro: 'Votre vie privée est une priorité :',
    methodology_privacy_point1: 'Les images téléchargées sont uniquement traitées côté serveur pour l\'analyse et ne sont pas stockées de façon permanente',
    methodology_privacy_point2: 'Les résultats et les cartes peuvent – selon l\'utilisation – être stockés localement sur votre appareil dans la collection',
    methodology_privacy_point3: 'La transmission est chiffrée (HTTPS/TLS)',
    methodology_privacy_point4: 'Nous ne vendons pas les données des utilisateurs',
    methodology_privacy_link: 'Plus de détails dans notre Politique de Confidentialité.',
    methodology_summary_title: 'Résumé',
    methodology_summary_text: 'ForRealScan analyse les images à la recherche de motifs typiques de l\'IA et fournit des probabilités plutôt que des jugements absolus. Les résultats servent de guide et doivent être vus dans leur contexte. Aucun système de détection n\'est parfait – ForRealScan indique les incertitudes de manière transparente.',

    // Privacy Page
    privacy_title: 'Politique de Confidentialité',
    privacy_last_updated: 'Dernière mise à jour : Décembre 2025',
    privacy_intro: 'ForRealScan s\'engage à protéger votre vie privée. Cette Politique de Confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et autres lois applicables sur la protection des données.',
    privacy_controller_title: '1. Responsable du Traitement',
    privacy_controller_provider: 'Fournisseur de service :',
    privacy_controller_location: 'Localisation :',
    privacy_controller_email: 'Email :',
    privacy_data_title: '2. Données que Nous Collectons',
    privacy_data_images: 'Images téléchargées : Lorsque vous utilisez notre service d\'analyse IA, vous téléchargez des images pour traitement. Ces images sont traitées en temps réel et ne sont pas stockées de façon permanente sur nos serveurs sauf si vous enregistrez explicitement les résultats.',
    privacy_data_technical: 'Données techniques : Nous collectons automatiquement des informations techniques telles que l\'adresse IP, le type de navigateur, les informations sur l\'appareil et les heures d\'accès à des fins de sécurité et d\'analyse.',
    privacy_data_contact: 'Informations de contact : Si vous nous contactez par email ou formulaire de contact, nous collectons votre nom, adresse email et contenu du message.',
    privacy_purpose_title: '3. Finalité du Traitement des Données',
    privacy_purpose_analysis: 'Analyse d\'images IA : Pour fournir notre service principal de détection de contenu généré par IA dans les images.',
    privacy_purpose_improvement: 'Amélioration du service : Pour analyser les modèles d\'utilisation et améliorer la qualité de notre service.',
    privacy_purpose_communication: 'Communication : Pour répondre à vos demandes et fournir un support client.',
    privacy_purpose_legal: 'Conformité légale : Pour respecter les lois et réglementations applicables.',
    privacy_cookies_title: '4. Cookies et Suivi',
    privacy_cookies_intro: 'Nous utilisons des cookies et des technologies de suivi similaires pour améliorer votre expérience :',
    privacy_cookies_essential: 'Cookies essentiels : Nécessaires au bon fonctionnement du site web.',
    privacy_cookies_analytics: 'Cookies analytiques : Nous aident à comprendre comment les visiteurs interagissent avec notre site (ex. Google Analytics).',
    privacy_cookies_advertising: 'Cookies publicitaires : Utilisés pour afficher des publicités pertinentes (ex. Google AdSense).',
    privacy_cookies_manage: 'Vous pouvez gérer les préférences de cookies dans les paramètres de votre navigateur.',
    privacy_sharing_title: '5. Partage des Données et Tiers',
    privacy_sharing_intro: 'Nous ne vendons pas vos données personnelles. Nous pouvons partager des données avec :',
    privacy_sharing_ai: 'Fournisseurs de services IA : Services tiers de traitement IA qui analysent les images téléchargées.',
    privacy_sharing_analytics: 'Fournisseurs d\'analyse : Services comme Google Analytics pour comprendre l\'utilisation du site.',
    privacy_sharing_advertising: 'Réseaux publicitaires : Services comme Google AdSense pour l\'affichage de publicités.',
    privacy_sharing_legal: 'Obligations légales : Lorsque requis par la loi ou pour protéger nos droits.',
    privacy_rights_title: '6. Vos Droits (RGPD)',
    privacy_rights_intro: 'En vertu du RGPD, vous avez les droits suivants :',
    privacy_rights_access: 'Droit d\'accès : Demander une copie de vos données personnelles.',
    privacy_rights_rectification: 'Droit de rectification : Corriger des données inexactes ou incomplètes.',
    privacy_rights_erasure: 'Droit à l\'effacement : Demander la suppression de vos données personnelles ("droit à l\'oubli").',
    privacy_rights_portability: 'Droit à la portabilité des données : Recevoir vos données dans un format structuré et lisible par machine.',
    privacy_rights_object: 'Droit d\'opposition : S\'opposer au traitement de vos données pour le marketing direct ou d\'autres fins.',
    privacy_rights_withdraw: 'Droit de retirer le consentement : Retirer le consentement à tout moment lorsque le traitement est basé sur le consentement.',
    privacy_rights_exercise: 'Pour exercer ces droits, contactez-nous à :',
    privacy_retention_title: '7. Conservation des Données',
    privacy_retention_text: 'Nous conservons vos données personnelles uniquement le temps nécessaire aux fins décrites dans cette politique ou tel que requis par la loi. Les images téléchargées sont traitées en temps réel et supprimées immédiatement après l\'analyse, sauf si vous choisissez d\'enregistrer les résultats.',
    privacy_security_title: '8. Sécurité des Données',
    privacy_security_text: 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre l\'accès non autorisé, la perte ou l\'altération. Cela inclut le chiffrement, des serveurs sécurisés et des contrôles d\'accès.',
    privacy_international_title: '9. Transferts Internationaux de Données',
    privacy_international_text: 'Vos données peuvent être transférées et traitées dans des pays en dehors de l\'Espace Économique Européen (EEE). Nous veillons à ce que des garanties appropriées soient en place, telles que les Clauses Contractuelles Types approuvées par la Commission Européenne.',
    privacy_children_title: '10. Confidentialité des Enfants',
    privacy_children_text: 'Notre service n\'est pas destiné aux enfants de moins de 16 ans. Nous ne collectons pas sciemment de données personnelles d\'enfants. Si vous pensez que nous avons collecté des données d\'un enfant, veuillez nous contacter immédiatement.',
    privacy_changes_title: '11. Modifications de cette Politique',
    privacy_changes_text: 'Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. Nous vous informerons des changements importants en publiant la nouvelle politique sur cette page avec une date de "Dernière mise à jour" actualisée.',
    privacy_contact_title: '12. Nous Contacter',
    privacy_contact_text: 'Pour toute question ou préoccupation concernant cette Politique de Confidentialité ou nos pratiques en matière de données, veuillez nous contacter à :',

    // Imprint Page
    imprint_title: 'Mentions Légales',
    imprint_info_title: 'Informations selon § 5 TMG',
    imprint_provider: 'Fournisseur de service :',
    imprint_location: 'Localisation :',
    imprint_email: 'Email :',
    imprint_responsible_title: 'Responsable du Contenu',
    imprint_dispute_title: 'Résolution des Litiges UE',
    imprint_dispute_text: 'La Commission Européenne fournit une plateforme pour la résolution des litiges en ligne (OS) :',
    imprint_disclaimer_title: 'Avertissement',
    imprint_liability_content_title: 'Responsabilité pour le contenu :',
    imprint_liability_content_text: 'Les contenus de nos pages ont été créés avec le plus grand soin. Cependant, nous ne pouvons garantir l\'exactitude, l\'exhaustivité ou l\'actualité des contenus. Selon les dispositions légales, nous sommes responsables de notre propre contenu sur ces pages. Cependant, nous ne sommes pas obligés de surveiller les informations de tiers transmises ou stockées ou d\'enquêter sur des circonstances indiquant une activité illégale.',
    imprint_liability_links_title: 'Responsabilité pour les liens :',
    imprint_liability_links_text: 'Notre offre contient des liens vers des sites web externes de tiers, sur le contenu desquels nous n\'avons aucune influence. Par conséquent, nous ne pouvons assumer aucune responsabilité pour ces contenus externes. Le fournisseur ou l\'opérateur respectif des pages est toujours responsable du contenu des pages liées.',
    imprint_copyright_title: 'Droits d\'auteur :',
    imprint_copyright_text: 'Le contenu et les œuvres créés par les opérateurs du site sur ces pages sont soumis au droit d\'auteur italien et international. La duplication, le traitement, la distribution ou toute forme de commercialisation au-delà de la portée du droit d\'auteur nécessite le consentement écrit préalable de l\'auteur ou créateur respectif.',
    imprint_contact_title: 'Contact',
    imprint_contact_text: 'Pour toute question ou préoccupation, contactez-nous à :',

    // Contact Page
    contact_title: 'Contactez-nous',
    contact_subtitle: 'Vous avez des questions ? Nous serions ravis de vous entendre. Envoyez-nous un message et nous vous répondrons dès que possible.',
    contact_name: 'Nom',
    contact_name_placeholder: 'Votre nom',
    contact_email: 'Email',
    contact_email_placeholder: 'votre.email@exemple.fr',
    contact_message: 'Message',
    contact_message_placeholder: 'Votre message...',
    contact_send: 'Envoyer le Message',
    contact_sending: 'Envoi en cours...',
    contact_success_title: 'Message Envoyé !',
    contact_success_message: 'Merci de nous avoir contactés. Nous vous répondrons bientôt à',
    contact_direct: 'Vous pouvez aussi nous joindre directement à :',

    // Game Page
    game_page_title: 'ForRealScan Mini-Game',
    game_page_subtitle: 'Testez votre capacité à distinguer les vraies photos des images générées par IA. Entraînez votre œil et apprenez ce qu\'il faut chercher.',
    game_feature1_title: 'Affûtez Votre Œil',
    game_feature1_text: 'Apprenez à reconnaître les différences subtiles entre les images réelles et IA.',
    game_feature2_title: 'Comprenez les Motifs IA',
    game_feature2_text: 'Découvrez les artefacts et caractéristiques typiques des images générées par IA.',
    game_feature3_title: 'Comparez-vous',
    game_feature3_text: 'Voyez comment vous vous en sortez par rapport aux autres joueurs.',
    game_start: 'Démarrer le Quiz',
    game_why_title: 'Pourquoi ce Jeu ?',
    game_why_p1: 'Les images générées par IA deviennent de plus en plus réalistes et difficiles à détecter. Avec le ForRealScan Mini-Game, vous pouvez apprendre de manière ludique ce qu\'il faut chercher pour distinguer les vraies images des images artificielles.',
    game_why_p2: 'Le jeu complète l\'analyse ForRealScan : Pendant que le scan vous donne des indices techniques, le jeu aide à affûter votre propre jugement.',

    // NotFound Page
    notfound_title: '404',
    notfound_message: 'Page non trouvée',
    notfound_home: 'Retour à l\'Accueil',

    // ComingSoon Page
    comingsoon_redirect: 'Redirection vers game.forrealscan.com...',
  },
};