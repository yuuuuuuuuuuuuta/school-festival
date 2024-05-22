import Image from 'next/image'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
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
          className="absolute inline-block !w-14 overflow-hidden rounded-full md:!w-20"
          style={{
            top: `${booth.position.top}%`,
            left: `${booth.position.left}%`,
          }}
        >
          <Image
            className="!relative aspect-square !w-14 object-contain md:!w-20"
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
          <DialogDescription className="mx-auto pt-1.5">
            <Image
              className="!relative !h-60dvh !w-auto min-w-[350px] object-contain"
              src={`/images/booths/${booth.id}/image.webp`}
              placeholder="blur"
              blurDataURL={`/images/booths/${booth.id}/image.webp`}
              alt={booth.name}
              fill
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
