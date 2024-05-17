import { getBuilding } from '@/lib/data'

import BoothDialog from './_components/booth-dialog'

export default function BuildingPage({
  params,
}: {
  params: { buildingId: string }
}) {
  const building = getBuilding(params.buildingId)

  if (!building) {
    return <div>Building not found</div>
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      <h1>{building.name}</h1>
      <div className="flex flex-col gap-5">
        {building.floors.map((floor) => (
          <div key={floor.id}>
            <h2 className="mb-3">{floor.name}</h2>
            <div className="">
              {floor.booths &&
                floor.booths.map((booth) => (
                  <div key={booth.id} className="mb-2">
                    <BoothDialog booth={booth} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
