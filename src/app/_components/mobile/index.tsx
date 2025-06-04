'use client'

import Image from 'next/image'
import { useState } from 'react'

import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import SectionWithTitle from '@/components/common/section/with-title'
import type { Building } from '@/lib/definitions'

import ScrollDown from '../../../components/common/scroll-down'
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

  const heroHeight = 670

  return (
    <article className="md:hidden">
      <Header />
      <main>
        {/* 背景画像（常に奥） */}
        <div
          className="fixed left-0 w-screen"
          style={{
            top: -60,
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

        <div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100vw',
            height: heroHeight,
            zIndex: 20,
            pointerEvents: 'auto',
          }}
        >
          <button
            type="button"
            style={{
              width: '100%',
              height: '100%',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              margin: 0,
            }}
            aria-label="背景画像切替"
            onClick={() =>
              setBgImage((prev) => (prev === 'hiro' ? 'map' : 'hiro'))
            }
            tabIndex={0}
          />
        </div>

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
        >
          <SectionWithTitle title="アクセスマップ">
            <Image
              className="!relative !w-full object-contain"
              src={'/images/map.webp'}
              alt="TCA ECO 学園祭"
              fill
            />
          </SectionWithTitle>
          <SectionWithTitle title="フロアマップ">
            <FloorLinkList buildings={buildings} />
          </SectionWithTitle>
          <SectionWithTitle title="専攻紹介">
            <MajorTree />
          </SectionWithTitle>
          {/* アンケートボタン */}
          <MobileSurveyButton />
        </div>
        <Footer />
      </main>
    </article>
  )
}
