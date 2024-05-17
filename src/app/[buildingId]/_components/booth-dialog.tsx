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
      <DialogTrigger className="w-20">
        <Image
          className="image"
          src={`/images/${booth.id}/icon.webp`}
          alt={booth.name}
          fill
        />
      </DialogTrigger>
      <DialogContent className="w-5/6">
        <DialogHeader>
          <DialogDescription>
            <p>{booth.name}</p>
            <p>{booth.x}</p>
            <p>{booth.y}</p>
            <div>
              <Image
                className="image"
                src={`/images/${booth.id}/image.webp`}
                alt=""
                fill
              />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
