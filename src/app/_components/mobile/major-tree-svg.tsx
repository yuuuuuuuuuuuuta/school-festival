import { useRef } from 'react'

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

  const totalHeight = majorData.reduce(
    (sum, group) => sum + group.majors.length * 60,
    majorData.length * 60,
  )

  return (
    <div className="w-full overflow-x-auto py-10">
      <svg
        ref={svgRef}
        width="900"
        height={totalHeight}
        viewBox={`0 0 900 ${totalHeight}`}
        className="mx-auto block"
      >
        {
          majorData.reduce(
            (acc, group) => {
              const groupTopY = acc.currentY + 30
              const worldCenterY =
                groupTopY + (group.majors.length * 60 - 20) / 2

              acc.elements.push(
                <g key={group.world}>
                  {/* 縦の幹 */}
                  <line
                    x1={100}
                    y1={groupTopY - 10}
                    x2={100}
                    y2={groupTopY + group.majors.length * 60 - 10}
                    stroke={group.color}
                    strokeWidth="4"
                  />

                  {/* ワールドノード */}
                  <rect
                    x={120}
                    y={worldCenterY - 20}
                    width="160"
                    height="40"
                    rx="6"
                    fill="white"
                    stroke={group.color}
                    strokeWidth="3"
                  />
                  <text
                    x={200}
                    y={worldCenterY + 5}
                    textAnchor="middle"
                    fontSize="16"
                    fill={group.color}
                    fontWeight="bold"
                  >
                    {group.world}
                  </text>
                </g>,
              )

              group.majors.forEach((major, idx) => {
                const y = groupTopY + idx * 60

                acc.elements.push(
                  <g key={major}>
                    {/* 横枝 */}
                    <line
                      x1={100}
                      y1={y + 20}
                      x2={290}
                      y2={y + 20}
                      stroke={group.color}
                      strokeWidth="2"
                    />

                    {/* 専攻ラベル */}
                    <text x={300} y={y + 25} fontSize="14" fill="#1E293B">
                      {major}
                    </text>
                  </g>,
                )
              })

              acc.currentY += group.majors.length * 60 + 20
              return acc
            },
            { currentY: 0, elements: [] as JSX.Element[] },
          ).elements
        }
      </svg>
    </div>
  )
}
