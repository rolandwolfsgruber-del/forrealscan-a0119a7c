# ForRealScan Design System - Komplette Dokumentation

> **Zweck:** Diese Dokumentation enthält alle Design-Informationen der ForRealScan Homepage, um das Minispiel perfekt im ForRealScan-Stil zu gestalten.

---

## Inhaltsverzeichnis

1. [Tech Stack](#1-tech-stack)
2. [Farbpalette & Theme System](#2-farbpalette--theme-system)
3. [Typografie](#3-typografie)
4. [Spacing System](#4-spacing-system)
5. [Border Radius & Shadows](#5-border-radius--shadows)
6. [Button Styles](#6-button-styles)
7. [Card Styles](#7-card-styles)
8. [Animationen & Transitions](#8-animationen--transitions)
9. [Spezielle visuelle Elemente](#9-spezielle-visuelle-elemente)
10. [Icons](#10-icons)
11. [Responsive Design](#11-responsive-design)
12. [Aktuelles MiniGame & Upgrade-Hinweise](#12-aktuelles-minigame--upgrade-hinweise)
13. [CSS Code Snippets](#13-css-code-snippets)

---

## 1. Tech Stack

| Technologie | Details |
|-------------|---------|
| **Framework** | Vite + React + TypeScript |
| **Styling** | Tailwind CSS + PostCSS |
| **UI Components** | shadcn/ui (Radix UI basiert) |
| **Icons** | Lucide React v0.462.0 |
| **Font** | Inter Tight (@fontsource/inter-tight) |
| **Animationen** | Tailwind CSS + Custom Keyframes |
| **Theme System** | CSS Variablen mit HSL Format |

---

## 2. Farbpalette & Theme System

### 2.1 Dual-Theme-System

ForRealScan verwendet zwei Themes:
- **Veritas (Light)** - Grün, Natur, Vertrauen
- **Robo (Dark)** - Blau, Tech, Cyberpunk

### 2.2 Primäre Markenfarben

```css
/* Veritas (Grün) - Natur/Authentizität */
--veritas: 142 76% 36%;        /* hsl(142, 76%, 36%) = #22c55e ähnlich */
--veritas-glow: 142 76% 45%;   /* Hellere Version für Hover/Glow */

/* Robo (Blau) - Tech/KI */
--robo: 210 100% 56%;          /* hsl(210, 100%, 56%) = #3b82f6 ähnlich */
--robo-glow: 210 100% 65%;     /* Hellere Version für Hover/Glow */
```

### 2.3 Hintergrund & Text

| Eigenschaft | Light Theme | Dark Theme |
|-------------|-------------|------------|
| Background | `0 0% 100%` (Weiß) | `222.2 84% 4.9%` (Fast-Schwarz) |
| Foreground | `222.2 84% 4.9%` | `210 40% 98%` |
| Card | `0 0% 100%` | `222.2 84% 4.9%` |
| Muted | `210 40% 96.1%` | `217.2 32.6% 17.5%` |
| Muted Foreground | `215 25% 35%` | `215 20.2% 65.1%` |

### 2.4 Semantische Farben

```css
--primary: var(--veritas);           /* Grün */
--secondary: 210 40% 96.1%;          /* Hellgrau */
--accent: var(--robo);               /* Blau */
--destructive: 0 84.2% 60.2%;        /* Rot */
--border: 214.3 31.8% 91.4%;         /* Hellgrau für Borders */
--ring: var(--primary);              /* Focus Ring = Primary */
```

### 2.5 Gradient Definitionen

```css
/* Hero Gradient - Veritas zu Robo */
--gradient-hero: linear-gradient(135deg, hsl(142 76% 36%), hsl(210 100% 56%));

/* Veritas Gradient */
--gradient-veritas: linear-gradient(135deg, hsl(142 76% 36%), hsl(142 76% 45%));

/* Robo Gradient */
--gradient-robo: linear-gradient(135deg, hsl(210 100% 56%), hsl(210 100% 65%));
```

### 2.6 Tailwind Farbklassen

```jsx
// Veritas Grün
className="text-veritas"
className="bg-veritas"
className="border-veritas"
className="from-veritas to-veritas-glow"

// Robo Blau
className="text-robo"
className="bg-robo"
className="border-robo"
className="from-robo to-robo-glow"

// Gradient Text
className="bg-gradient-to-r from-veritas to-robo bg-clip-text text-transparent"
```

---

## 3. Typografie

### 3.1 Font Familie

```css
font-family: 'Inter Tight', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### 3.2 Font Rendering

```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
```

### 3.3 Heading Hierarchie

| Element | Mobile | Desktop | Weight | Tailwind |
|---------|--------|---------|--------|----------|
| H1 (Hero) | 30px | 60px | 800 (extrabold) | `text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold` |
| H2 (Section) | 24px | 48px | 700 (bold) | `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold` |
| H3 (Card) | 18px | 24px | 600 (semibold) | `text-lg sm:text-xl md:text-2xl font-semibold` |
| Body | 16px | 18px | 400 (normal) | `text-base md:text-lg` |
| Small | 14px | 14px | 400 | `text-sm` |

### 3.4 Line Height

```jsx
className="leading-tight"    // 1.25
className="leading-normal"   // 1.5
className="leading-relaxed"  // 1.625
```

---

## 4. Spacing System

### 4.1 Basis-Einheit

Tailwind verwendet 4px als Basis:
- `1` = 4px
- `2` = 8px
- `4` = 16px
- `6` = 24px
- `8` = 32px

### 4.2 Section Spacing

```jsx
// Mobile → Tablet → Desktop
className="py-12 sm:py-16 md:py-20 lg:py-24"
// = 48px → 64px → 80px → 96px
```

### 4.3 Container

```jsx
className="container mx-auto px-4 sm:px-6 lg:px-8"
// Max-width: 1400px (2xl)
```

### 4.4 Gap Patterns

```jsx
// Klein
className="gap-3 sm:gap-4"        // 12px → 16px

// Mittel
className="gap-6 sm:gap-8"        // 24px → 32px

// Groß
className="gap-8 sm:gap-10 md:gap-12"  // 32px → 40px → 48px
```

### 4.5 Card Padding

```jsx
className="p-6"                    // Standard: 24px
className="p-6 sm:p-8 md:p-12"     // Responsive: 24px → 32px → 48px
```

---

## 5. Border Radius & Shadows

### 5.1 Border Radius System

```css
--radius: 0.75rem;  /* 12px - Default */

/* Tailwind Klassen */
rounded-sm   /* 8px */
rounded-md   /* 10px */
rounded-lg   /* 12px - Standard */
rounded-xl   /* 16px */
rounded-2xl  /* 24px */
rounded-3xl  /* 32px */
rounded-full /* 9999px */
```

### 5.2 Typische Verwendung

| Element | Radius |
|---------|--------|
| Buttons | `rounded-lg` bis `rounded-xl` |
| Cards | `rounded-lg` bis `rounded-2xl` |
| Icon Container | `rounded-2xl` bis `rounded-3xl` |
| Badges | `rounded-full` |
| Images | `rounded-xl` |

### 5.3 Shadow System

```jsx
// Standard Shadows
className="shadow-sm"    // Subtil
className="shadow-md"    // Standard
className="shadow-lg"    // Medium
className="shadow-xl"    // Stark
className="shadow-2xl"   // Maximum

// Custom Glow Shadows
className="shadow-[0_0_15px_rgba(34,197,94,0.2)]"    // Veritas Glow
className="shadow-[0_0_25px_rgba(34,197,94,0.3)]"    // Veritas Glow Stark
className="shadow-[0_0_20px_rgba(59,130,246,0.15)]"  // Robo Glow
className="shadow-[0_0_30px_rgba(59,130,246,0.25)]"  // Robo Glow Stark
```

### 5.4 Hover Shadow Effekte

```jsx
// Card Hover mit Glow
className="hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]"

// Button Hover mit Glow
className="shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]"
```

---

## 6. Button Styles

### 6.1 Button Varianten

| Variant | Styling | Verwendung |
|---------|---------|------------|
| `default` | Solid Primary | Haupt-CTAs |
| `outline` | Transparent + Border | Sekundäre Aktionen |
| `ghost` | Nur Hover sichtbar | Navigation |
| `secondary` | Grauer Hintergrund | Alternative Aktionen |
| `destructive` | Rot | Lösch-Aktionen |

### 6.2 Button Größen

```jsx
size="sm"      // h-9 (36px), px-4
size="default" // h-11 (44px), px-6
size="lg"      // h-12 (48px), px-10
size="icon"    // h-11 w-11 (quadratisch)
```

### 6.3 Primary CTA Button (Gradient)

```jsx
<Button
  size="lg"
  className="h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-xl
             bg-gradient-to-r from-veritas to-robo
             hover:opacity-90
             shadow-[0_0_15px_rgba(34,197,94,0.2)]
             hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]
             transition-all duration-300"
>
  Jetzt starten
</Button>
```

### 6.4 Button mit Shimmer-Effekt

```jsx
<Button className="relative overflow-hidden group/btn">
  {/* Shimmer overlay */}
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                   -translate-x-full group-hover/btn:translate-x-full
                   transition-transform duration-1000" />
  <span className="relative z-10">Button Text</span>
</Button>
```

---

## 7. Card Styles

### 7.1 Basis Card

```jsx
<Card className="rounded-lg border bg-card text-card-foreground shadow-sm">
  <CardHeader className="p-6 space-y-1.5">
    <CardTitle className="text-2xl font-semibold">Titel</CardTitle>
    <CardDescription className="text-sm text-muted-foreground">
      Beschreibung
    </CardDescription>
  </CardHeader>
  <CardContent className="p-6 pt-0">
    Inhalt
  </CardContent>
</Card>
```

### 7.2 Interactive Card (Hover-Effekte)

```jsx
<Card className="
  group
  border-2 border-primary/30
  hover:border-primary/60
  hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]
  hover:-translate-y-2
  hover:scale-[1.01]
  transition-all duration-500
  rounded-2xl
  bg-gradient-to-br from-veritas/3 to-robo/3
  backdrop-blur-sm
  relative overflow-hidden
">
```

### 7.3 Card mit Gradient Background Orbs

```jsx
<Card className="relative overflow-hidden">
  {/* Top-right green orb */}
  <div className="absolute top-0 right-0 w-48 h-48
                  bg-gradient-to-br from-veritas to-veritas-glow
                  opacity-5 blur-3xl animate-pulse-glow" />

  {/* Bottom-left blue orb */}
  <div className="absolute bottom-0 left-0 w-40 h-40
                  bg-gradient-to-tr from-robo to-robo-glow
                  opacity-5 blur-3xl animate-pulse-glow"
       style={{ animationDelay: '2s' }} />

  {/* Content with z-10 */}
  <div className="relative z-10">...</div>
</Card>
```

---

## 8. Animationen & Transitions

### 8.1 Standard Transitions

```jsx
className="transition-all duration-200"    // Schnell (Buttons, Links)
className="transition-all duration-300"    // Standard
className="transition-all duration-500"    // Langsam (Cards, Themes)
className="transition-colors duration-300" // Nur Farben
className="transition-transform duration-300" // Nur Transform
```

### 8.2 Custom Keyframe Animationen

```css
/* Fade In + Nach oben */
@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Pulsierender Glow */
@keyframes pulse-glow {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

/* Gradient Rotation (für Borders) */
@keyframes gradient-rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Shimmer Effekt */
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Scan Line (Hero Logo) */
@keyframes scan-line {
  0% { top: 0%; opacity: 1; }
  45% { top: 100%; opacity: 1; }
  50% { top: 100%; opacity: 0; }
  51% { top: 0%; opacity: 0; }
  55% { top: 0%; opacity: 1; }
  100% { top: 0%; opacity: 1; }
}

/* Float Animation */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

### 8.3 Tailwind Animation Klassen

```jsx
className="animate-pulse-glow"      // Pulsierender Glow
className="animate-fade-in-up"      // Einblenden nach oben
className="animate-gradient-rotate" // Rotierende Gradient Border
className="animate-shimmer"         // Shimmer Effekt
className="animate-scan-line"       // Scan Line
className="animate-float"           // Schwebendes Element
```

### 8.4 AnimatedSection Component

```jsx
import { AnimatedSection } from '@/components/ui/animated-section';

// Verfügbare Animationen: fade-up, fade-scale, fade-left, fade-right
<AnimatedSection animation="fade-scale" delay={100}>
  <YourContent />
</AnimatedSection>
```

---

## 9. Spezielle visuelle Elemente

### 9.1 Dot Pattern Hintergrund

```jsx
<div
  className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
  style={{
    backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
    backgroundSize: '40px 40px',
  }}
/>
```

### 9.2 Glassmorphism Effekt

```jsx
className="backdrop-blur-xl bg-white/70 dark:bg-[#0c0f1e]/80"
```

### 9.3 Gradient Text

```jsx
<span className="bg-gradient-to-r from-veritas to-robo bg-clip-text text-transparent">
  Gradient Text
</span>
```

### 9.4 Animated Gradient Text

```css
.animated-gradient-text {
  background: linear-gradient(
    90deg,
    hsl(var(--veritas)) 0%,
    hsl(var(--foreground)) 25%,
    hsl(var(--robo)) 50%,
    hsl(var(--foreground)) 75%,
    hsl(var(--veritas)) 100%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: gradient-flow 6s ease infinite;
}

@keyframes gradient-flow {
  0% { background-position: 0% center; }
  50% { background-position: 100% center; }
  100% { background-position: 0% center; }
}
```

### 9.5 Glow Orbs

```jsx
{/* Veritas (Grün) Orb - Links */}
<div className="absolute -left-20 top-1/4 w-64 h-64
                bg-veritas rounded-full
                opacity-20 blur-[60px] sm:blur-[70px]
                animate-pulse-glow" />

{/* Robo (Blau) Orb - Rechts */}
<div className="absolute -right-20 top-1/2 w-56 h-56
                bg-robo rounded-full
                opacity-20 blur-[60px] sm:blur-[70px]
                animate-pulse-glow"
     style={{ animationDelay: '2s' }} />
```

### 9.6 Icon Container mit Gradient

```jsx
<div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto
                rounded-2xl sm:rounded-3xl
                bg-gradient-to-br from-veritas/30 to-robo/30
                flex items-center justify-center
                shadow-xl
                group-hover:shadow-2xl group-hover:scale-110
                transition-all duration-300">
  <IconComponent className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                            text-primary
                            group-hover:rotate-6
                            transition-transform duration-300"
                 strokeWidth={2.5} />
</div>
```

---

## 10. Icons

### 10.1 Icon Library

**Lucide React** - Moderne Icon Bibliothek

```jsx
import { Gamepad2, Check, Shield, Users, Camera } from 'lucide-react';
```

### 10.2 Icon Styling

```jsx
// Standard Icon
<Icon className="w-6 h-6 text-primary" />

// Icon mit Stroke Width
<Icon className="w-8 h-8" strokeWidth={2.5} />

// Icon mit Hover Animation
<Icon className="w-6 h-6 group-hover:rotate-6 transition-transform duration-300" />
```

### 10.3 Häufig verwendete Icons

| Icon | Import | Verwendung |
|------|--------|------------|
| `Gamepad2` | `lucide-react` | Minigame |
| `Check` | `lucide-react` | Checkmarks, Listen |
| `Shield` | `lucide-react` | Sicherheit |
| `Users` | `lucide-react` | Community |
| `Camera` | `lucide-react` | Fotos, Scans |
| `Scale` | `lucide-react` | Vergleiche |
| `Sun` / `Moon` | `lucide-react` | Theme Toggle |
| `ChevronDown` | `lucide-react` | Dropdowns |

---

## 11. Responsive Design

### 11.1 Breakpoints

| Breakpoint | Min-Width | Verwendung |
|------------|-----------|------------|
| (default) | 0px | Mobile |
| `sm:` | 640px | Large Mobile/Small Tablet |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Large Desktop |
| `2xl:` | 1536px | Extra Large |

### 11.2 Responsive Patterns

```jsx
// Text Größen
className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"

// Grid Layouts
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Spacing
className="py-12 sm:py-16 md:py-20 lg:py-24"
className="px-4 sm:px-6 lg:px-8"
className="gap-6 sm:gap-8 md:gap-10"

// Button Größen
className="h-12 sm:h-14"
className="w-full sm:w-auto sm:min-w-[260px]"
```

### 11.3 Mobile-First Prinzip

- Basis-Styles sind für Mobile optimiert
- Größere Screens werden mit Prefixes erweitert
- Touch-freundliche Größen (min-height 44px für Buttons)

---

## 12. Aktuelles MiniGame & Upgrade-Hinweise

### 12.1 Aktuelle MiniGame Implementierung

Das aktuelle MiniGame (Link zu `game.forrealscan.com`) verwendet bereits:
- Card-Komponente mit Gradient Background
- Gradient Text (veritas → robo)
- Gamepad2 Icon mit Hover-Animation
- AnimatedSection für Einblende-Effekt
- Pulse-Glow Orbs im Hintergrund
- Dot Pattern Background
- Gradient Button mit Shimmer

### 12.2 Design-Elemente für Minispiel-Upgrade

**Farben die verwendet werden sollten:**
```css
/* Primär (Authentisch/Echt) */
Veritas Green: hsl(142, 76%, 36%) - #22c55e ähnlich

/* Sekundär (KI/Fake) */
Robo Blue: hsl(210, 100%, 56%) - #3b82f6 ähnlich

/* Hintergründe */
Light: #ffffff
Dark: hsl(222.2, 84%, 4.9%) - #0c0f1e ähnlich

/* Text */
Primary Text (Light): #0c0f1e
Primary Text (Dark): #f8fafc
Muted Text: hsl(215, 25%, 35%)
```

**Empfohlene UI-Elemente:**
1. Gradient Buttons für CTAs
2. Cards mit Hover-Glow-Effekten
3. Glassmorphism für Overlays
4. Pulse-Glow Orbs für Atmosphäre
5. Scan-Line Animation für "Scanning"-Effekte
6. Gradient Text für wichtige Headlines
7. Check-Icons mit Veritas-Grün für korrekte Antworten
8. X-Icons mit Rot für falsche Antworten

**Animationen die passen würden:**
- `fade-in-up` für einblendende Elemente
- `pulse-glow` für Hintergrund-Atmosphäre
- `scan-line` für Analyse-/Scan-Effekte
- Shimmer für Buttons
- Scale + Shadow für Hover-Effekte

---

## 13. CSS Code Snippets

### 13.1 Komplettes Beispiel: Game Card

```jsx
<section className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
  {/* Dot Pattern Background */}
  <div
    className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
    style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
      backgroundSize: '40px 40px',
    }}
  />

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <Card className="
      group
      border-2 border-primary/30
      hover:border-primary/60
      hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]
      hover:-translate-y-2
      hover:scale-[1.01]
      transition-all duration-500
      p-6 sm:p-8 md:p-12
      rounded-2xl sm:rounded-3xl
      bg-gradient-to-br from-veritas/3 to-robo/3
      backdrop-blur-sm
      relative overflow-hidden
    ">
      {/* Glow Orbs */}
      <div className="absolute top-0 right-0 w-48 h-48
                      bg-gradient-to-br from-veritas to-veritas-glow
                      opacity-5 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-40 h-40
                      bg-gradient-to-tr from-robo to-robo-glow
                      opacity-5 blur-3xl animate-pulse-glow"
           style={{ animationDelay: '2s' }} />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8
                        rounded-2xl sm:rounded-3xl
                        bg-gradient-to-br from-veritas/30 to-robo/30
                        flex items-center justify-center
                        shadow-xl
                        group-hover:shadow-2xl group-hover:scale-110
                        transition-all duration-300">
          <Gamepad2 className="w-12 h-12 sm:w-14 sm:h-14 text-primary
                              group-hover:rotate-6 transition-transform duration-300"
                   strokeWidth={2.5} />
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
          <span className="bg-gradient-to-r from-veritas to-robo bg-clip-text text-transparent">
            Titel hier
          </span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center leading-relaxed mb-6 sm:mb-8">
          Beschreibung hier
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="w-full sm:w-auto sm:min-w-[260px] h-12 sm:h-14
                     text-base sm:text-lg font-semibold rounded-xl
                     bg-gradient-to-r from-veritas to-robo
                     hover:opacity-90
                     shadow-[0_0_15px_rgba(34,197,94,0.2)]
                     hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]
                     transition-all duration-300
                     relative overflow-hidden group/btn"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                           -translate-x-full group-hover/btn:translate-x-full
                           transition-transform duration-1000" />
          <span className="relative z-10">Button Text</span>
        </Button>
      </div>
    </Card>
  </div>
</section>
```

### 13.2 CSS Variablen (für Minispiel)

```css
:root {
  /* Veritas (Grün) */
  --veritas: 142 76% 36%;
  --veritas-glow: 142 76% 45%;
  --veritas-hex: #22c55e;

  /* Robo (Blau) */
  --robo: 210 100% 56%;
  --robo-glow: 210 100% 65%;
  --robo-hex: #3b82f6;

  /* Backgrounds */
  --bg-light: #ffffff;
  --bg-dark: #0c0f1e;

  /* Text */
  --text-light: #0c0f1e;
  --text-dark: #f8fafc;
  --text-muted: hsl(215, 25%, 35%);

  /* Spacing */
  --spacing-sm: 0.5rem;   /* 8px */
  --spacing-md: 1rem;     /* 16px */
  --spacing-lg: 1.5rem;   /* 24px */
  --spacing-xl: 2rem;     /* 32px */

  /* Border Radius */
  --radius-sm: 0.5rem;    /* 8px */
  --radius-md: 0.75rem;   /* 12px */
  --radius-lg: 1rem;      /* 16px */
  --radius-xl: 1.5rem;    /* 24px */

  /* Shadows */
  --shadow-glow-veritas: 0 0 25px rgba(34, 197, 94, 0.15);
  --shadow-glow-robo: 0 0 25px rgba(59, 130, 246, 0.15);

  /* Transitions */
  --transition-fast: 200ms;
  --transition-normal: 300ms;
  --transition-slow: 500ms;
}
```

---

## Zusammenfassung

Das ForRealScan Design zeichnet sich aus durch:

1. **Dual-Theme System** mit Veritas (Grün/Natur) und Robo (Blau/Tech)
2. **Gradient-basierte Ästhetik** für CTAs und Headlines
3. **Smooth Animations** bei Scroll und Hover
4. **Glassmorphism & Glow-Effekte** für moderne Tiefe
5. **Inter Tight Font** für klare, moderne Typografie
6. **Mobile-First Responsive Design**
7. **Konsistente Spacing- und Radius-Systeme**

Für das Minispiel sollten diese Design-Prinzipien übernommen werden, um ein konsistentes Markenerlebnis zu schaffen.
