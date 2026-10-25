import { esc, safeHref } from '../utils.js'

export function renderHeader(h = {}) {
  const nav = (h.nav || [])
    .map((i) => `<a class="header__link" href="${safeHref(i.href)}">${esc(i.label)}</a>`)
    .join('')

  const phone = h.phone
    ? `<a class="header__phone" href="tel:${esc(h.phone.replace(/[^+\d]/g, ''))}">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span>${esc(h.phone)}</span>
      </a>`
    : ''

  const loginBtn = `<a class="btn btn--ghost btn--small" href="#login">Увійти</a>`
  const ctaBtn = `<a class="btn btn--primary btn--small" href="${safeHref(h.ctaHref || '#cta')}">${esc(h.ctaLabel || 'Почати')}</a>`

  return `
    <header class="header">
      <div class="container header__inner">
        <a class="logo" href="#top">
          ${esc(h.logoText || 'FitLife')}<span class="logo__dot">.</span>
        </a>
        <nav class="header__nav">${nav}</nav>
        <div class="header__right">
          ${phone}
          ${loginBtn}
          ${ctaBtn}
          <button class="header__burger" id="burgerBtn" aria-label="Меню" type="button">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div class="header__mobile-menu" id="mobileMenu">
        <div class="container">
          <nav class="mobile-nav">
            ${nav}
            ${phone}
            <div class="mobile-nav__actions">
              ${loginBtn}
              ${ctaBtn}
            </div>
          </nav>
        </div>
      </div>
    </header>`
}
