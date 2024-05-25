import Link from 'next/link'

import type { Building } from '@/lib/definitions'

export default function FloorLinkSelect({
  buildings,
  currentBuilding,
}: {
  buildings: Omit<Building, 'floors'>[]
  currentBuilding: Building
}) {
  return (
    <div
      className="flex border"
      style={{
        backgroundColor: currentBuilding.themeColor,
        borderColor: currentBuilding.accentColor,
      }}
    >
      {buildings.map((b) => (
        <Link
          href={b.id}
          key={b.id}
          className="border-r px-6 py-1.5 font-medium last-of-type:border-none"
          style={{
            backgroundColor:
              currentBuilding.id == b.id ? currentBuilding.themeColor : 'white',
            color:
              currentBuilding.id == b.id ? 'white' : currentBuilding.themeColor,
            borderColor: currentBuilding.accentColor,
          }}
        >
          <h2>{b.name}</h2>
        </Link>
      ))}
    </div>
  )
}
