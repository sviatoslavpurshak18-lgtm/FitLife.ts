const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000').replace(/\/$/, '')

async function getJson(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

export const fetchCommon = () => getJson(`${API_URL}/api/common`)

export const fetchPage = (path) =>
  getJson(`${API_URL}/api/page?path=${encodeURIComponent(path)}`)
