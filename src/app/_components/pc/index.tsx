// PC版トップページ表示用コンポーネント

import Image from 'next/image'

// SNSアイコンリンク群
import SocialIcons from '@/components/common/footer/social-icons'
// ヘッダー共通部品
import Header from '@/components/common/header'
// 建物データ型定義
import type { Building } from '@/lib/definitions'

// PC用の建物リンクリスト
import PcHomeFloorList from './floor-list'

export default function PcHomePage({
  buildings,
}: {
  buildings: Omit<Building, 'floors'>[] // フロア情報を省いた建物一覧
}) {
  return (
    // PC専用表示（md以上）。全体高さ100vh、スクロールなしで固定表示
    <article className="hidden h-dvh overflow-hidden md:block">
      <main className="flex h-dvh">
        {/* 左カラム：メイン画像・ヘッダー・SNSリンク */}
        <div className="mx-auto flex min-w-[400px] flex-col justify-between">
          {/* 中央寄せのヘッダー（固定位置ではない） */}
          <Header className="static justify-center" />

          {/* メイン画像：/images/hiro.webp */}
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

          {/* SNSアイコンバー（背景色付き） */}
          <div className="flex h-32 items-center justify-center bg-theme">
            <SocialIcons />
          </div>
        </div>

        {/* 中央カラム：フロアマップ一覧（建物ボタンなど） */}
        <PcHomeFloorList buildings={buildings} />

        {/* 右カラム：アクセスマップ、専攻紹介、住所など */}
        <div className="flex min-w-[400px] flex-col justify-between">
          {/* アクセスマップタイトルバー */}
          <div className="flex h-[36px] items-center justify-center bg-theme">
            <p className="font-medium text-white">アクセスマップ</p>
          </div>

          {/* 地図画像（/images/map.webp） */}
          <div className="mx-auto flex h-pcContent items-start overflow-hidden px-2.5">
            <Image
              src={'/images/map.webp'}
              alt="TCA ECO 学園祭"
              className="!relative max-h-full !w-full scale-105 object-contain"
              fill
            />
          </div>

          {/* 専攻紹介見出し */}
          <div className="mt-10 flex flex-col gap-5">
            <h2 className="text-center text-2xl font-bold text-white">
              専攻紹介
            </h2>
          </div>

          {/* 学校住所・連絡先情報 */}
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
