import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: './src/db/schemas.ts',
  out: 'src/db/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
