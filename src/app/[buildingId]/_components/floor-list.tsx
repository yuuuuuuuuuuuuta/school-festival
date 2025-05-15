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
      <div className="flex flex-wrap gap-1.5">
        {building.icons?.map((icon) => (
          <div key={icon.id} className="flex items-center gap-1">
            <Image
              src={`/images/floors/icons/${icon.image}.svg`}
              alt={icon.name}
              width={16}
              height={16}
              className={
                icon.image.includes('men')
                  ? 'text-blue-500'
                  : icon.image.includes('women')
                    ? 'text-red-500'
                    : 'text-gray-500'
              }
            />
            <span className="text-xs">{icon.name}</span>
          </div>
        ))}
      </div>
      {[...building.floors]
        .sort((a, b) => b.number - a.number) //表示階層を降べきの順に
        .map((floor) => (
          <div
            key={floor.id}
            className="relative aspect-[16/12] w-full border-b first-of-type:border-t"
            style={{ borderColor: building.accentColor }}
          >
            <div className="absolute right-0 top-1/2 w-full -translate-y-1/2">
              <Image
                className="!relative w-full object-contain"
                src={`/images/floors/${floor.id}.svg`}
                alt={floor.name}
                fill
              />
            </div>
            <h3
              className="absolute left-4 top-6 flex size-11 items-center justify-center rounded-full text-xl font-bold text-white sm:left-6 sm:top-10 sm:size-14"
              style={{
                backgroundColor: building.accentColor,
              }}
            >
              {floor.name}
            </h3>
            <BoothItems
              booths={floor.booths}
              themeColor={building.themeColor}
              accentColor={building.accentColor}
            />
          </div>
        ))}
    </div>
  )
}
