// 建物の切り替えリンクUI（選択中の建物をハイライト表示)

import Link from 'next/link'

import type { Building } from '@/lib/definitions'

// props: 建物一覧（floorsを除いた軽量データ）＋現在の建物
export default function FloorLinkSelect({
  buildings,
  currentBuilding,
}: {
  buildings: Omit<Building, 'floors'>[]
  currentBuilding: Building
}) {
  return (
    <div
      className="flex border"
      style={{
        backgroundColor: currentBuilding.themeColor, // 選択中建物の背景色
        borderColor: currentBuilding.accentColor, // 境界線の色
      }}
    >
      {/* 建物ごとの選択リンクを横並びで表示 */}
      {buildings.map((b) => (
        <Link
          href={b.id} // 例: /first, /second などのページに飛ぶ
          key={b.id}
          className="border-r px-6 py-1.5 font-medium last-of-type:border-none"
          style={{
            backgroundColor:
              currentBuilding.id == b.id ? currentBuilding.themeColor : 'white',
            color:
              currentBuilding.id == b.id ? 'white' : currentBuilding.themeColor,
            borderColor: currentBuilding.accentColor,
          }}
        >
          <h2>{b.name}</h2>
        </Link>
      ))}
    </div>
  )
}
