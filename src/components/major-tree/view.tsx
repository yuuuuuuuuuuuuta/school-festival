'use client'

import { majorData } from './data'
import styles from './style.module.css'

export default function MajorTreeView() {
  return (
    <div className={styles.container}>
      <div className={styles.verticalLine} />
      {majorData.map((group, index) => (
        <div key={group.world} className={styles.node}>
          <div className={styles.connector} />
          <div className={styles.circle} />
          <div className={styles.box} style={{ color: group.color }}>
            {group.world}
          </div>
          {group.majors.length > 0 && (
            <div className={styles.majorList}>
              {group.majors.map((major) => (
                <div key={major} className={styles.majorItem}>
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
