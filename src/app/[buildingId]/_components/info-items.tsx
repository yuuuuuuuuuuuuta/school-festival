import type { Info } from '@/lib/definitions'

export default function InfoItems({
  infos,
  themeColor,
  accentColor,
}: {
  infos?: Info[]
  themeColor: string
  accentColor: string
}) {
  if (!infos || infos.length === 0) {
    return null
  }

  return (
    <div>
      {infos.map((info) => (
        <div
          key={info.id}
          className={`absolute px-3 py-1 ${info.border ? 'border' : ''}`}
          style={{
            top: `${info.position.top}%`,
            left: `${info.position.left}%`,
            backgroundColor: info.fill ? themeColor : 'transparent',
            borderColor: accentColor,
            color: info.fill ? 'white' : accentColor,
          }}
        >
          <p className="whitespace-pre-wrap text-xs">{info.title}</p>
        </div>
      ))}
    </div>
  )
}
