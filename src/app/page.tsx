'use client'

import { useEffect, useState } from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { getBuildings } from '@/lib/data'
import type { Building } from '@/lib/definitions'

import MobileHomePage from './_components/mobile'
import PcHomePage from './_components/pc'

function detectMobileByUAAndTouch(): boolean {
  if (typeof window === 'undefined') return false
  const ua = navigator.userAgent.toLowerCase()
  const isMobileUA = /iphone|android|mobile|ipod|ipad/.test(ua)
  const isTouchMac =
    /macintosh/.test(ua) &&
    'ontouchend' in document &&
    navigator.maxTouchPoints > 1

  return isMobileUA || isTouchMac
}

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const [buildings, setBuildings] = useState<Building[]>([])

  useEffect(() => {
    setIsMobile(detectMobileByUAAndTouch())

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
