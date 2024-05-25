import Image from 'next/image'

import { cn } from '@/lib/utils'

import SocialIcons from './social-icons'

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
      <Image
        src={'/images/tcaeco-logo2.png'}
        alt="TCA ECO 学園祭"
        width={250}
        height={20}
      />
      <p className="text-center text-xs">
        〒134-0088 東京都江戸川区西葛西6-29-9
        <br />
        Mail:info@tcaeco.ac.jp フリーダイヤル:0120-545-556
      </p>
      <SocialIcons />
    </footer>
  )
}
