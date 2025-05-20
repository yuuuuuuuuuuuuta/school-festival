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
  const [topY, setTopY] = useState(0)
  const [bottomY, setBottomY] = useState(0)
  const [majorLinePoints, setMajorLinePoints] = useState<
    { cy: number; cx: number; color: string }[]
  >([])

  const toggle = (world: string) => {
    setOpenMap((prev) => ({ ...prev, [world]: !prev[world] }))
  }

  useEffect(() => {
    const svgTop = svgRef.current?.getBoundingClientRect().top || 0
    const svgLeft = svgRef.current?.getBoundingClientRect().left || 0

    // ワールドの位置
    const positions = boxRefs.current
      .map((el) => {
        if (!el) return null
        const rect = el.getBoundingClientRect()
        const cy = rect.top + rect.height / 2 - svgTop
        const cx = rect.left - svgLeft
        return { cy, cx }
      })
      .filter((p): p is { cy: number; cx: number } => p !== null)

    if (positions.length > 0) {
      setTopY(positions[0].cy - 20)
      setBottomY(positions[positions.length - 1].cy)
    }

    setLinePoints(positions)

    // 専攻の位置
    const majors: { cy: number; cx: number; color: string }[] = []
    majorRefs.current.forEach((group, i) => {
      group?.forEach((el) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const cy = rect.top + rect.height / 2 - svgTop
        const cx = rect.left - svgLeft
        const color = majorData[i].color
        majors.push({ cy, cx, color })
      })
    })
    setMajorLinePoints(majors)
  }, [openMap])

  return (
    <div className={styles.wrapper}>
      <svg className={styles.svg} ref={svgRef}>
        {/* 幹線（斜線） */}
        {linePoints.length > 0 && (
          <line
            x1={0}
            y1={topY}
            x2={30}
            y2={bottomY}
            stroke="#2c9c45"
            strokeWidth="4"
            strokeLinecap="round"
          />
        )}

        {/* ワールド枝線 + ● */}
        {linePoints.map((p, i) => {
          const slopeY = bottomY - topY
          const slopeX = 30
          const yBase = p.cy
          const xBase = ((yBase - topY) * slopeX) / slopeY
          const branchEndX = p.cx - 10

          return (
            <g key={i}>
              <path
                d={`M ${xBase} ${yBase} H ${branchEndX}`}
                stroke="#2c9c45"
                strokeWidth="4"
                fill="none"
              />
              <circle cx={xBase} cy={yBase} r="5" fill="#d17d1e" />
            </g>
          )
        })}

        {/* 新規：専攻用の枝線（斜線幹→直角枝, ●なし） */}
        {majorLinePoints.map((p, i) => {
          const slopeY = bottomY - topY
          const slopeX = 30
          const yBase = p.cy
          const xBase = ((yBase - topY) * slopeX) / slopeY
          const branchEndX = p.cx - 10

          return (
            <path
              key={`major-${i}`}
              d={`M ${xBase} ${yBase} H ${branchEndX}`}
              stroke={p.color}
              strokeWidth="3"
              fill="none"
            />
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
                {group.majors.map((m, j) => (
                  <div
                    key={m}
                    className={styles.majorItem}
                    style={{ color: group.color }}
                    ref={(el) => {
                      if (!majorRefs.current[i]) majorRefs.current[i] = []
                      majorRefs.current[i][j] = el
                    }}
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
