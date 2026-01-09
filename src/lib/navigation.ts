import { Language } from '@/lib/translations';
import { BookOpen, Users, Newspaper, Gamepad2 } from 'lucide-react';
import { createElement } from 'react';

/**
 * Centralized Navigation Configuration
 * All navigation items are defined here to avoid duplication across components.
 */

export interface NavItem {
  id: string;
  labelKey: string;
  href?: string;
  isScroll?: boolean;
  icon?: React.ReactNode;
  isExternal?: boolean;
}

// Header-specific translation keys
export const headerTranslationKeys: Record<Language, {
  methodology: string;
  examples: string;
  about: string;
  blog: string;
  more: string;
  product: string;
}> = {
  de: { methodology: 'Methodik', examples: 'Beispiele', about: 'Über uns', blog: 'Blog', more: 'Mehr', product: 'Produkt' },
  en: { methodology: 'Methodology', examples: 'Examples', about: 'About', blog: 'Blog', more: 'More', product: 'Product' },
  it: { methodology: 'Metodologia', examples: 'Esempi', about: 'Chi siamo', blog: 'Blog', more: 'Altro', product: 'Prodotto' },
  es: { methodology: 'Metodología', examples: 'Ejemplos', about: 'Nosotros', blog: 'Blog', more: 'Más', product: 'Producto' },
  fr: { methodology: 'Méthodologie', examples: 'Exemples', about: 'À propos', blog: 'Blog', more: 'Plus', product: 'Produit' },
};

// Navigation item definitions (without resolved labels)
export const navItemDefinitions = {
  // Primary navigation items
  primary: [
    { id: 'start', labelKey: 'nav_start', isScroll: true },
    { id: 'how-it-works', labelKey: 'nav_features', isScroll: true },
    { id: 'methodology', labelKey: 'header_methodology', href: '/methodology' },
    { id: 'examples', labelKey: 'header_examples', href: '/examples' },
    { id: 'pricing', labelKey: 'nav_pricing', isScroll: true },
    { id: 'faq', labelKey: 'nav_faq', isScroll: true },
  ],

  // "More" dropdown items
  more: [
    { id: 'about', labelKey: 'header_about', href: '/about', iconName: 'Users' },
    { id: 'blog', labelKey: 'header_blog', href: '/blog', iconName: 'Newspaper' },
    { id: 'modes', labelKey: 'nav_scan', isScroll: true, iconName: 'BookOpen' },
    { id: 'veritas-robo', labelKey: 'nav_veritas_robo', isScroll: true },
    { id: 'game', labelKey: 'header_game', href: 'https://game.forrealscan.com', isExternal: true, iconName: 'Gamepad2' },
  ],

  // Mobile product section
  mobileProduct: [
    { id: 'start', labelKey: 'nav_start', isScroll: true },
    { id: 'how-it-works', labelKey: 'nav_features', isScroll: true },
    { id: 'modes', labelKey: 'nav_scan', isScroll: true },
    { id: 'methodology', labelKey: 'header_methodology', href: '/methodology' },
    { id: 'examples', labelKey: 'header_examples', href: '/examples' },
  ],

  // Mobile more section
  mobileMore: [
    { id: 'about', labelKey: 'header_about', href: '/about' },
    { id: 'blog', labelKey: 'header_blog', href: '/blog' },
    { id: 'veritas-robo', labelKey: 'nav_veritas_robo', isScroll: true },
    { id: 'game', labelKey: 'header_game', href: 'https://game.forrealscan.com', isExternal: true },
    { id: 'pricing', labelKey: 'nav_pricing', isScroll: true },
    { id: 'faq', labelKey: 'nav_faq', isScroll: true },
  ],
} as const;

// Icon mapping
const iconMap = {
  BookOpen,
  Users,
  Newspaper,
  Gamepad2,
} as const;

/**
 * Get icon component by name
 */
export const getNavIcon = (iconName: string | undefined, className = 'w-4 h-4') => {
  if (!iconName || !(iconName in iconMap)) return null;
  return createElement(iconMap[iconName as keyof typeof iconMap], { className });
};

/**
 * Resolve navigation item labels based on language
 */
export const resolveNavLabel = (
  labelKey: string,
  translations: Record<string, string>,
  headerTranslations: typeof headerTranslationKeys[Language]
): string => {
  // Check if it's a header-specific key
  if (labelKey.startsWith('header_')) {
    const key = labelKey.replace('header_', '') as keyof typeof headerTranslations;
    return headerTranslations[key] || labelKey;
  }
  // Otherwise use main translations
  return translations[labelKey] || labelKey;
};
