'use client'
import { useState } from 'react'

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

  const toggle = (world: string) => {
    setOpenMap((prev) => ({ ...prev, [world]: !prev[world] }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.verticalLine} />
      {majorData.map((group) => (
        <div key={group.world} className={styles.node}>
          <div className={styles.connector} />
          <div className={styles.circle} />
          <div
            className={styles.box}
            onClick={() => toggle(group.world)}
            style={{ color: group.color, borderColor: group.color }}
          >
            {group.world}
          </div>

          {openMap[group.world] && group.majors.length > 0 && (
            <div className={styles.majorList}>
              {group.majors.map((major) => (
                <div key={major} className={styles.majorItem}>
                  <div className={styles.branchLine} />
                  {major}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
