'use client'

import Image from 'next/image'
import { useEffect,useRef, useState } from 'react'

import SocialIcons from '@/components/common/footer/social-icons'
import Header from '@/components/common/header'
import type { Building } from '@/lib/definitions'

import PcHomeFloorList from './floor-list'
import MajorTree from './major-tree'
import ProduceLink from './produce-link'

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
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current)
    }
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
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current)
        }
      }
    }
  }, [])

  const [activeTab, setActiveTab] = useState<
    'フロアマップ' | '専攻紹介' | '製作者紹介'
  >('フロアマップ')

  return (
    <article className="hidden h-dvh overflow-hidden md:block">
      <main className="flex h-dvh">
        {/* ────────────── 左カラム ────────────── */}
        <div className="flex flex-1 flex-col justify-between">
          <Header className="static justify-center" />

          <div className="hide-scrollbar relative h-pcContent w-full overflow-y-scroll px-2.5">
            <div className="flex flex-col gap-10">
              <div className="w-full">
                <Image
                  src={'/images/hiro.webp'}
                  alt="サイド画像1"
                  width={400}
                  height={600}
                  className="h-auto w-full object-contain"
                />
              </div>
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

            {/* 下向き矢印アイコン（アニメーション付） */}
            <div className="pointer-events-none absolute bottom-28 left-1/2 -translate-x-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 animate-bounce text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div className="flex h-32 items-center justify-center bg-theme">
            <SocialIcons />
          </div>
        </div>

        {/* ────────────── 中央カラム ────────────── */}
        <div
          ref={centralRef}
          className="flex flex-[2] flex-col items-center overflow-y-scroll px-8 pb-6 pt-10"
        >
          {/* タブボタン群 */}
          <div className="mb-6 flex flex-wrap justify-center gap-6">
            {['フロアマップ', '専攻紹介', '製作者紹介'].map((label) => {
              const isProduce = label === '製作者紹介'
              const isActive = activeTab === label

              const bgColor = isActive
                ? 'bg-green-200 text-green-900'
                : isProduce
                  ? 'bg-blue-200 text-blue-900'
                  : 'bg-gray-200 text-gray-600'

              return (
                <button
                  key={label}
                  onClick={() => setActiveTab(label as typeof activeTab)}
                  className={`
                    animate-pulse-scale rounded-lg px-6 py-2 text-base font-semibold
                    transition hover:animate-shake hover:shadow-lg
                    ${bgColor}
                  `}
                >
                  {label}
                </button>
              )
            })}
          </div>

          {/* タブ中身 */}
          <div className="w-full">
            {activeTab === 'フロアマップ' && (
              <PcHomeFloorList buildings={buildings} />
            )}
            {activeTab === '専攻紹介' && <MajorTree />}
            {activeTab === '製作者紹介' && <ProduceLink />}
          </div>
        </div>

        {/* ────────────── 右カラム ────────────── */}
        <div className="flex flex-1 flex-col justify-between">
          <Header className="static justify-center" />

          <div className="hide-scrollbar relative h-pcContent w-full overflow-y-scroll px-2.5">
            <div className="flex flex-col gap-6">
              <div className="w-full">
                <Image
                  src={'/images/ECO_P1z.webp'}
                  alt="サイド画像3"
                  width={400}
                  height={600}
                  className="h-auto w-full object-contain"
                />
              </div>
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

            {/* 下向き矢印アイコン（アニメーション付） */}
            <div className="pointer-events-none absolute bottom-32 left-1/2 -translate-x-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 animate-bounce text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
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
