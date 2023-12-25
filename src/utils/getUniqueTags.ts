import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getUniqueTags = (papers: CollectionEntry<"papers">[]) => {
  const filteredPapers = papers.filter(({ data }) => !data.draft);
  const tags: string[] = filteredPapers
    .flatMap(paper => paper.data.tags)
    .map(tag => slugifyStr(tag))
    .filter(
      (value: string, index: number, self: string[]) =>
        self.indexOf(value) === index
    )
    .sort((tagA: string, tagB: string) => tagA.localeCompare(tagB));
  return tags;
};

export default getUniqueTags;