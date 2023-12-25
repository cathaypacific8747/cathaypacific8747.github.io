import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForPaper } from "@utils/generateOgImages";
import { slugifyStr } from "@utils/slugify";

export async function getStaticPaths() {
  const papers = await getCollection("papers").then(p =>
    p.filter(({ data }) => !data.draft && !data.ogImage)
  );

  return papers.map(paper => ({
    params: { slug: slugifyStr(paper.data.title) },
    props: paper,
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await generateOgImageForPaper(props as CollectionEntry<"papers">), {
    headers: { "Content-Type": "image/png" },
  });
