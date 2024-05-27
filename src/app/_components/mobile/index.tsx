import Image from 'next/image'

import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import SectionWithTitle from '@/components/common/section/with-title'
import type { Building } from '@/lib/definitions'

import FloorLinkList from './floor-link-list'
import ScrollDown from './scroll-down'

export default function MobileHomePage({
  buildings,
}: {
  buildings: Omit<Building, 'floors'>[]
}) {
  return (
    <article className="md:hidden">
      <Header />
      <main>
        <div className="fixed left-0 top-10 -z-10 h-screen">
          <Image
            src={'/images/hiro.webp'}
            alt="TCA ECO 学園祭"
            width={1920}
            height={1080}
            className="max-h-full object-contain p-6"
          />
        </div>
        <ScrollDown />
        <div className="h-screen"></div>
        <div id="main" className="flex flex-col gap-16 bg-white/90 p-14">
          <SectionWithTitle title="アクセスマップ">
            <Image
              className="!relative !w-full object-contain"
              src={'/images/map.webp'}
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
    </article>
  )
}
