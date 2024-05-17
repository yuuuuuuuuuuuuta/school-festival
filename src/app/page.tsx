import Link from 'next/link'

import { getBuildings } from '@/lib/data'

export default function Home() {
  const buildings = getBuildings()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      TCA ECO
      <div className="flex flex-col gap-5">
        {buildings.map((building) => (
          <Link href={building.id} key={building.id}>
            {building.name}
          </Link>
        ))}
      </div>
    </main>
  )
}
