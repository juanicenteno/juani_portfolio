import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// One Markdown file per project and language: src/content/projects/{es|en}/{slug}.md
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.enum(["client", "personal"]),
      order: z.number(),
      featured: z.boolean().default(false),
      image: image(),
      highlight: z.string().optional(),
      role: z.string(),
      technologies: z.array(z.string()),
      github: z.string().url().optional(),
      website: z.string().url().optional(),
    }),
});

export const collections = { projects };
