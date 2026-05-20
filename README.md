# Sri Sai Paramedical College — Premium Website

A production-ready, premium institutional website built with Next.js 15, React 19, TypeScript, Tailwind CSS and Framer Motion. Designed to feel like a modern international university, a premium healthcare brand, and an award-winning startup — all in one.

## ✨ Highlights

- **Next.js 15 App Router** with React 19 and TypeScript
- **Tailwind CSS** with custom design tokens, glassmorphism, gradients & dark mode
- **Framer Motion** for cinematic scroll & micro animations
- **14+ pages** including dynamic course detail routes
- **Sticky glass navbar**, floating WhatsApp / Apply CTAs, video modals, animated counters
- **SEO-ready**: metadata, OpenGraph, sitemap.xml, robots.txt, JSON-LD structured data
- **Fully responsive**, mobile-first, accessibility-aware, reduced-motion support
- **Lighthouse-ready** with optimized fonts, lazy-loaded animations and minimal dependencies

## 🧰 Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 15 (App Router) · React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS · custom CSS layer |
| Motion | Framer Motion |
| Icons | lucide-react |
| Fonts | Poppins · Sora · Plus Jakarta Sans · Inter · DM Sans (next/font) |

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install      # or pnpm install / yarn

# 2. Start the dev server
npm run dev

# 3. Open
http://localhost:3000
```

### Scripts

```bash
npm run dev        # local dev with HMR
npm run build      # production build
npm run start      # start the production build
npm run lint       # lint with Next ESLint
npm run typecheck  # TypeScript check
```

## 🗂 Project Structure

```
src/
├── app/                       # App Router routes
│   ├── layout.tsx             # root layout, fonts, theme, SEO
│   ├── page.tsx               # home page (composes all sections)
│   ├── globals.css            # tailwind layers + design utilities
│   ├── about/                 # About page
│   ├── courses/               # Listing + dynamic [slug]/page.tsx
│   ├── admissions/            # Admissions + scholarships
│   ├── placements/            # Placements
│   ├── faculty/               # Faculty grid
│   ├── infrastructure/        # Infrastructure & labs
│   ├── gallery/               # Masonry gallery
│   ├── events/                # Events & news
│   ├── blog/                  # Blog with search & filters
│   ├── contact/               # Contact + FAQ
│   ├── portal/                # Student login + dashboard
│   ├── apply/                 # Multi-step online application
│   ├── not-found.tsx          # 404 page
│   ├── robots.ts              # robots.txt
│   └── sitemap.ts             # sitemap.xml
│
├── components/
│   ├── layout/                # Navbar, Footer, FloatingButtons, ThemeProvider, StructuredData
│   ├── home/                  # Hero, TrustBar, About, WhyChoose, Courses, Infra, Labs,
│   │                          # Placements, Testimonials, Partners, Admission, Gallery,
│   │                          # Events, Blog, FAQSection, ContactSection, CTA
│   └── ui/                    # Button, GlassCard, Reveal, Counter, Accordion, Modal,
│                              # Marquee, CourseCard, FacultyCard, TestimonialCard,
│                              # Field, Logo, PageHero, SectionHeader
│
└── lib/
    ├── data.ts                # Courses, faculty, partners, testimonials, events…
    ├── site.ts                # Site metadata, nav, social links
    └── utils.ts               # cn() & motion presets
```

## 🎨 Design System

Defined in [tailwind.config.ts](tailwind.config.ts) and [src/app/globals.css](src/app/globals.css).

| Token | Value |
| --- | --- |
| Primary Blue | `#0A66FF` (`brand-500`) |
| Medical Teal | `#00B7A8` (`teal-500`) |
| Accent Gold | `#F4B400` (`gold-400`) |
| Dark Ink | `#0F172A` (`ink`) |
| Soft Background | `#F8FAFC` (`cloud`) |

Utilities to know:
- `glass`, `glass-strong` — glassmorphism cards
- `text-gradient`, `text-gradient-warm` — animated gradient text
- `aurora-bg`, `grid-bg` — section backgrounds
- `btn-primary`, `btn-outline`, `btn-ghost` — button styles
- Animations: `animate-float`, `animate-marquee`, `animate-pulse-ring`, `animate-gradient-pan`

## 🔌 Customisation Hooks

- **Site metadata** — [src/lib/site.ts](src/lib/site.ts) (name, email, phone, WhatsApp, social URLs)
- **Courses, faculty, events, blog posts** — [src/lib/data.ts](src/lib/data.ts)
- **Navigation** — `nav` array in [src/lib/site.ts](src/lib/site.ts)
- **Theme colors** — `theme.extend.colors` in [tailwind.config.ts](tailwind.config.ts)
- **Dark mode** — toggled via `ThemeProvider` (persisted in `localStorage`)

## 📱 Pages Implemented

| Route | Purpose |
| --- | --- |
| `/` | Home (16 sections incl. hero, labs, placements, gallery, CTA) |
| `/about` | About + vision + mission + timeline |
| `/courses` | All programs with search + category filter |
| `/courses/[slug]` | Course detail (overview, curriculum, careers, faculty, FAQ) |
| `/admissions` | 5-step admission + scholarships + FAQ + contact |
| `/placements` | Stats, salary growth, recruiters, marquee, testimonials |
| `/faculty` | Faculty grid |
| `/infrastructure` | Drone tour card, horizontal scroll, labs section, full grid |
| `/gallery` | Filterable masonry gallery with lightbox |
| `/events` | Event cards with live countdowns |
| `/blog` | Filterable blog grid with search |
| `/contact` | Form + WhatsApp / call / email / map |
| `/portal` | Student login + dashboard (mocked) |
| `/apply` | 4-step online application with payment placeholder |

## 🧠 Advanced Feature Placeholders

These are scaffolded as UI components and can be wired to real backends:

- **Student login** — `src/app/portal/page.tsx`
- **Online application** — `src/app/apply/page.tsx`
- **Payment gateway** — Razorpay-style placeholder in apply step 3
- **AI chatbot** — floating CTA in `FloatingButtons.tsx`
- **LMS / Calendar / Inbox** — sidebar in portal dashboard
- **Notifications** — bell icon + announcement card
- **Admin dashboard** — extend `/portal` with a role-based layout

## 🔍 SEO & Performance

- `metadata` API used on every route
- `sitemap.ts` and `robots.ts` auto-generated
- JSON-LD `CollegeOrUniversity` schema injected in root layout
- Optimized fonts via `next/font` with `display: swap`
- `optimizePackageImports` for `lucide-react` & `framer-motion`
- Animations honour `prefers-reduced-motion`
- Lazy-rendered marquees, particles, and counters via `useInView`

## 🖼 Replacing Placeholders

The design uses gradient + grid patterns where photos would go. To swap in real media:

- **Hero / cards**: replace gradient blocks with `<Image />` from `next/image`
- **Videos**: replace the Play modal placeholder with `<iframe>` or `<video>` tags
- **Logos**: drop SVGs into `public/partners/` and swap text in `partners` array
- **Gallery**: each item in `Gallery.tsx` can use an `Image` with a real `src`

`next.config.mjs` already permits `images.unsplash.com` & `plus.unsplash.com` for prototyping.

## 📜 Licence

Bespoke build for Sri Sai Paramedical College.
