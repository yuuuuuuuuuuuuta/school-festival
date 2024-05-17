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
      <DialogTrigger className="aspect-square w-20">
        <Image
          className="image aspect-square w-20"
          src={`/images/booths/${booth.id}/icon.webp`}
          alt={booth.name}
          fill
        />
      </DialogTrigger>
      <DialogContent className="w-11/12 rounded-md">
        <DialogHeader>
          <DialogDescription className="mx-auto">
            <Image
              className="image"
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
