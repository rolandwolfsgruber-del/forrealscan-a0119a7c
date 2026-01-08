import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Language } from '@/lib/translations';
import { LANGUAGE_STORAGE_KEY } from '@/lib/constants';
import { SubPageHeader } from '@/components/SubPageHeader';
import { Footer } from '@/components/Footer';
import { useTheme } from '@/hooks/useTheme';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';

interface ArticleContent {
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: string;
  content: string;
}

const articleContents: Record<string, Record<Language, ArticleContent>> = {
  'ai-images-erkennen': {
    de: {
      title: 'Wie erkenne ich KI-generierte Bilder? 7 wichtige Merkmale',
      excerpt: 'KI-generierte Bilder werden immer realistischer. Erfahren Sie, welche Hinweise noch auf künstlich erstellte Bilder deuten.',
      date: '2026-01-05',
      readTime: 8,
      category: 'Anleitung',
      content: `
## Einleitung

Die Entwicklung von KI-Bildgeneratoren wie DALL-E, Midjourney und Stable Diffusion hat in den letzten Jahren enorme Fortschritte gemacht. Während diese Technologien beeindruckende kreative Möglichkeiten eröffnen, stellen sie uns auch vor die Herausforderung, echte Fotos von künstlich erstellten zu unterscheiden.

In diesem Artikel zeigen wir Ihnen 7 wichtige Merkmale, auf die Sie achten können, um KI-generierte Bilder zu erkennen.

## 1. Unnatürliche Details bei Händen und Fingern

Eines der bekanntesten Probleme von KI-Bildgeneratoren sind Hände. Obwohl sich die Technologie verbessert hat, zeigen viele KI-generierte Bilder noch immer:

- Falsche Anzahl von Fingern (zu viele oder zu wenige)
- Unnatürliche Gelenkwinkel
- Verschmelzende oder verdrehte Finger
- Unrealistische Proportionen zwischen Hand und Fingern

**Tipp:** Zoomen Sie bei verdächtigen Bildern auf die Hände und zählen Sie die Finger.

## 2. Inkonsistenzen bei Text und Schrift

KI hat nach wie vor Schwierigkeiten mit Text in Bildern:

- Unleserliche oder sinnlose Buchstaben
- Verdrehte oder gespiegelte Zeichen
- Text, der nicht zur Perspektive des Bildes passt
- Inkonsistente Schriftgrößen innerhalb desselben Textelements

## 3. Symmetrie und Wiederholungsmuster

KI neigt dazu, bestimmte Muster zu wiederholen:

- Zu perfekte Symmetrie in natürlichen Objekten
- Wiederholende Texturen oder Elemente im Hintergrund
- Identische Gesichter in einer Menschenmenge
- Unnatürlich regelmäßige Strukturen

## 4. Unstimmigkeiten bei Licht und Schatten

Physikalisch korrekte Beleuchtung ist für KI eine Herausforderung:

- Schatten, die in unterschiedliche Richtungen fallen
- Fehlende Schatten bei Objekten
- Inkonsistente Lichtquellen im selben Bild
- Unrealistische Reflexionen

## 5. Probleme mit Zähnen und Augen

Bei Porträts zeigen sich oft Fehler:

- Zu viele oder zu wenige Zähne
- Ungleichmäßige Zahnreihen
- Pupillen unterschiedlicher Größe
- Unnatürliche Reflexionen in den Augen
- Asymmetrische Gesichtszüge

## 6. Hintergrundanomalien

Der Hintergrund verrät oft KI-Bilder:

- Verschwommene oder unscharfe Bereiche ohne logischen Grund
- Objekte, die in andere übergehen oder verschmelzen
- Architektonisch unmögliche Strukturen
- Fehlende logische Kontinuität

## 7. Unnatürliche Texturen und Oberflächen

Achten Sie auf:

- Zu glatte Haut ohne Poren
- Unnatürlich glänzende Oberflächen
- Wiederholende Muster in Stoffen oder Materialien
- "Plastikartiges" Aussehen bei organischen Materialien

## Wichtiger Hinweis

Diese Merkmale sind Hinweise, keine Beweise. KI-Generatoren werden ständig verbessert, und manche dieser Fehler treten bei neuesten Modellen seltener auf. Gleichzeitig können auch echte Fotos durch Kompression oder Bearbeitung ähnliche Artefakte aufweisen.

**Empfehlung:** Nutzen Sie Tools wie ForRealScan, um eine fundierte Analyse zu erhalten, und kombinieren Sie technische Analyse mit kritischem Denken.

## Fazit

Die Fähigkeit, KI-generierte Bilder zu erkennen, wird in unserer zunehmend digitalisierten Welt immer wichtiger. Während kein einzelnes Merkmal ein definitiver Beweis ist, kann die Kombination mehrerer Hinweise helfen, informierte Einschätzungen zu treffen.

Bleiben Sie wachsam, hinterfragen Sie verdächtige Bilder und nutzen Sie verfügbare Werkzeuge zur Unterstützung Ihrer Analyse.
      `,
    },
    en: {
      title: 'How to Recognize AI-Generated Images: 7 Key Features',
      excerpt: 'AI-generated images are becoming increasingly realistic. Learn which clues still indicate artificially created images.',
      date: '2026-01-05',
      readTime: 8,
      category: 'Guide',
      content: `
## Introduction

The development of AI image generators like DALL-E, Midjourney, and Stable Diffusion has made enormous progress in recent years. While these technologies open up impressive creative possibilities, they also challenge us to distinguish real photos from artificially created ones.

In this article, we show you 7 key features to look for when identifying AI-generated images.

## 1. Unnatural Details in Hands and Fingers

One of the most well-known problems with AI image generators is hands. Although the technology has improved, many AI-generated images still show:

- Wrong number of fingers (too many or too few)
- Unnatural joint angles
- Merging or twisted fingers
- Unrealistic proportions between hand and fingers

**Tip:** Zoom in on suspicious images to examine the hands and count the fingers.

## 2. Inconsistencies in Text and Writing

AI still struggles with text in images:

- Illegible or meaningless letters
- Twisted or mirrored characters
- Text that doesn't match the image's perspective
- Inconsistent font sizes within the same text element

## 3. Symmetry and Repetition Patterns

AI tends to repeat certain patterns:

- Too perfect symmetry in natural objects
- Repeating textures or elements in the background
- Identical faces in a crowd
- Unnaturally regular structures

## 4. Light and Shadow Inconsistencies

Physically correct lighting is a challenge for AI:

- Shadows falling in different directions
- Missing shadows for objects
- Inconsistent light sources in the same image
- Unrealistic reflections

## 5. Problems with Teeth and Eyes

Portraits often show errors:

- Too many or too few teeth
- Uneven tooth rows
- Pupils of different sizes
- Unnatural reflections in the eyes
- Asymmetrical facial features

## 6. Background Anomalies

The background often reveals AI images:

- Blurry or unfocused areas without logical reason
- Objects transitioning into or merging with others
- Architecturally impossible structures
- Lack of logical continuity

## 7. Unnatural Textures and Surfaces

Look for:

- Too smooth skin without pores
- Unnaturally shiny surfaces
- Repeating patterns in fabrics or materials
- "Plastic-like" appearance in organic materials

## Important Note

These features are clues, not proof. AI generators are constantly improving, and some of these errors occur less frequently in the latest models. At the same time, real photos can also exhibit similar artifacts due to compression or editing.

**Recommendation:** Use tools like ForRealScan to get a well-founded analysis, and combine technical analysis with critical thinking.

## Conclusion

The ability to recognize AI-generated images is becoming increasingly important in our increasingly digitized world. While no single feature is definitive proof, the combination of multiple clues can help make informed assessments.

Stay vigilant, question suspicious images, and use available tools to support your analysis.
      `,
    },
    it: {
      title: 'Come riconoscere le immagini generate dall\'IA: 7 caratteristiche chiave',
      excerpt: 'Le immagini generate dall\'IA stanno diventando sempre più realistiche. Scopri quali indizi indicano ancora immagini create artificialmente.',
      date: '2026-01-05',
      readTime: 8,
      category: 'Guida',
      content: `
## Introduzione

Lo sviluppo di generatori di immagini IA come DALL-E, Midjourney e Stable Diffusion ha fatto enormi progressi negli ultimi anni. Mentre queste tecnologie aprono impressionanti possibilità creative, ci sfidano anche a distinguere le foto reali da quelle create artificialmente.

In questo articolo ti mostriamo 7 caratteristiche chiave da cercare quando identifichi immagini generate dall'IA.

## 1. Dettagli innaturali in mani e dita

Uno dei problemi più noti dei generatori di immagini IA sono le mani. Sebbene la tecnologia sia migliorata, molte immagini generate dall'IA mostrano ancora:

- Numero sbagliato di dita (troppe o troppo poche)
- Angoli delle articolazioni innaturali
- Dita che si fondono o sono contorte
- Proporzioni irrealistiche tra mano e dita

## 2. Incoerenze nel testo e nella scrittura

L'IA ha ancora difficoltà con il testo nelle immagini:

- Lettere illeggibili o senza senso
- Caratteri contorti o specchiati
- Testo che non corrisponde alla prospettiva dell'immagine

## 3. Simmetria e pattern ripetitivi

L'IA tende a ripetere certi pattern:

- Simmetria troppo perfetta in oggetti naturali
- Texture o elementi ripetitivi nello sfondo
- Volti identici in una folla

## 4. Incoerenze di luce e ombra

L'illuminazione fisicamente corretta è una sfida per l'IA:

- Ombre che cadono in direzioni diverse
- Ombre mancanti per gli oggetti
- Fonti di luce incoerenti nella stessa immagine

## 5. Problemi con denti e occhi

I ritratti spesso mostrano errori:

- Troppi o troppo pochi denti
- File di denti irregolari
- Pupille di dimensioni diverse

## 6. Anomalie nello sfondo

Lo sfondo spesso rivela immagini IA:

- Aree sfocate senza motivo logico
- Oggetti che si fondono in altri
- Strutture architettonicamente impossibili

## 7. Texture e superfici innaturali

Cerca:

- Pelle troppo liscia senza pori
- Superfici innaturalmente lucide
- Pattern ripetitivi in tessuti o materiali

## Conclusione

La capacità di riconoscere le immagini generate dall'IA sta diventando sempre più importante. Usa strumenti come ForRealScan per ottenere un'analisi approfondita.
      `,
    },
    es: {
      title: 'Cómo reconocer imágenes generadas por IA: 7 características clave',
      excerpt: 'Las imágenes generadas por IA son cada vez más realistas. Aprende qué pistas todavía indican imágenes creadas artificialmente.',
      date: '2026-01-05',
      readTime: 8,
      category: 'Guía',
      content: `
## Introducción

El desarrollo de generadores de imágenes IA como DALL-E, Midjourney y Stable Diffusion ha progresado enormemente en los últimos años. Si bien estas tecnologías abren posibilidades creativas impresionantes, también nos desafían a distinguir fotos reales de las creadas artificialmente.

En este artículo te mostramos 7 características clave para identificar imágenes generadas por IA.

## 1. Detalles antinaturales en manos y dedos

Uno de los problemas más conocidos de los generadores de imágenes IA son las manos:

- Número incorrecto de dedos
- Ángulos de articulaciones antinaturales
- Dedos que se fusionan o están retorcidos

## 2. Inconsistencias en texto y escritura

La IA todavía tiene dificultades con el texto en las imágenes:

- Letras ilegibles o sin sentido
- Caracteres retorcidos o reflejados

## 3. Simetría y patrones de repetición

La IA tiende a repetir ciertos patrones:

- Simetría demasiado perfecta en objetos naturales
- Texturas o elementos repetitivos en el fondo

## 4. Inconsistencias de luz y sombra

La iluminación físicamente correcta es un desafío para la IA.

## 5. Problemas con dientes y ojos

Los retratos a menudo muestran errores en estas áreas.

## 6. Anomalías en el fondo

El fondo a menudo revela imágenes IA.

## 7. Texturas y superficies antinaturales

Busca piel demasiado suave, superficies antinaturalmente brillantes.

## Conclusión

La capacidad de reconocer imágenes generadas por IA es cada vez más importante. Usa herramientas como ForRealScan para obtener un análisis fundamentado.
      `,
    },
    fr: {
      title: 'Comment reconnaître les images générées par l\'IA : 7 caractéristiques clés',
      excerpt: 'Les images générées par l\'IA deviennent de plus en plus réalistes. Découvrez quels indices révèlent encore les images créées artificiellement.',
      date: '2026-01-05',
      readTime: 8,
      category: 'Guide',
      content: `
## Introduction

Le développement des générateurs d'images IA comme DALL-E, Midjourney et Stable Diffusion a fait d'énormes progrès ces dernières années. Si ces technologies ouvrent des possibilités créatives impressionnantes, elles nous mettent aussi au défi de distinguer les vraies photos de celles créées artificiellement.

Dans cet article, nous vous montrons 7 caractéristiques clés pour identifier les images générées par l'IA.

## 1. Détails non naturels dans les mains et les doigts

L'un des problèmes les plus connus des générateurs d'images IA concerne les mains :

- Mauvais nombre de doigts
- Angles d'articulations non naturels
- Doigts qui fusionnent ou sont tordus

## 2. Incohérences dans le texte et l'écriture

L'IA a encore du mal avec le texte dans les images :

- Lettres illisibles ou sans sens
- Caractères tordus ou en miroir

## 3. Symétrie et motifs de répétition

L'IA tend à répéter certains motifs :

- Symétrie trop parfaite dans les objets naturels
- Textures ou éléments répétitifs en arrière-plan

## 4. Incohérences de lumière et d'ombre

L'éclairage physiquement correct est un défi pour l'IA.

## 5. Problèmes avec les dents et les yeux

Les portraits montrent souvent des erreurs dans ces zones.

## 6. Anomalies d'arrière-plan

L'arrière-plan révèle souvent les images IA.

## 7. Textures et surfaces non naturelles

Recherchez une peau trop lisse, des surfaces anormalement brillantes.

## Conclusion

La capacité à reconnaître les images générées par l'IA devient de plus en plus importante. Utilisez des outils comme ForRealScan pour obtenir une analyse fondée.
      `,
    },
  },
  'deepfakes-verstehen': {
    de: {
      title: 'Deepfakes verstehen: Was sie sind und warum sie wichtig sind',
      excerpt: 'Eine umfassende Einführung in die Welt der Deepfakes, ihre Technologie und Risiken.',
      date: '2026-01-02',
      readTime: 10,
      category: 'Technologie',
      content: `
## Was sind Deepfakes?

Der Begriff "Deepfake" setzt sich aus "Deep Learning" und "Fake" zusammen. Es handelt sich um synthetische Medien, bei denen das Gesicht einer Person durch das einer anderen ersetzt wird oder Personen Dinge sagen oder tun, die sie nie gesagt oder getan haben.

## Die Technologie dahinter

Deepfakes nutzen verschiedene KI-Technologien:

### Generative Adversarial Networks (GANs)
GANs bestehen aus zwei neuronalen Netzwerken, die gegeneinander arbeiten:
- Ein Generator erstellt gefälschte Bilder
- Ein Diskriminator versucht, echte von gefälschten zu unterscheiden
- Durch diesen Wettbewerb werden die Fälschungen immer besser

### Autoencoder
Diese Systeme lernen, Gesichter zu komprimieren und wieder zu rekonstruieren, was den Austausch von Gesichtszügen ermöglicht.

## Arten von Deepfakes

1. **Gesichtstausch (Face Swap):** Das Gesicht einer Person wird auf den Körper einer anderen gesetzt
2. **Lippensynchronisation:** Der Mund wird so manipuliert, dass er zu einem anderen Audio passt
3. **Vollständige Synthese:** Komplett künstlich generierte Personen
4. **Stimmklonung:** KI-generierte Stimmen, die reale Personen imitieren

## Risiken und Gefahren

### Desinformation
Deepfakes können für politische Manipulation und Fake News eingesetzt werden.

### Betrug
Cyberkriminelle nutzen Deepfakes für Identitätsbetrug und Social Engineering.

### Persönliche Angriffe
Nicht einvernehmliche intime Inhalte stellen eine ernste Bedrohung dar.

### Vertrauenserosion
Die bloße Existenz von Deepfakes kann legitime Inhalte in Frage stellen.

## Erkennungsmerkmale

- Unnatürliches Blinzeln oder fehlende Lidschläge
- Inkonsistente Beleuchtung auf dem Gesicht
- Unscharfe Übergänge am Gesichtsrand
- Unnatürliche Kopfbewegungen
- Asynchrone Audio-Video-Synchronisation

## Schutzmaßnahmen

1. **Quellenprüfung:** Woher stammt das Video?
2. **Technische Analyse:** Nutzen Sie Erkennungstools wie ForRealScan
3. **Kritisches Denken:** Ist der Inhalt plausibel?
4. **Mehrere Quellen:** Verifizieren Sie durch unabhängige Quellen

## Die Zukunft

Die Technologie entwickelt sich schnell weiter. Sowohl die Erstellung als auch die Erkennung von Deepfakes werden immer ausgefeilter. Es ist wichtig, informiert zu bleiben und kritisch mit digitalen Medien umzugehen.

## Fazit

Deepfakes sind eine Realität unserer digitalen Welt. Das Verständnis dieser Technologie ist der erste Schritt, um sich zu schützen. Kombinieren Sie technische Hilfsmittel mit kritischem Denken für die beste Verteidigung.
      `,
    },
    en: {
      title: 'Understanding Deepfakes: What They Are and Why They Matter',
      excerpt: 'A comprehensive introduction to the world of deepfakes, their technology and risks.',
      date: '2026-01-02',
      readTime: 10,
      category: 'Technology',
      content: `
## What are Deepfakes?

The term "deepfake" combines "deep learning" and "fake." These are synthetic media where a person's face is replaced with another's, or where people appear to say or do things they never said or did.

## The Technology Behind It

Deepfakes use various AI technologies:

### Generative Adversarial Networks (GANs)
GANs consist of two neural networks working against each other:
- A generator creates fake images
- A discriminator tries to distinguish real from fake
- Through this competition, the fakes get better

### Autoencoders
These systems learn to compress and reconstruct faces, enabling face swapping.

## Types of Deepfakes

1. **Face Swap:** One person's face is placed on another's body
2. **Lip Sync:** The mouth is manipulated to match different audio
3. **Full Synthesis:** Completely artificially generated people
4. **Voice Cloning:** AI-generated voices imitating real people

## Risks and Dangers

### Disinformation
Deepfakes can be used for political manipulation and fake news.

### Fraud
Cybercriminals use deepfakes for identity fraud and social engineering.

### Personal Attacks
Non-consensual intimate content poses a serious threat.

### Trust Erosion
The mere existence of deepfakes can call legitimate content into question.

## Detection Features

- Unnatural blinking or missing blinks
- Inconsistent lighting on the face
- Blurry transitions at face edges
- Unnatural head movements
- Asynchronous audio-video synchronization

## Protection Measures

1. **Source Verification:** Where does the video come from?
2. **Technical Analysis:** Use detection tools like ForRealScan
3. **Critical Thinking:** Is the content plausible?
4. **Multiple Sources:** Verify through independent sources

## Conclusion

Deepfakes are a reality of our digital world. Understanding this technology is the first step to protecting yourself. Combine technical aids with critical thinking for the best defense.
      `,
    },
    it: {
      title: 'Capire i Deepfake: cosa sono e perché sono importanti',
      excerpt: 'Un\'introduzione completa al mondo dei deepfake, alla loro tecnologia e ai rischi.',
      date: '2026-01-02',
      readTime: 10,
      category: 'Tecnologia',
      content: `
## Cosa sono i Deepfake?

Il termine "deepfake" combina "deep learning" e "fake". Sono media sintetici in cui il volto di una persona viene sostituito con quello di un'altra.

## La tecnologia dietro

I deepfake utilizzano varie tecnologie IA, incluse le Generative Adversarial Networks (GAN) e gli Autoencoder.

## Tipi di Deepfake

1. **Scambio di volti**
2. **Sincronizzazione labiale**
3. **Sintesi completa**
4. **Clonazione vocale**

## Rischi e pericoli

I deepfake possono essere utilizzati per disinformazione, frode, attacchi personali e possono erodere la fiducia nei media.

## Misure di protezione

Usa strumenti di riconoscimento come ForRealScan, verifica le fonti e applica il pensiero critico.
      `,
    },
    es: {
      title: 'Entendiendo los Deepfakes: qué son y por qué importan',
      excerpt: 'Una introducción completa al mundo de los deepfakes, su tecnología y riesgos.',
      date: '2026-01-02',
      readTime: 10,
      category: 'Tecnología',
      content: `
## ¿Qué son los Deepfakes?

El término "deepfake" combina "deep learning" y "fake". Son medios sintéticos donde el rostro de una persona se reemplaza por el de otra.

## La tecnología detrás

Los deepfakes utilizan varias tecnologías de IA, incluyendo GANs y Autoencoders.

## Tipos de Deepfakes

1. **Intercambio de rostros**
2. **Sincronización labial**
3. **Síntesis completa**
4. **Clonación de voz**

## Riesgos y peligros

Los deepfakes pueden usarse para desinformación, fraude, ataques personales y erosionar la confianza en los medios.

## Medidas de protección

Usa herramientas de detección como ForRealScan, verifica las fuentes y aplica el pensamiento crítico.
      `,
    },
    fr: {
      title: 'Comprendre les Deepfakes : ce qu\'ils sont et pourquoi ils comptent',
      excerpt: 'Une introduction complète au monde des deepfakes, leur technologie et les risques.',
      date: '2026-01-02',
      readTime: 10,
      category: 'Technologie',
      content: `
## Que sont les Deepfakes ?

Le terme "deepfake" combine "deep learning" et "fake". Ce sont des médias synthétiques où le visage d'une personne est remplacé par celui d'une autre.

## La technologie derrière

Les deepfakes utilisent diverses technologies d'IA, notamment les GANs et les Autoencodeurs.

## Types de Deepfakes

1. **Échange de visages**
2. **Synchronisation labiale**
3. **Synthèse complète**
4. **Clonage vocal**

## Risques et dangers

Les deepfakes peuvent être utilisés pour la désinformation, la fraude, les attaques personnelles et éroder la confiance dans les médias.

## Mesures de protection

Utilisez des outils de détection comme ForRealScan, vérifiez les sources et appliquez la pensée critique.
      `,
    },
  },
  'medienkompetenz-digital': {
    de: {
      title: 'Medienkompetenz im digitalen Zeitalter: Ein Leitfaden',
      excerpt: 'Warum kritisches Denken und Medienkompetenz heute wichtiger denn je sind.',
      date: '2025-12-28',
      readTime: 7,
      category: 'Anleitung',
      content: `
## Warum Medienkompetenz wichtig ist

In einer Welt, in der wir täglich mit Tausenden von Informationen konfrontiert werden, ist die Fähigkeit, Informationen kritisch zu bewerten, unverzichtbar geworden.

## Die vier Säulen der Medienkompetenz

### 1. Zugang
Die Fähigkeit, relevante Informationsquellen zu finden und zu nutzen.

### 2. Analyse
Informationen kritisch untersuchen und ihre Qualität einschätzen.

### 3. Bewertung
Den Wahrheitsgehalt und die Relevanz von Informationen beurteilen.

### 4. Erstellung
Selbst verantwortungsvolle Inhalte erstellen und teilen.

## Praktische Tipps

1. **Quellen prüfen:** Wer hat die Information erstellt? Ist die Quelle vertrauenswürdig?
2. **Mehrere Perspektiven suchen:** Berichten andere Quellen dasselbe?
3. **Aktualität beachten:** Wann wurde die Information veröffentlicht?
4. **Kontext verstehen:** In welchem Zusammenhang steht die Information?
5. **Emotionen erkennen:** Versucht der Inhalt, bestimmte Gefühle zu wecken?

## Werkzeuge nutzen

Moderne Werkzeuge wie ForRealScan können bei der Überprüfung von Bildinhalten helfen. Aber kein Tool ersetzt kritisches Denken.

## Fazit

Medienkompetenz ist eine Kernkompetenz des 21. Jahrhunderts. Investieren Sie Zeit in die Entwicklung dieser Fähigkeiten – es lohnt sich.
      `,
    },
    en: {
      title: 'Media Literacy in the Digital Age: A Guide',
      excerpt: 'Why critical thinking and media literacy are more important than ever.',
      date: '2025-12-28',
      readTime: 7,
      category: 'Guide',
      content: `
## Why Media Literacy Matters

In a world where we're confronted with thousands of pieces of information daily, the ability to critically evaluate information has become essential.

## The Four Pillars of Media Literacy

### 1. Access
The ability to find and use relevant information sources.

### 2. Analysis
Critically examine information and assess its quality.

### 3. Evaluation
Judge the truthfulness and relevance of information.

### 4. Creation
Create and share responsible content yourself.

## Practical Tips

1. **Check sources:** Who created the information? Is the source trustworthy?
2. **Seek multiple perspectives:** Do other sources report the same thing?
3. **Note timeliness:** When was the information published?
4. **Understand context:** What's the context of the information?
5. **Recognize emotions:** Is the content trying to evoke certain feelings?

## Use Tools

Modern tools like ForRealScan can help verify image content. But no tool replaces critical thinking.

## Conclusion

Media literacy is a core competency of the 21st century. Invest time in developing these skills – it's worth it.
      `,
    },
    it: {
      title: 'Alfabetizzazione mediatica nell\'era digitale: una guida',
      excerpt: 'Perché il pensiero critico e l\'alfabetizzazione mediatica sono più importanti che mai.',
      date: '2025-12-28',
      readTime: 7,
      category: 'Guida',
      content: `
## Perché l'alfabetizzazione mediatica è importante

In un mondo in cui siamo confrontati quotidianamente con migliaia di informazioni, la capacità di valutare criticamente le informazioni è diventata essenziale.

## I quattro pilastri dell'alfabetizzazione mediatica

1. **Accesso:** Trovare e utilizzare fonti di informazione rilevanti
2. **Analisi:** Esaminare criticamente le informazioni
3. **Valutazione:** Giudicare la veridicità delle informazioni
4. **Creazione:** Creare contenuti responsabili

## Conclusione

L'alfabetizzazione mediatica è una competenza fondamentale del 21° secolo.
      `,
    },
    es: {
      title: 'Alfabetización mediática en la era digital: una guía',
      excerpt: 'Por qué el pensamiento crítico y la alfabetización mediática son más importantes que nunca.',
      date: '2025-12-28',
      readTime: 7,
      category: 'Guía',
      content: `
## Por qué importa la alfabetización mediática

En un mundo donde nos enfrentamos diariamente a miles de piezas de información, la capacidad de evaluar críticamente la información se ha vuelto esencial.

## Los cuatro pilares de la alfabetización mediática

1. **Acceso:** Encontrar y usar fuentes de información relevantes
2. **Análisis:** Examinar críticamente la información
3. **Evaluación:** Juzgar la veracidad de la información
4. **Creación:** Crear contenido responsable

## Conclusión

La alfabetización mediática es una competencia fundamental del siglo XXI.
      `,
    },
    fr: {
      title: 'L\'éducation aux médias à l\'ère numérique : un guide',
      excerpt: 'Pourquoi la pensée critique et l\'éducation aux médias sont plus importantes que jamais.',
      date: '2025-12-28',
      readTime: 7,
      category: 'Guide',
      content: `
## Pourquoi l'éducation aux médias est importante

Dans un monde où nous sommes confrontés quotidiennement à des milliers d'informations, la capacité d'évaluer de manière critique les informations est devenue essentielle.

## Les quatre piliers de l'éducation aux médias

1. **Accès :** Trouver et utiliser des sources d'information pertinentes
2. **Analyse :** Examiner de manière critique les informations
3. **Évaluation :** Juger de la véracité des informations
4. **Création :** Créer du contenu responsable

## Conclusion

L'éducation aux médias est une compétence fondamentale du 21e siècle.
      `,
    },
  },
  'ki-bildgeneratoren-vergleich': {
    de: {
      title: 'Die wichtigsten KI-Bildgeneratoren 2026 im Vergleich',
      excerpt: 'Von DALL-E über Midjourney bis Stable Diffusion: Ein Überblick über die führenden KI-Bildgeneratoren.',
      date: '2025-12-20',
      readTime: 12,
      category: 'Technologie',
      content: `
## Überblick über KI-Bildgeneratoren

Die Landschaft der KI-Bildgeneratoren hat sich in den letzten Jahren dramatisch entwickelt. Hier vergleichen wir die wichtigsten Plattformen.

## DALL-E 3 (OpenAI)

**Stärken:**
- Hervorragendes Textverständnis
- Präzise Umsetzung komplexer Prompts
- Integration in ChatGPT

**Schwächen:**
- Eingeschränkte Bildbearbeitung
- Weniger künstlerische Stile

## Midjourney

**Stärken:**
- Außergewöhnliche ästhetische Qualität
- Großartig für künstlerische Stile
- Aktive Community

**Schwächen:**
- Discord-basiert (gewöhnungsbedürftig)
- Kostenpflichtig

## Stable Diffusion

**Stärken:**
- Open Source
- Lokal ausführbar
- Hohe Anpassbarkeit

**Schwächen:**
- Technisches Wissen erforderlich
- Hardware-intensiv

## Erkennungsmerkmale

Jeder Generator hinterlässt subtile "Fingerabdrücke":

- **DALL-E:** Tendenz zu weicheren Übergängen
- **Midjourney:** Charakteristische Farbpalette
- **Stable Diffusion:** Variable je nach Modell

## Fazit

Die Wahl des Generators hängt vom Anwendungsfall ab. Für die Erkennung ist es wichtig, die Charakteristiken jedes Systems zu kennen.
      `,
    },
    en: {
      title: 'Top AI Image Generators of 2026 Compared',
      excerpt: 'From DALL-E to Midjourney to Stable Diffusion: An overview of leading AI image generators.',
      date: '2025-12-20',
      readTime: 12,
      category: 'Technology',
      content: `
## Overview of AI Image Generators

The landscape of AI image generators has developed dramatically in recent years. Here we compare the most important platforms.

## DALL-E 3 (OpenAI)

**Strengths:**
- Excellent text understanding
- Precise implementation of complex prompts
- Integration into ChatGPT

**Weaknesses:**
- Limited image editing
- Fewer artistic styles

## Midjourney

**Strengths:**
- Exceptional aesthetic quality
- Great for artistic styles
- Active community

**Weaknesses:**
- Discord-based (takes getting used to)
- Paid

## Stable Diffusion

**Strengths:**
- Open source
- Can run locally
- Highly customizable

**Weaknesses:**
- Technical knowledge required
- Hardware-intensive

## Detection Features

Each generator leaves subtle "fingerprints":

- **DALL-E:** Tendency toward softer transitions
- **Midjourney:** Characteristic color palette
- **Stable Diffusion:** Variable depending on model

## Conclusion

The choice of generator depends on the use case. For detection, it's important to know the characteristics of each system.
      `,
    },
    it: {
      title: 'I principali generatori di immagini IA del 2026 a confronto',
      excerpt: 'Da DALL-E a Midjourney a Stable Diffusion: una panoramica dei principali generatori di immagini IA.',
      date: '2025-12-20',
      readTime: 12,
      category: 'Tecnologia',
      content: `
## Panoramica dei generatori di immagini IA

Confrontiamo le piattaforme più importanti: DALL-E 3, Midjourney e Stable Diffusion.

Ogni generatore ha punti di forza e debolezze unici, e lascia "impronte" sottili che possono aiutare nel riconoscimento.
      `,
    },
    es: {
      title: 'Los principales generadores de imágenes IA de 2026 comparados',
      excerpt: 'De DALL-E a Midjourney a Stable Diffusion: una visión general de los principales generadores.',
      date: '2025-12-20',
      readTime: 12,
      category: 'Tecnología',
      content: `
## Panorama de los generadores de imágenes IA

Comparamos las plataformas más importantes: DALL-E 3, Midjourney y Stable Diffusion.

Cada generador tiene fortalezas y debilidades únicas, y deja "huellas" sutiles que pueden ayudar en la detección.
      `,
    },
    fr: {
      title: 'Les principaux générateurs d\'images IA de 2026 comparés',
      excerpt: 'De DALL-E à Midjourney en passant par Stable Diffusion : un aperçu des principaux générateurs.',
      date: '2025-12-20',
      readTime: 12,
      category: 'Technologie',
      content: `
## Aperçu des générateurs d'images IA

Nous comparons les plateformes les plus importantes : DALL-E 3, Midjourney et Stable Diffusion.

Chaque générateur a des forces et faiblesses uniques, et laisse des "empreintes" subtiles qui peuvent aider à la détection.
      `,
    },
  },
  'authentizitaet-pruefen': {
    de: {
      title: '5 Schritte zur Überprüfung der Bildauthentizität',
      excerpt: 'Praktische Tipps und Werkzeuge, um die Echtheit von Bildern zu überprüfen.',
      date: '2025-12-15',
      readTime: 6,
      category: 'Tipps',
      content: `
## Einleitung

Die Überprüfung der Bildauthentizität ist in der heutigen digitalen Welt eine wichtige Fähigkeit. Hier sind 5 praktische Schritte.

## Schritt 1: Rückwärtssuche durchführen

Nutzen Sie Google Images oder TinEye, um zu sehen, wo das Bild noch erscheint. Oft finden Sie:
- Die Originalquelle
- Frühere Versionen des Bildes
- Kontext zur Entstehung

## Schritt 2: Metadaten analysieren

EXIF-Daten können wertvolle Informationen liefern:
- Aufnahmedatum
- Verwendete Kamera
- GPS-Koordinaten (falls vorhanden)

**Hinweis:** Viele Plattformen entfernen Metadaten beim Upload.

## Schritt 3: KI-Erkennungstools nutzen

Tools wie ForRealScan analysieren Bilder auf KI-typische Merkmale:
- Technische Analyse (Veritas)
- Musterbasierte KI-Erkennung (Robo)

## Schritt 4: Visuelle Inspektion

Überprüfen Sie das Bild manuell auf:
- Unnatürliche Elemente (Hände, Augen, Text)
- Inkonsistente Beleuchtung
- Verdächtige Wiederholungen

## Schritt 5: Kontext recherchieren

- Wer hat das Bild geteilt?
- Was ist die behauptete Geschichte?
- Gibt es unabhängige Bestätigungen?

## Fazit

Die Kombination dieser Schritte erhöht Ihre Chancen, manipulierte oder KI-generierte Bilder zu erkennen. Kein einzelner Schritt ist perfekt, aber zusammen bilden sie ein effektives System.
      `,
    },
    en: {
      title: '5 Steps to Verify Image Authenticity',
      excerpt: 'Practical tips and tools for verifying image authenticity.',
      date: '2025-12-15',
      readTime: 6,
      category: 'Tips',
      content: `
## Introduction

Verifying image authenticity is an important skill in today's digital world. Here are 5 practical steps.

## Step 1: Perform Reverse Search

Use Google Images or TinEye to see where else the image appears. You often find:
- The original source
- Earlier versions of the image
- Context about its creation

## Step 2: Analyze Metadata

EXIF data can provide valuable information:
- Capture date
- Camera used
- GPS coordinates (if available)

**Note:** Many platforms remove metadata on upload.

## Step 3: Use AI Detection Tools

Tools like ForRealScan analyze images for AI-typical features:
- Technical analysis (Veritas)
- Pattern-based AI detection (Robo)

## Step 4: Visual Inspection

Manually check the image for:
- Unnatural elements (hands, eyes, text)
- Inconsistent lighting
- Suspicious repetitions

## Step 5: Research Context

- Who shared the image?
- What's the claimed story?
- Are there independent confirmations?

## Conclusion

Combining these steps increases your chances of detecting manipulated or AI-generated images. No single step is perfect, but together they form an effective system.
      `,
    },
    it: {
      title: '5 passaggi per verificare l\'autenticità delle immagini',
      excerpt: 'Consigli pratici e strumenti per verificare l\'autenticità delle immagini.',
      date: '2025-12-15',
      readTime: 6,
      category: 'Consigli',
      content: `
## Introduzione

Verifica l'autenticità delle immagini in 5 passaggi: ricerca inversa, analisi dei metadati, strumenti di riconoscimento IA, ispezione visiva e ricerca del contesto.
      `,
    },
    es: {
      title: '5 pasos para verificar la autenticidad de las imágenes',
      excerpt: 'Consejos prácticos y herramientas para verificar la autenticidad de las imágenes.',
      date: '2025-12-15',
      readTime: 6,
      category: 'Consejos',
      content: `
## Introducción

Verifica la autenticidad de las imágenes en 5 pasos: búsqueda inversa, análisis de metadatos, herramientas de detección de IA, inspección visual e investigación de contexto.
      `,
    },
    fr: {
      title: '5 étapes pour vérifier l\'authenticité des images',
      excerpt: 'Conseils pratiques et outils pour vérifier l\'authenticité des images.',
      date: '2025-12-15',
      readTime: 6,
      category: 'Conseils',
      content: `
## Introduction

Vérifiez l'authenticité des images en 5 étapes : recherche inversée, analyse des métadonnées, outils de détection IA, inspection visuelle et recherche de contexte.
      `,
    },
  },
};

const blogPageTranslations: Record<Language, {
  back: string;
  backToBlog: string;
  share: string;
  minRead: string;
  notFound: string;
  tryApp: string;
  tryAppText: string;
}> = {
  de: {
    back: 'Zurück',
    backToBlog: 'Zurück zum Blog',
    share: 'Teilen',
    minRead: 'Min. Lesezeit',
    notFound: 'Artikel nicht gefunden',
    tryApp: 'Jetzt ForRealScan testen',
    tryAppText: 'Überprüfen Sie Ihre Bilder mit unserer KI-gestützten Analyse.',
  },
  en: {
    back: 'Back',
    backToBlog: 'Back to Blog',
    share: 'Share',
    minRead: 'min read',
    notFound: 'Article not found',
    tryApp: 'Try ForRealScan Now',
    tryAppText: 'Check your images with our AI-powered analysis.',
  },
  it: {
    back: 'Indietro',
    backToBlog: 'Torna al Blog',
    share: 'Condividi',
    minRead: 'min di lettura',
    notFound: 'Articolo non trovato',
    tryApp: 'Prova ForRealScan ora',
    tryAppText: 'Verifica le tue immagini con la nostra analisi basata su IA.',
  },
  es: {
    back: 'Volver',
    backToBlog: 'Volver al Blog',
    share: 'Compartir',
    minRead: 'min de lectura',
    notFound: 'Artículo no encontrado',
    tryApp: 'Prueba ForRealScan ahora',
    tryAppText: 'Verifica tus imágenes con nuestro análisis basado en IA.',
  },
  fr: {
    back: 'Retour',
    backToBlog: 'Retour au Blog',
    share: 'Partager',
    minRead: 'min de lecture',
    notFound: 'Article non trouvé',
    tryApp: 'Essayez ForRealScan maintenant',
    tryAppText: 'Vérifiez vos images avec notre analyse basée sur l\'IA.',
  },
};

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
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

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const t = blogPageTranslations[language];
  const article = slug ? articleContents[slug]?.[language] : null;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'de' ? 'de-DE' : language === 'en' ? 'en-US' : language === 'it' ? 'it-IT' : language === 'es' ? 'es-ES' : 'fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex-1 py-20 px-4 relative z-10">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-4">{t.notFound}</h1>
            <Link to="/blog" className="text-primary hover:underline">
              {t.backToBlog}
            </Link>
          </div>
        </div>
        <Footer language={language} theme={theme} />
      </div>
    );
  }

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

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.backToBlog}
          </Link>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                  {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(article.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime} {t.minRead}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
              <p className="text-xl text-muted-foreground">{article.excerpt}</p>
            </header>

            <div
              className="prose prose-gray dark:prose-invert max-w-none
                prose-headings:text-foreground
                prose-p:text-muted-foreground
                prose-strong:text-foreground
                prose-li:text-muted-foreground
                prose-a:text-primary
                prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
                prose-ul:my-4 prose-ol:my-4
                prose-li:my-1"
              dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>').replace(/## /g, '</p><h2>').replace(/### /g, '</p><h3>').replace(/<h2>/g, '</p><h2>').replace(/<h3>/g, '</p><h3>').replace(/<\/h2>/g, '</h2><p>').replace(/<\/h3>/g, '</h3><p>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/- /g, '<br/>• ') }}
            />

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-veritas/10 to-robo/10 rounded-2xl border border-border">
              <h3 className="text-2xl font-semibold mb-2">{t.tryApp}</h3>
              <p className="text-muted-foreground mb-4">{t.tryAppText}</p>
              <a
                href="https://app.forrealscan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                ForRealScan App
              </a>
            </div>
          </article>
        </div>
      </div>
      <Footer language={language} theme={theme} />
    </div>
  );
};

export default BlogArticle;
