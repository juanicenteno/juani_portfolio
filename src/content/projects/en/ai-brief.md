---
title: "aiBrief | AI branding assistant"
summary: "A full stack app that turns a business idea into a complete brand brief, with an AI-generated logo and mockups and PDF export."
category: personal
order: 4
image: ../../../assets/projects/ai_brief_evolved.png
highlight: "Full stack + AI"
role: "Own product: design, frontend and backend"
technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind", "shadcn/ui", "Node.js", "Express", "MySQL", "Puppeteer", "Handlebars"]
github: "https://github.com/juanicenteno/UI_Assistance_Evolved"
website: "https://www.briefassist.site/"
---

## The challenge

Many clients came to a web project without reference material: no palette, no typography, no clear idea of their audience. Building that starting point took meetings and time. I wanted to automate that first step.

## What I did

An app that takes a business idea and a brand tone and generates:

- **A strategic brief**: name, description, color palette, suggested typography and a detailed *user persona*, generated with a language model.
- **Logo and mockups** created with image generation models (FLUX).
- **A refinement chat** to adjust sections of the brief in natural language, keeping the generated logo and mockups intact.
- **PDF export** ready to print or present.
- **Local history** of viewed briefs, under "My Briefs".

## Technical decisions

- **Separate frontend and backend.** Next.js 16 with the App Router, Tailwind and shadcn/ui on the frontend; Express with MySQL on the backend.
- **Background image generation.** The backend returns the brief as soon as it's ready and generates the logo and mockups asynchronously, so users aren't stuck staring at a loading screen.
- **PDF with Puppeteer and Handlebars.** The brief is compiled into an HTML template and rendered with a headless browser, so the PDF matches the design exactly.

## Result

A complete brand brief in minutes, from a one-line idea. The app is [live](https://www.briefassist.site/) and can be tried without signing up.
