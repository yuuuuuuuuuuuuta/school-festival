'use client'

import { useEffect, useState } from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { getBuildings } from '@/lib/data'
import type { Building } from '@/lib/definitions'

import MobileHomePage from './_components/mobile'
import PcHomePage from './_components/pc'

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const [buildings, setBuildings] = useState<Building[]>([])

  useEffect(() => {
    // クライアントサイドでのみ動作（SSR対策）
    const ua = navigator.userAgent.toLowerCase()
    const screenWidth = window.innerWidth

    // 推奨: 画面幅で判定（iPad 横向きまで含む）
    setIsMobile(screenWidth < 1024)

    const fetchData = async () => {
      const data = await getBuildings()
      setBuildings(data)
    }
    fetchData()
  }, [])

  if (isMobile === null) {
    return <div className="h-dvh bg-white" /> // ローディング中の空画面
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
