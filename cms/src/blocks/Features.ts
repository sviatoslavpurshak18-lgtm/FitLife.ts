import type { Block } from 'payload'

export const Features: Block = {
  slug: 'features',
  labels: { singular: 'Переваги', plural: 'Переваги' },
  fields: [
    { name: 'title', label: 'Заголовок секції', type: 'text', required: true },
    {
      name: 'items',
      label: 'Пункти',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'title', label: 'Назва', type: 'text', required: true },
        { name: 'text', label: 'Опис', type: 'textarea' },
      ],
    },
  ],
}
