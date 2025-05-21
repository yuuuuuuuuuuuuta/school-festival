'use client'
import { useEffect, useRef, useState } from 'react'

import styles from './major-tree.module.css'

const majorData = [
  {
    world: '動物ワールド',
    color: '#3B873E',
    indent: 40,
    majors: ['動物飼育専攻', '動物園マネジメント専攻'],
  },
  {
    world: '海洋ワールド',
    color: '#2F70B7',
    indent: 40,
    majors: [
      '水族館アクアリスト専攻',
      '水族館プロデュース専攻',
      'ドルフィントレーナー専攻',
    ],
  },
  {
    world: '自然環境ワールド',
    color: '#B2722D',
    indent: 40,
    majors: [
      '博物館・恐竜自然史専攻',
      'ECO自然環境クリエーター専攻',
      '動物園・水族館＆テクノロジー専攻',
    ],
  },
  {
    world: 'ペットワールド',
    color: '#9333EA',
    indent: 40,
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
        {/* 既存幹線 */}
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

        {/* ワールドBOXへ伸びる枝線 */}
        {linePoints.map((p, i) => {
          const slopeY = bottomY - topY
          const slopeX = 30
          const y = p.cy
          const x1 = ((y - topY) * slopeX) / slopeY
          const x2 = p.cx - 16
          return (
            <g key={`world-branch-${i}`}>
              <line
                x1={x1}
                y1={y}
                x2={x2}
                y2={y}
                stroke="#2c9c45"
                strokeWidth="4"
              />
              <circle cx={x2} cy={y} r="5" fill="#d17d1e" />
            </g>
          )
        })}

        {/* 新規幹線（ワールドBOX左下 → 最後の専攻）＋ 各専攻への枝線 */}
        {boxRefs.current.map((boxEl, i) => {
          if (!boxEl || !majorRefs.current[i]) return null

          const majors = majorRefs.current[i].filter(
            (el): el is HTMLDivElement => el !== null,
          )
          if (majors.length === 0) return null

          const boxRect = boxEl.getBoundingClientRect()
          const boxCy = boxRect.top + boxRect.height - 4 - svgOffset.current.top
          const stemX1 =
            boxRect.left + boxRect.width * 0.1 - svgOffset.current.left
          const stemX2 = stemX1 + 10

          const lastMajor = majors[majors.length - 1]
          const stemY2 =
            lastMajor.getBoundingClientRect().top +
            lastMajor.getBoundingClientRect().height / 2 -
            svgOffset.current.top

          return (
            <g key={`major-stem-${i}`}>
              {/* 幹線（斜線） */}
              <line
                x1={stemX1}
                y1={boxCy}
                x2={stemX2}
                y2={stemY2}
                stroke={majorData[i].color}
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* 枝線（専攻） */}
              {majors.map((el, j) => {
                const rect = el.getBoundingClientRect()
                const y = rect.top + rect.height / 2 - svgOffset.current.top
                const x1 =
                  stemX1 + ((y - boxCy) * (stemX2 - stemX1)) / (stemY2 - boxCy)
                const x2 = rect.left - svgOffset.current.left - 10
                return (
                  <line
                    key={`major-branch-${i}-${j}`}
                    x1={x1}
                    y1={y}
                    x2={x2}
                    y2={y}
                    stroke={majorData[i].color}
                    strokeWidth="3"
                    strokeLinecap="round"
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
              style={{
                color: group.color,
                borderColor: group.color,
                marginLeft: '-16px',
              }}
            >
              {group.world}
            </div>
            {openMap[group.world] && (
              <div className={styles.majorList}>
                {group.majors.map((m, j) => (
                  <div
                    key={m}
                    className={styles.majorItem}
                    style={{
                      color: group.color,
                      marginLeft: `${group.indent}px`,
                    }}
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
