// 全ページ共通の固定ヘッダーコンポーネント

import Image from 'next/image' // Next.js の最適化画像
import Link from 'next/link' // クライアントサイド遷移リンク

import { cn } from '@/lib/utils' // Tailwindクラスを合成する補助関数

// props: 背景色（color）とクラス名（className）を外部から指定可能
export default function Header({
  color,
  className,
}: {
  color?: string
  className?: string
}) {
  return (
    <header
      className={cn(
        'fixed top-0 z-30 flex w-full items-center bg-theme p-3',
        className,
      )}
      style={{
        backgroundColor: `${color}`,
      }}
    >
      {/* ロゴをクリックするとホームに戻る */}
      <Link href="/">
        <Image
          src={'/images/tcaeco-logo.png'}
          alt="TCA ECO 学園祭"
          width={200}
          height={13}
        />
      </Link>
    </header>
  )
}
