// src/data/projects.ts
export const getProjects = (t: any) => [
  {
    id: "1",
    img: "/brief_ai.png",
    name: t.project_briefAI,
    description: t.project_briefAI_desc,
    technologies: ["Node.js", "React.js", "HTML & CSS"],
    github: "https://github.com/juanicenteno/UI_Brief_Assistance",
    website: "https://briefassist.site/"
  },
  {
    id: "2",
    img: "/ayres_laptop.png",
    name: t.project_ayresCalafate,
    description: t.project_ayresCalafate_desc,
    technologies: ["Next.js", "HTML & CSS"],
    github: "https://github.com/juanicenteno/hotel_ayres_calafate_next",
    website: "https://www.ayresdecalafate.com/"
  },
  {
    id: "3",
    img: "/dorados_laptop.png",
    name: t.project_ayresDorados,
    description: t.project_ayresDorados_desc,
    technologies: ["Astro", "React.js", "HTML & CSS"],
    github: "https://github.com/juanicenteno/ayres_dorados",
    website: "https://www.ayresdorados.com/"
  },
  {
    id: "4",
    img: "/simplicity_laptop.png",
    name: t.project_simplicity,
    description: t.project_simplicity_desc,
    technologies: ["React.js", "Framer Motion", "HTML & CSS"],
    github: "https://github.com/juanicenteno/simplicitySoftware--site",
    website: "https://www.simplicitysoftware.site/"
  }
]