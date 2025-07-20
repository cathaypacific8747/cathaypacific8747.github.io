import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const papers = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string().default(SITE.author),
    pubDatetime: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    description: z.string(),
    canonicalURL: z.string().optional(),
  }),
});

export const collections = { papers };
