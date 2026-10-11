# BABA Builders & Consultant (बाबा बिल्डर्स एण्ड कन्सल्टेन्ट)

A high-performance, bilingual architectural and civil engineering consultancy web platform built for **BABA Builders & Consultant**, located in Sunsari, Koshi Province, Nepal.

---

## 🏛️ Project Overview

- **Industry**: Architectural Planning, Municipal *Naksha Pass*, 3D Visualization, Structural Design & Construction Supervision.
- **Location**: Sunsari, Nepal (Coordinates: 26° 39' N / 87° 20' E).
- **Core Aesthetic**: Architectural luxury inspired by Elementis, Forge, and Deso — featuring deep forest greens, architectural warm golds, earthy creams, and subtle frosted glassmorphism.
- **Languages**: 1-click seamless toggle between **English** and culturally accurate technical **Nepali (Devanagari)**.

---

## 🚀 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 13+ (App Router)** | Static page generation, SEO routing & asset optimization |
| **TypeScript** | Strict type safety for components, configurations & dictionaries |
| **GSAP & ScrollTrigger** | High-performance pinned scroll sequences, curtain transitions & text reveals |
| **Lenis** | Silky momentum smooth scrolling |
| **Vanilla CSS Design Tokens** | Tailored theme variables, typography clamp scales & zero framework bloat |
| **Google Fonts** | `Playfair Display` (Latin serif), `Inter` (sans-serif), `Mukta` (Devanagari) |
| **Lucide Icons** | Minimalist UI iconography |

---

## 🌟 Key Features & Architectural Highlights

### 1. 1-Click Bilingual System (EN ↔ NE)
- **Centralized Dictionaries**: Defined in [`lib/translations.ts`](./lib/translations.ts) with strict TypeScript types (`Translations` interface).
- **Zero Hydration Mismatch**: Uses React Context (`LanguageProvider`) in [`context/LanguageContext.tsx`](./context/LanguageContext.tsx) with `localStorage` persistence.
- **Unicode Grapheme Segmentation**: Uses `Intl.Segmenter` in character-split animations so Devanagari ligatures (हलन्त/मात्रा) never distort or detach.
- **Typography Polish**: Devanagari renders upright with Google Font `Mukta` at a 1.28 line height without faux-italic distortion. Word boundaries (`white-space: nowrap`) prevent words like *महसुस* from breaking mid-word.

### 2. Desktop Forge & Mobile Card Experiences
- **Desktop (>1024px)**: Pinned interactive stage featuring synchronized media crossfading, background ambient lighting, and Lenis-scrubbed progress bars.
- **Mobile (≤1024px)**: Earthy stacked card list (`#FDFBF7` cards on `#EDE8DE` stage) with full-width touch targets.

### 3. Full-Screen Architectural Chapter Menu (Deso-style)
- **Auto-Hide Header**: Opening the drawer menu smoothly fades out the top-left logo and language toggle, keeping only the close button (**✕**) in focus.
- **In-Drawer Language Pill**: An embedded toggle inside the drawer allows switching languages without closing the menu.
- **Adaptive Contrast**: Close button automatically flips contrast (dark green on mobile cream drawer, cream on desktop dark aside).

### 4. High-Grade Mobile Responsiveness
- **iOS Safari Optimization**: Form inputs set to `16px` font-size to prevent unwanted auto-zooming on focus.
- **Touch Targets**: All interactive elements measure at least 44px–48px.
- **Zero Edge Clipping**: Absolute badges snap safely to containers down to 320px viewport width.

---

## 📁 Directory Structure

```text
├── app/
│   ├── globals.css          # Design system tokens, clamp typography & animations
│   ├── layout.tsx           # Root metadata, font variables & HTML structure
│   └── page.tsx             # Master page assembling all sections
├── assets/                  # Original architectural imagery
├── components/
│   ├── About.tsx            # Philosophy & studio narrative
│   ├── Approach.tsx         # 3-step project delivery methodology
│   ├── BabaLogo.tsx         # Responsive emblem SVG mark
│   ├── BabaLogoMarkPaths.ts # Modular vector paths extracted for clean code
│   ├── Contact.tsx          # Consultation inquiry form & office details
│   ├── CTA.tsx              # Conversion block with slide-in button
│   ├── CustomCursor.tsx     # Magnet/project hover cursor
│   ├── Footer.tsx           # Tagline, chapter navigation & copyright
│   ├── Hero.tsx             # Unicode-safe grapheme animation & headline
│   ├── LanguageToggle.tsx   # Minimalist pill language switcher
│   ├── Marquee.tsx          # Ticker ribbon
│   ├── Navigation.tsx       # Header bar & full-screen chapter drawer
│   ├── Preloader.tsx        # Branded entrance animation with counter
│   ├── Projects.tsx         # Curated architectural work showcase
│   ├── Services.tsx         # Desktop Forge stage & mobile fallback cards
│   ├── SmoothScroll.tsx     # Lenis smooth-scroll wrapper
│   └── Statement.tsx        # Brand promise & structural guarantees
├── context/
│   └── LanguageContext.tsx  # React Context for language state & storage
├── lib/
│   ├── constants.ts         # Centralized studio info, coordinates & mock data
│   └── translations.ts      # Strongly typed English & Nepali dictionaries
└── public/
    └── images/              # Optimized project & hero photography
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Typecheck
```bash
npx tsc --noEmit
```

### 4. Production Build
```bash
npm run build
npm run start
```

---

## 📄 Repository
- **GitHub**: [SurajRai1/BabaBuilders-Consultant](https://github.com/SurajRai1/BabaBuilders-Consultant)
- **License**: Private / Proprietary to BABA Builders & Consultant.
