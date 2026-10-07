---
title: "Ayres de Calafate | Boutique Hotel"
summary: "Official website for a boutique hotel in Patagonia. I designed and built it in React + Vite, then migrated it to Next.js 15 for SSR, SEO and three languages."
category: client
order: 1
featured: true
image: ../../../assets/projects/ayres_calafate.png
highlight: "Lighthouse 40 → 100"
role: "Design, development and booking engine integration"
technologies: ["Next.js 15", "React 19", "next-intl", "CSS Modules", "Embla Carousel"]
github: "https://github.com/juanicenteno/hotel_ayres_calafate_next"
website: "https://www.ayresdecalafate.com/"
---

## The challenge

Ayres de Calafate is a boutique hotel in El Calafate, overlooking Lago Argentino. It hosts travelers from many countries who look for accommodation on their phones. The website had to match the hotel's standard, rank in search engines in several languages, and take visitors to a booking without friction.

## What I did

I owned the project end to end: UI design, development and booking engine integration.

- Designed the site's visual identity around the hotel's look: warm tones, serif typography and full-screen photography.
- Built the first version with **React + Vite**.
- Integrated the booking engine with a custom date and guest search that opens the hotel's booking portal with the search already filled in.
- When the site needed to rank in search engines, I **migrated it entirely to Next.js 15** with the App Router.

## Technical decisions

- **Next.js with server rendering.** The React + Vite version rendered everything on the client, so search engines saw an almost empty page. With Next.js every page ships its full HTML.
- **Three languages with next-intl.** Spanish, English and Portuguese, with per-language routes (`/es`, `/en`, `/pt`) and browser language detection.
- **CSS Modules.** Styles scoped per component, so new sections can be added without breaking existing ones.
- **Optimized images and lightweight carousels** with Embla Carousel, to keep mobile load times low.

## Result

Lighthouse performance went from **40 to 100**. The site is indexed in three languages, loads fast on mobile and can grow without a rewrite.
