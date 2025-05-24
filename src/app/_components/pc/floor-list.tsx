// 建物ごとのフロアマップリンクを一覧表示する（PC用）

import Link from 'next/link'

// 各建物ページに使う FloorList（階層リスト）を読み込み
import FloorList from '@/app/[buildingId]/_components/floor-list'
// 共通スクロール演出（下矢印）UI
import ScrollDown from '@/components/common/scroll-down'
// スクロール可能なラッパーUI
import { ScrollArea } from '@/components/ui/scroll-area'
// 建物の型定義（floors除外）
import type { Building } from '@/lib/definitions'

export default function PcHomeFloorList({
  buildings,
}: {
  buildings: Omit<Building, 'floors'>[]
}) {
  return (
    <>
      {/* ページ下にスクロールアイコン（PCでも見えるように外に出す） */}
      <ScrollDown textHidden={true} />

      <section className="min-w-80 flex-grow">
        {/* スクロールエリア（高さ: 画面100%） */}
        <ScrollArea className="relative h-dvh border border-theme">
          {/* 固定ヘッダー（透明背景、ぼかし） */}
          <div className="absolute right-0 top-0 z-40 flex h-[36px] w-full items-center justify-center border-b border-theme bg-[#EDF4D9]/80 backdrop-blur">
            <p className="font-bold text-theme">フロアマップ</p>
          </div>

          {/* 建物ごとのセクション */}
          <div>
            {buildings.map((building) => (
              <div key={building.id} className="pb-16 pt-8">
                {/* 建物タイトル：リンクで建物ページに遷移 */}
                <div className="flex justify-center py-10">
                  <Link href={`/${building.id}`}>
                    <h2
                      className="px-10 py-2 font-bold text-white"
                      style={{ backgroundColor: building.themeColor }}
                    >
                      {building.name}
                    </h2>
                  </Link>
                </div>

                {/* 階層リスト表示（FloorList を呼び出し） */}
                <FloorList buildingId={building.id} />
              </div>
            ))}
          </div>

          {/* 最下部スペーサー（背景色とボーダーあり） */}
          <div className="h-[127px] border-y border-theme bg-[#EDF4D9]/80"></div>
        </ScrollArea>
      </section>
    </>
  )
}
