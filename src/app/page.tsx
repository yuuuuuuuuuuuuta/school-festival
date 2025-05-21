'use client'

import { useEffect, useState } from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { getBuildings } from '@/lib/data'
import type { Building } from '@/lib/definitions'

import MobileHomePage from './_components/mobile'
import PcHomePage from './_components/pc'

function isMobileDevice(userAgent: string): boolean {
  const ua = userAgent.toLowerCase()
  const isMobile = /iphone|android|ipod|ipad/.test(ua)

  const isLikelyIPad =
    /macintosh/.test(ua) &&
    typeof navigator !== 'undefined' &&
    'maxTouchPoints' in navigator &&
    (navigator as any).maxTouchPoints > 1

  return isMobile || isLikelyIPad
}

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const [buildings, setBuildings] = useState<Omit<Building, 'floors'>[]>([])

  useEffect(() => {
    const ua = navigator.userAgent || ''
    setIsMobile(isMobileDevice(ua))

    const data = getBuildings()
    setBuildings(data)
  }, [])

  if (isMobile === null) {
    return <div className="h-dvh bg-white" />
  }

  return (
    <ScrollArea className="h-dvh">
      {isMobile ? (
        <MobileHomePage buildings={buildings} />
      ) : (
        <PcHomePage buildings={buildings} />
      )}
    </ScrollArea>
  )
}
