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
    // 画面幅で判定（iPadもモバイル扱いにするなら幅で制御）
    const isMobileScreen = window.innerWidth <= 1024 // ← iPad含めたいなら1024にする
    setIsMobile(isMobileScreen)

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
