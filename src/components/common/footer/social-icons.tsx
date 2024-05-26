import Image from 'next/image'
import Link from 'next/link'

import InstagramImage from './assets/instagram.svg'
import TCAECOImage from './assets/tcaeco.svg'
import TikTokImage from './assets/tiktok.svg'
import XImage from './assets/x.svg'

const socialIcons = [
  { name: 'X', image: XImage, link: '' },
  { name: 'Instagram', image: InstagramImage, link: '' },
  { name: 'TikTok', image: TikTokImage, link: '' },
  { name: 'TCA ECO', image: TCAECOImage, link: '' },
]

export default function SocialIcons() {
  return (
    <div className="flex">
      {socialIcons.map((icon) => (
        <Link target="_black" href={icon.link} key={icon.name} className="p-2">
          <Image src={icon.image} alt={icon.name} className="size-10" />
        </Link>
      ))}
    </div>
  )
}
