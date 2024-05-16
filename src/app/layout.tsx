import './globals.css'

import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'

import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'TCA ECO 学園祭',
    template: '%s | TCA ECO 学園祭',
  },
  description: 'TCA ECO 学園祭',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={cn(notoSansJP.className, inter.className)}>
        {children}
      </body>
    </html>
  )
}
