'use client'
import { useEffect, useRef } from 'react'

import type { Booth } from '@/lib/definitions'

import BoothDialog from './booth-dialog'

export default function BoothItems({
  booths,
  themeColor,
  accentColor,
  major,
}: {
  booths?: Booth[]
  themeColor: string
  accentColor: string
  major?: string
}) {
  const targetRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (major && booths) {
      const booth = booths.find((b) => b.name.includes(major))
      if (booth && targetRef.current) {
        targetRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    }
  }, [major, booths])

  if (!booths || booths.length === 0) return null

  return (
    <div>
      {booths.map((booth) => (
        <div
          key={booth.id}
          ref={major && booth.name.includes(major) ? targetRef : undefined}
        >
          <BoothDialog
            booth={booth}
            themeColor={themeColor}
            accentColor={accentColor}
            autoOpen={!!major && booth.name.includes(major)}
          />
        </div>
      ))}
    </div>
  )
}
