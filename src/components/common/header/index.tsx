import Image from 'next/image'

import { cn } from '@/lib/utils'

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
      <Image
        src={'/images/tcaeco-logo.png'}
        alt="TCA ECO 学園祭"
        width={200}
        height={13}
      />
    </header>
  )
}
