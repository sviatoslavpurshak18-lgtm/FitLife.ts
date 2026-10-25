import { esc, safeHref } from '../utils.js'

export function cta(b = {}) {
  return `
    <section class="cta-section" id="cta">
      <div class="container">
        <div class="cta-box">
          <div class="cta-box__inner">
            <h2 class="cta-box__title">${esc(b.title || 'Готовий почати?')}</h2>
            ${
              b.text
                ? `<p class="cta-box__text">${esc(b.text)}</p>`
                : `<p class="cta-box__text">Перший крок — це рішення. Отримай персональну програму вже сьогодні.</p>`
            }
            <a class="btn btn--primary" href="${safeHref(b.buttonHref || '#')}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
              <span>${esc(b.buttonLabel || 'Створити план')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>`
}
