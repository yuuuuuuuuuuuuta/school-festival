// 建物の階ごとのマップ・展示ブース情報を表示するコンポーネント

import Image from 'next/image'

// 建物データ取得（id指定）
import { getBuilding } from '@/lib/data'

// 各階の展示ブース配置用コンポーネント
import BoothItems from './booth-items'

export default function FloorList({ buildingId }: { buildingId: string }) {
  // 指定IDから建物データ取得
  const building = getBuilding(buildingId)

  // 無効なIDだった場合
  if (!building) {
    return <div>Building not found</div>
  }

  return (
    // 各階のマップ＆展示を描画
    <div className="mx-auto flex w-full flex-col gap-5 px-4 md:max-w-xl">
      {/* トイレ・エレベーターなどのアイコン表示 */}
      <div className="flex flex-wrap gap-1.5">
        {building.icons?.map((icon) => {
          const isMen = icon.image.includes('men')
          const isWomen = icon.image.includes('women')
          const isShare = icon.image.includes('share') // ← ※未使用（将来的な分岐用？）

          return (
            <div key={icon.id} className="flex items-center gap-1">
              <img
                src={`/images/floors/icons/${icon.image}.svg`}
                alt={icon.name}
              />
              <span className="text-xs">{icon.name}</span>
            </div>
          )
        })}
      </div>

      {/* 各階の表示（上階→下階の順に） */}
      {[...building.floors]
        .sort((a, b) => b.number - a.number)
        .map((floor) => (
          <div
            key={floor.id}
            className="relative w-full border-b py-4 first-of-type:border-t"
            style={{ borderColor: building.accentColor }}
          >
            {/* 背景マップ画像（階の図面） */}
            <div className="relative w-full pb-4 pt-8">
              <img
                className="mx-auto h-auto w-[320px] translate-y-10 sm:w-[400px] sm:translate-x-5 sm:translate-y-0"
                src={`/images/floors/${floor.id}.svg`}
                alt={floor.name}
              />
            </div>

            {/* 階番号（丸背景） */}
            <h3
              className="absolute left-4 top-6 flex size-11 items-center justify-center rounded-full text-xl font-bold text-white sm:left-6 sm:top-10 sm:size-14"
              style={{
                backgroundColor: building.accentColor,
              }}
            >
              {floor.name}
            </h3>

            {/* ブース配置描画（上に重ねて表示） */}
            <BoothItems
              booths={floor.booths}
              themeColor={building.themeColor}
              accentColor={building.accentColor}
            />
          </div>
        ))}
    </div>
  )
}
