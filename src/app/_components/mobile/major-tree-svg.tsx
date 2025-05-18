import { useEffect, useRef } from 'react'

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
      '恐竜自然史専攻',
      'ECO自然環境専攻',
      '動物園・水族館＆テクノロジー専攻',
    ],
  },
  {
    world: 'ペットワールド',
    color: '#9333EA',
    majors: [
      'ドッグトレーナー専攻',
      'トリマー＆ヘルスケア専攻',
      '動物看護・高度医療専攻',
      '理学・高度医療専攻',
    ],
  },
]

export default function MajorTreeSVG() {
  const svgRef = useRef<SVGSVGElement>(null)

  // アニメーション表示（フェードイン）を入れるならCSSで制御可能

  return (
    <div className="w-full overflow-x-auto py-10">
      <svg
        ref={svgRef}
        width="800"
        height={majorData.length * 160}
        viewBox={`0 0 800 ${majorData.length * 160}`}
        className="mx-auto block"
      >
        {majorData.map((group, groupIndex) => {
          const startX = 150
          const startY = groupIndex * 160 + 40

          return (
            <g key={group.world}>
              {/* ワールド名ノード */}
              <rect
                x={startX}
                y={startY}
                width="160"
                height="40"
                rx="6"
                fill={group.color}
              />
              <text
                x={startX + 80}
                y={startY + 25}
                textAnchor="middle"
                fontSize="14"
                fill="white"
              >
                {group.world}
              </text>

              {/* 線と専攻ノード */}
              {group.majors.map((major, idx) => {
                const childX = 450
                const spacing = 40
                const childY = startY + idx * spacing

                return (
                  <g key={major}>
                    {/* 線 */}
                    <line
                      x1={startX + 160}
                      y1={startY + 20}
                      x2={childX}
                      y2={childY + 20}
                      stroke="#888"
                      strokeWidth="2"
                    />

                    {/* 専攻ノード */}
                    <rect
                      x={childX}
                      y={childY}
                      width="250"
                      height="40"
                      rx="6"
                      fill="#F1F5F9"
                    />
                    <text
                      x={childX + 125}
                      y={childY + 25}
                      textAnchor="middle"
                      fontSize="13"
                      fill="#1E293B"
                    >
                      {major}
                    </text>
                  </g>
                )
              })}
            </g>
          )
        })}
      </svg>
    </div>
  )
}
