'use client'
import { useEffect,useRef, useState } from 'react'

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
    majors: ['博物館・恐竜自然史専攻'],
  },
  {
    world: 'ペットワールド',
    color: '#9333EA',
    majors: ['ドッグトレーナー専攻', '猫専攻', '動物福祉専攻'],
  },
]

export default function MajorTree() {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({})
  const boxRefs = useRef<(HTMLDivElement | null)[]>([])
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [lines, setLines] = useState<{ y: number }[]>([])
  const [lineStartY, setLineStartY] = useState(0)
  const [lineEndY, setLineEndY] = useState(0)

  const toggle = (world: string) => {
    setOpenMap((prev) => ({ ...prev, [world]: !prev[world] }))
  }

  useEffect(() => {
    const refs = boxRefs.current
    const positions = refs.map((ref) =>
      ref ? ref.offsetTop + ref.offsetHeight / 2 : null,
    )
    const filtered = positions.filter((y): y is number => y !== null)
    setLines(filtered.map((y) => ({ y })))

    if (refs[0] && refs[refs.length - 1]) {
      const startY = refs[0].offsetTop
      const last = refs[refs.length - 1]
      if (last) {
        const endY = last.offsetTop + last.offsetHeight
        setLineStartY(startY)
        setLineEndY(endY)
      }
    }
  }, [openMap])

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <svg className={styles.svg}>
        {lineEndY > lineStartY && (
          <>
            <line
              x1="20"
              y1={lineStartY}
              x2="20"
              y2={lineEndY}
              stroke="#2c9c45"
              strokeWidth="2"
            />
            {lines.map((line, i) => (
              <g key={`line-${i}`}>
                <line
                  x1="20"
                  y1={line.y}
                  x2="50"
                  y2={line.y}
                  stroke="#2c9c45"
                  strokeWidth="2"
                />
                <circle cx="50" cy={line.y} r="5" fill="#d17d1e" />
              </g>
            ))}
          </>
        )}
      </svg>

      <div className={styles.content}>
        {majorData.map((group, i) => (
          <div
            key={group.world}
            className={styles.node}
            ref={(el: HTMLDivElement | null) => {
              boxRefs.current[i] = el
            }}
          >
            <div
              className={styles.box}
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
