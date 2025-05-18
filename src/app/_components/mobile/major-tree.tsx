'use client'

import { useState } from 'react'

const majors = [
  {
    world: '動物ワールド',
    color: 'text-green-700 border-green-700',
    children: ['動物飼育専攻', '動物園マネジメント専攻'],
  },
  {
    world: '海洋ワールド',
    color: 'text-blue-700 border-blue-700',
    children: [
      '水族館アクアリスト専攻',
      '水族館プロデュース専攻',
      'ドルフィントレーナー専攻',
    ],
  },
  {
    world: '自然環境ワールド',
    color: 'text-yellow-700 border-yellow-700',
    children: [
      '博物館・恐竜自然史専攻',
      'ECO自然環境クリエーター専攻',
      '動物園・水族館＆テクノロジー専攻',
    ],
  },
  {
    world: 'ペットワールド',
    color: 'text-purple-700 border-purple-700',
    children: [
      'ドッグトレーナー専攻',
      'ペットワールドトリマー＆ヘルスケア専攻',
      '動物看護士・高度医療専攻',
      '理学・高度医療専攻',
    ],
  },
]

export default function MajorTree() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-5">
      {majors.map((major) => (
        <div key={major.world}>
          <button
            onClick={() =>
              setExpanded((prev) => (prev === major.world ? null : major.world))
            }
            className={`w-full border-2 px-4 py-2 text-center text-lg font-semibold transition-all duration-300 ${major.color}`}
          >
            {major.world}
          </button>
          {expanded === major.world && (
            <ul className="mt-2 flex flex-col gap-2 pl-6">
              {major.children.map((child) => (
                <li
                  key={child}
                  className="border-l-4 border-gray-300 pl-3 text-sm text-gray-800"
                >
                  {child}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}
