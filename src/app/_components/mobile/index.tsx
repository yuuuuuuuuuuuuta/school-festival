import Image from 'next/image'

import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import SectionWithTitle from '@/components/common/section/with-title'
import type { Building } from '@/lib/definitions'

import FloorLinkList from './_components/floor-link-list'

export default function MobileHomePage({
  buildings,
}: {
  buildings: Omit<Building, 'floors'>[]
}) {
  return (
    <>
      <Header />
      <main className="md:hidden">
        <Image
          src={'/images/key-visual.png'}
          alt="TCA ECO 学園祭"
          width={1920}
          height={1080}
          className="fixed left-0 top-6 -z-10 h-screen object-contain p-6"
        />
        <div className="h-screen"></div>
        <div className="flex flex-col gap-16 bg-white/90 p-14">
          <SectionWithTitle title="アクセスマップ">
            <Image
              className="!relative !w-full object-contain"
              src={'/images/access-map.png'}
              alt="TCA ECO 学園祭"
              fill
            />
          </SectionWithTitle>
          <SectionWithTitle title="フロアマップ">
            <FloorLinkList buildings={buildings} />
          </SectionWithTitle>
        </div>
        <Footer />
      </main>
    </>
  )
}
