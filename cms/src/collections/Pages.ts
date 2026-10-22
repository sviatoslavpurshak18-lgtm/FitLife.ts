import type { CollectionConfig } from 'payload'
import { Hero } from '../blocks/Hero'
import { Features } from '../blocks/Features'
import { Programs } from '../blocks/Programs'
import { Steps } from '../blocks/Steps'
import { Cta } from '../blocks/Cta'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Сторінка', plural: 'Сторінки' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'path'] },
  access: { read: () => true },
  fields: [
    { name: 'title', label: 'Назва', type: 'text', required: true },
    {
      name: 'path',
      label: 'Шлях (URL)',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      defaultValue: '/',
      admin: { description: 'Для лендінгу: /' },
    },
    { name: 'metaTitle', label: 'Meta title', type: 'text' },
    { name: 'metaDescription', label: 'Meta description', type: 'textarea' },
    {
      name: 'blocks',
      label: 'Блоки сторінки',
      type: 'blocks',
      blocks: [Hero, Features, Programs, Steps, Cta],
    },
  ],
}
