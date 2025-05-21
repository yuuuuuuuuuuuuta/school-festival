'use client'

// Home ページのメインエントリーポイント
import { useEffect, useState } from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { getBuildings } from '@/lib/data'

import MobileHomePage from './_components/mobile'
import PcHomePage from './_components/pc'

// ユーザーエージェントによるデバイス判定
function isMobileDevice(): boolean {
  if (typeof navigator === 'undefined') return false
  return /iPhone|Android|Mobile|iPad|iPod/i.test(navigator.userAgent)
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const buildings = getBuildings()

  useEffect(() => {
    setIsMobile(isMobileDevice())
  }, [])

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
