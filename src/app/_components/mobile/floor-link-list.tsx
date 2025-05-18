// 建物一覧をモバイル画面にリンクリスト形式で表示する

import Link from 'next/link'

import type { Building } from '@/lib/definitions'

export default function FloorLinkList({
  buildings,
}: {
  buildings: Omit<Building, 'floors'>[] // フロア情報なし建物データ
}) {
  return (
    <ul className="flex flex-col gap-5">
      {/* 各建物ごとのリスト要素を表示 */}
      {buildings.map((building) => (
        <li
          key={building.id}
          className="w-full border-2"
          style={{
            borderColor: building.themeColor,
          }}
        >
          {/* 建物詳細ページへ遷移するリンク */}
          <Link
            href={building.id}
            className="flex h-full w-full items-center justify-between p-3 text-center text-lg font-medium
        transition duration-300 hover:bg-white/60"
            style={{
              color: building.themeColor,
            }}
          >
            <span></span> {/* 左端のスペース（レイアウト調整用） */}
            <p>{building.name}</p> {/* 校舎名（例：第一校舎） */}
            <span>
              {/* 右向きの矢印アイコン（SVG） */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="18"
                viewBox="0 0 11 18"
                fill="none"
              >
                <line
                  y1="-0.5"
                  x2="11.7593"
                  y2="-0.5"
                  transform="matrix(0.692329 0.721582 -0.692329 0.721582 0.973145 1)"
                  stroke={building.themeColor}
                />
                <line
                  y1="-0.5"
                  x2="11.7593"
                  y2="-0.5"
                  transform="matrix(0.692329 -0.721582 0.692329 0.721582 1.93262 17.4854)"
                  stroke={building.themeColor}
                />
              </svg>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
