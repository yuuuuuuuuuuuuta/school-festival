'use client'

import Image from 'next/image'

export default function ProduceLink() {
  return (
    <section className="mx-auto my-8 w-full max-w-2xl text-center">
      {/* 吹き出しテキスト */}
      <div className="animate-pulse-scale relative mb-4 inline-block animate-twitch rounded-xl bg-yellow-300 px-6 py-2 text-sm font-bold text-yellow-900 shadow-md">
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
          src="/images/producer.webp?v=2"
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
