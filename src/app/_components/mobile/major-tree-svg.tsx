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
  const nodeHeight = 60
  const verticalSpacing = 90
  const paddingTop = 40
  const startX = 50

  const svgHeight =
    majorData.reduce(
      (acc, group) => acc + Math.max(1, group.majors.length) * verticalSpacing,
      0,
    ) +
    paddingTop * 2

  return (
    <div className="w-full overflow-x-auto py-10">
      <svg
        ref={svgRef}
        width="900"
        height={svgHeight}
        className="mx-auto block"
      >
        {/* 幹線 */}
        <line
          x1={startX}
          y1={paddingTop}
          x2={startX}
          y2={svgHeight - paddingTop}
          stroke="#22c55e"
          strokeWidth={6}
        />

        {
          majorData.reduce(
            (acc, group, i) => {
              const groupY =
                acc.offset +
                (Math.max(group.majors.length, 1) * verticalSpacing -
                  nodeHeight) /
                  2

              const branchX = startX + 30
              const boxX = branchX + 20
              const boxY = groupY

              // ノード位置（ワールド名枠の中央と接続）
              const nodeCenterY = boxY + nodeHeight / 2

              const lines = (
                <>
                  {/* 幹から枝 */}
                  <line
                    x1={startX}
                    y1={nodeCenterY}
                    x2={branchX}
                    y2={nodeCenterY}
                    stroke="#22c55e"
                    strokeWidth={4}
                  />
                  {/* ● 分岐点 */}
                  <circle cx={startX} cy={nodeCenterY} r={6} fill="#D97706" />
                </>
              )

              const worldNode = (
                <>
                  <rect
                    x={boxX}
                    y={boxY}
                    width="200"
                    height={nodeHeight}
                    rx={8}
                    fill="white"
                    stroke={group.color}
                    strokeWidth={3}
                  />
                  <text
                    x={boxX + 100}
                    y={boxY + 38}
                    fontSize="18"
                    fontWeight="bold"
                    fill={group.color}
                    textAnchor="middle"
                  >
                    {group.world}
                  </text>
                </>
              )

              const majors = group.majors.map((major, j) => {
                const childX = boxX + 220
                const childY = acc.offset + j * verticalSpacing

                return (
                  <g key={major}>
                    <line
                      x1={boxX + 200}
                      y1={nodeCenterY}
                      x2={childX}
                      y2={childY + nodeHeight / 2}
                      stroke="#888"
                      strokeWidth={2}
                    />
                    <rect
                      x={childX}
                      y={childY}
                      width="260"
                      height={nodeHeight}
                      rx={6}
                      fill="#F1F5F9"
                    />
                    <text
                      x={childX + 130}
                      y={childY + 38}
                      fontSize="14"
                      fill="#1E293B"
                      textAnchor="middle"
                    >
                      {major}
                    </text>
                  </g>
                )
              })

              return {
                offset:
                  acc.offset +
                  Math.max(1, group.majors.length) * verticalSpacing,
                nodes: [
                  ...acc.nodes,
                  <g key={group.world}>
                    {lines}
                    {worldNode}
                    {majors}
                  </g>,
                ],
              }
            },
            { offset: paddingTop, nodes: [] as JSX.Element[] },
          ).nodes
        }
      </svg>
    </div>
  )
}
