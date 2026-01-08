import { useState, useEffect } from 'react';
import { Language } from '@/lib/translations';
import { LANGUAGE_STORAGE_KEY } from '@/lib/constants';
import { SubPageHeader } from '@/components/SubPageHeader';
import { Footer } from '@/components/Footer';
import { useTheme } from '@/hooks/useTheme';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface BlogArticle {
  id: string;
  slug: string;
  date: string;
  readTime: number;
  image?: string;
  category: string;
}

const blogTranslations: Record<Language, {
  title: string;
  subtitle: string;
  readMore: string;
  minRead: string;
  back: string;
  categories: {
    guide: string;
    technology: string;
    news: string;
    tips: string;
  };
  articles: Record<string, {
    title: string;
    excerpt: string;
  }>;
}> = {
  de: {
    title: 'Blog & Ressourcen',
    subtitle: 'Wissen, Tipps und aktuelle Entwicklungen rund um KI-Bilderkennung und Medienkompetenz',
    readMore: 'Weiterlesen',
    minRead: 'Min. Lesezeit',
    back: 'Zurück',
    categories: {
      guide: 'Anleitung',
      technology: 'Technologie',
      news: 'Neuigkeiten',
      tips: 'Tipps',
    },
    articles: {
      'ai-images-erkennen': {
        title: 'Wie erkenne ich KI-generierte Bilder? 7 wichtige Merkmale',
        excerpt: 'KI-generierte Bilder werden immer realistischer. Erfahren Sie, welche Hinweise noch auf künstlich erstellte Bilder deuten und worauf Sie achten sollten.',
      },
      'deepfakes-verstehen': {
        title: 'Deepfakes verstehen: Was sie sind und warum sie wichtig sind',
        excerpt: 'Eine umfassende Einführung in die Welt der Deepfakes, ihre Technologie, Risiken und wie Sie sich schützen können.',
      },
      'medienkompetenz-digital': {
        title: 'Medienkompetenz im digitalen Zeitalter: Ein Leitfaden',
        excerpt: 'Warum kritisches Denken und Medienkompetenz heute wichtiger denn je sind und wie Sie diese Fähigkeiten entwickeln können.',
      },
      'ki-bildgeneratoren-vergleich': {
        title: 'Die wichtigsten KI-Bildgeneratoren 2026 im Vergleich',
        excerpt: 'Von DALL-E über Midjourney bis Stable Diffusion: Ein Überblick über die führenden KI-Bildgeneratoren und ihre Unterschiede.',
      },
      'authentizitaet-pruefen': {
        title: '5 Schritte zur Überprüfung der Bildauthentizität',
        excerpt: 'Praktische Tipps und Werkzeuge, um die Echtheit von Bildern zu überprüfen – von der Rückwärtssuche bis zur Metadatenanalyse.',
      },
    },
  },
  en: {
    title: 'Blog & Resources',
    subtitle: 'Knowledge, tips, and current developments in AI image detection and media literacy',
    readMore: 'Read more',
    minRead: 'min read',
    back: 'Back',
    categories: {
      guide: 'Guide',
      technology: 'Technology',
      news: 'News',
      tips: 'Tips',
    },
    articles: {
      'ai-images-erkennen': {
        title: 'How to Recognize AI-Generated Images: 7 Key Features',
        excerpt: 'AI-generated images are becoming increasingly realistic. Learn which clues still indicate artificially created images and what to look for.',
      },
      'deepfakes-verstehen': {
        title: 'Understanding Deepfakes: What They Are and Why They Matter',
        excerpt: 'A comprehensive introduction to the world of deepfakes, their technology, risks, and how you can protect yourself.',
      },
      'medienkompetenz-digital': {
        title: 'Media Literacy in the Digital Age: A Guide',
        excerpt: 'Why critical thinking and media literacy are more important than ever and how you can develop these skills.',
      },
      'ki-bildgeneratoren-vergleich': {
        title: 'Top AI Image Generators of 2026 Compared',
        excerpt: 'From DALL-E to Midjourney to Stable Diffusion: An overview of the leading AI image generators and their differences.',
      },
      'authentizitaet-pruefen': {
        title: '5 Steps to Verify Image Authenticity',
        excerpt: 'Practical tips and tools for verifying image authenticity – from reverse image search to metadata analysis.',
      },
    },
  },
  it: {
    title: 'Blog e Risorse',
    subtitle: 'Conoscenze, consigli e sviluppi attuali nel rilevamento delle immagini IA e nell\'alfabetizzazione mediatica',
    readMore: 'Leggi di più',
    minRead: 'min di lettura',
    back: 'Indietro',
    categories: {
      guide: 'Guida',
      technology: 'Tecnologia',
      news: 'Novità',
      tips: 'Consigli',
    },
    articles: {
      'ai-images-erkennen': {
        title: 'Come riconoscere le immagini generate dall\'IA: 7 caratteristiche chiave',
        excerpt: 'Le immagini generate dall\'IA stanno diventando sempre più realistiche. Scopri quali indizi indicano ancora immagini create artificialmente.',
      },
      'deepfakes-verstehen': {
        title: 'Capire i Deepfake: cosa sono e perché sono importanti',
        excerpt: 'Un\'introduzione completa al mondo dei deepfake, alla loro tecnologia, ai rischi e a come proteggersi.',
      },
      'medienkompetenz-digital': {
        title: 'Alfabetizzazione mediatica nell\'era digitale: una guida',
        excerpt: 'Perché il pensiero critico e l\'alfabetizzazione mediatica sono più importanti che mai e come sviluppare queste competenze.',
      },
      'ki-bildgeneratoren-vergleich': {
        title: 'I principali generatori di immagini IA del 2026 a confronto',
        excerpt: 'Da DALL-E a Midjourney a Stable Diffusion: una panoramica dei principali generatori di immagini IA e delle loro differenze.',
      },
      'authentizitaet-pruefen': {
        title: '5 passaggi per verificare l\'autenticità delle immagini',
        excerpt: 'Consigli pratici e strumenti per verificare l\'autenticità delle immagini – dalla ricerca inversa all\'analisi dei metadati.',
      },
    },
  },
  es: {
    title: 'Blog y Recursos',
    subtitle: 'Conocimiento, consejos y desarrollos actuales en detección de imágenes IA y alfabetización mediática',
    readMore: 'Leer más',
    minRead: 'min de lectura',
    back: 'Volver',
    categories: {
      guide: 'Guía',
      technology: 'Tecnología',
      news: 'Noticias',
      tips: 'Consejos',
    },
    articles: {
      'ai-images-erkennen': {
        title: 'Cómo reconocer imágenes generadas por IA: 7 características clave',
        excerpt: 'Las imágenes generadas por IA son cada vez más realistas. Aprende qué pistas todavía indican imágenes creadas artificialmente.',
      },
      'deepfakes-verstehen': {
        title: 'Entendiendo los Deepfakes: qué son y por qué importan',
        excerpt: 'Una introducción completa al mundo de los deepfakes, su tecnología, riesgos y cómo protegerse.',
      },
      'medienkompetenz-digital': {
        title: 'Alfabetización mediática en la era digital: una guía',
        excerpt: 'Por qué el pensamiento crítico y la alfabetización mediática son más importantes que nunca y cómo desarrollar estas habilidades.',
      },
      'ki-bildgeneratoren-vergleich': {
        title: 'Los principales generadores de imágenes IA de 2026 comparados',
        excerpt: 'De DALL-E a Midjourney a Stable Diffusion: una visión general de los principales generadores de imágenes IA y sus diferencias.',
      },
      'authentizitaet-pruefen': {
        title: '5 pasos para verificar la autenticidad de las imágenes',
        excerpt: 'Consejos prácticos y herramientas para verificar la autenticidad de las imágenes – desde la búsqueda inversa hasta el análisis de metadatos.',
      },
    },
  },
  fr: {
    title: 'Blog et Ressources',
    subtitle: 'Connaissances, conseils et développements actuels dans la détection d\'images IA et l\'éducation aux médias',
    readMore: 'Lire la suite',
    minRead: 'min de lecture',
    back: 'Retour',
    categories: {
      guide: 'Guide',
      technology: 'Technologie',
      news: 'Actualités',
      tips: 'Conseils',
    },
    articles: {
      'ai-images-erkennen': {
        title: 'Comment reconnaître les images générées par l\'IA : 7 caractéristiques clés',
        excerpt: 'Les images générées par l\'IA deviennent de plus en plus réalistes. Découvrez quels indices révèlent encore les images créées artificiellement.',
      },
      'deepfakes-verstehen': {
        title: 'Comprendre les Deepfakes : ce qu\'ils sont et pourquoi ils comptent',
        excerpt: 'Une introduction complète au monde des deepfakes, leur technologie, les risques et comment vous protéger.',
      },
      'medienkompetenz-digital': {
        title: 'L\'éducation aux médias à l\'ère numérique : un guide',
        excerpt: 'Pourquoi la pensée critique et l\'éducation aux médias sont plus importantes que jamais et comment développer ces compétences.',
      },
      'ki-bildgeneratoren-vergleich': {
        title: 'Les principaux générateurs d\'images IA de 2026 comparés',
        excerpt: 'De DALL-E à Midjourney en passant par Stable Diffusion : un aperçu des principaux générateurs d\'images IA et leurs différences.',
      },
      'authentizitaet-pruefen': {
        title: '5 étapes pour vérifier l\'authenticité des images',
        excerpt: 'Conseils pratiques et outils pour vérifier l\'authenticité des images – de la recherche inversée à l\'analyse des métadonnées.',
      },
    },
  },
};

const articles: BlogArticle[] = [
  {
    id: 'ai-images-erkennen',
    slug: 'ai-images-erkennen',
    date: '2026-01-05',
    readTime: 8,
    category: 'guide',
  },
  {
    id: 'deepfakes-verstehen',
    slug: 'deepfakes-verstehen',
    date: '2026-01-02',
    readTime: 10,
    category: 'technology',
  },
  {
    id: 'medienkompetenz-digital',
    slug: 'medienkompetenz-digital',
    date: '2025-12-28',
    readTime: 7,
    category: 'guide',
  },
  {
    id: 'ki-bildgeneratoren-vergleich',
    slug: 'ki-bildgeneratoren-vergleich',
    date: '2025-12-20',
    readTime: 12,
    category: 'technology',
  },
  {
    id: 'authentizitaet-pruefen',
    slug: 'authentizitaet-pruefen',
    date: '2025-12-15',
    readTime: 6,
    category: 'tips',
  },
];

const Blog = () => {
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

  const t = blogTranslations[language];

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'de' ? 'de-DE' : language === 'en' ? 'en-US' : language === 'it' ? 'it-IT' : language === 'es' ? 'es-ES' : 'fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <SubPageHeader
            language={language}
            setLanguage={setLanguage}
            theme={theme}
            onThemeToggle={toggleTheme}
            backLabel={t.back}
          />

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-video bg-gradient-to-br from-veritas/20 to-robo/20 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-muted-foreground/30" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                      {t.categories[article.category as keyof typeof t.categories]}
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
                  <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t.articles[article.id]?.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {t.articles[article.id]?.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    {t.readMore}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer language={language} theme={theme} />
    </div>
  );
};

export default Blog;
