export type Building = {
  id: string
  name: string
  index: number
  themeColor: string
  accentColor: string
  floors: Floor[]
  icons?: Icon[]
}

export type Floor = {
  id: string
  name: string
  number: number
  booths?: Booth[]
}

export type Booth = {
  id: string
  name: string
  place: string
  image?: string[]
  label?: {
    position?: string
    isHidden?: boolean
  }
  position: {
    top: string
    left: string
  }
}

export type Icon = {
  id: string
  name: string
  image: 'elevator' | 'restroom_men' | 'restroom_share' | 'restroom_women'
}
