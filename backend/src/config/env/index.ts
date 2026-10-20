import 'dotenv/config';
import { envSchema, type Env } from './env.dto.js';

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error('Invalid environment variables');
}

export const env: Env = parsed.data;