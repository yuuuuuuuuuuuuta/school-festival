import FloorList from '@/app/[buildingId]/_components/floor-list'
import { ScrollArea } from '@/components/ui/scroll-area'
import type { Building } from '@/lib/definitions'

export default function PcHomeFloorList({
  buildings,
}: {
  buildings: Omit<Building, 'floors'>[]
}) {
  return (
    <section className="min-w-80 flex-grow">
      <ScrollArea className="relative h-dvh border border-theme">
        <div className="absolute right-0 top-0 z-40 flex h-[36px] w-full items-center justify-center border-b border-theme bg-[#EDF4D9]/80 backdrop-blur">
          <p className="font-bold text-theme">フロアマップ</p>
        </div>
        <div>
          {buildings.map((building) => (
            <div key={building.id} className="pb-16 pt-8">
              <div className="flex justify-center py-10">
                <h2
                  className="px-10 py-2 font-bold text-white"
                  style={{ backgroundColor: building.themeColor }}
                >
                  {building.name}
                </h2>
              </div>
              <FloorList buildingId={building.id} />
            </div>
          ))}
        </div>
        <div className="h-[161.5px] border-t border-theme bg-[#EDF4D9]/80"></div>
      </ScrollArea>
    </section>
  )
}
