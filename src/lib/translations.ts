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
  
  // Story Check & Text (Sektion 2: Drei Scan-Modi)
  story_title: string;
  story_text_title: string;
  story_text_desc: string;
  story_check_title: string;
  story_check_desc: string;
  story_full_title: string;
  story_full_desc: string;
  
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
  
  // Scan Modes
  scan_section_title: string;
  scan_section_subtitle: string;
  scan_compare_link: string;
  scan_most_popular: string;
  scan_premium_badge: string;
  scan_cta: string;
  // Category Headers
  scan_cat_learn: string;
  scan_cat_get: string;
  scan_cat_ideal: string;
  // ImageScan
  scan_image_title: string;
  scan_image_subtitle: string;
  scan_image_desc: string;
  scan_image_credits: string;
  scan_image_credits_value: string;
  scan_image_learn_1: string;
  scan_image_learn_2: string;
  scan_image_learn_3: string;
  scan_image_learn_4: string;
  scan_image_get_1: string;
  scan_image_get_2: string;
  scan_image_get_3: string;
  scan_image_ideal_1: string;
  scan_image_ideal_2: string;
  scan_image_ideal_3: string;
  // StoryScan
  scan_story_title: string;
  scan_story_subtitle: string;
  scan_story_desc: string;
  scan_story_credits: string;
  scan_story_credits_value: string;
  scan_story_learn_1: string;
  scan_story_learn_2: string;
  scan_story_learn_3: string;
  scan_story_learn_4: string;
  scan_story_get_1: string;
  scan_story_get_2: string;
  scan_story_get_3: string;
  scan_story_ideal_1: string;
  scan_story_ideal_2: string;
  scan_story_ideal_3: string;
  // FullScan
  scan_full_title: string;
  scan_full_subtitle: string;
  scan_full_desc: string;
  scan_full_credits: string;
  scan_full_credits_value: string;
  scan_full_learn_1: string;
  scan_full_learn_2: string;
  scan_full_learn_3: string;
  scan_full_get_1: string;
  scan_full_get_2: string;
  scan_full_get_3: string;
  scan_full_get_4: string;
  scan_full_ideal_1: string;
  scan_full_ideal_2: string;
  scan_full_ideal_3: string;
  
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
  pricing_guest_title: string;
  pricing_guest_credits: string;
  pricing_guest_feat1: string;
  pricing_guest_feat2: string;
  pricing_guest_cta: string;
  pricing_account_title: string;
  pricing_account_credits: string;
  pricing_account_feat1: string;
  pricing_account_feat2: string;
  pricing_account_feat3: string;
  pricing_account_cta: string;
  pricing_info_title: string;
  pricing_info_guest: string;
  pricing_info_account: string;
  pricing_packages_title: string;
  pricing_starter_name: string;
  pricing_starter_credits: string;
  pricing_plus_name: string;
  pricing_plus_credits: string;
  pricing_pro_name: string;
  pricing_pro_credits: string;
  pricing_package_cta: string;
  pricing_trust_onetime: string;
  pricing_trust_nosub: string;
  pricing_trust_secure: string;
  
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
  
  // Section 1: Three Modes
  methodology_modes_title: string;
  methodology_modes_intro: string;
  methodology_mode_image_name: string;
  methodology_mode_image_question: string;
  methodology_mode_image_method: string;
  methodology_mode_image_credits: string;
  methodology_mode_image_output: string;
  methodology_mode_story_name: string;
  methodology_mode_story_question: string;
  methodology_mode_story_method: string;
  methodology_mode_story_credits: string;
  methodology_mode_story_output: string;
  methodology_mode_full_name: string;
  methodology_mode_full_question: string;
  methodology_mode_full_method: string;
  methodology_mode_full_credits: string;
  methodology_mode_full_output: string;
  methodology_modes_outro: string;
  methodology_modes_table_question: string;
  methodology_modes_table_method: string;
  methodology_modes_table_credits: string;
  methodology_modes_table_output: string;
  
  // Section 2: Dual System
  methodology_dual_title: string;
  methodology_dual_intro: string;
  methodology_veritas_title: string;
  methodology_veritas_color: string;
  methodology_veritas_intro: string;
  methodology_veritas_point1: string;
  methodology_veritas_point2: string;
  methodology_veritas_point3: string;
  methodology_veritas_point4: string;
  methodology_veritas_point5: string;
  methodology_robo_title: string;
  methodology_robo_color: string;
  methodology_robo_intro: string;
  methodology_robo_point1: string;
  methodology_robo_point2: string;
  methodology_robo_point3: string;
  methodology_robo_point4: string;
  methodology_robo_point5: string;
  methodology_robo_point6: string;
  methodology_dual_cooperation: string;
  methodology_dual_cooperation_text: string;
  
  // Section 3: Understanding Results
  methodology_results_title: string;
  methodology_results_intro: string;
  methodology_results_scale_title: string;
  methodology_results_low_title: string;
  methodology_results_low_text: string;
  methodology_results_mid_title: string;
  methodology_results_mid_text: string;
  methodology_results_high_title: string;
  methodology_results_high_text: string;
  methodology_confidence_title: string;
  methodology_confidence_intro: string;
  methodology_confidence_very_high: string;
  methodology_confidence_high: string;
  methodology_confidence_moderate: string;
  methodology_confidence_low: string;
  methodology_sources_title: string;
  methodology_sources_intro: string;
  methodology_sources_tier_a: string;
  methodology_sources_tier_b: string;
  methodology_sources_tier_c: string;
  
  // Section 4: Limitations
  methodology_limits_title: string;
  methodology_limits_intro: string;
  methodology_hardscenes_title: string;
  methodology_hardscenes_intro: string;
  methodology_hardscenes_landscape: string;
  methodology_hardscenes_nightsky: string;
  methodology_hardscenes_artwork: string;
  methodology_hardscenes_abstract: string;
  methodology_hardscenes_outro: string;
  methodology_other_limits_title: string;
  methodology_limits_compressed: string;
  methodology_limits_screenshots: string;
  methodology_limits_hybrid: string;
  methodology_limits_new_models: string;
  methodology_limits_professional: string;
  methodology_limits_outro: string;
  
  // Section 5: Responsible Use
  methodology_responsible_title: string;
  methodology_responsible_intro: string;
  methodology_responsible_subtitle: string;
  methodology_responsible_point1: string;
  methodology_responsible_point2: string;
  methodology_responsible_point3: string;
  methodology_responsible_point4: string;
  methodology_responsible_outro: string;
  
  // Section 6: Privacy
  methodology_privacy_title: string;
  methodology_privacy_intro: string;
  methodology_privacy_local: string;
  methodology_privacy_server: string;
  methodology_privacy_no_training: string;
  methodology_privacy_encryption: string;
  methodology_privacy_no_sale: string;
  methodology_privacy_link: string;
  
  // Section 7: Summary
  methodology_summary_title: string;
  methodology_summary_text: string;
  methodology_summary_tagline: string;

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
    hero_subtitle: 'Lade dein Bild hoch und erhalte mit ForRealScan einen Prozentwert – mit KI-Hinweisen, Unsicherheitszonen und technischen Details, damit du besser einschätzen kannst, was echt ist.',
    hero_cta_primary: 'Jetzt prüfen',
    hero_cta_secondary: 'Beispiele ansehen',
    hero_microcopy: 'Kostenlos testen, keine Anmeldung nötig.',
    
    // How it works
    how_title: 'Wie funktioniert ForRealScan?',
    how_step1_title: 'Drei Wege zur Wahrheit',
    how_step1_text: 'Ob KI-Porträt, virale Story oder gezielte Desinformation – du entscheidest, wie tief wir graben. Der ImageScan entlarvt künstliche Muster, der StoryScan verifiziert Fakten und der FullScan deckt das gefährliche Zusammenspiel von Bild und Lüge auf.',
    how_step2_title: 'Klartext statt Rätselraten',
    how_step2_text: 'Du erhältst eine präzise Wahrscheinlichkeit und glasklare Hinweise. Wir verzichten auf kryptische Zahlenreihen. Stattdessen liefern wir verständliche Erklärungen, die du sofort interpretieren und als Beweis teilen kannst.',
    how_step3_title: 'Souverän bei Zweifelsfällen',
    how_step3_text: 'In der digitalen Grauzone ist nichts schwarz-weiß. Wenn ein Ergebnis nicht eindeutig ist, kommunizieren wir das offen. Wir zeigen dir beide Analyse-Seiten, damit du die informierte Entscheidung triffst.',
    
    // Story Check & Text (Sektion 2: Drei Scan-Modi)
    story_title: 'Drei Scan-Modi für jede Situation',
    story_text_title: 'ImageScan – Echt oder KI?',
    story_text_desc: 'Lade ein Bild hoch und erfahre in Sekunden, ob es von einer Kamera stammt oder künstlich generiert wurde. Du bekommst eine Wahrscheinlichkeit plus verständliche Hinweise, woran wir das festmachen. Der perfekte Schnellcheck für verdächtige Fotos aus dem Netz.',
    story_check_title: 'StoryScan – Stimmt die Geschichte?',
    story_check_desc: 'Lade einen Screenshot hoch oder füge eine Behauptung ein. ForRealScan recherchiert Quellen und bewertet deren Seriosität im Ranking (A bis C). So entlarvst du sofort, was plausibel, zweifelhaft oder bereits widerlegt ist.',
    story_full_title: 'FullScan – Das komplette Bild',
    story_full_desc: 'Ein echtes Foto kombiniert mit einer erfundenen Story ist die stärkste Waffe der Desinformation. Der FullScan erkennt diese Kontext-Manipulation, indem er Bild und Behauptung gleichzeitig prüft. Der ultimative Schutzschild für maximale Sicherheit.',
    
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
    
    // Scan Modes
    scan_section_title: 'Was möchtest du prüfen?',
    scan_section_subtitle: 'Wähle das passende Paket für deine Analyse',
    scan_compare_link: 'Modi vergleichen',
    scan_most_popular: 'Beliebt',
    scan_premium_badge: '💎💎💎',
    scan_cta: 'Scan starten',
    // Category Headers
    scan_cat_learn: 'WAS DU ERFÄHRST',
    scan_cat_get: 'DU ERHÄLTST',
    scan_cat_ideal: 'IDEAL FÜR',
    // ImageScan
    scan_image_title: 'ImageScan',
    scan_image_subtitle: 'Ist mein Bild echt oder KI-generiert?',
    scan_image_desc: 'KI-Analyse mit forensischen Signalen',
    scan_image_credits: 'Credit',
    scan_image_credits_value: '1',
    scan_image_learn_1: 'KI-Wahrscheinlichkeit in % (Midjourney, DALL-E, Flux, Stable Diffusion, ChatGPT, Leonardo, Firefly & mehr)',
    scan_image_learn_2: 'Verdict: Echt / KI-generiert / Unklar',
    scan_image_learn_3: '3-5 bildspezifische Hinweise',
    scan_image_learn_4: 'Visuelle Auffälligkeiten (Gesichter, Hände, Texturen, Beleuchtung)',
    scan_image_get_1: 'Ergebnis-Karte',
    scan_image_get_2: 'Share-Karte zum Teilen',
    scan_image_get_3: '3-5 Key-Findings',
    scan_image_ideal_1: 'Schnelle Prüfung einzelner Bilder',
    scan_image_ideal_2: 'Social Media Posts checken',
    scan_image_ideal_3: 'Verdächtige Profilbilder entlarven',
    // StoryScan
    scan_story_title: 'StoryScan',
    scan_story_subtitle: 'Stimmt diese Story / Behauptung?',
    scan_story_desc: 'Fact-Check mit Quellen-Verifizierung',
    scan_story_credits: 'Credits',
    scan_story_credits_value: '2',
    scan_story_learn_1: 'Faktencheck mit Quellennachweis',
    scan_story_learn_2: 'Accuracy-Einschätzung (z.B. "70-85% korrekt")',
    scan_story_learn_3: 'Was stimmt ✓ / Was fehlt oder irreführt ⚠',
    scan_story_learn_4: 'Verifizierte Quellen mit Links',
    scan_story_get_1: 'Ergebnis-Karte',
    scan_story_get_2: 'Share-Karte zum Teilen',
    scan_story_get_3: 'PDF-Report (1 Seite)',
    scan_story_ideal_1: 'Virale Behauptungen prüfen',
    scan_story_ideal_2: 'News-Meldungen verifizieren',
    scan_story_ideal_3: 'Kettenbriefe & Gerüchte entlarven',
    // FullScan
    scan_full_title: 'FullScan',
    scan_full_subtitle: 'Komplett-Check (Bild + Kontext)',
    scan_full_desc: 'Bild-Analyse + Quellen-Check in einem',
    scan_full_credits: 'Credits',
    scan_full_credits_value: '3',
    scan_full_learn_1: 'Komplette Bildanalyse (wie ImageScan)',
    scan_full_learn_2: 'Vollständiger Faktencheck (wie StoryScan)',
    scan_full_learn_3: '⚠ Konflikt-Erkennung: Warnt wenn echtes Bild mit falschem Kontext ODER KI-Bild mit richtigem Kontext verwendet wird',
    scan_full_get_1: 'Ergebnis-Karte',
    scan_full_get_2: 'Share-Karte zum Teilen',
    scan_full_get_3: 'PDF-Report mit allen Details',
    scan_full_get_4: '3-5 Key-Findings',
    scan_full_ideal_1: 'Verdächtige Bild-Text-Kombinationen',
    scan_full_ideal_2: 'Professionelle Verifikation',
    scan_full_ideal_3: 'Wenn du auf Nummer sicher gehen willst',
    
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
    case1_title: 'Creator & Influencer',
    case1_text: 'Sichere deine Glaubwürdigkeit als wichtigstes Kapital.',
    case1_detail1: 'ImageScan: Belege die Echtheit deiner Aufnahmen und grenze dich aktiv von KI-Content ab.',
    case1_detail2: 'StoryScan: Verifiziere Marken-Claims bei Kooperationen, bevor du deinen Namen dafür hergibst.',
    case1_detail3: 'FullScan: Schütze deinen Feed und deine Community vor unbeabsichtigten Falschmeldungen.',
    case2_title: 'Journalisten & Fact-Checker',
    case2_text: 'Maximale Präzision für deine Recherche in Rekordzeit.',
    case2_detail1: 'ImageScan: Entlarve manipulierte Einsendungen, bevor sie deine Story gefährden.',
    case2_detail2: 'StoryScan: Finde seriöse Primärquellen für virale Behauptungen in Sekunden.',
    case2_detail3: 'FullScan: Decke bei Breaking News gezielte Kontext-Manipulationen sofort auf.',
    case3_title: 'Dating & Social Media',
    case3_text: 'Trau deinen Augen, aber vertrau bei Zweifeln auf unsere Analyse.',
    case3_detail1: 'ImageScan: Überführe künstlich generierte Profile mit einem Klick.',
    case3_detail2: 'StoryScan: Wenn eine Geschichte zu perfekt klingt, liefern wir den Realitäts-Check.',
    case3_detail3: 'FullScan: Schütze dich vor Romance-Scam, indem du Bild und Story zusammen prüfst.',
    case4_title: 'Fotografie & Marketing',
    case4_text: 'Zeige die Authentizität deiner Arbeit.',
    case4_detail1: 'ImageScan: Beweise den Wert deiner echten Fotokunst gegenüber KI-Generaten.',
    case4_detail2: 'StoryScan: Verifiziere Hintergrund-Infos für Kunden-Briefings schnell und sicher.',
    case4_detail3: 'FullScan: Stelle sicher, dass Testimonials und Werbebotschaften zusammenpassen.',
    
    // Pricing
    pricing_title: 'Credits & Preise',
    pricing_guest_title: 'Gast-Modus',
    pricing_guest_credits: '3 Credits / Tag',
    pricing_guest_feat1: 'Kein Konto erforderlich',
    pricing_guest_feat2: 'Gerätgebunden',
    pricing_guest_cta: 'Jetzt starten',
    pricing_account_title: 'Mit Konto',
    pricing_account_credits: '5 Credits / Tag',
    pricing_account_feat1: 'Geräteübergreifend nutzbar',
    pricing_account_feat2: 'Credit-Pakete kaufbar',
    pricing_account_feat3: 'Sammlung & Historie',
    pricing_account_cta: 'Konto erstellen',
    pricing_info_title: 'So funktioniert es',
    pricing_info_guest: 'Gast-Modus: 3 kostenlose Credits pro Tag auf diesem Gerät.',
    pricing_info_account: 'Mit Konto: 5 kostenlose Credits pro Tag plus optionale Credit-Pakete für Zusatz-Scans.',
    pricing_packages_title: 'Mehr Credits benötigt?',
    pricing_starter_name: 'Starter-Paket',
    pricing_starter_credits: '20 Credits',
    pricing_plus_name: 'Plus-Paket',
    pricing_plus_credits: '50 Credits',
    pricing_pro_name: 'Pro-Paket',
    pricing_pro_credits: '100 Credits',
    pricing_package_cta: 'Credits holen',
    pricing_trust_onetime: 'Einmalzahlung',
    pricing_trust_nosub: 'Kein Abo',
    pricing_trust_secure: 'Sichere Zahlung',
    
    // FAQ
    faq_title: 'Häufig gestellte Fragen',
    faq_q1: 'Ist ForRealScan kostenlos?',
    faq_a1: 'Ja, du kannst sofort starten. Als Gast hast du 3 Credits pro Tag frei, mit kostenlosem Konto sind es 5. Für Power-User gibt es Credit-Pakete ab 1,49 €.',
    faq_q2: 'Was ist der Unterschied zwischen den Scan-Modi?',
    faq_a2: 'ImageScan (1 Credit) prüft ob ein Bild echt oder KI-generiert ist. StoryScan (2 Credits) checkt ob eine Behauptung stimmt. FullScan (3 Credits) kombiniert beides und erkennt Kontext-Manipulation.',
    faq_q3: 'Wer sind Veritas und Robo?',
    faq_a3: 'Deine zwei Analyse-Perspektiven. Veritas (die Eule) sucht nach Hinweisen für Echtheit. Robo (der Roboter) erkennt künstliche Muster und Anomalien. Gemeinsam liefern sie ein ausgewogenes Bild.',
    faq_q4: 'Wie zuverlässig sind die Ergebnisse?',
    faq_a4: 'Wir liefern Wahrscheinlichkeiten – keine absoluten Urteile. Unsere Technologie wird ständig präziser, doch dein gesunder Menschenverstand bleibt die finale Instanz.',
    faq_q5: 'Werden meine Bilder gespeichert?',
    faq_a5: 'Nein. Deine Bilder bleiben auf deinem Gerät. Sie werden nur für die Analyse kurz verarbeitet und nicht auf unseren Servern gespeichert.',
    faq_q6: 'Funktioniert es auf dem Handy?',
    faq_a6: 'Ja, auf allen Geräten. iPhone, Android, Tablet, Desktop – ForRealScan läuft direkt im Browser. Keine Installation, kein Tracking, sofort einsatzbereit.',
    faq_q7: 'Was sind Credits?',
    faq_a7: 'Deine Währung für Wahrheit. Du erhältst täglich Gratis-Credits. Zusätzliche kaufst du in Paketen: 20 für 1,49 € · 50 für 2,99 € · 100 für 4,99 €. Sie verfallen nie.',
    faq_q8: 'Welche Bildformate werden unterstützt?',
    faq_a8: 'JPEG, PNG und WebP bis 10 MB. Das deckt praktisch alle Bilder ab, die du im Alltag findest.',
    
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
    veritas_robo_closing: 'Veritas und Robo sehen sich jedes Bild aus zwei Richtungen an – am Ende bekommst du eine gemeinsame, ausgewogene Einschätzung pro ForRealScan.',

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
    methodology_subtitle: 'Transparenz schafft Vertrauen. So arbeitet ForRealScan – von der Analyse bis zum Ergebnis, offen erklärt.',
    methodology_cta_scan: 'Jetzt Scan starten',
    methodology_cta_examples: 'Beispiele ansehen',

    // Section 1: Three Modes
    methodology_modes_title: 'Drei Modi. Ein Ziel: Klarheit.',
    methodology_modes_intro: 'ForRealScan bietet drei Analyse-Modi, die unterschiedliche Fragen beantworten:',
    methodology_mode_image_name: 'ImageScan',
    methodology_mode_image_question: 'Ist dieses Bild echt oder KI-generiert?',
    methodology_mode_image_method: 'Forensische Bildanalyse + GPT-4o Vision',
    methodology_mode_image_credits: '1 Credit',
    methodology_mode_image_output: 'Sammelkarte + Share-Card',
    methodology_mode_story_name: 'StoryScan',
    methodology_mode_story_question: 'Stimmt diese Behauptung?',
    methodology_mode_story_method: 'Quellen-Recherche + Faktencheck',
    methodology_mode_story_credits: '2 Credits',
    methodology_mode_story_output: 'Sammelkarte + PDF-Report',
    methodology_mode_full_name: 'FullScan',
    methodology_mode_full_question: 'Passt das Bild zur Geschichte?',
    methodology_mode_full_method: 'Bildanalyse + Faktencheck + Konflikt-Erkennung',
    methodology_mode_full_credits: '3 Credits',
    methodology_mode_full_output: 'Dual-Card mit beiden Analysen',
    methodology_modes_outro: 'StoryScan akzeptiert Text direkt oder extrahiert ihn automatisch aus Screenshots (OCR). FullScan erkennt die gefährlichste Form der Täuschung: wenn ein echtes Bild mit einer falschen Geschichte verknüpft wird – oder umgekehrt.',
    methodology_modes_table_question: 'Frage',
    methodology_modes_table_method: 'Methode',
    methodology_modes_table_credits: 'Credits',
    methodology_modes_table_output: 'Output',

    // Section 2: Dual System
    methodology_dual_title: 'Zwei Perspektiven. Ein Urteil.',
    methodology_dual_intro: 'Wir verlassen uns nicht auf einen einzelnen Algorithmus. ForRealScan nutzt zwei gegensätzliche Analyse-Logiken:',
    methodology_veritas_title: 'VERITAS – Der Authentizitäts-Blick',
    methodology_veritas_color: 'Farbe: Grün',
    methodology_veritas_intro: 'Veritas sucht nach dem Fingerabdruck der Realität:',
    methodology_veritas_point1: 'Natürliche Unregelmäßigkeiten in Bildstrukturen',
    methodology_veritas_point2: 'Typische Kompressionsartefakte echter Kameras',
    methodology_veritas_point3: 'Physikalisch korrekte Schatten und Lichtreflexe',
    methodology_veritas_point4: 'Organische Texturvariationen bei Haut, Haaren, Oberflächen',
    methodology_veritas_point5: 'Gewachsene Komposition statt konstruierter Perfektion',
    methodology_robo_title: 'ROBO – Der KI-Detektor',
    methodology_robo_color: 'Farbe: Blau',
    methodology_robo_intro: 'Robo ist auf das Unnatürliche spezialisiert:',
    methodology_robo_point1: 'Konsens-Signale: Mehrere unabhängige Checks weisen auf KI hin',
    methodology_robo_point2: 'Forensische Marker: Pixelmuster, die nur generative Modelle erzeugen',
    methodology_robo_point3: 'Anatomie-Fehler: Unlogische Handstrukturen, verschmolzene Finger',
    methodology_robo_point4: 'Textur-Artefakte: Übermäßig glatte, plastikartige Oberflächen',
    methodology_robo_point5: 'Physik-Brüche: Licht, Schatten oder Perspektive folgen keiner Logik',
    methodology_robo_point6: 'Uncanny Signatures: Der Gesamteindruck wirkt künstlich und unheimlich',
    methodology_dual_cooperation: 'Wie sie zusammenarbeiten',
    methodology_dual_cooperation_text: 'Wenn beide sich einig sind, ist das Ergebnis eindeutig. Bei Uneinigkeit zeigt ForRealScan beide Perspektiven transparent nebeneinander – damit du dir selbst ein Bild machen kannst.',

    // Section 3: Understanding Results
    methodology_results_title: 'Ergebnisse verstehen',
    methodology_results_intro: 'Ein Scan liefert mehr als eine Zahl.',
    methodology_results_scale_title: 'Die Wahrscheinlichkeits-Skala',
    methodology_results_low_title: '0–30%: Niedrige KI-Wahrscheinlichkeit',
    methodology_results_low_text: 'Überwiegend VERITAS-Hinweise. Das Bild zeigt Merkmale echter Fotografie.',
    methodology_results_mid_title: '30–70%: Unsicherheitszone',
    methodology_results_mid_text: 'Beide Perspektiven werden angezeigt. Authentische und verdächtige Signale halten sich die Waage.',
    methodology_results_high_title: '70–100%: Hohe KI-Wahrscheinlichkeit',
    methodology_results_high_text: 'Überwiegend ROBO-Hinweise. Typische Muster generativer KI wurden erkannt.',
    methodology_confidence_title: 'Das Konfidenz-Level',
    methodology_confidence_intro: 'Zusätzlich zur Wahrscheinlichkeit zeigen wir, wie sicher sich das System bei seiner Einschätzung ist:',
    methodology_confidence_very_high: 'Sehr hoch: Die Signale sind eindeutig und konsistent',
    methodology_confidence_high: 'Hoch: Klare Tendenz mit geringen Restzweifeln',
    methodology_confidence_moderate: 'Moderat: Erkennbare Muster, aber Interpretationsspielraum',
    methodology_confidence_low: 'Gering: Wenige verwertbare Signale – Vorsicht bei Schlussfolgerungen',
    methodology_sources_title: 'Bei StoryScan: Quellen-Transparenz',
    methodology_sources_intro: 'Wir klassifizieren jede gefundene Quelle nach ihrer journalistischen Integrität:',
    methodology_sources_tier_a: 'Tier A: Primärquellen mit höchster Verlässlichkeit (Reuters, AP, BBC, NYT, .gov, .edu)',
    methodology_sources_tier_b: 'Tier B: Etablierte Qualitätsmedien (Forbes, Bloomberg, Tagesschau, Zeit)',
    methodology_sources_tier_c: 'Tier C: Weitere verifizierbare Quellen – mit Vorsicht zu bewerten',

    // Section 4: Limitations
    methodology_limits_title: 'Ehrliche Grenzen',
    methodology_limits_intro: 'Kein Erkennungssystem ist unfehlbar. Wir kommunizieren unsere Grenzen offen:',
    methodology_hardscenes_title: 'Schwierige Szenentypen (Hard Scenes)',
    methodology_hardscenes_intro: 'Bestimmte Bildtypen sind für KI-Detektoren naturgemäß herausfordernd:',
    methodology_hardscenes_landscape: 'Landschaften – wenige anatomische Ankerpunkte',
    methodology_hardscenes_nightsky: 'Nachthimmel & Nordlichter – abstrakte Lichtphänomene',
    methodology_hardscenes_artwork: 'Kunstwerke – absichtlich stilisiert',
    methodology_hardscenes_abstract: 'Abstrakte Bilder – keine Realitätsreferenz',
    methodology_hardscenes_outro: 'Bei diesen Szenen zeigt ForRealScan einen entsprechenden Hinweis.',
    methodology_other_limits_title: 'Weitere Einschränkungen',
    methodology_limits_compressed: 'Stark komprimierte Bilder: Mehrfaches Speichern oder Teilen über Messenger zerstört forensische Details.',
    methodology_limits_screenshots: 'Screenshots: Text und Interface-Elemente überlagern die reine Bildanalyse.',
    methodology_limits_hybrid: 'Hybride Bilder: Echte Fotos mit KI-Retusche (Filter, Hintergrundänderungen) – die Königsdisziplin der Detektion.',
    methodology_limits_new_models: 'Neueste KI-Modelle: Die Technologie entwickelt sich rasant. Sehr neue Generierungsmodelle können schwerer erkennbar sein.',
    methodology_limits_professional: 'Professionelle Studiofotos: Perfekte Ausleuchtung kann fälschlicherweise als "zu perfekt" gewertet werden.',
    methodology_limits_outro: 'Wenn ein Ergebnis unsicher ist, zeigt ForRealScan dies deutlich an.',

    // Section 5: Responsible Use
    methodology_responsible_title: 'Verantwortungsvoller Umgang',
    methodology_responsible_intro: 'ForRealScan ist ein Werkzeug zur Orientierung – kein Beweisinstrument.',
    methodology_responsible_subtitle: 'Die Ergebnisse sollten:',
    methodology_responsible_point1: 'Als Ausgangspunkt für weitere Recherche dienen, nicht als abschließendes Urteil',
    methodology_responsible_point2: 'Nicht allein als Grundlage für Anschuldigungen oder rechtliche Schritte verwendet werden',
    methodology_responsible_point3: 'Im Kontext betrachtet werden: Quelle, Absender und Situation spielen eine Rolle',
    methodology_responsible_point4: 'Mit gesundem Menschenverstand interpretiert werden',
    methodology_responsible_outro: 'Unser Ziel: Dir helfen, in einer Welt voller manipulierter Inhalte bewusstere Entscheidungen zu treffen – nicht, Misstrauen zu säen oder voreilige Schlüsse zu fördern.',

    // Section 6: Privacy
    methodology_privacy_title: 'Datenschutz bei der Analyse',
    methodology_privacy_intro: 'Deine Bilder gehören dir.',
    methodology_privacy_local: 'Lokale Speicherung: Deine Scans werden in der Datenbank deines Browsers (IndexedDB) auf deinem Gerät gespeichert.',
    methodology_privacy_server: 'Server-Verarbeitung: Bilder werden nur temporär für die Analyse verarbeitet – keine dauerhafte Speicherung.',
    methodology_privacy_no_training: 'Kein KI-Training: Wir nutzen deine Uploads niemals zum Training unserer Modelle.',
    methodology_privacy_encryption: 'Verschlüsselung: Alle Übertragungen erfolgen via HTTPS/TLS.',
    methodology_privacy_no_sale: 'Keine Datenweitergabe: Wir verkaufen keine Nutzerdaten.',
    methodology_privacy_link: 'Weitere Details findest du in unserer Datenschutzerklärung.',

    // Section 7: Summary
    methodology_summary_title: 'Zusammenfassung',
    methodology_summary_text: 'ForRealScan kombiniert forensische Bildanalyse mit Fakten-Recherche. Zwei Perspektiven – VERITAS und ROBO – arbeiten zusammen, um dir eine fundierte Einschätzung zu liefern: als Wahrscheinlichkeit, nicht als absolutes Urteil. Wir zeigen Unsicherheiten transparent. Wir benennen unsere Grenzen. Und wir überlassen dir die finale Bewertung.',
    methodology_summary_tagline: 'Drei Modi. Zwei Perspektiven. Eine Entscheidung: Deine.',

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
    hero_subtitle: 'Upload your image and get a percentage value with ForRealScan – with AI indicators, uncertainty zones, and technical details to help you better assess what\'s real.',
    hero_cta_primary: 'Check Now',
    hero_cta_secondary: 'View Examples',
    hero_microcopy: 'Try for free, no registration required.',
    
    // How it works
    how_title: 'How ForRealScan Works',
    how_step1_title: 'Three Paths to Truth',
    how_step1_text: 'Whether AI portrait, viral story, or targeted disinformation – you decide how deep we dig. ImageScan exposes artificial patterns, StoryScan verifies facts, and FullScan uncovers the dangerous interplay of image and lies.',
    how_step2_title: 'Clarity Over Confusion',
    how_step2_text: 'You get a precise probability and crystal-clear hints. We skip cryptic number rows. Instead, we deliver understandable explanations you can instantly interpret and share as evidence.',
    how_step3_title: 'Confident in Uncertainty',
    how_step3_text: 'In the digital gray zone, nothing is black and white. When a result isn\'t clear-cut, we communicate that openly. We show you both sides of the analysis so you can make an informed decision.',

    // Story Check & Text (Section 2: Three Scan Modes)
    story_title: 'Three Scan Modes for Every Situation',
    story_text_title: 'ImageScan – Real or AI?',
    story_text_desc: 'Upload an image and find out in seconds whether it came from a camera or was artificially generated. You get a probability plus understandable hints about what we base our findings on. The perfect quick check for suspicious photos from the web.',
    story_check_title: 'StoryScan – Is the Story True?',
    story_check_desc: 'Upload a screenshot or paste a claim. ForRealScan researches sources and rates their credibility in a ranking (A to C). Instantly expose what\'s plausible, doubtful, or already debunked.',
    story_full_title: 'FullScan – The Complete Picture',
    story_full_desc: 'A real photo combined with a made-up story is disinformation\'s strongest weapon. FullScan detects this context manipulation by checking image and claim simultaneously. The ultimate shield for maximum security.',
    
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
    
    // Scan Modes
    scan_section_title: 'What do you want to check?',
    scan_section_subtitle: 'Choose the right package for your analysis',
    scan_compare_link: 'Compare Modes',
    scan_most_popular: 'Popular',
    scan_premium_badge: '💎💎💎',
    scan_cta: 'Start Scan',
    // Category Headers
    scan_cat_learn: 'WHAT YOU\'LL LEARN',
    scan_cat_get: 'WHAT YOU GET',
    scan_cat_ideal: 'IDEAL FOR',
    // ImageScan
    scan_image_title: 'ImageScan',
    scan_image_subtitle: 'Is my image real or AI-generated?',
    scan_image_desc: 'AI analysis with forensic signals',
    scan_image_credits: 'Credit',
    scan_image_credits_value: '1',
    scan_image_learn_1: 'AI probability in % (Midjourney, DALL-E, Flux, Stable Diffusion, ChatGPT, Leonardo, Firefly & more)',
    scan_image_learn_2: 'Verdict: Real / AI-generated / Unclear',
    scan_image_learn_3: '3-5 image-specific hints',
    scan_image_learn_4: 'Visual anomalies (faces, hands, textures, lighting)',
    scan_image_get_1: 'Result card',
    scan_image_get_2: 'Share card for sharing',
    scan_image_get_3: '3-5 Key findings',
    scan_image_ideal_1: 'Quick check of single images',
    scan_image_ideal_2: 'Check social media posts',
    scan_image_ideal_3: 'Expose suspicious profile pictures',
    // StoryScan
    scan_story_title: 'StoryScan',
    scan_story_subtitle: 'Is this story / claim true?',
    scan_story_desc: 'Fact-check with source verification',
    scan_story_credits: 'Credits',
    scan_story_credits_value: '2',
    scan_story_learn_1: 'Fact-check with source references',
    scan_story_learn_2: 'Accuracy estimate (e.g. "70-85% correct")',
    scan_story_learn_3: 'What\'s true ✓ / What\'s missing or misleading ⚠',
    scan_story_learn_4: 'Verified sources with links',
    scan_story_get_1: 'Result card',
    scan_story_get_2: 'Share card for sharing',
    scan_story_get_3: 'PDF report (1 page)',
    scan_story_ideal_1: 'Check viral claims',
    scan_story_ideal_2: 'Verify news reports',
    scan_story_ideal_3: 'Expose chain letters & rumors',
    // FullScan
    scan_full_title: 'FullScan',
    scan_full_subtitle: 'Complete check (Image + Context)',
    scan_full_desc: 'Image analysis + source check in one',
    scan_full_credits: 'Credits',
    scan_full_credits_value: '3',
    scan_full_learn_1: 'Complete image analysis (like ImageScan)',
    scan_full_learn_2: 'Full fact-check (like StoryScan)',
    scan_full_learn_3: '⚠ Conflict detection: Warns when real image is used with false context OR AI image with correct context',
    scan_full_get_1: 'Result card',
    scan_full_get_2: 'Share card for sharing',
    scan_full_get_3: 'PDF report with all details',
    scan_full_get_4: '3-5 Key findings',
    scan_full_ideal_1: 'Suspicious image-text combinations',
    scan_full_ideal_2: 'Professional verification',
    scan_full_ideal_3: 'When you want to be absolutely sure',
    
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
    case1_title: 'Creators & Influencers',
    case1_text: 'Protect your credibility as your most valuable asset.',
    case1_detail1: 'ImageScan: Prove the authenticity of your shots and actively set yourself apart from AI content.',
    case1_detail2: 'StoryScan: Verify brand claims before collaborations – before putting your name on the line.',
    case1_detail3: 'FullScan: Shield your feed and community from unintentional misinformation.',
    case2_title: 'Journalists & Fact-Checkers',
    case2_text: 'Maximum precision for your research in record time.',
    case2_detail1: 'ImageScan: Expose manipulated submissions before they compromise your story.',
    case2_detail2: 'StoryScan: Find credible primary sources for viral claims in seconds.',
    case2_detail3: 'FullScan: Uncover targeted context manipulation during breaking news.',
    case3_title: 'Dating & Social Media',
    case3_text: 'Trust your eyes, but rely on our analysis when in doubt.',
    case3_detail1: 'ImageScan: Expose artificially generated profiles with one click.',
    case3_detail2: 'StoryScan: When a story sounds too perfect, we deliver the reality check.',
    case3_detail3: 'FullScan: Protect yourself from romance scams by checking image and story together.',
    case4_title: 'Photography & Marketing',
    case4_text: 'Demonstrate the authenticity of your work.',
    case4_detail1: 'ImageScan: Prove the value of your genuine photography against AI-generated content.',
    case4_detail2: 'StoryScan: Verify background info for client briefings quickly and securely.',
    case4_detail3: 'FullScan: Ensure testimonials and marketing messages align perfectly.',
    
    // Pricing
    pricing_title: 'Credits & Pricing',
    pricing_guest_title: 'Guest Mode',
    pricing_guest_credits: '3 Credits / Day',
    pricing_guest_feat1: 'No account required',
    pricing_guest_feat2: 'Device-bound',
    pricing_guest_cta: 'Start Now',
    pricing_account_title: 'With Account',
    pricing_account_credits: '5 Credits / Day',
    pricing_account_feat1: 'Use across devices',
    pricing_account_feat2: 'Purchase credit packages',
    pricing_account_feat3: 'Collection & History',
    pricing_account_cta: 'Create Account',
    pricing_info_title: 'How it works',
    pricing_info_guest: 'Guest Mode: 3 free credits per day on this device.',
    pricing_info_account: 'With Account: 5 free credits per day plus optional credit packages for extra scans.',
    pricing_packages_title: 'Need more credits?',
    pricing_starter_name: 'Starter Package',
    pricing_starter_credits: '20 Credits',
    pricing_plus_name: 'Plus Package',
    pricing_plus_credits: '50 Credits',
    pricing_pro_name: 'Pro Package',
    pricing_pro_credits: '100 Credits',
    pricing_package_cta: 'Get Credits',
    pricing_trust_onetime: 'One-time payment',
    pricing_trust_nosub: 'No subscription',
    pricing_trust_secure: 'Secure payment',
    
    // FAQ
    faq_title: 'Frequently Asked Questions',
    faq_q1: 'Is ForRealScan free?',
    faq_a1: 'Yes, you can start right away. As a guest, you get 3 credits per day free, with a free account it\'s 5. Power users can buy credit packages starting at €1.49.',
    faq_q2: 'What\'s the difference between scan modes?',
    faq_a2: 'ImageScan (1 credit) checks if an image is real or AI-generated. StoryScan (2 credits) verifies if a claim is true. FullScan (3 credits) combines both and detects context manipulation.',
    faq_q3: 'Who are Veritas and Robo?',
    faq_a3: 'Your two analysis perspectives. Veritas (the owl) looks for signs of authenticity. Robo (the robot) detects artificial patterns and anomalies. Together they deliver a balanced picture.',
    faq_q4: 'How reliable are the results?',
    faq_a4: 'We deliver probabilities – not absolute verdicts. Our technology keeps improving, but your common sense remains the final authority.',
    faq_q5: 'Are my images stored?',
    faq_a5: 'No. Your images stay on your device. They\'re only briefly processed for analysis and never stored on our servers.',
    faq_q6: 'Does it work on mobile?',
    faq_a6: 'Yes, on all devices. iPhone, Android, tablet, desktop – ForRealScan runs directly in your browser. No installation, no tracking, ready to go.',
    faq_q7: 'What are credits?',
    faq_a7: 'Your currency for truth. You get free credits daily. Buy more in packages: 20 for €1.49 · 50 for €2.99 · 100 for €4.99. They never expire.',
    faq_q8: 'What image formats are supported?',
    faq_a8: 'JPEG, PNG, and WebP up to 10 MB. That covers virtually all images you encounter daily.',
    
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
    veritas_robo_closing: 'Veritas and Robo look at every image from two directions – in the end you get a joint, balanced assessment per ForRealScan.',

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
    methodology_subtitle: 'Transparency builds trust. How ForRealScan works – from analysis to results, openly explained.',
    methodology_cta_scan: 'Start Scan Now',
    methodology_cta_examples: 'View Examples',

    // Section 1: Three Modes
    methodology_modes_title: 'Three Modes. One Goal: Clarity.',
    methodology_modes_intro: 'ForRealScan offers three analysis modes that answer different questions:',
    methodology_mode_image_name: 'ImageScan',
    methodology_mode_image_question: 'Is this image real or AI-generated?',
    methodology_mode_image_method: 'Forensic image analysis + GPT-4o Vision',
    methodology_mode_image_credits: '1 Credit',
    methodology_mode_image_output: 'Collector card + Share card',
    methodology_mode_story_name: 'StoryScan',
    methodology_mode_story_question: 'Is this claim true?',
    methodology_mode_story_method: 'Source research + Fact-check',
    methodology_mode_story_credits: '2 Credits',
    methodology_mode_story_output: 'Collector card + PDF report',
    methodology_mode_full_name: 'FullScan',
    methodology_mode_full_question: 'Does the image match the story?',
    methodology_mode_full_method: 'Image analysis + Fact-check + Conflict detection',
    methodology_mode_full_credits: '3 Credits',
    methodology_mode_full_output: 'Dual card with both analyses',
    methodology_modes_outro: 'StoryScan accepts text directly or extracts it automatically from screenshots (OCR). FullScan detects the most dangerous form of deception: when a real image is paired with a false story – or vice versa.',
    methodology_modes_table_question: 'Question',
    methodology_modes_table_method: 'Method',
    methodology_modes_table_credits: 'Credits',
    methodology_modes_table_output: 'Output',

    // Section 2: Dual System
    methodology_dual_title: 'Two Perspectives. One Verdict.',
    methodology_dual_intro: 'We don\'t rely on a single algorithm. ForRealScan employs two opposing analysis logics:',
    methodology_veritas_title: 'VERITAS – The Authenticity Lens',
    methodology_veritas_color: 'Color: Green',
    methodology_veritas_intro: 'Veritas searches for the fingerprint of reality:',
    methodology_veritas_point1: 'Natural irregularities in image structures',
    methodology_veritas_point2: 'Typical compression artifacts from real cameras',
    methodology_veritas_point3: 'Physically correct shadows and light reflections',
    methodology_veritas_point4: 'Organic texture variations in skin, hair, surfaces',
    methodology_veritas_point5: 'Organic composition rather than constructed perfection',
    methodology_robo_title: 'ROBO – The AI Detector',
    methodology_robo_color: 'Color: Blue',
    methodology_robo_intro: 'Robo specializes in the unnatural:',
    methodology_robo_point1: 'Consensus signals: Multiple independent checks point to AI',
    methodology_robo_point2: 'Forensic markers: Pixel patterns only generative models produce',
    methodology_robo_point3: 'Anatomy errors: Illogical hand structures, fused fingers',
    methodology_robo_point4: 'Texture artifacts: Excessively smooth, plastic-like surfaces',
    methodology_robo_point5: 'Physics breaks: Light, shadow, or perspective defy logic',
    methodology_robo_point6: 'Uncanny signatures: The overall impression feels artificial and eerie',
    methodology_dual_cooperation: 'How they work together',
    methodology_dual_cooperation_text: 'When both agree, the result is clear-cut. When they disagree, ForRealScan displays both perspectives side by side – so you can form your own judgment.',

    // Section 3: Understanding Results
    methodology_results_title: 'Understanding Results',
    methodology_results_intro: 'A scan delivers more than just a number.',
    methodology_results_scale_title: 'The Probability Scale',
    methodology_results_low_title: '0–30%: Low AI Probability',
    methodology_results_low_text: 'Predominantly VERITAS indicators. The image shows characteristics of authentic photography.',
    methodology_results_mid_title: '30–70%: Uncertainty Zone',
    methodology_results_mid_text: 'Both perspectives are displayed. Authentic and suspicious signals are evenly balanced.',
    methodology_results_high_title: '70–100%: High AI Probability',
    methodology_results_high_text: 'Predominantly ROBO indicators. Typical patterns of generative AI were detected.',
    methodology_confidence_title: 'The Confidence Level',
    methodology_confidence_intro: 'Beyond probability, we show how confident the system is in its assessment:',
    methodology_confidence_very_high: 'Very High: Signals are unambiguous and consistent',
    methodology_confidence_high: 'High: Clear tendency with minimal remaining doubt',
    methodology_confidence_moderate: 'Moderate: Recognizable patterns, but room for interpretation',
    methodology_confidence_low: 'Low: Few actionable signals – exercise caution when drawing conclusions',
    methodology_sources_title: 'StoryScan: Source Transparency',
    methodology_sources_intro: 'We classify every source by its journalistic integrity:',
    methodology_sources_tier_a: 'Tier A: Primary sources with highest reliability (Reuters, AP, BBC, NYT, .gov, .edu)',
    methodology_sources_tier_b: 'Tier B: Established quality media (Forbes, Bloomberg, major national outlets)',
    methodology_sources_tier_c: 'Tier C: Additional verifiable sources – evaluate with care',

    // Section 4: Limitations
    methodology_limits_title: 'Honest Limitations',
    methodology_limits_intro: 'No detection system is infallible. We communicate our limitations openly:',
    methodology_hardscenes_title: 'Challenging Scene Types (Hard Scenes)',
    methodology_hardscenes_intro: 'Certain image types are inherently challenging for AI detectors:',
    methodology_hardscenes_landscape: 'Landscapes – few anatomical anchor points',
    methodology_hardscenes_nightsky: 'Night skies & Northern Lights – abstract light phenomena',
    methodology_hardscenes_artwork: 'Artwork – intentionally stylized',
    methodology_hardscenes_abstract: 'Abstract images – no reality reference',
    methodology_hardscenes_outro: 'For these scenes, ForRealScan displays a corresponding notice.',
    methodology_other_limits_title: 'Other Limitations',
    methodology_limits_compressed: 'Heavily compressed images: Repeated saving or sharing via messenger destroys forensic details.',
    methodology_limits_screenshots: 'Screenshots: Text and interface elements obscure pure image analysis.',
    methodology_limits_hybrid: 'Hybrid images: Real photos with AI retouching (filters, background changes) – the ultimate detection challenge.',
    methodology_limits_new_models: 'Latest AI models: Technology evolves rapidly. Very new generation models may be harder to detect.',
    methodology_limits_professional: 'Professional studio photos: Perfect lighting can be mistakenly flagged as "too perfect".',
    methodology_limits_outro: 'When a result is uncertain, ForRealScan clearly indicates this.',

    // Section 5: Responsible Use
    methodology_responsible_title: 'Responsible Use',
    methodology_responsible_intro: 'ForRealScan is a guidance tool – not courtroom evidence.',
    methodology_responsible_subtitle: 'Results should:',
    methodology_responsible_point1: 'Serve as a starting point for further research, not as a final verdict',
    methodology_responsible_point2: 'Not be used alone as grounds for accusations or legal action',
    methodology_responsible_point3: 'Be considered in context: source, sender, and situation matter',
    methodology_responsible_point4: 'Be interpreted with common sense',
    methodology_responsible_outro: 'Our goal: Help you make more informed decisions in a world of manipulated content – not to breed distrust or encourage hasty conclusions.',

    // Section 6: Privacy
    methodology_privacy_title: 'Privacy During Analysis',
    methodology_privacy_intro: 'Your images belong to you.',
    methodology_privacy_local: 'Local storage: Your scans are stored in your browser\'s database (IndexedDB) on your device.',
    methodology_privacy_server: 'Server processing: Images are only processed temporarily for analysis – no permanent storage.',
    methodology_privacy_no_training: 'No AI training: We never use your uploads to train our models.',
    methodology_privacy_encryption: 'Encryption: All transmissions occur via HTTPS/TLS.',
    methodology_privacy_no_sale: 'No data sales: We do not sell user data.',
    methodology_privacy_link: 'More details can be found in our Privacy Policy.',

    // Section 7: Summary
    methodology_summary_title: 'Summary',
    methodology_summary_text: 'ForRealScan combines forensic image analysis with fact-checking research. Two perspectives – VERITAS and ROBO – work together to deliver a well-founded assessment: as probability, not absolute verdict. We display uncertainties transparently. We name our limitations. And we leave the final judgment to you.',
    methodology_summary_tagline: 'Three modes. Two perspectives. One decision: Yours.',

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
    hero_subtitle: 'Carica la tua immagine e ottieni un valore percentuale con ForRealScan – con indicatori IA, zone di incertezza e dettagli tecnici per valutare meglio ciò che è reale.',
    hero_cta_primary: 'Verifica Ora',
    hero_cta_secondary: 'Vedi Esempi',
    hero_microcopy: 'Prova gratuita, nessuna registrazione richiesta.',
    
    // How it works
    how_title: 'Come Funziona ForRealScan',
    how_step1_title: 'Tre Vie Verso la Verità',
    how_step1_text: 'Che sia un ritratto IA, una storia virale o disinformazione mirata – decidi tu quanto in profondità scaviamo. ImageScan smaschera i pattern artificiali, StoryScan verifica i fatti e FullScan rivela la pericolosa combinazione di immagine e menzogna.',
    how_step2_title: 'Chiarezza al Posto della Confusione',
    how_step2_text: 'Ottieni una probabilità precisa e indizi cristallini. Niente file criptiche di numeri. Ti forniamo spiegazioni comprensibili che puoi interpretare immediatamente e condividere come prova.',
    how_step3_title: 'Sicuri nei Casi Dubbi',
    how_step3_text: 'Nella zona grigia digitale nulla è bianco o nero. Quando un risultato non è chiaro, lo comunichiamo apertamente. Ti mostriamo entrambi i lati dell\'analisi per una decisione informata.',

    // Story Check & Text (Sezione 2: Tre Modalità di Scansione)
    story_title: 'Tre Modalità di Scansione per Ogni Situazione',
    story_text_title: 'ImageScan – Reale o IA?',
    story_text_desc: 'Carica un\'immagine e scopri in pochi secondi se proviene da una fotocamera o è stata generata artificialmente. Ottieni una probabilità più indizi comprensibili su cosa basiamo le nostre conclusioni. Il check rapido perfetto per foto sospette dal web.',
    story_check_title: 'StoryScan – La Storia è Vera?',
    story_check_desc: 'Carica uno screenshot o inserisci un\'affermazione. ForRealScan ricerca le fonti e valuta la loro serietà in un ranking (A fino a C). Smaschera immediatamente cosa è plausibile, dubbio o già smentito.',
    story_full_title: 'FullScan – Il Quadro Completo',
    story_full_desc: 'Una foto reale combinata con una storia inventata è l\'arma più potente della disinformazione. FullScan rileva questa manipolazione del contesto verificando contemporaneamente immagine e affermazione. Lo scudo definitivo per la massima sicurezza.',
    
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
    
    // Scan Modes
    scan_section_title: 'Cosa vuoi verificare?',
    scan_section_subtitle: 'Scegli il pacchetto giusto per la tua analisi',
    scan_compare_link: 'Confronta Modalità',
    scan_most_popular: 'Popolare',
    scan_premium_badge: '💎💎💎',
    scan_cta: 'Avvia Scan',
    // Category Headers
    scan_cat_learn: 'COSA SCOPRIRAI',
    scan_cat_get: 'COSA OTTIENI',
    scan_cat_ideal: 'IDEALE PER',
    // ImageScan
    scan_image_title: 'ImageScan',
    scan_image_subtitle: 'La mia immagine è reale o generata dall\'IA?',
    scan_image_desc: 'Analisi IA con segnali forensi',
    scan_image_credits: 'Credit',
    scan_image_credits_value: '1',
    scan_image_learn_1: 'Probabilità IA in % (Midjourney, DALL-E, Flux, Stable Diffusion, ChatGPT, Leonardo, Firefly e altri)',
    scan_image_learn_2: 'Verdetto: Reale / Generato dall\'IA / Incerto',
    scan_image_learn_3: '3-5 indicazioni specifiche dell\'immagine',
    scan_image_learn_4: 'Anomalie visive (volti, mani, texture, illuminazione)',
    scan_image_get_1: 'Scheda risultato',
    scan_image_get_2: 'Scheda condivisione',
    scan_image_get_3: '3-5 risultati chiave',
    scan_image_ideal_1: 'Verifica rapida di singole immagini',
    scan_image_ideal_2: 'Controllare post sui social media',
    scan_image_ideal_3: 'Smascherare foto profilo sospette',
    // StoryScan
    scan_story_title: 'StoryScan',
    scan_story_subtitle: 'Questa storia / affermazione è vera?',
    scan_story_desc: 'Fact-check con verifica delle fonti',
    scan_story_credits: 'Credits',
    scan_story_credits_value: '2',
    scan_story_learn_1: 'Fact-check con riferimenti alle fonti',
    scan_story_learn_2: 'Stima di accuratezza (es. "70-85% corretto")',
    scan_story_learn_3: 'Cosa è vero ✓ / Cosa manca o fuorvia ⚠',
    scan_story_learn_4: 'Fonti verificate con link',
    scan_story_get_1: 'Scheda risultato',
    scan_story_get_2: 'Scheda condivisione',
    scan_story_get_3: 'Report PDF (1 pagina)',
    scan_story_ideal_1: 'Verificare affermazioni virali',
    scan_story_ideal_2: 'Verificare notizie',
    scan_story_ideal_3: 'Smascherare catene e voci',
    // FullScan
    scan_full_title: 'FullScan',
    scan_full_subtitle: 'Controllo completo (Immagine + Contesto)',
    scan_full_desc: 'Analisi immagine + verifica fonti in uno',
    scan_full_credits: 'Credits',
    scan_full_credits_value: '3',
    scan_full_learn_1: 'Analisi completa dell\'immagine (come ImageScan)',
    scan_full_learn_2: 'Fact-check completo (come StoryScan)',
    scan_full_learn_3: '⚠ Rilevamento conflitti: Avvisa quando un\'immagine reale viene usata con contesto falso O un\'immagine IA con contesto corretto',
    scan_full_get_1: 'Scheda risultato',
    scan_full_get_2: 'Scheda condivisione',
    scan_full_get_3: 'Report PDF con tutti i dettagli',
    scan_full_get_4: '3-5 risultati chiave',
    scan_full_ideal_1: 'Combinazioni sospette immagine-testo',
    scan_full_ideal_2: 'Verifica professionale',
    scan_full_ideal_3: 'Quando vuoi andare sul sicuro',
    
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
    case1_title: 'Creator & Influencer',
    case1_text: 'Proteggi la tua credibilità come il tuo capitale più prezioso.',
    case1_detail1: 'ImageScan: Dimostra l\'autenticità dei tuoi scatti e distinguiti attivamente dai contenuti IA.',
    case1_detail2: 'StoryScan: Verifica le affermazioni dei brand nelle collaborazioni prima di metterci la faccia.',
    case1_detail3: 'FullScan: Proteggi il tuo feed e la tua community da fake news involontarie.',
    case2_title: 'Giornalisti & Fact-Checker',
    case2_text: 'Massima precisione per le tue ricerche in tempo record.',
    case2_detail1: 'ImageScan: Smaschera contenuti manipolati prima che compromettano il tuo articolo.',
    case2_detail2: 'StoryScan: Trova fonti primarie affidabili per affermazioni virali in pochi secondi.',
    case2_detail3: 'FullScan: Scopri manipolazioni del contesto mirate durante le breaking news.',
    case3_title: 'Dating & Social Media',
    case3_text: 'Fidati dei tuoi occhi, ma affidati alla nostra analisi nei dubbi.',
    case3_detail1: 'ImageScan: Smaschera profili generati artificialmente con un click.',
    case3_detail2: 'StoryScan: Quando una storia sembra troppo perfetta, ti forniamo il reality check.',
    case3_detail3: 'FullScan: Proteggiti dalle truffe romantiche verificando immagine e storia insieme.',
    case4_title: 'Fotografia & Marketing',
    case4_text: 'Dimostra l\'autenticità del tuo lavoro.',
    case4_detail1: 'ImageScan: Dimostra il valore della tua vera arte fotografica rispetto ai contenuti IA.',
    case4_detail2: 'StoryScan: Verifica le informazioni di background per i briefing dei clienti in modo rapido e sicuro.',
    case4_detail3: 'FullScan: Assicurati che testimonial e messaggi pubblicitari siano perfettamente allineati.',
    
    // Pricing
    pricing_title: 'Crediti & Prezzi',
    pricing_guest_title: 'Modalità Ospite',
    pricing_guest_credits: '3 Crediti / Giorno',
    pricing_guest_feat1: 'Nessun account richiesto',
    pricing_guest_feat2: 'Legato al dispositivo',
    pricing_guest_cta: 'Inizia ora',
    pricing_account_title: 'Con Account',
    pricing_account_credits: '5 Crediti / Giorno',
    pricing_account_feat1: 'Utilizzo su più dispositivi',
    pricing_account_feat2: 'Acquista pacchetti crediti',
    pricing_account_feat3: 'Raccolta & Cronologia',
    pricing_account_cta: 'Crea Account',
    pricing_info_title: 'Come funziona',
    pricing_info_guest: 'Modalità Ospite: 3 crediti gratuiti al giorno su questo dispositivo.',
    pricing_info_account: 'Con Account: 5 crediti gratuiti al giorno più pacchetti crediti opzionali per scansioni extra.',
    pricing_packages_title: 'Hai bisogno di più crediti?',
    pricing_starter_name: 'Pacchetto Starter',
    pricing_starter_credits: '20 Crediti',
    pricing_plus_name: 'Pacchetto Plus',
    pricing_plus_credits: '50 Crediti',
    pricing_pro_name: 'Pacchetto Pro',
    pricing_pro_credits: '100 Crediti',
    pricing_package_cta: 'Ottieni Crediti',
    pricing_trust_onetime: 'Pagamento unico',
    pricing_trust_nosub: 'Nessun abbonamento',
    pricing_trust_secure: 'Pagamento sicuro',
    
    // FAQ
    faq_title: 'Domande Frequenti',
    faq_q1: 'ForRealScan è gratuito?',
    faq_a1: 'Sì, puoi iniziare subito. Come ospite hai 3 crediti al giorno gratis, con un account gratuito sono 5. Per i power user ci sono pacchetti crediti a partire da 1,49 €.',
    faq_q2: 'Qual è la differenza tra le modalità di scansione?',
    faq_a2: 'ImageScan (1 credito) verifica se un\'immagine è reale o generata da IA. StoryScan (2 crediti) controlla se un\'affermazione è vera. FullScan (3 crediti) combina entrambi e rileva la manipolazione del contesto.',
    faq_q3: 'Chi sono Veritas e Robo?',
    faq_a3: 'Le tue due prospettive di analisi. Veritas (il gufo) cerca indizi di autenticità. Robo (il robot) rileva pattern artificiali e anomalie. Insieme forniscono un quadro equilibrato.',
    faq_q4: 'Quanto sono affidabili i risultati?',
    faq_a4: 'Forniamo probabilità – non verdetti assoluti. La nostra tecnologia migliora costantemente, ma il tuo buon senso rimane l\'istanza finale.',
    faq_q5: 'Le mie immagini vengono salvate?',
    faq_a5: 'No. Le tue immagini rimangono sul tuo dispositivo. Vengono elaborate solo brevemente per l\'analisi e non vengono mai salvate sui nostri server.',
    faq_q6: 'Funziona sul cellulare?',
    faq_a6: 'Sì, su tutti i dispositivi. iPhone, Android, tablet, desktop – ForRealScan funziona direttamente nel browser. Nessuna installazione, nessun tracking, pronto all\'uso.',
    faq_q7: 'Cosa sono i crediti?',
    faq_a7: 'La tua valuta per la verità. Ricevi crediti gratuiti ogni giorno. Acquista altri in pacchetti: 20 per 1,49 € · 50 per 2,99 € · 100 per 4,99 €. Non scadono mai.',
    faq_q8: 'Quali formati immagine sono supportati?',
    faq_a8: 'JPEG, PNG e WebP fino a 10 MB. Copre praticamente tutte le immagini che incontri quotidianamente.',
    
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
    veritas_robo_closing: 'Veritas e Robo guardano ogni immagine da due direzioni – alla fine ottieni una valutazione congiunta ed equilibrata per ForRealScan.',

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
    methodology_subtitle: 'La trasparenza genera fiducia. Come funziona ForRealScan – dall\'analisi ai risultati, spiegato apertamente.',
    methodology_cta_scan: 'Avvia Scansione',
    methodology_cta_examples: 'Vedi Esempi',

    // Section 1: Three Modes
    methodology_modes_title: 'Tre Modalità. Un Obiettivo: Chiarezza.',
    methodology_modes_intro: 'ForRealScan offre tre modalità di analisi che rispondono a domande diverse:',
    methodology_mode_image_name: 'ImageScan',
    methodology_mode_image_question: 'Questa immagine è reale o generata dall\'IA?',
    methodology_mode_image_method: 'Analisi forense + GPT-4o Vision',
    methodology_mode_image_credits: '1 Credito',
    methodology_mode_image_output: 'Scheda collezionabile + Scheda condivisione',
    methodology_mode_story_name: 'StoryScan',
    methodology_mode_story_question: 'Questa affermazione è vera?',
    methodology_mode_story_method: 'Ricerca fonti + Fact-check',
    methodology_mode_story_credits: '2 Crediti',
    methodology_mode_story_output: 'Scheda collezionabile + Report PDF',
    methodology_mode_full_name: 'FullScan',
    methodology_mode_full_question: 'L\'immagine corrisponde alla storia?',
    methodology_mode_full_method: 'Analisi immagine + Fact-check + Rilevamento conflitti',
    methodology_mode_full_credits: '3 Crediti',
    methodology_mode_full_output: 'Scheda doppia con entrambe le analisi',
    methodology_modes_outro: 'StoryScan accetta testo direttamente o lo estrae automaticamente dagli screenshot (OCR). FullScan rileva la forma più pericolosa di inganno: quando un\'immagine reale viene abbinata a una storia falsa – o viceversa.',
    methodology_modes_table_question: 'Domanda',
    methodology_modes_table_method: 'Metodo',
    methodology_modes_table_credits: 'Crediti',
    methodology_modes_table_output: 'Output',

    // Section 2: Dual System
    methodology_dual_title: 'Due Prospettive. Un Verdetto.',
    methodology_dual_intro: 'Non ci affidiamo a un singolo algoritmo. ForRealScan utilizza due logiche di analisi opposte:',
    methodology_veritas_title: 'VERITAS – Lo Sguardo dell\'Autenticità',
    methodology_veritas_color: 'Colore: Verde',
    methodology_veritas_intro: 'Veritas cerca l\'impronta digitale della realtà:',
    methodology_veritas_point1: 'Irregolarità naturali nelle strutture dell\'immagine',
    methodology_veritas_point2: 'Tipici artefatti di compressione delle fotocamere reali',
    methodology_veritas_point3: 'Ombre e riflessi di luce fisicamente corretti',
    methodology_veritas_point4: 'Variazioni organiche delle texture su pelle, capelli, superfici',
    methodology_veritas_point5: 'Composizione organica anziché perfezione costruita',
    methodology_robo_title: 'ROBO – Il Rilevatore IA',
    methodology_robo_color: 'Colore: Blu',
    methodology_robo_intro: 'Robo è specializzato nell\'innaturale:',
    methodology_robo_point1: 'Segnali di consenso: Più controlli indipendenti indicano IA',
    methodology_robo_point2: 'Marcatori forensi: Pattern di pixel che solo i modelli generativi producono',
    methodology_robo_point3: 'Errori anatomici: Strutture delle mani illogiche, dita fuse',
    methodology_robo_point4: 'Artefatti di texture: Superfici eccessivamente lisce, plastiche',
    methodology_robo_point5: 'Rotture fisiche: Luce, ombra o prospettiva sfidano la logica',
    methodology_robo_point6: 'Firme inquietanti: L\'impressione generale appare artificiale e perturbante',
    methodology_dual_cooperation: 'Come collaborano',
    methodology_dual_cooperation_text: 'Quando entrambi concordano, il risultato è chiaro. In caso di disaccordo, ForRealScan mostra entrambe le prospettive affiancate – così puoi formarti il tuo giudizio.',

    // Section 3: Understanding Results
    methodology_results_title: 'Comprendere i Risultati',
    methodology_results_intro: 'Una scansione offre più di un semplice numero.',
    methodology_results_scale_title: 'La Scala di Probabilità',
    methodology_results_low_title: '0–30%: Bassa Probabilità IA',
    methodology_results_low_text: 'Indicatori prevalentemente VERITAS. L\'immagine mostra caratteristiche di fotografia autentica.',
    methodology_results_mid_title: '30–70%: Zona di Incertezza',
    methodology_results_mid_text: 'Entrambe le prospettive vengono mostrate. Segnali autentici e sospetti sono in equilibrio.',
    methodology_results_high_title: '70–100%: Alta Probabilità IA',
    methodology_results_high_text: 'Indicatori prevalentemente ROBO. Rilevati pattern tipici dell\'IA generativa.',
    methodology_confidence_title: 'Il Livello di Confidenza',
    methodology_confidence_intro: 'Oltre alla probabilità, mostriamo quanto il sistema è sicuro della sua valutazione:',
    methodology_confidence_very_high: 'Molto alto: I segnali sono inequivocabili e coerenti',
    methodology_confidence_high: 'Alto: Tendenza chiara con dubbi residui minimi',
    methodology_confidence_moderate: 'Moderato: Pattern riconoscibili, ma margine di interpretazione',
    methodology_confidence_low: 'Basso: Pochi segnali utilizzabili – cautela nelle conclusioni',
    methodology_sources_title: 'StoryScan: Trasparenza delle Fonti',
    methodology_sources_intro: 'Classifichiamo ogni fonte per la sua integrità giornalistica:',
    methodology_sources_tier_a: 'Tier A: Fonti primarie con massima affidabilità (Reuters, AP, BBC, NYT, .gov, .edu)',
    methodology_sources_tier_b: 'Tier B: Media di qualità consolidati (Forbes, Bloomberg, principali testate nazionali)',
    methodology_sources_tier_c: 'Tier C: Ulteriori fonti verificabili – da valutare con attenzione',

    // Section 4: Limitations
    methodology_limits_title: 'Limiti Onesti',
    methodology_limits_intro: 'Nessun sistema di rilevamento è infallibile. Comunichiamo i nostri limiti apertamente:',
    methodology_hardscenes_title: 'Tipi di Scena Difficili (Hard Scenes)',
    methodology_hardscenes_intro: 'Certi tipi di immagini sono naturalmente sfidanti per i rilevatori IA:',
    methodology_hardscenes_landscape: 'Paesaggi – pochi punti di ancoraggio anatomici',
    methodology_hardscenes_nightsky: 'Cieli notturni e aurore boreali – fenomeni luminosi astratti',
    methodology_hardscenes_artwork: 'Opere d\'arte – intenzionalmente stilizzate',
    methodology_hardscenes_abstract: 'Immagini astratte – nessun riferimento alla realtà',
    methodology_hardscenes_outro: 'Per queste scene, ForRealScan mostra un avviso corrispondente.',
    methodology_other_limits_title: 'Altre Limitazioni',
    methodology_limits_compressed: 'Immagini molto compresse: Salvataggi ripetuti o condivisione via messenger distruggono i dettagli forensi.',
    methodology_limits_screenshots: 'Screenshot: Testo ed elementi dell\'interfaccia oscurano l\'analisi pura dell\'immagine.',
    methodology_limits_hybrid: 'Immagini ibride: Foto reali con ritocchi IA (filtri, cambi di sfondo) – la sfida definitiva del rilevamento.',
    methodology_limits_new_models: 'Ultimi modelli IA: La tecnologia evolve rapidamente. I modelli più nuovi possono essere più difficili da rilevare.',
    methodology_limits_professional: 'Foto professionali da studio: L\'illuminazione perfetta può essere erroneamente segnalata come "troppo perfetta".',
    methodology_limits_outro: 'Quando un risultato è incerto, ForRealScan lo indica chiaramente.',

    // Section 5: Responsible Use
    methodology_responsible_title: 'Uso Responsabile',
    methodology_responsible_intro: 'ForRealScan è uno strumento di orientamento – non una prova giudiziaria.',
    methodology_responsible_subtitle: 'I risultati dovrebbero:',
    methodology_responsible_point1: 'Servire come punto di partenza per ulteriori ricerche, non come verdetto finale',
    methodology_responsible_point2: 'Non essere usati da soli come base per accuse o azioni legali',
    methodology_responsible_point3: 'Essere considerati nel contesto: fonte, mittente e situazione contano',
    methodology_responsible_point4: 'Essere interpretati con buon senso',
    methodology_responsible_outro: 'Il nostro obiettivo: Aiutarti a prendere decisioni più consapevoli in un mondo di contenuti manipolati – non alimentare sfiducia o incoraggiare conclusioni affrettate.',

    // Section 6: Privacy
    methodology_privacy_title: 'Privacy Durante l\'Analisi',
    methodology_privacy_intro: 'Le tue immagini appartengono a te.',
    methodology_privacy_local: 'Archiviazione locale: Le tue scansioni sono salvate nel database del browser (IndexedDB) sul tuo dispositivo.',
    methodology_privacy_server: 'Elaborazione server: Le immagini vengono elaborate solo temporaneamente per l\'analisi – nessuna memorizzazione permanente.',
    methodology_privacy_no_training: 'Nessun addestramento IA: Non utilizziamo mai i tuoi upload per addestrare i nostri modelli.',
    methodology_privacy_encryption: 'Crittografia: Tutte le trasmissioni avvengono via HTTPS/TLS.',
    methodology_privacy_no_sale: 'Nessuna vendita dati: Non vendiamo dati degli utenti.',
    methodology_privacy_link: 'Maggiori dettagli nella nostra Informativa sulla Privacy.',

    // Section 7: Summary
    methodology_summary_title: 'Riepilogo',
    methodology_summary_text: 'ForRealScan combina analisi forense delle immagini con ricerca di fact-checking. Due prospettive – VERITAS e ROBO – lavorano insieme per fornirti una valutazione fondata: come probabilità, non come verdetto assoluto. Mostriamo le incertezze in modo trasparente. Dichiariamo i nostri limiti. E lasciamo il giudizio finale a te.',
    methodology_summary_tagline: 'Tre modalità. Due prospettive. Una decisione: La tua.',

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
    hero_subtitle: 'Sube tu imagen y obtén un valor porcentual con ForRealScan – con indicadores de IA, zonas de incertidumbre y detalles técnicos para evaluar mejor lo que es real.',
    hero_cta_primary: 'Verificar Ahora',
    hero_cta_secondary: 'Ver Ejemplos',
    hero_microcopy: 'Prueba gratuita, sin necesidad de registro.',
    
    // How it works
    how_title: 'Cómo Funciona ForRealScan',
    how_step1_title: 'Tres Caminos a la Verdad',
    how_step1_text: 'Ya sea retrato IA, historia viral o desinformación dirigida – tú decides qué tan profundo investigamos. ImageScan expone patrones artificiales, StoryScan verifica hechos y FullScan descubre la peligrosa combinación de imagen y mentira.',
    how_step2_title: 'Claridad en Vez de Confusión',
    how_step2_text: 'Obtienes una probabilidad precisa e indicios cristalinos. Nada de filas crípticas de números. Te entregamos explicaciones comprensibles que puedes interpretar inmediatamente y compartir como evidencia.',
    how_step3_title: 'Seguros en Casos Dudosos',
    how_step3_text: 'En la zona gris digital nada es blanco o negro. Cuando un resultado no es claro, lo comunicamos abiertamente. Te mostramos ambos lados del análisis para que tomes una decisión informada.',

    // Story Check & Text (Sección 2: Tres Modos de Escaneo)
    story_title: 'Tres Modos de Escaneo para Cada Situación',
    story_text_title: 'ImageScan – ¿Real o IA?',
    story_text_desc: 'Sube una imagen y descubre en segundos si proviene de una cámara o fue generada artificialmente. Obtienes una probabilidad más indicios comprensibles sobre en qué basamos nuestras conclusiones. La verificación rápida perfecta para fotos sospechosas de la web.',
    story_check_title: 'StoryScan – ¿Es Cierta la Historia?',
    story_check_desc: 'Sube una captura de pantalla o introduce una afirmación. ForRealScan investiga fuentes y evalúa su seriedad en un ranking (A hasta C). Desenmascara inmediatamente qué es plausible, dudoso o ya refutado.',
    story_full_title: 'FullScan – El Cuadro Completo',
    story_full_desc: 'Una foto real combinada con una historia inventada es el arma más potente de la desinformación. FullScan detecta esta manipulación del contexto verificando simultáneamente imagen y afirmación. El escudo definitivo para máxima seguridad.',
    
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
    
    // Scan Modes
    scan_section_title: '¿Qué quieres verificar?',
    scan_section_subtitle: 'Elige el paquete adecuado para tu análisis',
    scan_compare_link: 'Comparar Modos',
    scan_most_popular: 'Popular',
    scan_premium_badge: '💎💎💎',
    scan_cta: 'Iniciar Scan',
    // Category Headers
    scan_cat_learn: 'QUÉ DESCUBRIRÁS',
    scan_cat_get: 'QUÉ OBTIENES',
    scan_cat_ideal: 'IDEAL PARA',
    // ImageScan
    scan_image_title: 'ImageScan',
    scan_image_subtitle: '¿Mi imagen es real o generada por IA?',
    scan_image_desc: 'Análisis de IA con señales forenses',
    scan_image_credits: 'Credit',
    scan_image_credits_value: '1',
    scan_image_learn_1: 'Probabilidad de IA en % (Midjourney, DALL-E, Flux, Stable Diffusion, ChatGPT, Leonardo, Firefly y más)',
    scan_image_learn_2: 'Veredicto: Real / Generada por IA / Incierto',
    scan_image_learn_3: '3-5 indicaciones específicas de la imagen',
    scan_image_learn_4: 'Anomalías visuales (rostros, manos, texturas, iluminación)',
    scan_image_get_1: 'Tarjeta de resultado',
    scan_image_get_2: 'Tarjeta para compartir',
    scan_image_get_3: '3-5 hallazgos clave',
    scan_image_ideal_1: 'Verificación rápida de imágenes individuales',
    scan_image_ideal_2: 'Revisar publicaciones en redes sociales',
    scan_image_ideal_3: 'Desenmascarar fotos de perfil sospechosas',
    // StoryScan
    scan_story_title: 'StoryScan',
    scan_story_subtitle: '¿Es cierta esta historia / afirmación?',
    scan_story_desc: 'Verificación de hechos con fuentes',
    scan_story_credits: 'Credits',
    scan_story_credits_value: '2',
    scan_story_learn_1: 'Verificación con referencias de fuentes',
    scan_story_learn_2: 'Estimación de precisión (ej. "70-85% correcto")',
    scan_story_learn_3: 'Qué es verdad ✓ / Qué falta o engaña ⚠',
    scan_story_learn_4: 'Fuentes verificadas con enlaces',
    scan_story_get_1: 'Tarjeta de resultado',
    scan_story_get_2: 'Tarjeta para compartir',
    scan_story_get_3: 'Informe PDF (1 página)',
    scan_story_ideal_1: 'Verificar afirmaciones virales',
    scan_story_ideal_2: 'Verificar noticias',
    scan_story_ideal_3: 'Desenmascarar cadenas y rumores',
    // FullScan
    scan_full_title: 'FullScan',
    scan_full_subtitle: 'Verificación completa (Imagen + Contexto)',
    scan_full_desc: 'Análisis de imagen + verificación de fuentes en uno',
    scan_full_credits: 'Credits',
    scan_full_credits_value: '3',
    scan_full_learn_1: 'Análisis completo de imagen (como ImageScan)',
    scan_full_learn_2: 'Verificación completa de hechos (como StoryScan)',
    scan_full_learn_3: '⚠ Detección de conflictos: Avisa cuando una imagen real se usa con contexto falso O imagen IA con contexto correcto',
    scan_full_get_1: 'Tarjeta de resultado',
    scan_full_get_2: 'Tarjeta para compartir',
    scan_full_get_3: 'Informe PDF con todos los detalles',
    scan_full_get_4: '3-5 hallazgos clave',
    scan_full_ideal_1: 'Combinaciones sospechosas imagen-texto',
    scan_full_ideal_2: 'Verificación profesional',
    scan_full_ideal_3: 'Cuando quieres estar seguro',
    
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
    case1_detail1: 'ImageScan: Demuestra rápidamente que tu última foto es real – incluso si la editaste ligeramente.',
    case1_detail2: 'StoryScan: Verifica publicaciones en redes sociales antes de compartirlas o comentarlas.',
    case1_detail3: 'FullScan: Obtén un análisis detallado para tu próxima campaña – los clientes valoran la transparencia.',
    case2_title: 'Periodistas & Verificadores',
    case2_text: 'Verifica imágenes rápida y transparentemente para posible manipulación.',
    case2_detail1: 'ImageScan: Verifica rápidamente fotos de prensa antes de publicarlas en tu artículo.',
    case2_detail2: 'StoryScan: Examina si la imagen y el texto de una publicación cuentan una historia coherente.',
    case2_detail3: 'FullScan: Documenta tu verificación con un análisis comprensible para tu público.',
    case3_title: 'Citas & Social',
    case3_text: 'Reconoce fotos de perfil sospechosas y escenificación irreal temprano.',
    case3_detail1: 'ImageScan: Verifica fotos de perfil sospechosas en segundos.',
    case3_detail2: 'StoryScan: Escanea publicaciones con texto para detectar exageraciones o narraciones construidas.',
    case3_detail3: 'FullScan: Si tienes sospechas serias, obtén la imagen completa con un análisis exhaustivo.',
    case4_title: 'Fotografía & Marketing',
    case4_text: 'Haz visible la autenticidad de tus activos visuales.',
    case4_detail1: 'ImageScan: Muestra rápidamente qué imágenes son fotos reales y cuáles fueron editadas digitalmente.',
    case4_detail2: 'StoryScan: Verifica si imagen y texto de tu publicación son coherentes antes de enviarla.',
    case4_detail3: 'FullScan: Usa el análisis completo como un plus de transparencia en presentaciones y propuestas.',
    
    // Pricing
    pricing_title: 'Créditos & Precios',
    pricing_guest_title: 'Modo Invitado',
    pricing_guest_credits: '3 Créditos / Día',
    pricing_guest_feat1: 'Sin cuenta requerida',
    pricing_guest_feat2: 'Vinculado al dispositivo',
    pricing_guest_cta: 'Comenzar ahora',
    pricing_account_title: 'Con Cuenta',
    pricing_account_credits: '5 Créditos / Día',
    pricing_account_feat1: 'Uso en múltiples dispositivos',
    pricing_account_feat2: 'Compra paquetes de créditos',
    pricing_account_feat3: 'Colección & Historial',
    pricing_account_cta: 'Crear Cuenta',
    pricing_info_title: 'Cómo funciona',
    pricing_info_guest: 'Modo Invitado: 3 créditos gratis por día en este dispositivo.',
    pricing_info_account: 'Con Cuenta: 5 créditos gratis por día más paquetes de créditos opcionales para escaneos adicionales.',
    pricing_packages_title: '¿Necesitas más créditos?',
    pricing_starter_name: 'Paquete Starter',
    pricing_starter_credits: '20 Créditos',
    pricing_plus_name: 'Paquete Plus',
    pricing_plus_credits: '50 Créditos',
    pricing_pro_name: 'Paquete Pro',
    pricing_pro_credits: '100 Créditos',
    pricing_package_cta: 'Obtener Créditos',
    pricing_trust_onetime: 'Pago único',
    pricing_trust_nosub: 'Sin suscripción',
    pricing_trust_secure: 'Pago seguro',
    
    // FAQ
    faq_title: 'Preguntas Frecuentes',
    faq_q1: '¿Qué modos de escaneo ofrece ForRealScan?',
    faq_a1: 'Tres modos: ImageScan (1 crédito) para verificaciones rápidas de imágenes. StoryScan (2 créditos) para publicaciones con texto. FullScan (3 créditos) para un análisis completo con Veritas & Robo.',
    faq_q2: '¿Quiénes son Veritas y Robo?',
    faq_a2: 'Veritas y Robo son nuestras dos perspectivas de análisis. Veritas examina si una imagen se siente natural – luz, sombras, profundidad. Robo busca patrones artificiales típicos de imágenes generadas por IA. Juntos te dan una evaluación equilibrada.',
    faq_q3: '¿Qué tan confiables son los resultados?',
    faq_a3: 'ForRealScan te da indicaciones claras, no juicios absolutos. Siempre mostramos probabilidades y explicamos por qué algo habla a favor o en contra de la IA. En muchos casos, la IA se detecta de manera muy confiable, pero para imágenes muy buenas o fotos fuertemente editadas, puede haber incertidumbres.',
    faq_q4: '¿Cuántos créditos obtengo gratis?',
    faq_a4: 'En modo invitado obtienes 3 créditos por día. Con cuenta gratuita son 5 créditos por día. Puedes recargar créditos adicionales en cualquier momento si lo necesitas.',
    faq_q5: '¿Se almacenan mis imágenes?',
    faq_a5: 'No. Tus imágenes solo se procesan para el análisis y no se almacenan permanentemente. La privacidad es nuestra máxima prioridad.',
    faq_q6: '¿Por qué ForRealScan no da 100% de certeza?',
    faq_a6: 'Los generadores de IA evolucionan constantemente, y las fotos reales a veces parecen "demasiado perfectas". Por eso ForRealScan trabaja con probabilidades en lugar de juicios absolutos. Siempre te explicamos qué habla a favor o en contra – y así puedes decidir por ti mismo.',
    faq_q7: '¿Puedo usar ForRealScan comercialmente?',
    faq_a7: '¡Sí! Puedes usar ForRealScan para propósitos comerciales, por ejemplo, para verificaciones periodísticas o campañas de marketing.',
    faq_q8: '¿Qué formatos de imagen son compatibles?',
    faq_a8: 'Admitimos JPG, PNG, WEBP y la mayoría de los formatos de imagen comunes. El tamaño máximo de archivo es de 20 MB.',
    
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
    veritas_robo_closing: 'Veritas y Robo miran cada imagen desde dos direcciones – al final obtienes una evaluación conjunta y equilibrada por ForRealScan.',

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
    methodology_subtitle: 'La transparencia genera confianza. Cómo funciona ForRealScan – del análisis a los resultados, explicado abiertamente.',
    methodology_cta_scan: 'Iniciar Escaneo',
    methodology_cta_examples: 'Ver Ejemplos',

    // Section 1: Three Modes
    methodology_modes_title: 'Tres Modos. Un Objetivo: Claridad.',
    methodology_modes_intro: 'ForRealScan ofrece tres modos de análisis que responden a diferentes preguntas:',
    methodology_mode_image_name: 'ImageScan',
    methodology_mode_image_question: '¿Esta imagen es real o generada por IA?',
    methodology_mode_image_method: 'Análisis forense + GPT-4o Vision',
    methodology_mode_image_credits: '1 Crédito',
    methodology_mode_image_output: 'Tarjeta coleccionable + Tarjeta para compartir',
    methodology_mode_story_name: 'StoryScan',
    methodology_mode_story_question: '¿Esta afirmación es verdadera?',
    methodology_mode_story_method: 'Investigación de fuentes + Verificación de hechos',
    methodology_mode_story_credits: '2 Créditos',
    methodology_mode_story_output: 'Tarjeta coleccionable + Informe PDF',
    methodology_mode_full_name: 'FullScan',
    methodology_mode_full_question: '¿La imagen coincide con la historia?',
    methodology_mode_full_method: 'Análisis de imagen + Verificación + Detección de conflictos',
    methodology_mode_full_credits: '3 Créditos',
    methodology_mode_full_output: 'Tarjeta dual con ambos análisis',
    methodology_modes_outro: 'StoryScan acepta texto directamente o lo extrae automáticamente de capturas de pantalla (OCR). FullScan detecta la forma más peligrosa de engaño: cuando una imagen real se combina con una historia falsa – o viceversa.',
    methodology_modes_table_question: 'Pregunta',
    methodology_modes_table_method: 'Método',
    methodology_modes_table_credits: 'Créditos',
    methodology_modes_table_output: 'Resultado',

    // Section 2: Dual System
    methodology_dual_title: 'Dos Perspectivas. Un Veredicto.',
    methodology_dual_intro: 'No dependemos de un solo algoritmo. ForRealScan emplea dos lógicas de análisis opuestas:',
    methodology_veritas_title: 'VERITAS – La Mirada de Autenticidad',
    methodology_veritas_color: 'Color: Verde',
    methodology_veritas_intro: 'Veritas busca la huella digital de la realidad:',
    methodology_veritas_point1: 'Irregularidades naturales en las estructuras de imagen',
    methodology_veritas_point2: 'Artefactos de compresión típicos de cámaras reales',
    methodology_veritas_point3: 'Sombras y reflejos de luz físicamente correctos',
    methodology_veritas_point4: 'Variaciones orgánicas de textura en piel, cabello, superficies',
    methodology_veritas_point5: 'Composición orgánica en lugar de perfección construida',
    methodology_robo_title: 'ROBO – El Detector de IA',
    methodology_robo_color: 'Color: Azul',
    methodology_robo_intro: 'Robo se especializa en lo antinatural:',
    methodology_robo_point1: 'Señales de consenso: Múltiples verificaciones independientes apuntan a IA',
    methodology_robo_point2: 'Marcadores forenses: Patrones de píxeles que solo producen modelos generativos',
    methodology_robo_point3: 'Errores anatómicos: Estructuras de manos ilógicas, dedos fusionados',
    methodology_robo_point4: 'Artefactos de textura: Superficies excesivamente suaves, plásticas',
    methodology_robo_point5: 'Rupturas físicas: Luz, sombra o perspectiva desafían la lógica',
    methodology_robo_point6: 'Firmas inquietantes: La impresión general se siente artificial y perturbadora',
    methodology_dual_cooperation: 'Cómo trabajan juntos',
    methodology_dual_cooperation_text: 'Cuando ambos coinciden, el resultado es claro. Cuando no están de acuerdo, ForRealScan muestra ambas perspectivas lado a lado – para que puedas formar tu propio juicio.',

    // Section 3: Understanding Results
    methodology_results_title: 'Entendiendo los Resultados',
    methodology_results_intro: 'Un escaneo ofrece más que solo un número.',
    methodology_results_scale_title: 'La Escala de Probabilidad',
    methodology_results_low_title: '0–30%: Baja Probabilidad de IA',
    methodology_results_low_text: 'Indicadores predominantemente VERITAS. La imagen muestra características de fotografía auténtica.',
    methodology_results_mid_title: '30–70%: Zona de Incertidumbre',
    methodology_results_mid_text: 'Ambas perspectivas se muestran. Señales auténticas y sospechosas están equilibradas.',
    methodology_results_high_title: '70–100%: Alta Probabilidad de IA',
    methodology_results_high_text: 'Indicadores predominantemente ROBO. Se detectaron patrones típicos de IA generativa.',
    methodology_confidence_title: 'El Nivel de Confianza',
    methodology_confidence_intro: 'Más allá de la probabilidad, mostramos qué tan seguro está el sistema de su evaluación:',
    methodology_confidence_very_high: 'Muy alto: Las señales son inequívocas y consistentes',
    methodology_confidence_high: 'Alto: Tendencia clara con dudas residuales mínimas',
    methodology_confidence_moderate: 'Moderado: Patrones reconocibles, pero margen de interpretación',
    methodology_confidence_low: 'Bajo: Pocas señales útiles – precaución al sacar conclusiones',
    methodology_sources_title: 'StoryScan: Transparencia de Fuentes',
    methodology_sources_intro: 'Clasificamos cada fuente por su integridad periodística:',
    methodology_sources_tier_a: 'Tier A: Fuentes primarias de máxima fiabilidad (Reuters, AP, BBC, NYT, .gov, .edu)',
    methodology_sources_tier_b: 'Tier B: Medios de calidad establecidos (Forbes, Bloomberg, principales medios nacionales)',
    methodology_sources_tier_c: 'Tier C: Fuentes adicionales verificables – evaluar con cuidado',

    // Section 4: Limitations
    methodology_limits_title: 'Límites Honestos',
    methodology_limits_intro: 'Ningún sistema de detección es infalible. Comunicamos nuestros límites abiertamente:',
    methodology_hardscenes_title: 'Tipos de Escena Difíciles (Hard Scenes)',
    methodology_hardscenes_intro: 'Ciertos tipos de imagen son naturalmente desafiantes para los detectores de IA:',
    methodology_hardscenes_landscape: 'Paisajes – pocos puntos de anclaje anatómicos',
    methodology_hardscenes_nightsky: 'Cielos nocturnos y auroras boreales – fenómenos de luz abstractos',
    methodology_hardscenes_artwork: 'Obras de arte – intencionalmente estilizadas',
    methodology_hardscenes_abstract: 'Imágenes abstractas – sin referencia a la realidad',
    methodology_hardscenes_outro: 'Para estas escenas, ForRealScan muestra un aviso correspondiente.',
    methodology_other_limits_title: 'Otras Limitaciones',
    methodology_limits_compressed: 'Imágenes muy comprimidas: Guardados repetidos o compartir por messenger destruye detalles forenses.',
    methodology_limits_screenshots: 'Capturas de pantalla: Texto y elementos de interfaz oscurecen el análisis puro de imagen.',
    methodology_limits_hybrid: 'Imágenes híbridas: Fotos reales con retoques de IA (filtros, cambios de fondo) – el desafío definitivo de detección.',
    methodology_limits_new_models: 'Últimos modelos de IA: La tecnología evoluciona rápidamente. Los modelos más nuevos pueden ser más difíciles de detectar.',
    methodology_limits_professional: 'Fotos profesionales de estudio: La iluminación perfecta puede ser erróneamente marcada como "demasiado perfecta".',
    methodology_limits_outro: 'Cuando un resultado es incierto, ForRealScan lo indica claramente.',

    // Section 5: Responsible Use
    methodology_responsible_title: 'Uso Responsable',
    methodology_responsible_intro: 'ForRealScan es una herramienta de orientación – no una prueba judicial.',
    methodology_responsible_subtitle: 'Los resultados deberían:',
    methodology_responsible_point1: 'Servir como punto de partida para más investigación, no como veredicto final',
    methodology_responsible_point2: 'No usarse solos como base para acusaciones o acciones legales',
    methodology_responsible_point3: 'Considerarse en contexto: fuente, remitente y situación importan',
    methodology_responsible_point4: 'Interpretarse con sentido común',
    methodology_responsible_outro: 'Nuestro objetivo: Ayudarte a tomar decisiones más informadas en un mundo de contenido manipulado – no sembrar desconfianza o fomentar conclusiones apresuradas.',

    // Section 6: Privacy
    methodology_privacy_title: 'Privacidad Durante el Análisis',
    methodology_privacy_intro: 'Tus imágenes te pertenecen.',
    methodology_privacy_local: 'Almacenamiento local: Tus escaneos se guardan en la base de datos de tu navegador (IndexedDB) en tu dispositivo.',
    methodology_privacy_server: 'Procesamiento en servidor: Las imágenes solo se procesan temporalmente para análisis – sin almacenamiento permanente.',
    methodology_privacy_no_training: 'Sin entrenamiento de IA: Nunca usamos tus subidas para entrenar nuestros modelos.',
    methodology_privacy_encryption: 'Encriptación: Todas las transmisiones ocurren vía HTTPS/TLS.',
    methodology_privacy_no_sale: 'Sin venta de datos: No vendemos datos de usuarios.',
    methodology_privacy_link: 'Más detalles en nuestra Política de Privacidad.',

    // Section 7: Summary
    methodology_summary_title: 'Resumen',
    methodology_summary_text: 'ForRealScan combina análisis forense de imágenes con investigación de verificación de hechos. Dos perspectivas – VERITAS y ROBO – trabajan juntas para entregarte una evaluación fundamentada: como probabilidad, no como veredicto absoluto. Mostramos incertidumbres de forma transparente. Nombramos nuestros límites. Y dejamos el juicio final a ti.',
    methodology_summary_tagline: 'Tres modos. Dos perspectivas. Una decisión: La tuya.',

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
    hero_subtitle: 'Téléchargez votre image et obtenez un pourcentage avec ForRealScan – avec des indicateurs IA, des zones d\'incertitude et des détails techniques pour mieux évaluer ce qui est réel.',
    hero_cta_primary: 'Vérifier maintenant',
    hero_cta_secondary: 'Voir les exemples',
    hero_microcopy: 'Essai gratuit, sans inscription.',
    
    // How it works
    how_title: 'Comment fonctionne ForRealScan',
    how_step1_title: 'Trois chemins vers la vérité',
    how_step1_text: 'ImageScan vérifie si une image est réelle. StoryScan examine si l\'image et le texte correspondent. FullScan analyse les deux – image et histoire – simultanément et en détail.',
    how_step2_title: 'Du langage clair au lieu de devinettes',
    how_step2_text: 'Veritas et Robo regardent la même image sous deux angles – naturel et technique. Ensemble, ils fournissent une explication compréhensible, pas juste un pourcentage.',
    how_step3_title: 'Confiant face aux cas douteux',
    how_step3_text: 'ForRealScan vous donne des indications claires, pas des jugements absolus. Quand quelque chose est incertain, nous vous le montrons – et pourquoi. Vous décidez.',
    
    // Story Check & Text (Sektion 2: Trois modes de scan)
    story_title: 'Trois modes de scan pour chaque situation',
    story_text_title: 'ImageScan',
    story_text_desc: 'Vérifie en quelques secondes si une image est réelle ou générée par IA. Veritas et Robo analysent la lumière, les textures, les motifs artificiels – et expliquent ce qui est suspect.',
    story_check_title: 'StoryScan',
    story_check_desc: 'Vérifie des publications complètes – image et texte ensemble. L\'image correspond-elle au récit ? L\'histoire est-elle cohérente ? ForRealScan révèle les incohérences.',
    story_full_title: 'FullScan',
    story_full_desc: 'Combine ImageScan et StoryScan pour une image complète. Veritas et Robo analysent tout ce qu\'il y a à voir – et expliquent exactement comment ils arrivent à leur évaluation.',
    
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
    
    // Scan Modes
    scan_section_title: 'Que voulez-vous vérifier ?',
    scan_section_subtitle: 'Choisissez le forfait adapté à votre analyse',
    scan_compare_link: 'Comparer les Modes',
    scan_most_popular: 'Populaire',
    scan_premium_badge: '💎💎💎',
    scan_cta: 'Démarrer le Scan',
    // Category Headers
    scan_cat_learn: 'CE QUE VOUS APPRENDREZ',
    scan_cat_get: 'CE QUE VOUS OBTENEZ',
    scan_cat_ideal: 'IDÉAL POUR',
    // ImageScan
    scan_image_title: 'ImageScan',
    scan_image_subtitle: 'Mon image est-elle réelle ou générée par IA ?',
    scan_image_desc: 'Analyse IA avec signaux forensiques',
    scan_image_credits: 'Credit',
    scan_image_credits_value: '1',
    scan_image_learn_1: 'Probabilité IA en % (Midjourney, DALL-E, Flux, Stable Diffusion, ChatGPT, Leonardo, Firefly et plus)',
    scan_image_learn_2: 'Verdict : Réel / Généré par IA / Incertain',
    scan_image_learn_3: '3-5 indices spécifiques à l\'image',
    scan_image_learn_4: 'Anomalies visuelles (visages, mains, textures, éclairage)',
    scan_image_get_1: 'Carte de résultat',
    scan_image_get_2: 'Carte de partage',
    scan_image_get_3: '3-5 découvertes clés',
    scan_image_ideal_1: 'Vérification rapide d\'images individuelles',
    scan_image_ideal_2: 'Vérifier les publications sur les réseaux sociaux',
    scan_image_ideal_3: 'Démasquer les photos de profil suspectes',
    // StoryScan
    scan_story_title: 'StoryScan',
    scan_story_subtitle: 'Cette histoire / affirmation est-elle vraie ?',
    scan_story_desc: 'Vérification des faits avec sources',
    scan_story_credits: 'Credits',
    scan_story_credits_value: '2',
    scan_story_learn_1: 'Vérification avec références des sources',
    scan_story_learn_2: 'Estimation de précision (ex. "70-85% correct")',
    scan_story_learn_3: 'Ce qui est vrai ✓ / Ce qui manque ou induit en erreur ⚠',
    scan_story_learn_4: 'Sources vérifiées avec liens',
    scan_story_get_1: 'Carte de résultat',
    scan_story_get_2: 'Carte de partage',
    scan_story_get_3: 'Rapport PDF (1 page)',
    scan_story_ideal_1: 'Vérifier les affirmations virales',
    scan_story_ideal_2: 'Vérifier les informations',
    scan_story_ideal_3: 'Démasquer les chaînes et rumeurs',
    // FullScan
    scan_full_title: 'FullScan',
    scan_full_subtitle: 'Vérification complète (Image + Contexte)',
    scan_full_desc: 'Analyse d\'image + vérification des sources en un',
    scan_full_credits: 'Credits',
    scan_full_credits_value: '3',
    scan_full_learn_1: 'Analyse d\'image complète (comme ImageScan)',
    scan_full_learn_2: 'Vérification complète des faits (comme StoryScan)',
    scan_full_learn_3: '⚠ Détection de conflits : Avertit quand une image réelle est utilisée avec un faux contexte OU une image IA avec un contexte correct',
    scan_full_get_1: 'Carte de résultat',
    scan_full_get_2: 'Carte de partage',
    scan_full_get_3: 'Rapport PDF avec tous les détails',
    scan_full_get_4: '3-5 découvertes clés',
    scan_full_ideal_1: 'Combinaisons suspectes image-texte',
    scan_full_ideal_2: 'Vérification professionnelle',
    scan_full_ideal_3: 'Quand vous voulez être sûr',
    
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
    case1_detail1: 'ImageScan : Prouvez rapidement que votre dernière photo est réelle – même si vous l\'avez légèrement retouchée.',
    case1_detail2: 'StoryScan : Vérifiez des publications sur les réseaux sociaux avant de les partager ou de les commenter.',
    case1_detail3: 'FullScan : Obtenez une analyse détaillée pour votre prochaine campagne – les clients apprécient la transparence.',
    case2_title: 'Journalistes & Vérificateurs',
    case2_text: 'Vérifiez rapidement et de manière transparente les images pour détecter d\'éventuelles manipulations.',
    case2_detail1: 'ImageScan : Vérifiez rapidement les photos de presse avant de les publier dans votre article.',
    case2_detail2: 'StoryScan : Examinez si l\'image et le texte d\'une publication racontent une histoire cohérente.',
    case2_detail3: 'FullScan : Documentez votre vérification avec une analyse compréhensible pour votre public.',
    case3_title: 'Rencontres & Social',
    case3_text: 'Reconnaissez tôt les photos de profil suspectes et les mises en scène irréalistes.',
    case3_detail1: 'ImageScan : Vérifiez les photos de profil suspectes en quelques secondes.',
    case3_detail2: 'StoryScan : Scannez des publications avec texte pour détecter les exagérations ou les récits construits.',
    case3_detail3: 'FullScan : En cas de soupçon sérieux, obtenez une image complète avec une analyse exhaustive.',
    case4_title: 'Photographie & Marketing',
    case4_text: 'Rendez visible l\'authenticité de vos visuels.',
    case4_detail1: 'ImageScan : Montrez rapidement quelles images sont de vraies photos et lesquelles ont été éditées numériquement.',
    case4_detail2: 'StoryScan : Vérifiez si l\'image et le texte de votre publication sont cohérents avant de l\'envoyer.',
    case4_detail3: 'FullScan : Utilisez l\'analyse complète comme atout de transparence dans vos présentations et propositions.',
    
    // Pricing
    pricing_title: 'Crédits & Tarifs',
    pricing_guest_title: 'Mode Invité',
    pricing_guest_credits: '3 Crédits / Jour',
    pricing_guest_feat1: 'Aucun compte requis',
    pricing_guest_feat2: 'Lié à l\'appareil',
    pricing_guest_cta: 'Commencer',
    pricing_account_title: 'Avec Compte',
    pricing_account_credits: '5 Crédits / Jour',
    pricing_account_feat1: 'Utilisation multi-appareils',
    pricing_account_feat2: 'Achat de packs de crédits',
    pricing_account_feat3: 'Collection & Historique',
    pricing_account_cta: 'Créer un Compte',
    pricing_info_title: 'Comment ça marche',
    pricing_info_guest: 'Mode Invité : 3 crédits gratuits par jour sur cet appareil.',
    pricing_info_account: 'Avec Compte : 5 crédits gratuits par jour plus packs de crédits optionnels pour des scans supplémentaires.',
    pricing_packages_title: 'Besoin de plus de crédits ?',
    pricing_starter_name: 'Pack Starter',
    pricing_starter_credits: '20 Crédits',
    pricing_plus_name: 'Pack Plus',
    pricing_plus_credits: '50 Crédits',
    pricing_pro_name: 'Pack Pro',
    pricing_pro_credits: '100 Crédits',
    pricing_package_cta: 'Obtenir des Crédits',
    pricing_trust_onetime: 'Paiement unique',
    pricing_trust_nosub: 'Sans abonnement',
    pricing_trust_secure: 'Paiement sécurisé',
    
    // FAQ
    faq_title: 'Questions fréquentes',
    faq_q1: 'Quels modes de scan propose ForRealScan ?',
    faq_a1: 'Trois modes : ImageScan (1 crédit) pour des vérifications rapides d\'images. StoryScan (2 crédits) pour des publications avec texte. FullScan (3 crédits) pour une analyse complète avec Veritas & Robo.',
    faq_q2: 'Qui sont Veritas et Robo ?',
    faq_a2: 'Veritas et Robo sont nos deux perspectives d\'analyse. Veritas examine si une image paraît naturelle – lumière, ombres, profondeur. Robo recherche les motifs artificiels typiques des images générées par IA. Ensemble, ils vous donnent une évaluation équilibrée.',
    faq_q3: 'Quelle est la fiabilité des résultats ?',
    faq_a3: 'ForRealScan vous donne des indications claires, pas des jugements absolus. Nous montrons toujours des probabilités et expliquons pourquoi quelque chose parle pour ou contre l\'IA. Dans de nombreux cas, l\'IA est détectée de manière très fiable, mais pour les images très réussies ou les photos fortement retouchées, il peut y avoir des incertitudes.',
    faq_q4: 'Combien de crédits gratuits ai-je ?',
    faq_a4: 'En mode invité, vous recevez 3 crédits par jour. Avec un compte gratuit, ce sont 5 crédits par jour. Vous pouvez recharger des crédits supplémentaires à tout moment si nécessaire.',
    faq_q5: 'Mes images sont-elles stockées ?',
    faq_a5: 'Non. Vos images ne sont traitées que pour l\'analyse et ne sont pas stockées de manière permanente. La confidentialité est notre priorité absolue.',
    faq_q6: 'Pourquoi ForRealScan ne donne-t-il pas 100% de certitude ?',
    faq_a6: 'Les générateurs IA évoluent constamment, et les vraies photos paraissent parfois « trop parfaites ». C\'est pourquoi ForRealScan travaille avec des probabilités au lieu de jugements absolus. Nous vous expliquons toujours ce qui parle pour ou contre – et vous pouvez ainsi décider vous-même.',
    faq_q7: 'Puis-je utiliser ForRealScan commercialement ?',
    faq_a7: 'Oui ! Vous pouvez utiliser ForRealScan à des fins commerciales, par exemple pour des vérifications journalistiques ou des campagnes marketing.',
    faq_q8: 'Quels formats d\'image sont pris en charge ?',
    faq_a8: 'Nous prenons en charge JPG, PNG, WEBP et la plupart des formats d\'image courants. La taille maximale du fichier est de 20 Mo.',
    
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
    veritas_robo_closing: 'Veritas et Robo regardent chaque image sous deux angles – à la fin, vous obtenez une évaluation commune et équilibrée par ForRealScan.',

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
    methodology_subtitle: 'La transparence crée la confiance. Comment fonctionne ForRealScan – de l\'analyse aux résultats, expliqué ouvertement.',
    methodology_cta_scan: 'Lancer le Scan',
    methodology_cta_examples: 'Voir les Exemples',

    // Section 1: Three Modes
    methodology_modes_title: 'Trois Modes. Un Objectif : La Clarté.',
    methodology_modes_intro: 'ForRealScan propose trois modes d\'analyse qui répondent à différentes questions :',
    methodology_mode_image_name: 'ImageScan',
    methodology_mode_image_question: 'Cette image est-elle réelle ou générée par IA ?',
    methodology_mode_image_method: 'Analyse forensique + GPT-4o Vision',
    methodology_mode_image_credits: '1 Crédit',
    methodology_mode_image_output: 'Carte collection + Carte partage',
    methodology_mode_story_name: 'StoryScan',
    methodology_mode_story_question: 'Cette affirmation est-elle vraie ?',
    methodology_mode_story_method: 'Recherche de sources + Vérification des faits',
    methodology_mode_story_credits: '2 Crédits',
    methodology_mode_story_output: 'Carte collection + Rapport PDF',
    methodology_mode_full_name: 'FullScan',
    methodology_mode_full_question: 'L\'image correspond-elle à l\'histoire ?',
    methodology_mode_full_method: 'Analyse image + Vérification + Détection de conflits',
    methodology_mode_full_credits: '3 Crédits',
    methodology_mode_full_output: 'Carte double avec les deux analyses',
    methodology_modes_outro: 'StoryScan accepte le texte directement ou l\'extrait automatiquement des captures d\'écran (OCR). FullScan détecte la forme la plus dangereuse de tromperie : quand une vraie image est associée à une fausse histoire – ou vice versa.',
    methodology_modes_table_question: 'Question',
    methodology_modes_table_method: 'Méthode',
    methodology_modes_table_credits: 'Crédits',
    methodology_modes_table_output: 'Résultat',

    // Section 2: Dual System
    methodology_dual_title: 'Deux Perspectives. Un Verdict.',
    methodology_dual_intro: 'Nous ne dépendons pas d\'un seul algorithme. ForRealScan utilise deux logiques d\'analyse opposées :',
    methodology_veritas_title: 'VERITAS – Le Regard de l\'Authenticité',
    methodology_veritas_color: 'Couleur : Vert',
    methodology_veritas_intro: 'Veritas recherche l\'empreinte digitale de la réalité :',
    methodology_veritas_point1: 'Irrégularités naturelles dans les structures d\'image',
    methodology_veritas_point2: 'Artefacts de compression typiques des vraies caméras',
    methodology_veritas_point3: 'Ombres et reflets de lumière physiquement corrects',
    methodology_veritas_point4: 'Variations organiques de texture sur peau, cheveux, surfaces',
    methodology_veritas_point5: 'Composition organique plutôt que perfection construite',
    methodology_robo_title: 'ROBO – Le Détecteur d\'IA',
    methodology_robo_color: 'Couleur : Bleu',
    methodology_robo_intro: 'Robo se spécialise dans l\'artificiel :',
    methodology_robo_point1: 'Signaux de consensus : Plusieurs vérifications indépendantes pointent vers l\'IA',
    methodology_robo_point2: 'Marqueurs forensiques : Motifs de pixels que seuls les modèles génératifs produisent',
    methodology_robo_point3: 'Erreurs anatomiques : Structures de mains illogiques, doigts fusionnés',
    methodology_robo_point4: 'Artefacts de texture : Surfaces excessivement lisses, plastiques',
    methodology_robo_point5: 'Ruptures physiques : Lumière, ombre ou perspective défient la logique',
    methodology_robo_point6: 'Signatures inquiétantes : L\'impression générale semble artificielle et troublante',
    methodology_dual_cooperation: 'Comment ils travaillent ensemble',
    methodology_dual_cooperation_text: 'Quand les deux sont d\'accord, le résultat est clair. En cas de désaccord, ForRealScan affiche les deux perspectives côte à côte – pour que vous puissiez former votre propre jugement.',

    // Section 3: Understanding Results
    methodology_results_title: 'Comprendre les Résultats',
    methodology_results_intro: 'Un scan offre plus qu\'un simple nombre.',
    methodology_results_scale_title: 'L\'Échelle de Probabilité',
    methodology_results_low_title: '0–30% : Faible Probabilité IA',
    methodology_results_low_text: 'Indicateurs principalement VERITAS. L\'image montre des caractéristiques de photographie authentique.',
    methodology_results_mid_title: '30–70% : Zone d\'Incertitude',
    methodology_results_mid_text: 'Les deux perspectives sont affichées. Signaux authentiques et suspects sont équilibrés.',
    methodology_results_high_title: '70–100% : Haute Probabilité IA',
    methodology_results_high_text: 'Indicateurs principalement ROBO. Motifs typiques d\'IA générative détectés.',
    methodology_confidence_title: 'Le Niveau de Confiance',
    methodology_confidence_intro: 'Au-delà de la probabilité, nous montrons à quel point le système est sûr de son évaluation :',
    methodology_confidence_very_high: 'Très élevé : Les signaux sont sans équivoque et cohérents',
    methodology_confidence_high: 'Élevé : Tendance claire avec doutes résiduels minimes',
    methodology_confidence_moderate: 'Modéré : Motifs reconnaissables, mais marge d\'interprétation',
    methodology_confidence_low: 'Faible : Peu de signaux exploitables – prudence dans les conclusions',
    methodology_sources_title: 'StoryScan : Transparence des Sources',
    methodology_sources_intro: 'Nous classifions chaque source selon son intégrité journalistique :',
    methodology_sources_tier_a: 'Tier A : Sources primaires de fiabilité maximale (Reuters, AP, BBC, NYT, .gov, .edu)',
    methodology_sources_tier_b: 'Tier B : Médias de qualité établis (Forbes, Bloomberg, principaux médias nationaux)',
    methodology_sources_tier_c: 'Tier C : Sources vérifiables supplémentaires – à évaluer avec prudence',

    // Section 4: Limitations
    methodology_limits_title: 'Limites Honnêtes',
    methodology_limits_intro: 'Aucun système de détection n\'est infaillible. Nous communiquons nos limites ouvertement :',
    methodology_hardscenes_title: 'Types de Scènes Difficiles (Hard Scenes)',
    methodology_hardscenes_intro: 'Certains types d\'images sont naturellement difficiles pour les détecteurs d\'IA :',
    methodology_hardscenes_landscape: 'Paysages – peu de points d\'ancrage anatomiques',
    methodology_hardscenes_nightsky: 'Ciels nocturnes et aurores boréales – phénomènes lumineux abstraits',
    methodology_hardscenes_artwork: 'Œuvres d\'art – intentionnellement stylisées',
    methodology_hardscenes_abstract: 'Images abstraites – aucune référence à la réalité',
    methodology_hardscenes_outro: 'Pour ces scènes, ForRealScan affiche un avertissement correspondant.',
    methodology_other_limits_title: 'Autres Limitations',
    methodology_limits_compressed: 'Images très compressées : Sauvegardes répétées ou partage via messenger détruit les détails forensiques.',
    methodology_limits_screenshots: 'Captures d\'écran : Texte et éléments d\'interface obscurcissent l\'analyse pure de l\'image.',
    methodology_limits_hybrid: 'Images hybrides : Vraies photos avec retouches IA (filtres, changements de fond) – le défi ultime de détection.',
    methodology_limits_new_models: 'Derniers modèles IA : La technologie évolue rapidement. Les modèles plus récents peuvent être plus difficiles à détecter.',
    methodology_limits_professional: 'Photos de studio professionnelles : L\'éclairage parfait peut être incorrectement signalé comme "trop parfait".',
    methodology_limits_outro: 'Quand un résultat est incertain, ForRealScan l\'indique clairement.',

    // Section 5: Responsible Use
    methodology_responsible_title: 'Utilisation Responsable',
    methodology_responsible_intro: 'ForRealScan est un outil d\'orientation – pas une preuve judiciaire.',
    methodology_responsible_subtitle: 'Les résultats devraient :',
    methodology_responsible_point1: 'Servir de point de départ pour plus de recherches, pas comme verdict final',
    methodology_responsible_point2: 'Ne pas être utilisés seuls comme base pour accusations ou actions légales',
    methodology_responsible_point3: 'Être considérés dans le contexte : source, expéditeur et situation comptent',
    methodology_responsible_point4: 'Être interprétés avec bon sens',
    methodology_responsible_outro: 'Notre objectif : Vous aider à prendre des décisions plus éclairées dans un monde de contenu manipulé – pas de semer la méfiance ou d\'encourager des conclusions hâtives.',

    // Section 6: Privacy
    methodology_privacy_title: 'Confidentialité pendant l\'Analyse',
    methodology_privacy_intro: 'Vos images vous appartiennent.',
    methodology_privacy_local: 'Stockage local : Vos scans sont stockés dans la base de données de votre navigateur (IndexedDB) sur votre appareil.',
    methodology_privacy_server: 'Traitement serveur : Les images ne sont traitées que temporairement pour l\'analyse – aucun stockage permanent.',
    methodology_privacy_no_training: 'Pas d\'entraînement IA : Nous n\'utilisons jamais vos téléchargements pour entraîner nos modèles.',
    methodology_privacy_encryption: 'Chiffrement : Toutes les transmissions se font via HTTPS/TLS.',
    methodology_privacy_no_sale: 'Pas de vente de données : Nous ne vendons pas les données des utilisateurs.',
    methodology_privacy_link: 'Plus de détails dans notre Politique de Confidentialité.',

    // Section 7: Summary
    methodology_summary_title: 'Résumé',
    methodology_summary_text: 'ForRealScan combine l\'analyse forensique d\'images avec la recherche de vérification des faits. Deux perspectives – VERITAS et ROBO – travaillent ensemble pour vous fournir une évaluation fondée : comme probabilité, pas comme verdict absolu. Nous affichons les incertitudes de manière transparente. Nous nommons nos limites. Et nous vous laissons le jugement final.',
    methodology_summary_tagline: 'Trois modes. Deux perspectives. Une décision : La vôtre.',

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