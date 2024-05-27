import Image from 'next/image'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import type { Booth } from '@/lib/definitions'

export default function BoothDialog({
  booth,
  color,
}: {
  booth: Booth
  color: string
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className="absolute inline-block !w-16 overflow-hidden rounded-full lg:!w-20"
          style={{
            top: `${booth.position.top}%`,
            left: `${booth.position.left}%`,
          }}
        >
          <Image
            className="!relative aspect-square !w-16 object-contain lg:!w-20"
            src={`/images/booths/${booth.id}/icon.webp`}
            alt={booth.name}
            fill
          />
        </div>
      </DialogTrigger>
      <DialogContent
        className="w-[90vw] rounded-md border-2 md:w-auto md:max-w-lg"
        style={{
          borderColor: color,
        }}
      >
        <DialogHeader>
          <DialogDescription className="mx-auto">
            <DialogTitle
              className="mb-1.5 w-fit px-3 py-1.5 text-left text-sm text-white"
              style={{
                backgroundColor: color,
              }}
            >
              {booth.place}
            </DialogTitle>
            <ScrollArea className={`${booth.image && 'h-[calc(60dvh+70px)]'}`}>
              {booth.image ? (
                booth.image.map((image, index) => (
                  <Image
                    key={index}
                    className="!relative mb-3 !h-60dvh !w-auto object-contain md:min-w-[350px]"
                    src={`/images/booths/${booth.id}/${image}.webp`}
                    placeholder="blur"
                    blurDataURL={`/images/booths/${booth.id}/image.webp`}
                    alt={booth.name}
                    fill
                  />
                ))
              ) : (
                <Image
                  className="!relative !h-60dvh !w-auto object-contain md:min-w-[350px]"
                  src={`/images/booths/${booth.id}/image.webp`}
                  placeholder="blur"
                  blurDataURL={`/images/booths/${booth.id}/image.webp`}
                  alt={booth.name}
                  fill
                />
              )}
              {booth.image && (
                <div className="pointer-events-none sticky inset-x-0 -bottom-1 h-10 bg-gradient-to-t from-card" />
              )}
            </ScrollArea>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
