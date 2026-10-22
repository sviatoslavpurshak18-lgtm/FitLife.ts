import React from 'react'

export const metadata = { title: 'FitLife CMS' }

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  )
}
