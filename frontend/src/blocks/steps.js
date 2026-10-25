import { esc } from '../utils.js'

export function steps(b = {}) {
  const items = (b.items || [])
    .map(
      (s, n) => `
      <li class="step-card">
        <div class="step-card__num">${String(n + 1).padStart(2, '0')}</div>
        <h3 class="step-card__title">${esc(s.title)}</h3>
        <p class="step-card__text">${esc(s.text)}</p>
      </li>`,
    )
    .join('')

  return `
    <section class="section" id="steps">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">${esc(b.title || 'Як це працює')}</h2>
          <p class="section__subtitle">Три прості кроки для старту твоєї трансформації</p>
        </div>
        <ol class="steps-grid">
          ${items}
        </ol>
      </div>
    </section>`
}
