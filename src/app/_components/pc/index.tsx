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
    window.open('https://example.com/survey', '_blank') // ← 本番URLに変更してください
  }

  return (
    <article className="hidden h-dvh overflow-hidden md:block">
      <main className="flex h-dvh justify-center bg-white">
        {/* 黄金比カラム構成：左右1fr, 中央1.618fr */}
        <div className="grid w-full max-w-[1440px] grid-cols-[1fr_1.618fr_1fr]">
          {/* 左カラム */}
          <div className="flex flex-col items-center justify-between px-4">
            <Header className="static justify-center" />
            <div className="flex h-pcContent w-full items-start">
              <Image
                src="/images/hiro.webp"
                alt="TCA ECO 学園祭"
                className="relative max-h-full max-w-full object-contain"
                fill
              />
            </div>
            <div className="flex h-32 w-full items-center justify-center bg-theme">
              <SocialIcons />
            </div>
          </div>

          {/* 中央カラム */}
          <div className="flex flex-col items-center overflow-y-scroll px-8 pb-6 pt-10">
            {/* タブ切り替え */}
            <div className="mb-6 flex flex-wrap justify-center gap-6">
              {['フロアマップ', '専攻紹介'].map((label) => (
                <button
                  key={label}
                  onClick={() => setActiveTab(label as typeof activeTab)}
                  className={`rounded-lg px-6 py-2 text-base font-semibold transition ${
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
                className="rounded-lg bg-yellow-300 px-6 py-2 text-base font-semibold text-yellow-900 shadow transition hover:bg-yellow-400"
              >
                アンケートにご協力ください
              </button>
            </div>

            {/* コンテンツ */}
            <div className="w-full">
              {activeTab === 'フロアマップ' && (
                <PcHomeFloorList buildings={buildings} />
              )}
              {activeTab === '専攻紹介' && <MajorTree />}
            </div>
          </div>

          {/* 右カラム */}
          <div className="flex flex-col items-center justify-between px-4">
            <div className="flex h-[36px] w-full items-center justify-center bg-theme">
              <p className="font-medium text-white">アクセスマップ</p>
            </div>
            <div className="flex h-pcContent w-full items-start overflow-hidden px-2.5">
              <Image
                src="/images/map.webp"
                alt="TCA ECO 学園祭"
                className="relative max-h-full max-w-full scale-105 object-contain"
                fill
              />
            </div>
            <div className="mt-10 flex flex-col gap-5">
              <h2 className="text-center text-2xl font-bold text-white">
                専攻紹介
              </h2>
            </div>
            <div className="flex h-32 w-full items-center justify-center bg-theme">
              <p className="text-center text-xs leading-7 text-white">
                〒134-0088 東京都江戸川区西葛西6-29-9
                <br />
                Mail:info@tcaeco.ac.jp フリーダイヤル:0120-545-556
              </p>
            </div>
          </div>
        </div>
      </main>
    </article>
  )
}
