'use client'

import { useState } from 'react'

const majorData = [
  {
    world: '動物ワールド',
    color: '#3B873E',
    majors: ['動物飼育専攻', '動物園マネジメント専攻'],
  },
  {
    world: '海洋ワールド',
    color: '#1D4ED8',
    majors: [
      '水族館アクアリスト専攻',
      '水族館プロデュース専攻',
      'ドルフィントレーナー専攻',
    ],
  },
  {
    world: '自然環境ワールド',
    color: '#D97706',
    majors: [
      '博物館・恐竜自然史専攻',
      'ECO自然環境クリエーター専攻',
      '動物園・水族館＆テクノロジー専攻',
    ],
  },
  {
    world: 'ペットワールド',
    color: '#9333EA',
    majors: [
      'ドッグトレーナー専攻',
      'ペットワールドトリマー＆ヘルスケア専攻',
      '動物看護士・高度医療専攻',
      '理学・高度医療専攻',
    ],
  },
]

export default function MajorTreeCollapsible() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-6">
      {majorData.map((group, index) => {
        const isOpen = openIndex === index
        return (
          <div key={group.world}>
            <div
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="relative cursor-pointer rounded-md border-4 px-6 py-3 text-lg font-bold"
              style={{ borderColor: group.color, color: group.color }}
            >
              {/* 左の線と点 */}
              <div className="absolute left-[-30px] top-1/2 h-full w-6 -translate-y-1/2">
                <div className="absolute left-3 top-1/2 h-full w-px -translate-y-1/2 bg-green-500" />
                <div className="absolute left-[2px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-orange-500" />
              </div>
              {group.world}
            </div>
            {isOpen && (
              <ul className="ml-10 mt-2 list-disc text-sm text-gray-700">
                {group.majors.map((major) => (
                  <li key={major} className="ml-4">
                    {major}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      })}
    </div>
  )
}
