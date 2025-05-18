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
                  <rect
                    x={50}
                    y={worldCenterY - 20}
                    width="160"
                    height="40"
                    rx="6"
                    fill={group.color}
                  />
                  <text
                    x={130}
                    y={worldCenterY + 5}
                    textAnchor="middle"
                    fontSize="14"
                    fill="white"
                  >
                    {group.world}
                  </text>
                </g>,
              )

              group.majors.forEach((major, idx) => {
                const y = groupTopY + idx * 60
                const childX = 300

                acc.elements.push(
                  <g key={major}>
                    <line
                      x1={210}
                      y1={worldCenterY}
                      x2={childX}
                      y2={y + 20}
                      stroke="#888"
                      strokeWidth="2"
                    />
                    <rect
                      x={childX}
                      y={y}
                      width="250"
                      height="40"
                      rx="6"
                      fill="#F1F5F9"
                    />
                    <text
                      x={childX + 125}
                      y={y + 25}
                      textAnchor="middle"
                      fontSize="13"
                      fill="#1E293B"
                    >
                      {major}
                    </text>
                  </g>,
                )
              })

              acc.currentY += group.majors.length * 60 + 60
              return acc
            },
            { currentY: 0, elements: [] as JSX.Element[] },
          ).elements
        }
      </svg>
    </div>
  )
}
