import { z } from 'zod';

const payload = {
  body: z.object({
    user: z.string().trim(),
    title: z.string().trim(),
    price: z.number().positive(),
    description: z.string().trim(),
    category: z.string().trim(),
    image: z.string().trim(),
    amount: z.number().positive().min(0).default(0),
    isFeatured: z.boolean().default(false),
    reviews: z.array(z.string()).default([]),
    rating: z.number().positive().min(0).default(0),
    ratingCount: z.number().positive().min(0).default(0),
  }),
};

const params = {
  params: z.object({
    id: z.string({
      required_error: 'Product id is required',
    }),
  }),
};

export const createProductSchema = z.object({
  ...payload,
});

export const getProductSchema = z.object({
  ...params,
});

export type CreateProductInput = z.TypeOf<typeof createProductSchema>;
export type ReadProductInput = z.TypeOf<typeof getProductSchema>;
