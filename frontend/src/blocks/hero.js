import { esc, safeHref } from '../utils.js'

export function hero(b = {}) {
  const eyebrowText = b.eyebrow || 'Розумний підбір за формулою Міффліна-Сан Жеора'
  const titleText = b.title || 'Твій персональний план тренувань і харчування'
  const subtitleText =
    b.subtitle ||
    'Вкажи свої параметри — отримай готову програму для залу та точно розраховане КБЖВ за пару кліків. Без нудної теорії та зайвих слів.'
  const primaryLabel = b.primaryLabel || 'Створити свій план'
  const secondaryLabel = b.secondaryLabel || 'Дивитись програми'
  const imageUrl = b.imageUrl || '/hero-fitness.jpg'

  return `
    <section class="hero" id="hero">
      <div class="container">
        <div class="hero__grid">
          <div class="hero__content">
            <div class="hero__eyebrow">
              <span class="eyebrow__sparkle">✦</span>
              <span>${esc(eyebrowText)}</span>
            </div>
            <h1 class="hero__title">${esc(titleText)}</h1>
            <p class="hero__subtitle">${esc(subtitleText)}</p>
            <div class="hero__actions">
              <a class="btn btn--primary" href="${safeHref(b.primaryHref || '#cta')}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6.05 11a22.35 22.35 0 0 1-3.95 2z"/>
                  <path d="M9 12H4s.55-3.03 2-4.5c1.45-1.47 4.5-2 4.5-2"/>
                  <path d="M12 9V4s3.03.55 4.5 2c1.47 1.45 2 4.5 2 4.5"/>
                </svg>
                <span>${esc(primaryLabel)}</span>
              </a>
              <a class="btn btn--secondary" href="${safeHref(b.secondaryHref || '#programs')}">
                ${esc(secondaryLabel)}
              </a>
            </div>
          </div>
          <div class="hero__media">
            <div class="hero__image-wrap">
              <img src="${esc(imageUrl)}" alt="FitLife тренування в залі" class="hero__image" />
            </div>
            <div class="hero__floating-badge">
              <div class="floating-badge__icon">🎯</div>
              <div class="floating-badge__text">
                <strong>Індивідуальний підбір</strong>
                <span>Тренування + КБЖВ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`
}
