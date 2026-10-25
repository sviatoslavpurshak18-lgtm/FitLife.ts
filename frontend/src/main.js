import './style.css'
import { fetchCommon, fetchPage } from './api.js'
import { renderHeader } from './layout/header.js'
import { renderFooter } from './layout/footer.js'
import { renderBlocks } from './renderBlocks.js'
import { esc } from './utils.js'

const app = document.getElementById('app')

const DEMO_COMMON = {
  header: {
    logoText: 'FitLife',
    phone: '+380 00 000 00 00',
    nav: [
      { label: 'Переваги', href: '#features' },
      { label: 'Програми', href: '#programs' },
      { label: 'Як це працює', href: '#steps' },
    ],
    ctaLabel: 'Почати',
    ctaHref: '#cta',
  },
  footer: {
    text: 'FitLife — персональні тренування та харчування без зайвої теорії.',
    email: 'hello@fitlife.example',
    copyright: '© 2026 FitLife. Усі права захищено.',
  },
}

const DEMO_PAGE = {
  meta: {
    title: 'FitLife — твій персональний план тренувань і харчування',
    description: 'Вкажи свої параметри — отримай готову програму для залу та точно розраховане КБЖВ за пару кліків.',
  },
  blocks: [
    {
      type: 'hero',
      eyebrow: 'Розумний підбір за формулою Міффліна-Сан Жеора',
      title: 'Твій персональний план тренувань і харчування',
      subtitle:
        'Вкажи свої параметри — отримай готову програму для залу та точно розраховане КБЖВ за пару кліків. Без нудної теорії та зайвих слів.',
      primaryLabel: 'Створити свій план',
      primaryHref: '#cta',
      secondaryLabel: 'Дивитись програми',
      secondaryHref: '#programs',
      imageUrl: '/hero-fitness.jpg',
    },
    {
      type: 'features',
      title: 'Чому FitLife',
      items: [
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
      ],
    },
    {
      type: 'programs',
      title: 'Програми тренувань',
      items: [
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
      ],
    },
    {
      type: 'steps',
      title: 'Як це працює',
      items: [
        { title: 'Заповни анкету', text: 'Вкажи вагу, зріст, вік, ціль та можливі обмеження.' },
        { title: 'Отримай план', text: 'Програма та раціон КБЖВ формуються автоматично.' },
        { title: 'Дій і відстежуй', text: 'Фіксуй тренування та бач свій прогрес щотижня.' },
      ],
    },
    {
      type: 'cta',
      title: 'Готовий почати?',
      text: 'Перший крок — це рішення. Решту розрахунків ми візьмемо на себе.',
      buttonLabel: 'Створити план',
      buttonHref: '#',
    },
  ],
}

function showError(message) {
  app.innerHTML = `
    <div class="error">
      <h1 class="error__title">Щось пішло не так</h1>
      <p class="error__desc">${esc(message)}</p>
      <div style="display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-top:8px;">
        <button class="btn btn--primary" onclick="location.reload()">Спробувати ще раз</button>
        <button class="btn btn--secondary" onclick="window.location.search='?demo=true'">Переглянути демо-макет</button>
      </div>
    </div>`
}

function bindEvents() {
  const burger = document.getElementById('burgerBtn')
  const mobileMenu = document.getElementById('mobileMenu')

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('is-active')
    })

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-active')
      })
    })
  }
}

function renderSite(common, page) {
  document.title = page.meta?.title || 'FitLife'
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', page.meta?.description || '')

  app.innerHTML = `
    ${renderHeader(common.header)}
    <main id="top">${renderBlocks(page.blocks)}</main>
    ${renderFooter(common.footer)}`

  bindEvents()
}

async function init() {
  const isDemo = window.location.search.includes('demo=true')
  if (isDemo) {
    renderSite(DEMO_COMMON, DEMO_PAGE)
    return
  }

  app.innerHTML = `
    <div class="loader">
      <div class="loader__spinner"></div>
      <p>Завантаження FitLife…</p>
    </div>`

  try {
    const path = window.location.pathname || '/'
    const [common, page] = await Promise.all([fetchCommon(), fetchPage(path)])
    renderSite(common, page)
  } catch (err) {
    console.error(err)
    showError('Не вдалося завантажити сторінку. Перевірте з’єднання з CMS.')
  }
}

init()
