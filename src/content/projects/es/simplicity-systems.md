---
title: "Simplicity Systems | Herramientas internas"
summary: "Sistema de gestión que usa a diario la recepción de Ayres Dorados para cargar reservas, controlar la disponibilidad y generar vouchers en PDF."
category: client
order: 3
image: ../../../assets/projects/simplicity_systems.png
highlight: "En uso en Ayres Dorados"
role: "Diseño y desarrollo completo"
technologies: ["Astro SSR", "React 19", "React-PDF", "Google Sheets", "Apps Script"]
github: "https://github.com/juanicenteno/simplicity_systems"
website: "https://simplicitysystems.vercel.app/"
---

## El desafío

La recepción de Ayres Dorados necesitaba una forma simple de cargar reservas, saber qué había disponible y entregar vouchers prolijos a los huéspedes, sin pagar un sistema hotelero completo.

## Qué hice

Diseñé y desarrollé una suite de herramientas internas, separada del sitio público del hotel. Hoy la recepción la usa a diario para:

- **Cargar reservas** desde un formulario rápido, con validación de fechas y capacidad en tiempo real.
- **Controlar la disponibilidad**: las reservas quedan en una planilla de Google Sheets que el hotel puede consultar y editar.
- **Generar vouchers en PDF** con los datos del huésped, el desglose de servicios, los anticipos y las fechas, listos para imprimir o mandar por WhatsApp o mail.

## Decisiones técnicas

- **Google Sheets como base de datos.** Las reservas se envían a la planilla con un webhook de Google Apps Script. Sin servidor de base de datos, sin costo fijo y con datos que el hotel puede abrir y editar.
- **PDF generado en el navegador** con `@react-pdf/renderer`: el voucher se arma con vista previa en vivo mientras se completa el formulario y se descarga en A4 sin pasar por un servidor.
- **Separado del sitio público.** Las herramientas operativas no suman peso ni riesgo a la web que ven los turistas.
- **Modo demo.** La versión pública simula todo el flujo sin tocar datos reales, así cualquiera la puede probar.

## Resultado

La recepción de Ayres Dorados lo usa todos los días para reservas, disponibilidad y vouchers, sin costos fijos de software. La [demo pública](https://simplicitysystems.vercel.app/) muestra el mismo flujo con datos de ejemplo.
