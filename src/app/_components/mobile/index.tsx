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
  // ─── 背景画像の切り替え状態 ───
  const [bgImage, setBgImage] = useState<'hiro' | 'map'>('hiro')
  const bgImageSrc =
    bgImage === 'hiro' ? '/images/hiro.webp' : '/images/map.webp'

  // ─── “背景画像だけが見える高さ” を決める heroHeight ───
  // たとえば 260px にすると、画面上部260px分だけ本文が乗らずに背景が見えた状態となり
  // その領域をタップすると背景が切り替わります。
  const heroHeight = 670

  // ─── 背景切り替えを行うハンドラー ───
  function toggleBackground() {
    setBgImage((prev) => (prev === 'hiro' ? 'map' : 'hiro'))
  }

  return (
    // ─── 親要素に「relative」をつけ、ここ全体を onClick にして背景切替を行う ───
    <article className="relative md:hidden" onClick={toggleBackground}>
      <Header />

      <main>
        {/*
          ─── 背景画像を「fixed で常に奥」に配置 ───
          ・pointerEvents: 'none' にしているので、画像自体はクリックを受け付けません
          ・親の onClick (toggleBackground) は“背景以外”の子要素で止まらない限りここに届きます
        */}
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

        {/*
          ─── 空のスペーサー領域 ───
          ・ここに本文要素が乗るまでは“透けて”背景が見えます
          ・親の onClick がそのまま透過して届くので、クリックで背景切替可能
        */}
        <div style={{ height: heroHeight }} />

        {/*
          ─── スクロール促しアニメーション ───
          ・ここをタップしても親 onClick が働り、背景が切り替わります
          ・ScrollDown コンポーネント自体が onClick を持っていなければ透過します
        */}
        <ScrollDown />

        {/*
          ─── 本文エリア ───
          ・position:relative, zIndex:10 で、常に透明ボタン（親 onClick）より前面に出る
          ・pointerEvents:'auto' なので、本エリア内でタップすると必ず以下の e.stopPropagation() が動き、
            親の toggleBackground() にクリックが届かないようにする
        */}
        <div
          id="main"
          className="flex flex-col gap-16 bg-white/90 p-14"
          style={{
            position: 'relative',
            zIndex: 10,
            pointerEvents: 'auto',
          }}
          onClick={(e) => {
            // 本文エリア内のタップは必ずここで止める
            e.stopPropagation()
          }}
        >
          {/* アクセスマップ */}
          <SectionWithTitle title="アクセスマップ">
            <Image
              className="!relative !w-full object-contain"
              src="/images/map.webp"
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

          {/* アンケートボタン */}
          <MobileSurveyButton />
        </div>

        <Footer />
      </main>
    </article>
  )
}
