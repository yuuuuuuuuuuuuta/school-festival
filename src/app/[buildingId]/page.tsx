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
  if (!building) {
    return <div>Building not found</div>
  }

  return (
    <article>
      <Header color={building.themeColor} className="backdrop-blur" />
      <ScrollArea className="h-dvh">
        <main className="flex flex-col items-center justify-center gap-10 py-20">
          <div>
            <h1 className="mb-4 text-center text-2xl font-bold">
              フロアマップ
            </h1>
            <p className="text-sm">
              マップに表示されているアイコンをクリックすると詳細情報が出ます
            </p>
          </div>
          <FloorLinkSelect buildings={buildings} currentBuilding={building} />
          <FloorList buildingId={building.id} />
        </main>
        <Footer color={building.themeColor} className="backdrop-blur" />
      </ScrollArea>
    </article>
  )
}
