import { slugifyAll } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getPapersByTag = (papers: CollectionEntry<"papers">[], tag: string) =>
  papers.filter(paper => slugifyAll(paper.data.tags).includes(tag));

export default getPapersByTag;
