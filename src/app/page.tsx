'use client'

import { useEffect, useState } from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { getBuildings } from '@/lib/data'
import type { Building } from '@/lib/definitions'

import MobileHomePage from './_components/mobile'
import PcHomePage from './_components/pc'

// iPad やタッチ可能なデバイスも含めてモバイル判定
function isMobileDevice(userAgent: string): boolean {
  const ua = userAgent.toLowerCase()
  const isMobile = /iphone|android|mobile|ipad|ipod/.test(ua)
  const isTouchDevice =
    typeof window !== 'undefined' &&
    'ontouchstart' in window &&
    /macintosh/.test(ua)
  return isMobile || isTouchDevice
}

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const [buildings, setBuildings] = useState<Omit<Building, 'floors'>[]>([])

  useEffect(() => {
    const ua = navigator.userAgent || ''
    setIsMobile(isMobileDevice(ua))

    const fetchData = async () => {
      const data = await getBuildings()
      setBuildings(data)
    }
    fetchData()
  }, [])

  if (isMobile === null) {
    return <div className="h-dvh bg-white" /> // 初回ローディング
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
