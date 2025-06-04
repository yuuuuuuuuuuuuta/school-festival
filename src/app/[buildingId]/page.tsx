'use client'
import { useSearchParams } from 'next/navigation'

import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import { ScrollArea } from '@/components/ui/scroll-area'
import { getBuilding, getBuildings } from '@/lib/data'

import FloorLinkSelect from './_components/floor-link-select'
import FloorList from './_components/floor-list'

export default function BuildingPage({
  params,
}: {
  params: { buildingId: string }
}) {
  const building = getBuilding(params.buildingId)
  const buildings = getBuildings()
  const searchParams = useSearchParams()
  const major = searchParams.get('major')

  if (!building) {
    return <div>Building not found</div>
  }

  return (
    <article>
      <Header color={building.themeColor} />
      <ScrollArea className="h-dvh">
        <main className="flex flex-col items-center justify-center gap-10 py-20">
          <div className="px-4">
            <h1 className="mb-4 text-center text-2xl font-bold">
              フロアマップ
            </h1>
            <p className="text-balance text-center text-sm">
              マップに表示されているアイコンをクリックすると詳細情報が出ます
            </p>
          </div>
          <FloorLinkSelect buildings={buildings} currentBuilding={building} />
          <FloorList buildingId={building.id} major={major || undefined} />
          <div className="block w-full max-w-xl px-4 sm:hidden">
            <a
              href="/"
              className="rounded px-4 py-2 text-white"
              style={{ backgroundColor: building.themeColor }}
            >
              ← ホームに戻る
            </a>
          </div>
        </main>
        <Footer color={building.themeColor} className="backdrop-blur" />
      </ScrollArea>
    </article>
  )
}
