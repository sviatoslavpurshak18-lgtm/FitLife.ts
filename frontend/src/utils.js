export function esc(value = '') {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}


export function safeHref(href = '#') {
  const v = String(href).trim()
  return /^(https?:|mailto:|tel:|#|\/)/i.test(v) ? esc(v) : '#'
}
