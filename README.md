# ComplianceVista — Complete Site Reference

> **Product**: ComplianceVista  
> **Company**: Ardira Corporation  
> **Domain**: [compliancevista.com](https://compliancevista.com/)  
> **Tagline**: Enterprise governance simplified. Salesforce-native compliance by Ardira.

---

## Table of Contents

1. [Branding & Identity](#1-branding--identity)
2. [Color Palette](#2-color-palette)
3. [Typography / Fonts](#3-typography--fonts)
4. [Technology Stack](#4-technology-stack)
5. [Project File Structure](#5-project-file-structure)
6. [Page Architecture & Routing](#6-page-architecture--routing)
7. [Homepage Sections (in order)](#7-homepage-sections-in-order)
8. [Navbar Behaviour](#8-navbar-behaviour)
9. [Animations & Interactions](#9-animations--interactions)
10. [Styling System & Utility Classes](#10-styling-system--utility-classes)
11. [Responsive Breakpoints](#11-responsive-breakpoints)
12. [SEO & Schema Markup](#12-seo--schema-markup)
13. [Third-Party Integrations](#13-third-party-integrations)
14. [Performance Optimisations](#14-performance-optimisations)
15. [Environment Variables](#15-environment-variables)
16. [Deployment & Hosting](#16-deployment--hosting)
17. [Assets & Images](#17-assets--images)
18. [Contact Information](#18-contact-information)

---

## 1. Branding & Identity

| Property | Value |
|---|---|
| Product Name | **ComplianceVista** |
| Parent Company | Ardira Corporation |
| Logo (SVG) | `/ComplianceVista-logo.svg` |
| Logo (WebP) | `/ComplianceVista-logo.webp` |
| Favicon | `/favicon.webp` |
| AppExchange Listing | [Salesforce AppExchange](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000J6DYBUA3) |
| Calendly Demo URL | `https://calendly.com/d/zzy-699-f8v/book-a-demo` |
| Hero Badge Text | "Salesforce-Native Solution" |
| Trust Badges | "100% Native Salesforce" · "Enterprise Security" · "Real-time Tracking" |

---

## 2. Color Palette

### Primary Brand Colors

| Role | HSL | Hex | Usage |
|---|---|---|---|
| **Primary Green** | `114 77% 56%` | `#37C643` | Buttons, active states, icons, accent text, badges |
| **Primary Green (hover)** | `114 77% 44%` | `#2eaa38` (approx) | Button hover states |
| **Secondary Teal** | `185 99% 35%` | `#069587` (approx) | Gradients, secondary accents |
| **Secondary Teal (hover)** | `185 99% 28%` | `#057a6e` (approx) | Scroll-top button over colored sections |
| **Final CTA Green** | — | `#26C64F` | Final CTA section background |

### Neutral Colors

| Role | HSL | Usage |
|---|---|---|
| Background | `0 0% 100%` (white) | Page background |
| Foreground | `220 26% 14%` | Primary text |
| Muted | `210 20% 98%` | Muted surface backgrounds |
| Muted Foreground | `218 11% 46%` | Secondary text / captions |
| Border | `216 12% 90%` | Borders and dividers |
| Dark Navy | `222 84% 11%` | Footer background |
| Dark Navy Foreground | `216 12% 90%` | Footer text |

### Surface Colors

| Role | HSL | Usage |
|---|---|---|
| Surface Light | `210 20% 98%` | Light surface backgrounds |
| Surface Accent | `207 100% 94%` | Accent surface backgrounds |

### Section Background Gradients

| Section | Gradient |
|---|---|
| Hero | `from-white via-[#37C643]/5 to-[#37C643]/8` |
| Problem (Overview) | `from-red-50/50 via-white to-orange-50/30` |
| Solution | `from-sky-50/40 via-white to-blue-50/30` |
| Features | `from-green-50/50 via-white to-emerald-50/40` |
| Benefits | `from-slate-50 via-slate-100/50 to-slate-50` |
| Use Cases | `from-emerald-50/40 via-white to-teal-50/30` |
| FAQ | `from-violet-50/40 via-white to-purple-50/30` |
| Final CTA | Solid `bg-[#26C64F]` |
| Footer | `bg-navy` (dark navy `222 84% 11%`) |

### Semantic Colors

| Role | HSL |
|---|---|
| Destructive | `0 84% 60%` |
| Ring (Focus) | `114 77% 56%` (matches primary) |

---

## 3. Typography / Fonts

### Font Family

| Usage | Font | Fallback |
|---|---|---|
| **All text** (body & headings) | **Poppins** | `sans-serif` |

> **Note**: The Tailwind config also declares `Plus Jakarta Sans` (heading) and `Inter` (body) font families, but the actual CSS overrides use **Poppins** everywhere via `@font-face` and `font-family` in `index.css`.

### Font Weights Loaded

| Weight | File |
|---|---|
| 400 (Regular) | `poppins-v20-latin-400.woff2` |
| 700 (Bold) | `poppins-v20-latin-700.woff2` |
| 800 (Extra Bold) | `poppins-v20-latin-800.woff2` |

### Font Loading Strategy

- **Self-hosted** (no external Google Fonts dependency)
- `font-display: swap` — text remains visible during font load
- Preloaded via `<link rel="preload">` in `index.html`

### Typography Scale (Section Headings)

| Breakpoint | Section h2 Size |
|---|---|
| Mobile (default) | `text-2xl` (1.5rem) |
| `sm` (≥640px) | `text-3xl` (1.875rem) |
| `md` (≥768px) | `text-4xl` (2.25rem) |
| `lg` (≥1024px) | `text-5xl` (3rem) |
| `xl` (≥1280px) | `text-6xl` (3.75rem) |

---

## 4. Technology Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 18.3.x |
| Language | TypeScript | 5.9.x |
| Build Tool | Vite | 6.4.x |
| CSS Framework | Tailwind CSS | 3.4.x |
| Animation | Framer Motion | 12.40.x |
| Routing | React Router DOM | 6.30.x |
| UI Components | Radix UI + shadcn/ui | Various |
| Icons | Lucide React | 0.462.x |
| State/Data | TanStack React Query | 5.100.x |
| Forms | React Hook Form + Zod | 7.76.x / 3.25.x |
| SEO | React Helmet Async | 3.0.x |
| Notifications | Sonner | 1.7.x |
| Backend | Supabase Edge Functions | — |
| Testing | Vitest + Playwright | 3.2.x / 1.60.x |
| Node Runtime | Node.js | 20.x |

---

## 5. Project File Structure

```
vista-compliance/
├── index.html                      # Entry HTML (schema markup, GTM, preloads)
├── package.json
├── tailwind.config.ts              # Tailwind theme + custom tokens
├── vite.config.ts                  # Vite bundler config
├── vercel.json                     # Deployment: headers, rewrites, redirects
├── public/
│   ├── ComplianceVista-logo.svg    # Main logo
│   ├── ComplianceVista-logo.webp   # Logo fallback
│   ├── CV_heroimg.webp             # Hero image (legacy)
│   ├── favicon.webp                # Favicon
│   ├── robots.txt                  # SEO crawl rules
│   ├── sitemap.xml                 # XML sitemap
│   ├── .htaccess                   # Apache rewrite rules
│   ├── fonts/                      # Self-hosted Poppins woff2
│   └── company-images/             # Section imagery (webp)
└── src/
    ├── App.tsx                     # Root component (routes, providers)
    ├── main.tsx                    # React entry point
    ├── index.css                   # Global styles, CSS variables, utilities
    ├── pages/
    │   ├── Index.tsx               # Homepage (section assembly)
    │   ├── PrivacyPolicy.tsx       # Privacy policy page
    │   ├── TermsOfUse.tsx          # Terms of use page
    │   ├── NotFound.tsx            # 404 page
    │   ├── Dashboard.tsx           # Dashboard page (internal)
    │   ├── Compliance.tsx          # Compliance page (internal)
    │   ├── Audit.tsx               # Audit page (internal)
    │   └── Settings.tsx            # Settings page (internal)
    ├── components/
    │   ├── Navbar.tsx              # Fixed navigation bar
    │   ├── HeroSection.tsx         # Hero banner
    │   ├── ProblemSection.tsx      # "Overview" — Challenge cards
    │   ├── SolutionSection.tsx     # Auto-carousel solutions
    │   ├── FeaturesSection.tsx     # Feature cards carousel
    │   ├── BenefitsSection.tsx     # Benefits grid
    │   ├── UseCasesSection.tsx     # Use case cards
    │   ├── FAQSection.tsx          # FAQ accordion
    │   ├── ContactSection.tsx      # Contact form + map
    │   ├── FinalCTASection.tsx     # Final call-to-action banner
    │   ├── FooterSection.tsx       # Site footer
    │   ├── CalendlyModal.tsx       # Calendly iframe modal
    │   ├── LazySection.tsx         # Intersection-observer lazy wrapper
    │   ├── ErrorBoundary.tsx       # Error boundary
    │   ├── AppLayout.tsx           # Layout for internal pages
    │   ├── AppSidebar.tsx          # Sidebar for internal pages
    │   ├── StatusBadge.tsx         # Status badge component
    │   ├── seo/                    # SEO utilities
    │   │   ├── PageSeo.tsx         # Per-page <head> meta tags
    │   │   ├── CanonicalManager.tsx # Canonical URL management
    │   │   ├── RobotsManager.tsx   # Meta robots tag management
    │   │   └── seoConfig.ts        # SEO helper functions
    │   └── ui/                     # shadcn/ui primitives
    └── hooks/
        ├── useRecaptcha.ts         # reCAPTCHA v3 loader/executor
        ├── use-mobile.tsx          # Mobile detection
        └── use-toast.ts            # Toast notification hook
```

---

## 6. Page Architecture & Routing

| Route | Component | Description |
|---|---|---|
| `/` | `Index.tsx` | Main landing page (all sections) |
| `/terms-of-use` | `TermsOfUse.tsx` | Terms of use (legal) |
| `/privacy-policy` | `PrivacyPolicy.tsx` | Privacy policy (legal) |
| `/dashboard` | `Dashboard.tsx` | Internal dashboard (requires `AppLayout`) |
| `/compliance` | `Compliance.tsx` | Internal compliance view |
| `/audit` | `Audit.tsx` | Internal audit view |
| `/settings` | `Settings.tsx` | Internal settings view |
| `*` (catch-all) | `NotFound.tsx` | 404 page |

### Lazy Loading
All page components are code-split via `React.lazy()`. A green spinner is shown as the fallback while chunks load.

---

## 7. Homepage Sections (in order)

| # | Section | Component | DOM `id` | Nav Label | Background |
|---|---|---|---|---|---|
| 1 | **Hero** | `HeroSection.tsx` | `home` | — (logo click) | White → green gradient |
| 2 | **Overview / Challenge** | `ProblemSection.tsx` | `overview` | Overview | Red/orange subtle gradient |
| 3 | **Solution** | `SolutionSection.tsx` | — (no nav link) | — | Sky/blue subtle gradient |
| 4 | **Features** | `FeaturesSection.tsx` | `features` | Features | Green/emerald subtle gradient |
| 5 | **Benefits** | `BenefitsSection.tsx` | `benefits` | Benefits | Slate subtle gradient |
| 6 | **Use Cases** | `UseCasesSection.tsx` | `use-cases` | Use Cases | Emerald/teal subtle gradient |
| 7 | **FAQ** | `FAQSection.tsx` | `faq` | — (mapped to Use Cases in nav) | Violet/purple subtle gradient |
| 8 | **Contact** | `ContactSection.tsx` | `contact` | Contact Us | — |
| 9 | **Final CTA** | `FinalCTASection.tsx` | `final-cta` | — (mapped to Contact in nav) | Solid green `#26C64F` |
| 10 | **Footer** | `FooterSection.tsx` | — | — | Dark navy |

### Section Content Details

#### Hero Section
- Badge: "Salesforce-Native Solution"
- Heading: "Assessments. Risk. Compliance. All Automated. All inside Salesforce."
- Animated SVG underline on "All inside Salesforce."
- CTA Buttons: **"Book a Demo"** (opens Calendly modal) + **"View On AppExchange"** (external link)
- Trust badges: "100% Native Salesforce" · "Enterprise Security" · "Real-time Tracking"
- Hero image: `/company-images/cv-hero-new.webp`
- Floating "Compliant — All checks passed" badge

#### Overview (Problem) Section
- Subtitle: "The Challenge"
- Heading: "Enterprise **Compliance** Challenges"
- 4 problem cards in 2×2 grid:
  1. Scattered Compliance Data
  2. Manual Audit Trails
  3. Risk Visibility Gaps
  4. Workflow Inefficiency

#### Solution Section
- Subtitle: "Our Solution"
- Heading: "How **ComplianceVista** Solves This"
- Auto-carousel (2.5s interval, pauses on hover) with 4 solutions:
  1. Unified Compliance Dashboard
  2. Automated Audit Trails
  3. Risk & Issue Management
  4. Workflow & Approval Automation
- Each has an image + text card with benefit bullets

#### Features Section
- Subtitle: "Powerful Capabilities"
- Heading: "Enterprise **Features**"
- Paginated carousel showing 2 cards at a time (3s auto-rotate):
  1. Policy Management
  2. Access Control
  3. Compliance Reporting
  4. Deadline Tracking
  5. Audit Management
  6. Mobile Access
- Dot navigation + prev/next arrows

#### Benefits Section
- Subtitle: "Why Choose Us"
- Heading: "Key **Benefits**"
- 5 benefit cards in flex-wrap layout (3 cols desktop, 2 tablet, 1 mobile):
  1. Minimize Risk
  2. Increase Operational Efficiency
  3. Improve Visibility
  4. Drive Business Growth
  5. Build Trust & Reputation

#### Use Cases Section
- Subtitle: "Real-World Applications"
- Heading: "Perfect for Every **Scenario**"
- 4 use case cards in 2×2 grid:
  1. Audit Management
  2. Vendor Risk Assessment
  3. Regulatory Compliance
  4. Employee Assessment

#### FAQ Section
- Subtitle: "FAQ"
- Heading: "Frequently Asked **Questions**"
- 4 accordion items (Radix Accordion, single collapsible, opens on hover):
  1. What makes ComplianceVista different from other compliance solutions?
  2. Can ComplianceVista handle multiple regulatory frameworks simultaneously?
  3. What kind of reporting and dashboards does ComplianceVista provide?
  4. Is my data secure within ComplianceVista?

#### Contact Section
- Form fields: Name, Email, Phone, Message (optional)
- Client-side validation with error messages
- reCAPTCHA v3 protection
- Submits to Supabase edge function
- Success toast via Sonner
- Embedded Google Maps (lazy-loaded via IntersectionObserver)
- Contact info: email (`info@ardira.com`), phone (`1.669.777.6838`)

#### Final CTA Section
- Heading: "Ready to Simplify Enterprise Compliance?"
- Subtitle: "Join 500+ enterprise customers managing compliance with confidence."
- CTA: "Request a Demo" → opens Calendly modal
- Animated floating orb background

#### Footer
- 3-column layout (desktop): Logo/tagline | Quick Links | Contact Info
- 2-column layout (mobile): Quick Links | Contact Info
- Quick Links: Overview, Features, Benefits, Use Cases, Contact Us
- Contact Info: website, email (`info@ardira.com`), phone (`1.669.777.6838`)
- Legal links: Terms of Use | Privacy Policy
- Copyright: "© {year} Ardira Corporation. All Rights Reserved."

---

## 8. Navbar Behaviour

### Navigation Links

| Label | Target |
|---|---|
| Overview | `#overview` |
| Features | `#features` |
| Benefits | `#benefits` |
| Use Cases | `#use-cases` |
| Contact Us | `#contact` |
| **Book Demo** (CTA button) | Opens Calendly modal |

### Scroll Behaviour
- Fixed at top (`z-50`)
- Animates in from top on page load (`y: -100 → 0`)
- **Not scrolled** (`scrollY ≤ 50`): transparent background, no rounding
- **Scrolled**: Floats with `mt-3`, `rounded-[2.5rem]`, and glass effect
  - Over light sections: `bg-white/50 backdrop-blur-xl`
  - Over dark sections (Final CTA / Footer / Hero top): `bg-slate-900/80 backdrop-blur-xl`
- Active section link highlighted in `#37C643` green

### Mobile Menu
- Hamburger icon below `lg` breakpoint (< 1024px)
- Animated slide-down panel with staggered link animations
- Same links + "Book Demo" button

### Active Section Detection
- Scroll listener detects which section is in view (top ≤ 200px threshold)
- `faq` maps to `use-cases` active state
- `final-cta` maps to `contact` active state

### Scroll-to-Top Button
- Appears when `scrollY > 300` and navbar is scrolled
- Fixed bottom-right, green circular button with up arrow
- Changes colour to teal when overlapping Final CTA section

### Cross-Page Navigation
- From non-homepage routes (e.g., `/terms-of-use`), clicking a nav link navigates to `/` first, then scrolls to the section after a 450ms delay
- Uses `forceRenderSections` custom event to ensure lazy sections are mounted

---

## 9. Animations & Interactions

### Framer Motion Animations
| Element | Animation |
|---|---|
| Navbar | Slide down from `y: -100` |
| Hero text | Fade in from left (`x: -40`) |
| Hero image | Fade in from right (`x: 40`, delayed 0.3s) |
| Hero underline SVG | Path draw animation |
| Floating badge | Scale in from 0.8 (delayed 1.2s) |
| Section headers | Fade up (`y: 20 → 0`) on scroll |
| Cards | Staggered fade up with delays |
| FAQ items | Fade up on scroll, opens on hover |
| Mobile menu links | Staggered slide from left (`x: -20`) |

### CSS Animations
| Animation | Duration | Description |
|---|---|---|
| `float` | 6s (8s on mobile) | Gentle Y-axis float for orbs and images |
| `pulse-glow` | — | Subtle box-shadow pulse on primary elements |
| `top-edge-draw` | 0.35s | Green line draws across card top on hover |
| `top-edge-undraw` | 0.35s | Line retracts when hover ends |
| `shimmer` | 3s | Background position shimmer effect |
| `accordion-down/up` | 0.2s | Radix accordion expand/collapse |
| `fade-in-up` | 0.6s | Fade + translate up |
| Spinner | 1s linear infinite | Loading spinner rotation |

### Card Hover Effect
- `.card-hover-primary` — on hover:
  - 3px green (`#37C643`) line draws across the top edge from left to right
  - Background tints to `rgba(55, 198, 67, 0.02)`
  - Line retracts on mouse leave

### Auto-Carousels
| Section | Interval | Behaviour |
|---|---|---|
| Solution | 2.5s | Cycles through 4 items, pauses on hover |
| Features | 3.0s | Shows 2 cards at a time, has prev/next + dot nav |

---

## 10. Styling System & Utility Classes

### Custom Utility Classes

| Class | Description |
|---|---|
| `.glass` | Semi-transparent white background with blur: `bg-white/60 backdrop-blur-xl` |
| `.glass-strong` | Stronger glass: `bg-white/80 backdrop-blur-2xl` |
| `.glass-dark` | Dark glass: `bg-black/20 backdrop-blur-xl` |
| `.glow-primary` | Green box shadow glow |
| `.glow-secondary` | Teal box shadow glow |
| `.gradient-text` | Text gradient from primary to secondary |
| `.gradient-border` | Pseudo-element gradient border |
| `.float-animation` | Floating Y-axis animation |
| `.mesh-bg` | Multi-radial gradient mesh background |
| `.dot-pattern` | Repeating dot grid pattern |
| `.scrollbar-hide` | Hides scrollbar cross-browser |
| `.card-hover-primary` | Card with animated top-edge green line |

### Design Tokens (CSS Variables)

Defined in `:root` via `index.css`:

```css
--background: 0 0% 100%;
--foreground: 220 26% 14%;
--primary: 114 77% 56%;
--primary-hover: 114 77% 44%;
--secondary: 185 99% 35%;
--secondary-hover: 185 99% 28%;
--dark-navy: 222 84% 11%;
--radius: 0.75rem;
--font-heading: 'Poppins', sans-serif;
--font-body: 'Poppins', sans-serif;
```

### Border Radius Scale

| Token | Value |
|---|---|
| `sm` | `calc(0.75rem - 4px)` = 8px |
| `md` | `calc(0.75rem - 2px)` = 10px |
| `lg` | `0.75rem` = 12px |
| `xl` | `1rem` = 16px |
| `2xl` | `1.25rem` = 20px |

### Container

- Centered, max-width `1400px` on `2xl`
- Padding: `2rem` (desktop), `1rem` (mobile ≤ 640px)

---

## 11. Responsive Breakpoints

| Breakpoint | Width | Navbar |
|---|---|---|
| Default (mobile) | < 640px | Hamburger menu, 1rem padding |
| `sm` | ≥ 640px | Hamburger menu |
| `md` | ≥ 768px | Hamburger menu |
| `lg` | ≥ 1024px | Full horizontal nav |
| `xl` | ≥ 1280px | Full horizontal nav, hero side-by-side |
| `2xl` | ≥ 1400px | Max container width |

### Mobile-Specific Optimisations
- Min touch target height: `36px`
- Float animation slowed to 8s
- `.dot-pattern` / `.mesh-bg` get `contain: strict`
- GPU-accelerated elements with `will-change` and `translateZ(0)`
- `overscroll-behavior-y: none` (prevents Android stretch effect)
- `overflow-x: hidden` on body

---

## 12. SEO & Schema Markup

### Meta Tags
- Title: "ComplianceVista | Salesforce Compliance Management"
- Description: "Native Salesforce compliance management for audits, vendor risk, evidence tracking, and automated compliance workflows."
- Keywords: Salesforce compliance, governance solution, compliance management, audit automation, vendor risk assessment, SurveyVista, enterprise compliance
- Author: Ardira Technologies
- Canonical: `https://compliancevista.com/`

### Open Graph
- Type: `website`
- Image: `cv-hero-new.webp` (1200×630)
- Locale: `en_US`

### Twitter Card
- Type: `summary_large_image`

### Structured Data (JSON-LD Schemas)

| Schema | Content |
|---|---|
| **WebSite** | Name, URL, language |
| **Organization** | Ardira Corporation, logo, contact points (support + sales) |
| **SoftwareApplication** | BusinessApplication, free offers, publisher |
| **BreadcrumbList** | Home → Overview → Features → Benefits → Use Cases → Contact Us |
| **FAQPage** | 4 questions/answers matching FAQ section |

### Sitemap (`/sitemap.xml`)
- `/` (priority 1.0)
- `/privacy-policy` (priority 1.0)
- `/terms-of-use` (priority 1.0)

### Robots (`/robots.txt`)
- `User-agent: *` → `Allow: /`
- Sitemap reference

### SEO Components
- `PageSeo.tsx` — Per-page `<head>` management via React Helmet
- `CanonicalManager.tsx` — Dynamic canonical URL based on route
- `RobotsManager.tsx` — Dynamic meta robots tag
- `seoConfig.ts` — Helpers for canonical URL building

---

## 13. Third-Party Integrations

| Integration | Purpose | Loading Strategy |
|---|---|---|
| **Google Tag Manager** (`GTM-MS38XLX4`) | Analytics/tracking | Deferred until first user interaction (scroll/mousemove/touchstart/keydown) or 5s timeout |
| **Google reCAPTCHA v3** | Spam protection on contact form | Loaded 5s after page mount |
| **Calendly** | Demo booking | Iframe loaded in modal on-demand |
| **Google Maps** | Office location on contact page | Lazy-loaded via IntersectionObserver (200px margin) |
| **Supabase Edge Functions** | Lead form submission backend | Called on form submit |

---

## 14. Performance Optimisations

| Optimisation | Implementation |
|---|---|
| **Code Splitting** | All pages and below-fold sections use `React.lazy()` |
| **Lazy Section Rendering** | `LazySection` wrapper uses IntersectionObserver (600px rootMargin) |
| **Image Optimisation** | All images in WebP format |
| **Font Preloading** | Critical Poppins weights preloaded via `<link rel="preload">` |
| **Self-Hosted Fonts** | No external Google Fonts requests |
| **Deferred GTM** | Waits for first user interaction |
| **Deferred reCAPTCHA** | 5-second delay after mount |
| **Resource Hints** | `preconnect` and `dns-prefetch` for Google domains |
| **Cache Headers** (Vercel) | Fonts: 1yr immutable · Images: 30 days + stale-while-revalidate |
| **GPU Acceleration** | `will-change: transform, opacity` and `translateZ(0)` on animated elements |
| **Strict Containment** | `contain: strict` on decorative backgrounds (mobile) |
| **Query Caching** | React Query: 60s stale time, 5min GC |
| **Build Tooling** | Vite + SWC (React plugin) + Terser for production minification |

---

## 15. Environment Variables

| Variable | Purpose | Example |
|---|---|---|
| `VITE_LEAD_SUBMIT_URL` | Supabase edge function URL for lead submissions | `https://xxx.supabase.co/functions/v1/submit-lead` |
| `VITE_SITE_ID` | Identifies which brand's form (for multi-brand backend) | `ComplianceVista` |
| `VITE_RECAPTCHA_SITE_KEY` | Google reCAPTCHA v3 public site key | `6LdpZq4sAAAAA...` |
| `VITE_SITE_URL` | Site base URL (optional, defaults to `https://compliancevista.com`) | — |
| `VITE_APP_ENV` / `VITE_VERCEL_ENV` | Environment detection for SEO robots | `production` |

---

## 16. Deployment & Hosting

| Property | Value |
|---|---|
| Host | **Vercel** |
| SPA Rewrite | All routes → `/index.html` |
| Redirect | `/compliance-quest` → `/` (301 permanent) |
| Node Version | 20.x (`.nvmrc`) |
| Build Command | `vite build` |
| Dev Command | `vite` |

### Vercel Cache Headers

| Path Pattern | Cache-Control |
|---|---|
| `/fonts/*` | `public, max-age=31536000, immutable` (1 year) |
| `/assets/*` | `public, max-age=31536000, immutable` (1 year) |
| `/company-images/*` | `public, max-age=2592000, stale-while-revalidate=86400` (30 days) |
| `*.webp` | `public, max-age=2592000, stale-while-revalidate=86400` (30 days) |
| `*.svg` | `public, max-age=2592000, stale-while-revalidate=86400` (30 days) |

---

## 17. Assets & Images

### Logos
| File | Format | Size | Usage |
|---|---|---|---|
| `ComplianceVista-logo.svg` | SVG | 15 KB | Navbar + Footer |
| `ComplianceVista-logo.webp` | WebP | 13 KB | Fallback |
| `favicon.webp` | WebP | 6 KB | Browser tab icon |

### Company Images (`/company-images/`)
| File | Size | Usage |
|---|---|---|
| `cv-hero-new.webp` | 17 KB | Hero section, OG image |
| `cv-hero-section.webp` | 14 KB | Legacy hero (unused) |
| `cv-key-capabilities-features.webp` | 12 KB | Solution carousel — Unified Dashboard |
| `cv-key-capabilities-compliance-testing.webp` | 24 KB | Solution carousel — Audit Trails |
| `cv-key-capabilities-audit-risk.webp` | 17 KB | Solution carousel — Risk Management |
| `cv-key-capabilities-vendor-risk.webp` | 14 KB | Solution carousel — Workflow Automation |
| `cv-overview-section.webp` | 24 KB | Overview/general use |

### Other Assets
| File | Usage |
|---|---|
| `CV_heroimg.webp` | Legacy hero image (79 KB) |

---

## 18. Contact Information

| Channel | Value |
|---|---|
| Website | [compliancevista.com](https://compliancevista.com/) |
| Email (General) | info@ardira.com |
| Email (Support) | support@ardira.com |
| Phone | +1-669-777-6838 |
| Copyright | © {year} Ardira Corporation. All Rights Reserved. |

---

*Last updated: July 2026*
