import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artigos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artigos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    cor: z.enum(['yellow', 'teal', 'red', 'orange']).default('teal'),
    categoria: z.string().default('Artigo'),
  }),
});

export const collections = { artigos };
