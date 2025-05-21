'use client'

import { useEffect, useState } from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { getBuildings } from '@/lib/data'

import MobileHomePage from './_components/mobile'
import PcHomePage from './_components/pc'

function isMobileDevice(): boolean {
  if (typeof navigator === 'undefined') return false
  return /iPhone|Android|Mobile|iPad|iPod/i.test(navigator.userAgent)
}

export default function Home() {
  const buildings = getBuildings()
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsMobile(isMobileDevice())
  }, [])

  if (!mounted) {
    return <div className="h-dvh bg-white" /> // 仮の表示
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
