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
        <button>{booth.name}</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <p>{booth.name}</p>
            <p>{booth.x}</p>
            <p>{booth.y}</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
