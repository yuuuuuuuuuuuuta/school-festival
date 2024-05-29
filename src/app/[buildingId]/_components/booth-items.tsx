import type { Booth } from '@/lib/definitions'

import BoothDialog from './booth-dialog'

export default function BoothItems({
  booths,
  themeColor,
  accentColor,
}: {
  booths?: Booth[]
  themeColor: string
  accentColor: string
}) {
  if (!booths || booths.length === 0) {
    return null
  }

  return (
    <div className="">
      {booths.map((booth) => (
        <div key={booth.id}>
          <BoothDialog
            booth={booth}
            themeColor={themeColor}
            accentColor={accentColor}
          />
        </div>
      ))}
    </div>
  )
}
