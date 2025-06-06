'use client'
import { useEffect, useMemo, useState } from 'react'

import { getBuilding } from '@/lib/data'

import BoothItems from './booth-items'

export default function FloorList({
  buildingId,
  major,
}: {
  buildingId: string
  major?: string
}) {
  const building = useMemo(() => getBuilding(buildingId), [buildingId])
  const [visibleFloors, setVisibleFloors] = useState<Record<string, boolean>>(
    {},
  )

  useEffect(() => {
    if (building) {
      const initial = Object.fromEntries(
        building.floors.map((f) => [f.id, true]),
      )
      setVisibleFloors(initial)
    }
  }, [building])

  if (!building) return <div>Building not found</div>

  return (
    <div className="mx-auto flex w-full flex-col gap-5 px-4 md:max-w-xl">
      <div className="flex flex-wrap gap-1.5">
        {building.icons?.map((icon) => (
          <div key={icon.id} className="flex items-center gap-1">
            <img
              src={`/images/floors/icons/${icon.image}.svg`}
              alt={icon.name}
            />
            <span className="text-xs">{icon.name}</span>
          </div>
        ))}
      </div>

      {[...building.floors]
        .sort((a, b) => b.number - a.number)
        .map((floor) => (
          <div
            key={floor.id}
            className="relative w-full border-b py-4 first-of-type:border-t"
            style={{ borderColor: building.accentColor }}
          >
            <div className="relative w-full pb-0 pt-8 sm:pb-4">
              <img
                className="mx-auto mb-10 h-auto w-[320px] translate-y-10 sm:mb-0 sm:w-[400px] sm:translate-x-5 sm:translate-y-0"
                src={`/images/floors/${floor.id}.svg`}
                alt={floor.name}
              />

              <button
                className="absolute right-4 top-4 z-50 rounded px-3 py-1 text-xs text-white sm:right-6 sm:top-10 md:hidden"
                style={{ backgroundColor: building.themeColor }}
                onClick={() =>
                  setVisibleFloors((prev) => ({
                    ...prev,
                    [floor.id]: !prev[floor.id],
                  }))
                }
              >
                {visibleFloors[floor.id] ? 'ブース非表示' : 'ブース表示'}
              </button>
            </div>

            <h3
              className="absolute left-4 top-6 flex size-11 items-center justify-center rounded-full text-xl font-bold text-white sm:left-6 sm:top-10 sm:size-14"
              style={{ backgroundColor: building.accentColor }}
            >
              {floor.name}
            </h3>

            <div className="hidden justify-center md:mt-4 md:flex">
              <button
                className="rounded px-3 py-1 text-xs text-white"
                style={{ backgroundColor: building.themeColor }}
                onClick={() =>
                  setVisibleFloors((prev) => ({
                    ...prev,
                    [floor.id]: !prev[floor.id],
                  }))
                }
              >
                {visibleFloors[floor.id] ? 'ブース非表示' : 'ブース表示'}
              </button>
            </div>

            {visibleFloors[floor.id] && (
              <BoothItems
                booths={floor.booths}
                themeColor={building.themeColor}
                accentColor={building.accentColor}
                major={major}
              />
            )}
          </div>
        ))}
    </div>
  )
}
