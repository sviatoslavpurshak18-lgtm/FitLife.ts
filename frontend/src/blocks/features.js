import { esc } from '../utils.js'

function getFeatureIconData(title = '', index = 0) {
  const t = title.toLowerCase()

  if (t.includes('акцент') || t.includes('програм') || t.includes('план') || index % 6 === 0) {
    return {
      boxClass: 'feature-card__icon-box--blue',
      svg: `
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>`,
    }
  }

  if (t.includes('кбжв') || t.includes('калор') || t.includes('харч') || index % 6 === 1) {
    return {
      boxClass: 'feature-card__icon-box--teal',
      svg: `
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
          <path d="M22 12A10 10 0 0 0 12 2v10z"/>
        </svg>`,
    }
  }

  if (t.includes('тривал') || t.includes('час') || t.includes('сесі') || index % 6 === 2) {
    return {
      boxClass: 'feature-card__icon-box--indigo',
      svg: `
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="13" r="8"/>
          <path d="M12 9v4l2 2"/>
          <path d="M10 2h4"/>
          <path d="m18 5 1.5-1.5"/>
        </svg>`,
    }
  }

  if (t.includes('ai') || t.includes('тренер') || t.includes('чат') || index % 6 === 3) {
    return {
      boxClass: 'feature-card__icon-box--cyan',
      svg: `
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <circle cx="9" cy="10" r="1" fill="currentColor"/>
          <circle cx="12" cy="10" r="1" fill="currentColor"/>
          <circle cx="15" cy="10" r="1" fill="currentColor"/>
        </svg>`,
    }
  }

  if (t.includes('травм') || t.includes('безпек') || t.includes('обмежен') || index % 6 === 4) {
    return {
      boxClass: 'feature-card__icon-box--rose',
      svg: `
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>`,
    }
  }

  return {
    boxClass: 'feature-card__icon-box--amber',
    svg: `
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>`,
  }
}

export function features(b = {}) {
  const fallbackItems = [
    {
      title: 'Акцентні програми',
      text: "Гнучка програма від 1 до 6 днів із фокусом на обрану групу м'язів та суворим, грамотним порядком виконання вправ.",
    },
    {
      title: 'Індивідуальне КБЖВ',
      text: 'Автоматичний розрахунок добової норми калорій за формулою Міффліна-Сан Жеора та точна розбивка на білки, жири й вуглеводи під твою мету.',
    },
    {
      title: 'Контроль тривалості сесії',
      text: 'Алгоритм самостійно розраховує відпочинок, добирає підходи та вправи, щоб тренування чітко вкладалося у твій ліміт часу.',
    },
    {
      title: 'AI-Тренер 24/7',
      text: 'Персональний штучний інтелект у чаті допоможе розібратися з технікою вправ та відповість на будь-які фітнес-питання.',
    },
    {
      title: 'Облік обмежень та травм',
      text: 'Розумний алгоритм автоматично виключає травмонебезпечні навантаження на основі твоїх індивідуальних медичних даних.',
    },
    {
      title: 'Історія прогресу',
      text: 'Зберігай і відстежуй зміни своєї ваги, антропометричних даних та попередніх програм тренувань у зручному журналі.',
    },
  ]

  const itemsList = (b.items && b.items.length > 0) ? b.items : fallbackItems

  const cardsHtml = itemsList
    .map((item, idx) => {
      const { boxClass, svg } = getFeatureIconData(item.title, idx)
      return `
        <li class="feature-card">
          <div class="feature-card__icon-box ${boxClass}">
            ${svg}
          </div>
          <h3 class="feature-card__title">${esc(item.title)}</h3>
          <p class="feature-card__text">${esc(item.text)}</p>
        </li>`
    })
    .join('')

  return `
    <section class="section" id="features">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">${esc(b.title || 'Чому FitLife')}</h2>
          <p class="section__subtitle">Сучасні технології та науковий підхід до твоїх щоденних тренувань</p>
        </div>
        <ul class="features-grid">
          ${cardsHtml}
        </ul>
      </div>
    </section>`
}
