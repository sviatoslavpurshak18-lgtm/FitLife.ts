# FitLife — лендінг (Payload CMS + Vite)

Монорепозиторій:

- `cms/` — Payload 3 (TypeScript, Next.js) + PostgreSQL (Neon). Адмінка `/admin`, API `/api/common`, `/api/page?path=`.
- `frontend/` — Vite + Vanilla JS. Один лендінг, блоки рендеряться з JSON.

## Локальний запуск

### 1. CMS
```bash
cd cms
cp .env.example .env      # заповніть DATABASE_URL і PAYLOAD_SECRET
npm install
npm run dev               # http://localhost:3000/admin
```
Секрет: `node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"`

При першому запуску лендінг і футер/хедер наповнюються автоматично (`src/seed.ts`).
Створіть першого користувача в `/admin`, перевірте `http://localhost:3000/api/page?path=/`.

### 2. Frontend
```bash
cd frontend
cp .env.example .env      # VITE_API_URL=http://localhost:3000
npm install
npm run dev               # http://localhost:5173
```

## Деплой (Vercel + Neon)

Два проєкти Vercel з одного GitHub-репозиторію:

| Проєкт | Root Directory | Змінні |
|---|---|---|
| CMS | `cms` | `DATABASE_URL` (pooled Neon), `PAYLOAD_SECRET`, `FRONTEND_URL` (адреса фронтенду, без `/` в кінці) |
| Frontend | `frontend` (Vite, `npm run build`, output `dist`) | `VITE_API_URL` (адреса CMS) |

Після зміни змінних робіть Redeploy. Для production-бази створіть міграції:
`npm run payload -- migrate:create`, потім `npm run payload -- migrate` (з direct-рядком Neon).

## Як додати новий блок
1. `cms/src/blocks/MyBlock.ts` → додати у `blocks` в `collections/Pages.ts`.
2. `frontend/src/blocks/myBlock.js` → зареєструвати в `src/renderBlocks.js`.
3. Стилі — у `frontend/src/style.css`.
