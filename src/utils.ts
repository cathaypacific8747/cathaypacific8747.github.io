import type { CollectionEntry } from "astro:content";
import { slug as slugger } from "github-slugger";

export const getSortedPapers = (papers: CollectionEntry<"papers">[]) =>
  papers.sort(
    (a, b) =>
      new Date(b.data.pubDatetime).getTime() -
      new Date(a.data.pubDatetime).getTime()
  );

export const slugifyStr = (str: string) => slugger(str);

export const slugify = (paper: CollectionEntry<"papers">["data"]) =>
  paper.postSlug ? slugger(paper.postSlug) : slugger(paper.title);
