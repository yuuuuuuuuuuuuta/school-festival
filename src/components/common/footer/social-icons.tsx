import Image from 'next/image'
import Link from 'next/link'

import InstagramImage from './assets/instagram.svg'
import TCAECOImage from './assets/tcaeco.svg'
import TikTokImage from './assets/tiktok.svg'
import XImage from './assets/x.svg'

const socialIcons = [
  { name: 'X', image: XImage, link: 'https://x.com/TCA_ECO' },
  {
    name: 'Instagram',
    image: InstagramImage,
    link: 'https://www.instagram.com/tca_eco/',
  },
  {
    name: 'TikTok',
    image: TikTokImage,
    link: 'https://www.tiktok.com/@tca_eco',
  },
  {
    name: 'TCA ECO',
    image: TCAECOImage,
    link: 'https://www.tcaeco.ac.jp/?gad_source=1&gclid=Cj0KCQjwu8uyBhC6ARIsAKwBGpQ00PcR_z_CwujoiZTGvm1eQymzKHTewVGxNHI6I66Y1xvNRAx3TDQaAnXmEALw_wcB',
  },
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
