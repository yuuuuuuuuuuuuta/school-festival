export type Building = {
  id: string
  name: string
  index: number
  themeColor: string
  accentColor: string
  floors: Floor[]
}

export type Floor = {
  id: string
  name: string
  number: number
  icons?: Icon[]
  booths?: Booth[]
}

export type Booth = {
  id: string
  name: string
  place: string
  image?: string[]
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
