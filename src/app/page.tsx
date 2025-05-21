'use client'

import { useEffect, useState } from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { getBuildings } from '@/lib/data'
import type { Building } from '@/lib/definitions'

import MobileHomePage from './_components/mobile'
import PcHomePage from './_components/pc'

function isMobileDevice(userAgent: string): boolean {
  return /iPhone|Android|Mobile|iPad|iPod/i.test(userAgent)
}

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const [buildings, setBuildings] = useState<Omit<Building, 'floors'>[]>([])

  useEffect(() => {
    const ua = navigator.userAgent || ''
    setIsMobile(isMobileDevice(ua))

    // 同期で取得（await 不要）
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
