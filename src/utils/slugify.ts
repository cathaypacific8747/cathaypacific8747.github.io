import { slug as slugger } from "github-slugger";
import type { CollectionEntry } from "astro:content";

export const slugifyStr = (str: string) => slugger(str);

const slugify = (paper: CollectionEntry<"papers">["data"]) =>
  paper.postSlug ? slugger(paper.postSlug) : slugger(paper.title);

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));

export default slugify;
