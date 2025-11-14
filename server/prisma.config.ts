import { config } from 'dotenv';
import { resolve } from 'path';
import { defineConfig, env } from 'prisma/config';

// Load environment variables from .env file
// Check multiple possible locations for .env file
const envPaths = [
  resolve(process.cwd(), 'server', '.env'), // When running from project root
  resolve(process.cwd(), '.env'), // When running from server directory
];

// Try to load .env from any of the possible locations
let loaded = false;
for (const envPath of envPaths) {
  const result = config({ path: envPath });
  if (!result.error) {
    loaded = true;
    break;
  }
}

// Fallback: try default location (current working directory)
if (!loaded) {
  config();
}

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  engine: 'classic',
  datasource: {
    url: env('DATABASE_URL'),
  },
});
