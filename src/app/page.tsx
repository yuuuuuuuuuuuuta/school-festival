'use client'

import { useEffect, useState } from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { getBuildings } from '@/lib/data'
import type { Building } from '@/lib/definitions'

import MobileHomePage from './_components/mobile'
import PcHomePage from './_components/pc'

// iPad を含むモバイル端末判定関数（iPadOS + Safari 対応）
function isMobileDevice(userAgent: string): boolean {
  const ua = userAgent.toLowerCase()
  const isMobile = /iphone|android|ipod|ipad/.test(ua)
  const isLikelyIPad =
    /macintosh/.test(ua) && typeof navigator.standalone !== 'undefined'
  return isMobile || isLikelyIPad
}

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const [buildings, setBuildings] = useState<Building[]>([])

  useEffect(() => {
    const ua = navigator.userAgent || ''
    setIsMobile(isMobileDevice(ua))

    // データ取得（同期でなくても問題ないため async/await は不要）
    const fetched = getBuildings()
    setBuildings(fetched)
  }, [])

  // 初期判定中は空白画面を防ぐ
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
