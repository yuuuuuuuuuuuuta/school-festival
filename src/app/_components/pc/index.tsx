import Image from 'next/image'

import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import type { Building } from '@/lib/definitions'

import PcHomeFloorList from './_components/floor-list'

export default function PcHomePage({
  buildings,
}: {
  buildings: Omit<Building, 'floors'>[]
}) {
  return (
    <article className="hidden h-dvh overflow-hidden md:block">
      <main className="flex h-dvh">
        <div className="flex flex-col justify-between">
          <Header className="static" />
          <div className="flex w-full gap-3">
            <div className="flex h-pcContent items-start">
              <Image
                src={'/images/key-visual.png'}
                alt="TCA ECO 学園祭"
                className="!relative max-h-full !w-full object-contain"
                fill
              />
            </div>
            <div className="relative flex h-pcContent flex-col items-start justify-center p-3">
              <div className="flex w-full">
                <h2 className="bg-theme px-5 py-1 text-lg font-semibold text-white">
                  アクセスマップ
                </h2>
              </div>
              <Image
                className="!relative mt-6 !h-pcContentWithTitle !w-full object-contain"
                src={'/images/access-map.png'}
                alt="TCA ECO 学園祭"
                fill
              />
            </div>
          </div>
          <Footer />
        </div>
        <PcHomeFloorList buildings={buildings} />
      </main>
    </article>
  )
}
