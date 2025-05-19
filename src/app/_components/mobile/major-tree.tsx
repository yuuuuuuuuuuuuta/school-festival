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
  const svgRef = useRef<SVGSVGElement | null>(null)
  const [linePoints, setLinePoints] = useState<{ cy: number }[]>([])
  const [topY, setTopY] = useState(0)
  const [bottomY, setBottomY] = useState(0)

  const toggle = (world: string) => {
    setOpenMap((prev) => ({ ...prev, [world]: !prev[world] }))
  }

  useEffect(() => {
    const boxes = boxRefs.current
    const svgTop = svgRef.current?.getBoundingClientRect().top || 0

    const positions: { cy: number }[] = boxes
      .map((el) => {
        if (!el) return null
        const box = el.getBoundingClientRect()
        const cy = box.top + box.height / 2 - svgTop
        return { cy }
      })
      .filter((p): p is { cy: number } => p !== null)

    if (positions.length > 0) {
      setTopY(positions[0].cy - 20)
      setBottomY(positions[positions.length - 1].cy + 20)
    }

    setLinePoints(positions)
  }, [openMap])

  return (
    <div className={styles.wrapper}>
      <svg className={styles.svg} ref={svgRef}>
        {/* 幹線（斜め） */}
        <polyline
          points={`0,${topY} 20,${bottomY}`}
          stroke="#2c9c45"
          strokeWidth="2"
          fill="none"
        />

        {linePoints.map((p, i) => {
          // 斜線との交点
          const slopeY = bottomY - topY
          const slopeX = 20
          const slope = slopeY / slopeX
          const xBase = (20 * (p.cy - topY)) / slopeY
          const yBase = p.cy

          const branchLength = 30

          return (
            <g key={i}>
              {/* 枝線 */}
              <line
                x1={xBase}
                y1={yBase}
                x2={xBase + branchLength}
                y2={yBase}
                stroke="#2c9c45"
                strokeWidth="2"
              />

              {/* オレンジの●を"枝線の終端"＝BOX左端に置く */}
              <circle cx={p.cy} cy={yBase} r="5" fill="#d17d1e" />
            </g>
          )
        })}
      </svg>

      <div className={styles.content}>
        {majorData.map((group, i) => (
          <div key={group.world} className={styles.node}>
            <div
              className={styles.box}
              ref={(el) => {
                boxRefs.current[i] = el
              }}
              onClick={() => toggle(group.world)}
              style={{ color: group.color, borderColor: group.color }}
            >
              {group.world}
            </div>

            {openMap[group.world] && (
              <div className={styles.majorList}>
                {group.majors.map((m) => (
                  <div key={m} className={styles.majorItem}>
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
