import type { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  labels: { singular: 'Hero', plural: 'Hero' },
  fields: [
    { name: 'eyebrow', label: 'Надзаголовок', type: 'text' },
    { name: 'title', label: 'Заголовок', type: 'text', required: true },
    { name: 'subtitle', label: 'Підзаголовок', type: 'textarea' },
    { name: 'primaryLabel', label: 'Головна кнопка', type: 'text' },
    { name: 'primaryHref', label: 'Посилання головної кнопки', type: 'text' },
    { name: 'secondaryLabel', label: 'Друга кнопка', type: 'text' },
    { name: 'secondaryHref', label: 'Посилання другої кнопки', type: 'text' },
  ],
}
