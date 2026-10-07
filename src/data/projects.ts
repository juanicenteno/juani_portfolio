// src/data/projects.ts
import type { ImageMetadata } from "astro";
import ayresCalafateImg from "../assets/projects/ayres_calafate.png";
import ayresDoradosImg from "../assets/projects/ayres_dorados.png";
import simplicitySystemsImg from "../assets/projects/simplicity_systems.png";
import aiBriefImg from "../assets/projects/ai_brief_evolved.png";
import projectSnowImg from "../assets/projects/project_snow.png";

export type ProjectCategory = "client" | "personal";

export interface Project {
  id: string;
  category: ProjectCategory;
  img: ImageMetadata;
  name: string;
  description: string;
  highlight?: string;
  technologies: string[];
  github?: string;
  website?: string;
  note?: string;
}

export const getProjects = (t: any): Project[] => [
  {
    id: "ayres-calafate",
    category: "client",
    img: ayresCalafateImg,
    name: t.project_ayresCalafate,
    description: t.project_ayresCalafate_desc,
    highlight: t.project_ayresCalafate_highlight,
    technologies: ["Next.js 15", "React 19", "next-intl", "CSS Modules"],
    github: "https://github.com/juanicenteno/hotel_ayres_calafate_next",
    website: "https://www.ayresdecalafate.com/"
  },
  {
    id: "ayres-dorados",
    category: "client",
    img: ayresDoradosImg,
    name: t.project_ayresDorados,
    description: t.project_ayresDorados_desc,
    technologies: ["Astro", "React", "Embla Carousel", "EmailJS"],
    github: "https://github.com/juanicenteno/ayres_dorados",
    website: "https://www.ayresdorados.com/"
  },
  {
    id: "simplicity-systems",
    category: "client",
    img: simplicitySystemsImg,
    name: t.project_simplicitySystems,
    description: t.project_simplicitySystems_desc,
    highlight: t.project_simplicitySystems_highlight,
    technologies: ["Astro SSR", "React", "React-PDF", "Google Apps Script"],
    github: "https://github.com/juanicenteno/simplicity_systems",
    website: "https://simplicitysystems.vercel.app/"
  },
  {
    id: "ai-brief",
    category: "personal",
    img: aiBriefImg,
    name: t.project_briefAI,
    description: t.project_briefAI_desc,
    highlight: t.project_briefAI_highlight,
    technologies: ["Next.js", "Tailwind", "shadcn/ui", "Node.js", "Express", "MySQL", "Puppeteer", "LLM API"],
    github: "https://github.com/juanicenteno/UI_Assistance_Evolved",
    website: "https://www.briefassist.site/"
  },
  {
    id: "project-snow",
    category: "personal",
    img: projectSnowImg,
    name: t.project_snow,
    description: t.project_snow_desc,
    highlight: t.project_snow_highlight,
    technologies: ["Lua", "FiveM", "QBCore", "ox_lib", "Next.js 16", "Tailwind", "discord.js", "Playwright"],
    website: "https://www.odysseyzombie.xyz"
  }
]
