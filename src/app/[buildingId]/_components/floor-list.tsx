import Image from 'next/image'

import { getBuilding } from '@/lib/data'

import BoothItems from './booth-items'

export default function FloorList({ buildingId }: { buildingId: string }) {
  const building = getBuilding(buildingId)
  if (!building) {
    return <div>Building not found</div>
  }

  return (
    <div className="mx-auto flex w-full flex-col gap-5 px-4 md:max-w-xl">
      {building.floors.map((floor) => (
        <div
          key={floor.id}
          className="relative aspect-[16/12] w-full border-b first-of-type:border-t"
          style={{ borderColor: building.accentColor }}
        >
          <div className="absolute right-0 top-1/2 w-full -translate-y-1/2">
            <Image
              className="!relative w-full object-contain"
              src={`/images/floors/${floor.id}.png`}
              alt={floor.name}
              fill
            />
          </div>
          <h3
            className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold text-white"
            style={{
              backgroundColor: building.accentColor,
            }}
          >
            {floor.name}
          </h3>
          <BoothItems booths={floor.booths} themeColor={building.themeColor} />
        </div>
      ))}
    </div>
  )
}
