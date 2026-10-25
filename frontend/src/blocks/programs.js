import { esc, safeHref } from '../utils.js'

const LEVELS = {
  easy: 'Легка',
  medium: 'Середня',
  hard: 'Складна',
}

const DEFAULT_CONFIGS = [
  {
    name: 'Старт',
    level: 'easy',
    duration: 60,
    description: '1 тренування на тиждень — легко, для підтримки тонусу без перевтоми.',
    points: [
      { text: '1 тренування на тиждень (легко)' },
      { text: 'Базові комфортні вправи' },
    ],
  },
  {
    name: 'Баланс',
    level: 'medium',
    duration: 120,
    description: '2 тренування на тиждень — вже важче, активне навантаження для зростання сили.',
    points: [
      { text: '2 тренування на тиждень (вже важче)' },
      { text: 'Силові блоки + витривалість' },
    ],
  },
  {
    name: 'Максимум',
    level: 'hard',
    duration: 180,
    description: '3 тренування на тиждень — рекомендовано. Більше тренуватись не треба!',
    points: [
      { text: '3 тренування на тиждень (рекомендовано)' },
      { text: 'Більше тренуватись не треба' },
      { text: 'Повний спліт на всі групи м’язів' },
    ],
  },
]

export function programs(b = {}) {
  const rawItems = b.items && b.items.length > 0 ? b.items : DEFAULT_CONFIGS

  const items = rawItems
    .map((p, idx) => {
      const cfg = DEFAULT_CONFIGS[idx] || DEFAULT_CONFIGS[0]

      const targetDurations = [60, 120, 180]
      const duration = targetDurations[idx] || cfg.duration

      const name = p.name || cfg.name
      const level = p.level || cfg.level
      const description = cfg.description
      const points = cfg.points

      const isFeatured = idx === 2
      const btnClass = isFeatured ? 'btn--primary' : 'btn--outline-dark'
      const cardClass = isFeatured
        ? 'program-card program-card--featured'
        : 'program-card'

      return `
      <article class="${cardClass}">
        ${isFeatured ? '<span class="program-card__badge-top">РЕКОМЕНДОВАНО</span>' : ''}
        <div class="program-card__top">
          <span class="level-tag level-tag--${esc(level)}">
            ${esc(LEVELS[level] || level || 'Легка')}
          </span>
          <span class="program-card__time">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            ${esc(duration)} хв / сесія
          </span>
        </div>
        <h3 class="program-card__title">${esc(name)}</h3>
        <p class="program-card__desc">${esc(description)}</p>
        <div class="program-card__points">
          ${points
            .map(
              (pt) => `
            <div class="program-card__point">
              <span class="point-check">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <span>${esc(pt.text)}</span>
            </div>`,
            )
            .join('')}
        </div>
        <a class="btn ${btnClass} btn--full" href="#cta">Обрати програму</a>
      </article>`
    })
    .join('')

  return `
    <section class="section section--alt" id="programs">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">${esc(b.title || 'Програми тренувань')}</h2>
          <p class="section__subtitle">Обирай навантаження відповідно до свого рівня та цілей</p>
        </div>
        <div class="programs-grid">
          ${items}
        </div>
      </div>
    </section>`
}
