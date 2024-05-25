import Image from 'next/image'

import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import type { Building } from '@/lib/definitions'

import PcHomeFloorList from './floor-list'

export default function PcHomePage({
  buildings,
}: {
  buildings: Omit<Building, 'floors'>[]
}) {
  return (
    <article className="hidden h-dvh overflow-hidden md:block">
      <main className="flex h-dvh">
        <div className="mx-auto flex min-w-[400px] flex-col justify-between">
          <Header className="static justify-center" />
          <div className="flex w-full gap-3">
            <div className="mx-auto flex h-pcContent items-start">
              <Image
                src={'/images/key-visual.png'}
                alt="TCA ECO 学園祭"
                className="!relative max-h-full !w-full object-contain"
                fill
              />
            </div>
          </div>
          <div className="flex h-32 items-center justify-center bg-theme">
            <p className="text-white">sns icons</p>
          </div>
        </div>
        <PcHomeFloorList buildings={buildings} />
        <div className="flex min-w-[400px] flex-col justify-between">
          <div className="flex h-[36px] items-center justify-center bg-theme">
            <p className="font-medium text-white">アクセスマップ</p>
          </div>
          <div className="mx-auto flex h-pcContent items-start overflow-hidden">
            <Image
              src={'/images/access-map.png'}
              alt="TCA ECO 学園祭"
              className="!relative max-h-full !w-full scale-105 object-contain"
              fill
            />
          </div>
          <div className="flex h-32 items-center justify-center bg-theme">
            <p className="text-center text-xs leading-7 text-white">
              〒134-0088 東京都江戸川区西葛西6-29-9
              <br />
              Mail:info@tcaeco.ac.jp フリーダイヤル:0120-545-556
            </p>
          </div>
        </div>
      </main>
    </article>
  )
}
