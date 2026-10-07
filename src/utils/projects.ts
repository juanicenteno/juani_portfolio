import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "./i18n";

export type ProjectEntry = CollectionEntry<"projects">;

// Entry ids look like "es/ayres-calafate"; the slug is the part after the language
export const getSlug = (entry: ProjectEntry) => entry.id.split("/")[1];

export const getProjects = async (lang: Lang) =>
  (await getCollection("projects", (entry) => entry.id.startsWith(`${lang}/`)))
    .sort((a, b) => a.data.order - b.data.order);
