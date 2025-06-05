'use client'

import Image from 'next/image'
import { useEffect,useRef, useState } from 'react'

import SocialIcons from '@/components/common/footer/social-icons'
import Header from '@/components/common/header'
import type { Building } from '@/lib/definitions'

import PcHomeFloorList from './floor-list'
import MajorTree from './major-tree'

export default function PcHomePage({
  buildings,
}: {
  buildings: Omit<Building, 'floors'>[]
}) {
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)
  const centralRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setIsScrolling(true)
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false)
    }, 150)
  }

  useEffect(() => {
    const el = centralRef.current
    if (el) {
      el.addEventListener('scroll', handleScroll)
      return () => {
        el.removeEventListener('scroll', handleScroll)
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
      }
    }
  }, [])

  const [activeTab, setActiveTab] = useState<'フロアマップ' | '専攻紹介'>(
    'フロアマップ',
  )

  const handleSurveyClick = () => {
    window.open(
      'https://docs.google.com/forms/d/1Fsi_qbcPgAJ4Svq9vHYbR13YcikfQYJsiTiYpLHMu4c/viewform?edit_requested=true',
      '_blank',
    )
  }

  return (
    // md以上(768px以上)でのみレンダリングされる３カラムレイアウト
    <article className="hidden h-dvh overflow-hidden md:block">
      <main className="flex h-dvh">
        {/* ─────────────── 左カラム ─────────────── */}
        <div
          className={`
            /* 左右をスクロール可能にしつつバーを非表示 */ flex
            flex-[1] flex-col justify-between
          `}
        >
          <Header className="static justify-center" />

          <div className="hide-scrollbar h-pcContent w-full overflow-y-scroll px-2.5">
            <div className="flex flex-col gap-6">
              {/* 画像1 */}
              <div className="w-full">
                <Image
                  src={'/images/hiro.webp'}
                  alt="サイド画像1"
                  width={400}
                  height={600}
                  className="h-auto w-full object-contain"
                />
              </div>
              {/* 画像2 */}
              <div className="w-full">
                <Image
                  src={'/images/map.webp'}
                  alt="サイド画像2"
                  width={400}
                  height={600}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex h-32 items-center justify-center bg-theme">
            <SocialIcons />
          </div>
        </div>

        {/* ─────────────── 中央カラム ─────────────── */}
        <div
          ref={centralRef}
          className="flex flex-[2] flex-col items-center overflow-y-scroll px-8 pb-6 pt-10"
        >
          {/* タブボタン群 */}
          <div className="mb-6 flex flex-wrap justify-center gap-6">
            {['フロアマップ', '専攻紹介'].map((label) => (
              <button
                key={label}
                onClick={() => setActiveTab(label as typeof activeTab)}
                className={`
                  animate-pulse-scale rounded-lg px-6 py-2 text-base font-semibold
                  transition hover:animate-shake hover:shadow-lg
                  ${
                    activeTab === label
                      ? 'bg-green-200 text-green-900'
                      : 'bg-gray-200 text-gray-600'
                  }
                `}
              >
                {label}
              </button>
            ))}
            <button
              onClick={handleSurveyClick}
              className="animate-pulse-scale animate-twitch rounded-lg bg-yellow-300 px-6 py-2 text-base font-semibold text-yellow-900 shadow transition hover:animate-shake hover:bg-yellow-400 hover:shadow-lg"
            >
              ぜひアンケートにご協力ください！！
            </button>
          </div>

          {/* タブ中身 */}
          <div className="w-full">
            {activeTab === 'フロアマップ' && (
              <PcHomeFloorList buildings={buildings} />
            )}
            {activeTab === '専攻紹介' && <MajorTree />}
          </div>
        </div>

        {/* ─────────────── 右カラム ─────────────── */}
        <div
          className={`
            /* スクロールバーを隠す */ flex
            flex-[1] flex-col justify-between
          `}
        >
          <Header className="static justify-center" />

          <div className="hide-scrollbar h-pcContent w-full overflow-y-scroll px-2.5">
            <div className="flex flex-col gap-6">
              {/* 画像3 */}
              <div className="w-full">
                <Image
                  src={'/images/ECO_P1z.webp'}
                  alt="サイド画像3"
                  width={400}
                  height={600}
                  className="h-auto w-full object-contain"
                />
              </div>
              {/* 画像4 */}
              <div className="w-full">
                <Image
                  src={'/images/ECO_P2z.webp'}
                  alt="サイド画像4"
                  width={400}
                  height={600}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex h-32 items-center justify-center bg-theme">
            <SocialIcons />
          </div>
        </div>
      </main>
    </article>
  )
}
