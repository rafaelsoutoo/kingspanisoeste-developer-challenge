import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url(),
});

export type Env = z.infer<typeof envSchema>;