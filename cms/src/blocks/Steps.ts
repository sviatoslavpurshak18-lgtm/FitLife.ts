import type { Block } from 'payload'

export const Steps: Block = {
  slug: 'steps',
  labels: { singular: 'Кроки', plural: 'Кроки' },
  fields: [
    { name: 'title', label: 'Заголовок секції', type: 'text', required: true },
    {
      name: 'items',
      label: 'Кроки',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'title', label: 'Назва', type: 'text', required: true },
        { name: 'text', label: 'Опис', type: 'textarea' },
      ],
    },
  ],
}
