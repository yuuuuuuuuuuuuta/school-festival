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
  const [lines, setLines] = useState<any[]>([])

  const toggle = (world: string) => {
    setOpenMap((prev) => ({ ...prev, [world]: !prev[world] }))
  }

  useEffect(() => {
    const svgTop = svgRef.current?.getBoundingClientRect().top || 0
    const svgLeft = svgRef.current?.getBoundingClientRect().left || 0

    const newLines: any[] = []
    majorData.forEach((group, i) => {
      const box = boxRefs.current[i]?.getBoundingClientRect()
      if (!box) return

      const x1 = box.left - svgLeft - 10
      const y1 = box.top + box.height / 2 - svgTop

      group.majors.forEach((_, j) => {
        const major = majorRefs.current[i]?.[j]?.getBoundingClientRect()
        if (!major) return

        const midX = x1 - 20
        const x2 = major.left - svgLeft - 8
        const y2 = major.top + major.height / 2 - svgTop

        newLines.push({ x1, y1, midX, x2, y2, color: group.color })
      })
    })
    setLines(newLines)
  }, [openMap])

  return (
    <div className={styles.wrapper}>
      <svg ref={svgRef} className={styles.svg}>
        {lines.map((line, i) => (
          <g key={i}>
            <polyline
              points={`${line.x1},${line.y1} ${line.midX},${line.y1} ${line.midX},${line.y2} ${line.x2},${line.y2}`}
              fill="none"
              stroke={line.color}
              strokeWidth={2}
            />
          </g>
        ))}
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
                    className={styles.majorItem}
                    ref={(el: HTMLDivElement | null) => {
                      if (!majorRefs.current[i]) majorRefs.current[i] = []
                      majorRefs.current[i][j] = el
                    }}
                    style={{ color: group.color }}
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
