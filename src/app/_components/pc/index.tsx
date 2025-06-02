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
          <div className="flex w-full gap-3">
            <div className="mx-auto flex h-pcContent items-start">
              <Image
                src={'/images/hiro.webp'}
                alt="TCA ECO 学園祭"
                className="!relative max-h-full !w-full object-contain"
                fill
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
        <div className="flex min-w-[400px] flex-col justify-between">
          <div className="flex h-[36px] items-center justify-center bg-theme">
            <p className="font-medium text-white">アクセスマップ</p>
          </div>
          <div className="mx-auto flex h-pcContent items-start overflow-hidden px-2.5">
            <Image
              src={'/images/map.webp'}
              alt="TCA ECO 学園祭"
              className="!relative max-h-full !w-full scale-105 object-contain"
              fill
            />
          </div>
          <div className="flex h-32 items-center justify-center bg-theme">
            <p className="text-center text-xs leading-7 text-white">
              〒134-0088 東京都江戸川区西葛西6-29-9
              <br />
              Mail:info@tcaeco.ac.jp フリーダイヤル:0120-545-556
            </p>
          </div>
        </div>
      </main>
    </article>
  )
}
