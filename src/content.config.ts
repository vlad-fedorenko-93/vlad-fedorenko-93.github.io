import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define Collection
const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/posts' }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    thumbnail: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/portfolio' }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    thumbnail: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    year: z.date().optional(),
    demo: z.string().optional(),
  }),
});

// Export Collections
export const collections = { posts, portfolio };
