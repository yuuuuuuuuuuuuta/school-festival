import { ScrollArea } from '@/components/ui/scroll-area'
import { getBuildings } from '@/lib/data'

import MobileHomePage from './_components/mobile'
import PcHomePage from './_components/pc'

export default function Home() {
  const buildings = getBuildings()

  return (
    <article>
      <ScrollArea className="h-dvh">
        <MobileHomePage buildings={buildings} />
        <PcHomePage />
      </ScrollArea>
    </article>
  )
}
