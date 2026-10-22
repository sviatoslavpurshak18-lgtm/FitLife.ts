import type { Block } from 'payload'

export const Programs: Block = {
  slug: 'programs',
  labels: { singular: 'Програми', plural: 'Програми' },
  fields: [
    { name: 'title', label: 'Заголовок секції', type: 'text', required: true },
    {
      name: 'items',
      label: 'Програми',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'name', label: 'Назва', type: 'text', required: true },
        {
          name: 'level',
          label: 'Складність',
          type: 'select',
          required: true,
          defaultValue: 'easy',
          options: [
            { label: 'Легка', value: 'easy' },
            { label: 'Середня', value: 'medium' },
            { label: 'Складна', value: 'hard' },
          ],
        },
        { name: 'duration', label: 'Тривалість, хв', type: 'number', required: true },
        { name: 'description', label: 'Опис', type: 'textarea' },
        {
          name: 'points',
          label: 'Що входить',
          type: 'array',
          fields: [{ name: 'text', label: 'Пункт', type: 'text', required: true }],
        },
      ],
    },
  ],
}
