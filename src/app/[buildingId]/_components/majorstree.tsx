import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import mtData from '@/lib/mt_data'

export default function MajorsTree() {
  const [selectedMajor, setSelectedMajor] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleClick = (major: { label: string; description: string }) => {
    setSelectedMajor(major)
    setDialogOpen(true)
  }

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">専攻ワールド紹介</h2>
      <div className="space-y-6">
        {mtData.worlds.map((world) => (
          <div key={world.id}>
            <h3 className="mb-2 text-lg font-semibold">{world.label}</h3>
            <div className="ml-4 space-y-2">
              {world.majors.map((major) => (
                <Button
                  key={major.id}
                  variant="outline"
                  className="w-full text-left"
                  onClick={() => handleClick(major)}
                >
                  {major.label}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedMajor?.label}</DialogTitle>
          </DialogHeader>
          <p className="mt-2 whitespace-pre-line">
            {selectedMajor?.description}
          </p>
        </DialogContent>
      </Dialog>
    </div>
  )
}
