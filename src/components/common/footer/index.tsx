// 共通フッター（ロゴ・連絡先・SNSリンク）を表示

// Next.js の最適化画像コンポーネント
import Image from 'next/image'

// Tailwind クラス名を合成する関数
import { cn } from '@/lib/utils'

// X / Instagram / TikTok アイコン群
import SocialIcons from './social-icons'

// Props: color（背景色）と className（外部からの追加スタイル）
export default function Footer({
  color,
  className,
}: {
  color?: string
  className?: string
}) {
  return (
    <footer
      className={cn(
        'flex flex-col items-center gap-6 bg-theme py-6 text-white',
        className,
      )}
      style={{
        backgroundColor: `${color}ba`,
      }}
    >
      {/* 学校のロゴ画像 */}
      <Image
        src={'/images/tcaeco-logo2.png'}
        alt="TCA ECO 学園祭"
        width={250}
        height={20}
      />

      {/* 学校の連絡先情報 */}
      <p className="text-center text-xs">
        〒134-0088 東京都江戸川区西葛西6-29-9
        <br />
        Mail:info@tcaeco.ac.jp フリーダイヤル:0120-545-556
      </p>

      {/* SNSアイコン（X・Instagram・TikTok） */}
      <SocialIcons />
    </footer>
  )
}
