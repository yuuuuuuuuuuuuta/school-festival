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

export default function BoothDialog({ booth }: { booth: Booth }) {
  return (
    <Dialog>
      <DialogTrigger>
        <Image
          className="!relative aspect-square !w-20 object-contain"
          src={`/images/booths/${booth.id}/icon.webp`}
          alt={booth.name}
          fill
        />
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] rounded-md">
        <DialogHeader>
          <DialogDescription className="mx-auto">
            <Image
              className="!relative !h-60dvh !w-auto object-contain"
              src={`/images/booths/${booth.id}/image.webp`}
              alt=""
              fill
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
