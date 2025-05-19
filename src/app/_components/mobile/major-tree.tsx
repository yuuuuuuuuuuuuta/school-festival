// MajorTree.tsx
'use client'
import { useEffect, useRef, useState } from 'react'

import styles from './major-tree.module.css'

const majorData = [
  {
    world: '動物ワールド',
    color: '#3B873E',
    majors: ['動物飼育専攻', '動物園マネジメント専攻'],
  },
  {
    world: '海洋ワールド',
    color: '#2F70B7',
    majors: [
      '水族館アクアリスト専攻',
      '水族館プロデュース専攻',
      'ドルフィントレーナー専攻',
    ],
  },
  {
    world: '自然環境ワールド',
    color: '#B2722D',
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

export default function MajorTree() {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({})
  const boxRefs = useRef<(HTMLDivElement | null)[]>([])
  const majorRefs = useRef<(HTMLDivElement | null)[][]>([])
  const svgRef = useRef<SVGSVGElement | null>(null)
  const [linePoints, setLinePoints] = useState<{ cy: number; cx: number }[]>([])
  const [majorPoints, setMajorPoints] = useState<
    { cy: number; cx: number }[][]
  >([])
  const [topY, setTopY] = useState(0)
  const [bottomY, setBottomY] = useState(0)

  const toggle = (world: string) => {
    setOpenMap((prev) => ({ ...prev, [world]: !prev[world] }))
  }

  useEffect(() => {
    const svgTop = svgRef.current?.getBoundingClientRect().top || 0
    const svgLeft = svgRef.current?.getBoundingClientRect().left || 0

    const boxPositions = boxRefs.current.map((el) => {
      if (!el) return { cx: 0, cy: 0 }
      const rect = el.getBoundingClientRect()
      return {
        cx: rect.left - svgLeft,
        cy: rect.top + rect.height / 2 - svgTop,
      }
    })

    const majorsPositions = majorRefs.current.map((group) =>
      group.map((el) => {
        if (!el) return { cx: 0, cy: 0 }
        const rect = el.getBoundingClientRect()
        return {
          cx: rect.left - svgLeft,
          cy: rect.top + rect.height / 2 - svgTop,
        }
      }),
    )

    setLinePoints(boxPositions)
    setMajorPoints(majorsPositions)
    if (boxPositions.length > 0) {
      setTopY(boxPositions[0].cy - 20)
      setBottomY(boxPositions[boxPositions.length - 1].cy + 20)
    }
  }, [openMap])

  return (
    <div className={styles.wrapper}>
      <svg className={styles.svg} ref={svgRef}>
        {/* 幹線 */}
        <line
          x1={0}
          y1={topY}
          x2={20}
          y2={bottomY}
          stroke="#2c9c45"
          strokeWidth={4}
          strokeLinecap="round"
        />

        {linePoints.map((p, i) => {
          const slopeY = bottomY - topY
          const xBase = (20 * (p.cy - topY)) / slopeY
          const yBase = p.cy
          const branchLength = p.cx - xBase - 12

          return (
            <g key={`main-${i}`}>
              <line
                x1={xBase}
                y1={yBase}
                x2={xBase + branchLength}
                y2={yBase}
                stroke="#2c9c45"
                strokeWidth="4"
              />
              <circle
                cx={xBase + branchLength}
                cy={yBase}
                r="5"
                fill="#d17d1e"
                className={styles.circle}
              />
            </g>
          )
        })}

        {majorPoints.map((group, i) =>
          group.map((m, j) => (
            <line
              key={`branch-${i}-${j}`}
              x1={linePoints[i]?.cx || 0}
              y1={linePoints[i]?.cy || 0}
              x2={m.cx - 8}
              y2={m.cy}
              stroke={majorData[i].color}
              strokeWidth={2}
            />
          )),
        )}
      </svg>

      <div className={styles.content}>
        {majorData.map((group, i) => (
          <div key={group.world} className={styles.node}>
            <div
              className={styles.box}
              ref={(el: HTMLDivElement | null) => {
                boxRefs.current[i] = el
              }}
              onClick={() => toggle(group.world)}
              style={{ color: group.color, borderColor: group.color }}
            >
              {group.world}
            </div>
            {openMap[group.world] && (
              <div className={styles.majorList}>
                {group.majors.map((m, j) => (
                  <div
                    key={m}
                    ref={(el) => {
                      if (!majorRefs.current[i]) majorRefs.current[i] = []
                      majorRefs.current[i][j] = el
                    }}
                    className={styles.majorItem}
                  >
                    {m}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
