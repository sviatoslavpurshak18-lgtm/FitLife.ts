import { esc } from '../utils.js'

export function renderFooter(f = {}) {
  const text =
    f.text || 'FitLife — персональні тренування та харчування без зайвої теорії.'
  const email = f.email || 'hello@fitlife.example'
  const copyright = f.copyright || '© 2026 FitLife. Усі права захищено.'

  return `
    <footer class="footer">
      <div class="container footer__inner">
        <div class="footer__brand">
          <a class="logo" href="#top">FitLife<span class="logo__dot">.</span></a>
          <p class="footer__text">${esc(text)}</p>
        </div>
        <div class="footer__meta">
          ${email ? `<a class="footer__email" href="mailto:${esc(email)}">${esc(email)}</a>` : ''}
          <span class="footer__copy">${esc(copyright)}</span>
        </div>
      </div>
    </footer>`
}
