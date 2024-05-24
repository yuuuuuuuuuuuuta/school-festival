import type { Booth } from '@/lib/definitions'

import BoothDialog from './booth-dialog'

export default function BoothItems({
  booths,
  themeColor,
}: {
  booths?: Booth[]
  themeColor: string
}) {
  if (!booths || booths.length === 0) {
    return null
  }

  return (
    <div className="">
      {booths.map((booth) => (
        <div key={booth.id}>
          <BoothDialog booth={booth} color={themeColor} />
        </div>
      ))}
    </div>
  )
}
