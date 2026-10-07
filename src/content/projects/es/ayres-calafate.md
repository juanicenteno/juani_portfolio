---
title: "Ayres de Calafate | Hotel Boutique"
summary: "Sitio oficial de un hotel boutique en la Patagonia. Lo diseñé y desarrollé en React + Vite, y después lo migré a Next.js 15 para tener SSR, SEO y tres idiomas."
category: client
order: 1
featured: true
image: ../../../assets/projects/ayres_calafate.png
highlight: "Lighthouse 40 → 100"
role: "Diseño, desarrollo e integración del motor de reservas"
technologies: ["Next.js 15", "React 19", "next-intl", "CSS Modules", "Embla Carousel"]
github: "https://github.com/juanicenteno/hotel_ayres_calafate_next"
website: "https://www.ayresdecalafate.com/"
---

## El desafío

Ayres de Calafate es un hotel boutique en El Calafate, con vista al Lago Argentino. Recibe turistas de distintos países que buscan alojamiento desde el celular. El sitio tenía que verse a la altura del hotel, aparecer en buscadores en varios idiomas y llevar al usuario a reservar sin fricción.

## Qué hice

Me encargué del proyecto de punta a punta: diseño de la interfaz, desarrollo e integración del motor de reservas.

- Diseñé la identidad visual del sitio a partir de la estética del hotel: tonos cálidos, tipografía serif y fotografía a pantalla completa.
- Construí la primera versión en **React + Vite**.
- Integré el motor de reservas con un buscador propio de fechas y huéspedes que lleva al portal de reservas del hotel con la búsqueda ya cargada.
- Cuando el sitio necesitó posicionarse en buscadores, lo **migré completo a Next.js 15** con App Router.

## Decisiones técnicas

- **Next.js con renderizado en el servidor.** La versión en React + Vite renderizaba todo en el cliente, así que los buscadores veían una página casi vacía. Con Next.js cada página llega con su HTML completo.
- **Tres idiomas con next-intl.** Español, inglés y portugués, con rutas por idioma (`/es`, `/en`, `/pt`) y detección del idioma del navegador.
- **CSS Modules.** Estilos aislados por componente, para poder sumar secciones sin romper las existentes.
- **Imágenes optimizadas y carruseles livianos** con Embla Carousel, para no penalizar la carga en conexiones móviles.

## Resultado

La performance en Lighthouse pasó de **40 a 100**. El sitio indexa en tres idiomas, carga rápido en celular y se puede ampliar sin reescribirlo.
