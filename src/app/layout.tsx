// グローバルCSSを読み込み（Tailwindやテーマ変数を含む）
import './globals.css'

import type { Metadata } from 'next'
// Google Fonts（Inter: 英字用, Noto Sans JP: 日本語用）
import { Inter, Noto_Sans_JP } from 'next/font/google'

// クラス名を安全に合成する関数（clsx + tailwind-merge）
import { cn } from '@/lib/utils'

// Inter と Noto Sans JP を読み込み（それぞれ className を取得可能）
const inter = Inter({ subsets: ['latin'] })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

// メタデータ：ブラウザのタイトルや説明文として使用される
export const metadata: Metadata = {
  title: {
    default: 'TCA ECO 学園祭',
    template: '%s | TCA ECO 学園祭', // 各ページのタイトルを「[ページ名] | TCA ECO 学園祭」の形式に
  },
  description: 'TCA ECO 学園祭',
}

// すべてのページの共通HTML構造
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
