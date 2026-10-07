---
title: "Ayres Dorados | Lodge Hotel"
summary: "Website for a lodge in Sierra Grande, Argentina, built from scratch with Astro and React: design, development and booking engine integration."
category: client
order: 2
image: ../../../assets/projects/ayres_dorados.png
role: "Design, development and booking engine integration"
technologies: ["Astro", "React", "Embla Carousel", "EmailJS"]
github: "https://github.com/juanicenteno/ayres_dorados"
website: "https://www.ayresdorados.com/"
---

## The challenge

Ayres Dorados is a lodge in Sierra Grande, near Playas Doradas in Río Negro, Argentina. It needed its own website to show its rooms and restaurant, and to take direct bookings instead of relying only on third-party platforms.

## What I did

I built the site from scratch: design, development and booking engine integration.

- Full interface design, with rooms, restaurant, gallery and contact sections.
- **Custom booking search** in React: it validates dates and guest count, then opens the hotel's booking portal with the search ready.
- **Gallery with lightbox and carousels** to show the lodge without loading every image up front.
- **Contact form** with EmailJS and confirmation notifications.

## Technical decisions

- **Astro as the foundation.** Most of the site is static content, so Astro serves it as plain HTML on first render.
- **React islands only where needed.** The booking search, gallery and carousel are interactive components; everything else ships no JavaScript.
- **Mobile first.** That's where travelers look for accommodation, and where speed decides whether they book or leave.

## Result

A lightweight site that's fast on mobile connections, with a direct path to booking. It also laid the groundwork for [Simplicity Systems](/en/projects/simplicity-systems/), the system the lodge's front desk uses today.
