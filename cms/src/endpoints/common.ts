import type { Endpoint } from 'payload'
import { clean } from './flatten'

export const commonEndpoint: Endpoint = {
  path: '/common',
  method: 'get',
  handler: async (req) => {
    try {
      const settings = await req.payload.findGlobal({ slug: 'site-settings', depth: 0 })
      return Response.json({
        header: clean(settings.header ?? {}),
        footer: clean(settings.footer ?? {}),
      })
    } catch (err) {
      req.payload.logger.error(err)
      return Response.json({ error: 'Не вдалося отримати налаштування' }, { status: 500 })
    }
  },
}
