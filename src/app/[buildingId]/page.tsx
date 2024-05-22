import Link from 'next/link'

import { getBuilding, getBuildings } from '@/lib/data'

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
    <main className="flex min-h-screen flex-col items-center justify-center gap-10">
      <h1>フロアマップ</h1>
      <div className="flex" style={{ backgroundColor: building.themeColor }}>
        {buildings.map((b) => (
          <Link
            href={b.id}
            key={b.id}
            className={`${building.id != b.id && 'bg-white'} p-1`}
          >
            <h2>{b.name}</h2>
          </Link>
        ))}
      </div>
      <FloorList buildingId={building.id} />
    </main>
  )
}
