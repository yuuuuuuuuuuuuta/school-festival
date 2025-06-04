'use client'

import Image from 'next/image'
import { useState } from 'react'

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
  const [activeTab, setActiveTab] = useState<'フロアマップ' | '専攻紹介'>(
    'フロアマップ',
  )

  const handleSurveyClick = () => {
    window.open(
      'https://docs.google.com/forms/d/1Fsi_qbcPgAJ4Svq9vHYbR13YcikfQYJsiTiYpLHMu4c/viewform?edit_requested=true',
      '_blank',
    ) // 必要に応じてURL変更
  }

  return (
    <article className="hidden h-dvh overflow-hidden md:block">
      <main className="flex h-dvh">
        {/* 左カラム */}
        <div className="mx-auto flex min-w-[400px] flex-col justify-between">
          <Header className="static justify-center" />
          {/* 画像2枚＋縦スクロール */}
          <div className="mx-auto h-pcContent w-full overflow-y-scroll px-2.5">
            <div className="flex flex-col gap-6">
              <Image
                src={'/images/hiro.webp'}
                alt="サイド画像1"
                width={350}
                height={500}
                className="object-contain"
              />
              <Image
                src={'/images/hiro.webp'}
                alt="サイド画像2"
                width={350}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex h-32 items-center justify-center bg-theme">
            <SocialIcons />
          </div>
        </div>

        {/* 中央カラム */}
        <div className="flex flex-grow flex-col items-center overflow-y-scroll px-8 pb-6 pt-10">
          {/* タブボタン群 */}
          <div className="mb-6 flex flex-wrap justify-center gap-6">
            {['フロアマップ', '専攻紹介'].map((label) => (
              <button
                key={label}
                onClick={() => setActiveTab(label as typeof activeTab)}
                className={`animate-pulse-scale rounded-lg px-6 py-2 text-base font-semibold transition hover:animate-shake hover:shadow-lg ${
                  activeTab === label
                    ? 'bg-green-200 text-green-900'
                    : 'bg-gray-200 text-gray-600'
                }`}
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

        {/* 右カラム（アクセスマップ） */}
        <div className="mx-auto flex min-w-[400px] flex-col justify-between">
          <Header className="static justify-center" />
          {/* 画像2枚＋縦スクロール */}
          <div className="mx-auto h-pcContent w-full overflow-y-scroll px-2.5">
            <div className="flex flex-col gap-6">
              <Image
                src={'/images/map.webp'}
                alt="サイド画像3"
                width={350}
                height={500}
                className="object-contain"
              />
              <Image
                src={'/images/map.webp'}
                alt="サイド画像4"
                width={350}
                height={500}
                className="object-contain"
              />
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
