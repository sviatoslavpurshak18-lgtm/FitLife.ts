import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { Users } from './collections/Users'
import { Pages } from './collections/Pages'
import { SiteSettings } from './globals/SiteSettings'
import { commonEndpoint } from './endpoints/common'
import { pageEndpoint } from './endpoints/page'
import { seed } from './seed'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const origins = [process.env.FRONTEND_URL, 'http://localhost:5173'].filter(
  (v): v is string => Boolean(v),
)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
  },
  collections: [Users, Pages],
  globals: [SiteSettings],
  endpoints: [commonEndpoint, pageEndpoint],
  cors: origins,
  csrf: origins,
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL },
  }),
  onInit: async (payload) => {
    try {
      await seed(payload)
    } catch (err) {
      payload.logger.warn(`Seed пропущено: ${(err as Error).message}`)
    }
  },
})
