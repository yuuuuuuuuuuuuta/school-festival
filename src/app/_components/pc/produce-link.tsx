'use client'

import Image from 'next/image'

export default function ProduceLink() {
  const onClick = () => {
    window.open(
      'https://docs.google.com/forms/d/1Fsi_qbcPgAJ4Svq9vHYbR13YcikfQYJsiTiYpLHMu4c/viewform?edit_requested=true',
      '_blank',
    )
  }

  return (
    <section className="mx-auto my-8 w-full max-w-2xl text-center">
      {/* 吹き出しテキスト */}
      <div
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onClick()
        }}
        className="animate-pulse-scale relative mb-4 inline-block animate-twitch cursor-pointer rounded-xl bg-yellow-300 px-6 py-2 text-sm font-bold text-yellow-900 shadow-md transition hover:animate-shake hover:bg-yellow-400"
      >
        ここをタッチして
        <br />
        ぜひアンケートにご協力ください！！
        {/* 三角形 */}
        <div
          className="
            absolute 
            bottom-0 
            left-4
            z-10 
            h-0 
            w-0 
            translate-y-full border-l-[12px] border-r-[12px] 
            border-t-[12px] border-l-transparent border-r-transparent
            border-t-yellow-300
          "
        />
      </div>

      {/* 製作者紹介画像 */}
      <div className="mx-auto w-11/12 max-w-md overflow-hidden rounded-lg shadow-lg">
        <Image
          src="/images/producer.jpg"
          alt="製作者紹介"
          width={600}
          height={400}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </section>
  )
}
