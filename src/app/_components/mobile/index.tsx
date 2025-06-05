'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import ScrollDown from '@/components/common/scroll-down'
import SectionWithTitle from '@/components/common/section/with-title'
import type { Building } from '@/lib/definitions'

import FloorLinkList from './floor-link-list'
import MajorTree from './major-tree'
import MobileSurveyButton from './mobile-survey-button'

export default function MobileHomePage({
  buildings,
}: {
  buildings: Omit<Building, 'floors'>[]
}) {
  const [bgImage, setBgImage] = useState<'hiro' | 'map'>('hiro')
  const bgImageSrc =
    bgImage === 'hiro' ? '/images/hiro.webp' : '/images/map.webp'

  const heroHeight = 1000

  const [showGuideButton, setShowGuideButton] = useState(true)

  function handleBackgroundToggle() {
    setBgImage((prev) => (prev === 'hiro' ? 'map' : 'hiro'))
    setShowGuideButton(false)
  }

  return (
    <article className="relative md:hidden" onClick={handleBackgroundToggle}>
      <Header />

      <main>
        <div
          className="fixed left-0 w-screen"
          style={{
            top: -50,
            zIndex: -10,
            height: '100vh',
            pointerEvents: 'none',
          }}
        >
          <Image
            src={bgImageSrc}
            alt="TCA ECO 学園祭"
            fill
            className="select-none object-contain p-6"
            priority
            draggable={false}
          />
        </div>

        {showGuideButton && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleBackgroundToggle()
            }}
            className="fixed left-1/2 -translate-x-1/2 transform rounded-lg bg-theme/80 px-4 py-2 font-semibold text-white drop-shadow-lg"
            style={{
              bottom: 200,
              zIndex: -10,
            }}
          >
            ここをタップして画像を切り替え
          </button>
        )}

        <div style={{ height: heroHeight }} />

        <ScrollDown />

        <div
          id="main"
          className="flex flex-col gap-16 bg-white/90 p-14"
          style={{
            position: 'relative',
            zIndex: 10,
            pointerEvents: 'auto',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* アクセスマップ */}
          <SectionWithTitle title="アクセスマップ">
            <Image
              className="!relative !w-full object-contain"
              src={'/images/ECO_P1z.webp'}
              alt="アクセスマップ"
              fill
            />
            <Image
              className="!relative !w-full object-contain"
              src={'/images/ECO_P2z.webp'}
              alt="アクセスマップ"
              fill
            />
          </SectionWithTitle>

          {/* フロアマップ */}
          <SectionWithTitle title="フロアマップ">
            <FloorLinkList buildings={buildings} />
          </SectionWithTitle>

          {/* 専攻紹介 */}
          <SectionWithTitle title="専攻紹介">
            <MajorTree />
          </SectionWithTitle>

          {/* 製作者紹介 */}
          <SectionWithTitle title="製作者紹介">
            <MobileSurveyButton />
            <Image
              className="!relative !w-full object-contain"
              src={'/images/producer.webp?v=2'}
              alt="製作者紹介"
              fill
            />
          </SectionWithTitle>
        </div>

        <Footer />
      </main>
    </article>
  )
}
