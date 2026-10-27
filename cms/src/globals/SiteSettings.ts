import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Налаштування сайту',
  access: {
  read: () => true,
  update: () => true, 
},
  fields: [
    {
      name: 'header',
      label: 'Хедер',
      type: 'group',
      fields: [
        { name: 'logoText', label: 'Назва бренду', type: 'text', defaultValue: 'FitLife' },
        { name: 'phone', label: 'Телефон', type: 'text' },
        {
          name: 'nav',
          label: 'Меню',
          type: 'array',
          fields: [
            { name: 'label', label: 'Текст', type: 'text', required: true },
            { name: 'href', label: 'Посилання', type: 'text', required: true },
          ],
        },
        { name: 'ctaLabel', label: 'Текст кнопки', type: 'text' },
        { name: 'ctaHref', label: 'Посилання кнопки', type: 'text' },
      ],
    },
    {
      name: 'footer',
      label: 'Футер',
      type: 'group',
      fields: [
        { name: 'text', label: 'Короткий опис', type: 'textarea' },
        { name: 'email', label: 'Email', type: 'text' },
        { name: 'copyright', label: 'Копірайт', type: 'text' },
      ],
    },
  ],
}
