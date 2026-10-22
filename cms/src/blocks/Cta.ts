import type { Block } from 'payload'

export const Cta: Block = {
  slug: 'cta',
  labels: { singular: 'Заклик до дії', plural: 'Заклики до дії' },
  fields: [
    { name: 'title', label: 'Заголовок', type: 'text', required: true },
    { name: 'text', label: 'Текст', type: 'textarea' },
    { name: 'buttonLabel', label: 'Текст кнопки', type: 'text' },
    { name: 'buttonHref', label: 'Посилання кнопки', type: 'text' },
  ],
}
