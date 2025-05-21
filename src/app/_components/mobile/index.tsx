// モバイル版トップページ

// Next.js の画像最適化コンポーネント
import Image from 'next/image'

// 各共通コンポーネントをインポート
import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import SectionWithTitle from '@/components/common/section/with-title'
import type { Building } from '@/lib/definitions'

// 下スクロールを促すアニメーション（矢印など）
import ScrollDown from '../../../components/common/scroll-down'
// 各建物のリンクリスト（ボタン形式など）
import FloorLinkList from './floor-link-list'
// MajorTreeのインポートを追加
import MajorTree from './major-tree'
// Mobile-tab-controllerのインポートを追加
import MobileSurveyButton from './mobile-survey-button'

// props: 建物一覧（floorsなし）
export default function MobileHomePage({
  buildings,
}: {
  buildings: Omit<Building, 'floors'>[]
}) {
  return (
    // md未満（モバイル）のときのみ表示
    <article className="md:hidden">
      {/* ページ上部の共通ヘッダー */}
      <Header />

      <main>
        {/* 背景画像（上部固定・奥に配置） */}
        <div className="fixed left-0 top-10 -z-10 h-screen">
          <Image
            src={'/images/hiro.webp'}
            alt="TCA ECO 学園祭"
            width={1920}
            height={1080}
            className="max-h-full object-contain p-6"
          />
        </div>

        {/* 「スクロールしてね」的な演出 */}
        <ScrollDown />

        {/* 一画面分のスペーサー。スクロール演出と連動？ */}
        <div className="h-screen"></div>

        {/* 本文エリア（白背景、半透明） */}
        <div id="main" className="flex flex-col gap-16 bg-white/90 p-14">
          {/* アクセスマップ（地図画像） */}
          <SectionWithTitle title="アクセスマップ">
            <Image
              className="!relative !w-full object-contain"
              src={'/images/map.webp'}
              alt="TCA ECO 学園祭"
              fill
            />
          </SectionWithTitle>

          {/* フロアマップ（建物一覧） */}
          <SectionWithTitle title="フロアマップ">
            <FloorLinkList buildings={buildings} />
          </SectionWithTitle>

          {/* 専攻紹介(系統樹モデル) */}
          <SectionWithTitle title="専攻紹介">
            <MajorTree />
          </SectionWithTitle>

          {/* アンケートボックス */}
          <MobileSurveyButton />
        </div>

        {/* フッター表示 */}
        <Footer />
      </main>
    </article>
  )
}
