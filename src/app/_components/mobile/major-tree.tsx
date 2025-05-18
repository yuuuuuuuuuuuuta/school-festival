'use client'
import { useEffect, useRef, useState } from 'react'

import styles from './major-tree.module.css'

const majorData = [
  {
    world: '動物ワールド',
    color: '#2c9c45',
    majors: ['動物飼育専攻', '動物園マネジメント専攻'],
  },
  {
    world: '海洋ワールド',
    color: '#2471B2',
    majors: [
      '水族館アクアリスト専攻',
      '水族館プロデュース専攻',
      'ドルフィントレーナー専攻',
    ],
  },
  {
    world: '自然環境ワールド',
    color: '#B66A1F',
    majors: ['博物館・恐竜自然史専攻'],
  },
  {
    world: 'ペットワールド',
    color: '#9333EA',
    majors: [
      'ドッグトレーナー専攻',
      'ペットワールドトリマー＆ヘルスケア専攻',
      '動物看護・高度医療専攻',
      '猫専攻・高度販売専攻',
    ],
  },
]

export default function MajorTree() {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({})
  const toggle = (world: string) => {
    setOpen((prev) => ({ ...prev, [world]: !prev[world] }))
  }

  return (
    <div className={styles.wrapper}>
      <svg className={styles.svg}>
        {majorData.map((_, i) => (
          <g key={i}>
            <line
              x1="0"
              x2="20"
              y1={i * 120 + 20}
              y2={i * 120 + 20}
              stroke="#2c9c45"
              strokeWidth="2"
            />
            <circle cx="20" cy={i * 120 + 20} r="5" fill="#d17d1e" />
          </g>
        ))}
        <polyline
          points={`0,20 0,${(majorData.length - 1) * 120 + 20}`}
          fill="none"
          stroke="#2c9c45"
          strokeWidth="2"
        />
      </svg>

      <div className={styles.content}>
        {majorData.map((group, i) => (
          <div
            key={group.world}
            className={styles.node}
            style={{ top: `${i * 120}px` }}
          >
            <div
              className={styles.box}
              onClick={() => toggle(group.world)}
              style={{ borderColor: group.color, color: group.color }}
            >
              {group.world}
            </div>
            {open[group.world] && (
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
