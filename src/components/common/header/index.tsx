import Image from 'next/image'

export default function Header({ color }: { color?: string }) {
  return (
    <header className="fixed top-0 z-30 flex h-11 w-full items-center bg-[#BBD31E] px-3">
      <Image
        src={'/images/tcaeco-logo.png'}
        alt="TCA ECO 学園祭"
        width={200}
        height={13}
      />
    </header>
  )
}
