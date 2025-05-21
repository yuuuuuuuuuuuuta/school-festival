'use client'

import { useEffect, useState } from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { getBuildings } from '@/lib/data'
import type { Building } from '@/lib/definitions'

import MobileHomePage from './_components/mobile'
import PcHomePage from './_components/pc'

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const [buildings, setBuildings] = useState<Omit<Building, 'floors'>[]>([])

  useEffect(() => {
    // クライアントでの処理（SSRでは window 未定義）
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
    const isMobileDevice = (): boolean => {
      const lowerUA = ua.toLowerCase()
      const isMobileUA = /iphone|android|mobile|ipad|ipod/.test(lowerUA)

      const isLikelyIPad =
        /macintosh/.test(lowerUA) &&
        typeof navigator.maxTouchPoints === 'number' &&
        navigator.maxTouchPoints > 1

      return isMobileUA || isLikelyIPad
    }

    setIsMobile(isMobileDevice())

    const fetchData = async () => {
      const data = await getBuildings()
      setBuildings(data)
    }
    fetchData()
  }, [])

  if (isMobile === null) {
    return <div className="h-dvh bg-white" /> // 初回ローディング表示
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
