import Image from 'next/image'
import Link from 'next/link'

import InstagramImage from './assets/instagram.png'
import LogoImage from './assets/logo.png'
import TikTokImage from './assets/tiktok.png'
import XImage from './assets/x.png'

const socialIcons = [
  { name: 'X', image: XImage, link: '' },
  { name: 'Instagram', image: InstagramImage, link: '' },
  { name: 'TikTok', image: TikTokImage, link: '' },
  { name: 'Logo', image: LogoImage, link: '' },
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
