---
title: "aiBrief | Asistente de branding con IA"
summary: "Aplicación full stack que convierte una idea de negocio en un brief de marca completo, con logo y mockups generados por IA y exportación a PDF."
category: personal
order: 4
image: ../../../assets/projects/ai_brief_evolved.png
highlight: "Full stack + IA"
role: "Producto propio: diseño, frontend y backend"
technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind", "shadcn/ui", "Node.js", "Express", "MySQL", "Puppeteer", "Handlebars"]
github: "https://github.com/juanicenteno/UI_Assistance_Evolved"
website: "https://www.briefassist.site/"
---

## El desafío

Muchos clientes llegaban a un proyecto web sin material de referencia: sin paleta, sin tipografías, sin una idea clara de su público. Armar ese punto de partida llevaba reuniones y tiempo. Quise automatizar ese primer paso.

## Qué hice

Una aplicación que, a partir de una idea de negocio y el tono de marca, genera:

- **Un brief estratégico**: nombre, descripción, paleta de colores, tipografías sugeridas y un *user persona* detallado, generados con un modelo de lenguaje.
- **Logo y mockups** creados con modelos de generación de imágenes (FLUX).
- **Un chat de refinamiento** para ajustar secciones del brief en lenguaje natural, sin perder el logo ni los mockups ya generados.
- **Exportación a PDF** lista para imprimir o presentar.
- **Historial local** de los briefs consultados, en la sección "Mis Briefs".

## Decisiones técnicas

- **Frontend y backend separados.** Next.js 16 con App Router, Tailwind y shadcn/ui en el frontend; Express con MySQL en el backend.
- **Generación de imágenes en segundo plano.** El backend responde con el brief apenas está listo y genera el logo y los mockups de forma asíncrona, para que el usuario no espere mirando una pantalla de carga.
- **PDF con Puppeteer y Handlebars.** El brief se compila en una plantilla HTML y se renderiza con un navegador headless, así el PDF queda idéntico al diseño.

## Resultado

Un brief de marca completo en minutos, a partir de una idea en una línea. La aplicación está [online](https://www.briefassist.site/) y se puede probar sin registrarse.
