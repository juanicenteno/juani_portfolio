---
title: "Project Snow | Servidor FiveM"
summary: "Servidor de rol de supervivencia post-apocalíptica sobre QBCore, con 16 scripts propios en Lua y web oficial en Next.js 16."
category: personal
order: 5
image: ../../../assets/projects/project_snow.png
highlight: "16 scripts propios en Lua"
role: "Desarrollo de sistemas de juego y web"
technologies: ["Lua", "FiveM", "QBCore", "ox_lib", "Next.js 16", "Tailwind", "discord.js", "Playwright", "Lighthouse"]
website: "https://www.odysseyzombie.xyz"
---

## El desafío

Project Snow (Odyssey Zombie RP) es un servidor de rol para GTA V, ambientado en un invierno post-apocalíptico con nieve radioactiva. Los recursos disponibles para FiveM no cubrían la supervivencia que quería: frío que realmente afecte al jugador, enfermedades que avancen con el tiempo y eventos que obliguen a moverse por el mapa.

## Qué hice

Escribí en Lua **16 scripts propios** sobre QBCore. Los principales:

- **Núcleo de supervivencia** (`jx-survival-core`): temperatura corporal según el clima, la ropa y las fuentes de calor; zonas de radiación con efectos visuales; infección zombi por etapas, curable con antídotos.
- **Enfermedades** (`jx-illness`): resfriado, fiebre y pulmonía que progresan por etapas, con temblor de cámara, pérdida de estamina e intoxicación alimentaria.
- **Eventos dinámicos** (`juanix_meteorite`): caída de meteoritos sincronizada para todos los jugadores, que crea zonas de peligro con botín.
- **Economía y progresión**: caza, crafteo en grilla, hornos de fundición, generación de electricidad para refugios y misiones diarias.

También desarrollé la **web oficial** del servidor.

## Decisiones técnicas

- **Lógica dividida entre cliente y servidor.** El servidor sincroniza los eventos y estados que comparten todos los jugadores, como los meteoritos, y el cliente se ocupa de los efectos visuales y de la interfaz.
- **Configuración separada del código.** Los valores de balance (temperaturas, tiempos, daño) viven en archivos `config.lua`, para ajustarlos sin tocar la lógica.
- **Web en Next.js 16** con Tailwind y shadcn/ui, más un **bot de Discord** con discord.js para la comunidad.
- **Auditorías automáticas de performance** con Lighthouse y Playwright, que capturan la web en varios tamaños de pantalla y comparan los resultados antes y después de cada cambio.

## Resultado

Un servidor con sistemas de supervivencia hechos a medida, integrados con recursos de la comunidad como el inventario y las hordas zombi, y una web lista para el lanzamiento. Es el proyecto donde más practiqué el diseño de sistemas y la sincronización entre cliente y servidor.
