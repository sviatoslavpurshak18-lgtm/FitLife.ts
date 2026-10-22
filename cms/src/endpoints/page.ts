import type { Endpoint } from 'payload'
import { flattenBlock } from './flatten'

export const pageEndpoint: Endpoint = {
  path: '/page',
  method: 'get',
  handler: async (req) => {
    const path = req.searchParams?.get('path') || '/'
    try {
      const result = await req.payload.find({
        collection: 'pages',
        where: { path: { equals: path } },
        limit: 1,
        depth: 0,
      })
      const page = result.docs[0]
      if (!page) return Response.json({ error: 'Сторінку не знайдено' }, { status: 404 })

      return Response.json({
        meta: {
          title: page.metaTitle || page.title,
          description: page.metaDescription || '',
        },
        blocks: (page.blocks ?? []).map((b) => flattenBlock(b as Record<string, unknown>)),
      })
    } catch (err) {
      req.payload.logger.error(err)
      return Response.json({ error: 'Помилка сервера' }, { status: 500 })
    }
  },
}
