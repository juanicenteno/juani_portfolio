export type Lang = "es" | "en";

export const getLang = (url: URL): Lang =>
  url.pathname.startsWith("/en") ? "en" : "es";

// Base path for each language: "/" for Spanish, "/en/" for English
export const homePath = (lang: Lang) => (lang === "en" ? "/en/" : "/");

// Same page in the other language: /projects/x/ <-> /en/projects/x/
export const translatePath = (pathname: string, to: Lang) => {
  const esPath = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return to === "en" ? `/en${esPath === "/" ? "/" : esPath}` : esPath;
};

export const projectPath = (lang: Lang, slug: string) =>
  `${lang === "en" ? "/en" : ""}/projects/${slug}/`;
