---
title: "Ayres Dorados | Lodge Hotel"
summary: "Sitio para un lodge en Sierra Grande, Río Negro, hecho desde cero con Astro y React: diseño, desarrollo e integración del motor de reservas."
category: client
order: 2
image: ../../../assets/projects/ayres_dorados.png
role: "Diseño, desarrollo e integración del motor de reservas"
technologies: ["Astro", "React", "Embla Carousel", "EmailJS"]
github: "https://github.com/juanicenteno/ayres_dorados"
website: "https://www.ayresdorados.com/"
---

## El desafío

Ayres Dorados es un lodge en Sierra Grande, cerca de Playas Doradas. Necesitaba un sitio propio que mostrara las habitaciones y el restaurante, y que permitiera reservar directo, sin depender solo de las plataformas de terceros.

## Qué hice

Hice el sitio desde cero: diseño, desarrollo e integración del motor de reservas.

- Diseño completo de la interfaz, con secciones de habitaciones, restaurante, galería y contacto.
- **Buscador de reservas propio** en React: valida fechas y cantidad de huéspedes y abre el portal de reservas del hotel con la búsqueda ya armada.
- **Galería con lightbox y carruseles** para mostrar el lodge sin cargar todas las imágenes de entrada.
- **Formulario de contacto** con EmailJS y avisos de confirmación.

## Decisiones técnicas

- **Astro como base.** La mayor parte del sitio es contenido estático, así que Astro lo sirve como HTML puro en el primer render.
- **Islas de React solo donde hace falta.** El buscador de reservas, la galería y el carrusel son componentes interactivos; el resto no carga JavaScript.
- **Pensado para celular primero.** Es donde el turista busca alojamiento, y donde la velocidad decide si reserva o se va.

## Resultado

Un sitio liviano y rápido en conexiones móviles, con un camino directo a la reserva. Además, fue la base para [Simplicity Systems](/projects/simplicity-systems/), el sistema que hoy usa la recepción del lodge.
