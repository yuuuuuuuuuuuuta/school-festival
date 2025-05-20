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
  const svgOffset = useRef({ top: 0, left: 0 })

  const toggle = (world: string) => {
    setOpenMap((prev) => ({ ...prev, [world]: !prev[world] }))
  }

  useEffect(() => {
    if (!svgRef.current) return
    const svgRect = svgRef.current.getBoundingClientRect()
    svgOffset.current = { top: svgRect.top, left: svgRect.left }

    const positions = boxRefs.current
      .map((el) => {
        if (!el) return null
        const rect = el.getBoundingClientRect()
        const cy = rect.top + rect.height / 2 - svgOffset.current.top
        const cx = rect.left - svgOffset.current.left
        return { cy, cx }
      })
      .filter((p): p is { cy: number; cx: number } => p !== null)

    if (positions.length > 0) {
      setTopY(positions[0].cy - 20)
      setBottomY(positions[positions.length - 1].cy)
    }

    setLinePoints(positions)
  }, [openMap])

  return (
    <div className={styles.wrapper}>
      <svg className={styles.svg} ref={svgRef}>
        {/* 幹線 */}
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

        {/* 水平枝＋● */}
        {linePoints.map((p, i) => {
          const slopeY = bottomY - topY
          const slopeX = 30
          const yBase = p.cy
          const x1 = ((yBase - topY) * slopeX) / slopeY
          const x2 = p.cx - 16

          return (
            <g key={i}>
              <line
                x1={x1}
                y1={yBase}
                x2={x2}
                y2={yBase}
                stroke="#2c9c45"
                strokeWidth="4"
              />
              <circle cx={x2} cy={yBase} r="5" fill="#d17d1e" />
            </g>
          )
        })}

        {/* 専攻線 */}
        {boxRefs.current.map((boxEl, i) => {
          if (!boxEl || !majorRefs.current[i]) return null
          const majors = majorRefs.current[i].filter(
            (el): el is HTMLDivElement => el !== null,
          )
          if (majors.length === 0) return null

          const boxRect = boxEl.getBoundingClientRect()
          const boxX = boxRect.left - svgOffset.current.left
          const boxCy = boxRect.top + boxRect.height / 2 - svgOffset.current.top

          const lastMajor = majors[majors.length - 1]
          const lastMajorRect = lastMajor.getBoundingClientRect()
          const fixedY =
            lastMajorRect.top + lastMajorRect.height / 2 - svgOffset.current.top
          const stemX2 = boxX + 20

          return (
            <g key={`major-stem-${i}`}>
              <line
                x1={boxX}
                y1={boxCy}
                x2={stemX2}
                y2={fixedY}
                stroke={majorData[i].color}
                strokeWidth="3"
              />
              {majors.map((el, j) => {
                const rect = el.getBoundingClientRect()
                const targetY =
                  rect.top + rect.height / 2 - svgOffset.current.top
                const targetX = rect.left - svgOffset.current.left - 10
                return (
                  <line
                    key={`major-branch-${i}-${j}`}
                    x1={stemX2}
                    y1={targetY}
                    x2={targetX}
                    y2={targetY}
                    stroke={majorData[i].color}
                    strokeWidth="3"
                  />
                )
              })}
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
