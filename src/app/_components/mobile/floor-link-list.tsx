// 建物一覧をモバイル画面にリンクリスト形式で表示する

'use client'

import Link from 'next/link'

import type { Building } from '@/lib/definitions'

export default function FloorLinkList({
  buildings,
}: {
  buildings: Omit<Building, 'floors'>[] // フロア情報なし建物データ
}) {
  return (
    <>
      {/* モバイル用「ホームに戻る」ボタン */}
      <div className="mb-4 px-2">
        <Link
          href="/"
          className="inline-block rounded-full bg-green-700 px-4 py-2 text-sm text-white shadow-md transition hover:bg-green-800 active:scale-95"
        >
          ← ホームに戻る
        </Link>
      </div>

      <ul className="flex flex-col gap-5 px-2">
        {buildings.map((building) => (
          <li
            key={building.id}
            className="w-full rounded-xl border-2 shadow-sm"
            style={{ borderColor: building.themeColor }}
          >
            <Link
              href={building.id}
              className="flex h-full w-full items-center justify-between px-5 py-4 text-center text-lg font-semibold transition duration-300 hover:bg-white/70"
              style={{ color: building.themeColor }}
            >
              <span className="w-4" /> {/* 左端のレイアウト調整用 */}
              <p>{building.name}</p>
              <span>
                {/* 右向きの矢印アイコン */}
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
    </>
  )
}
