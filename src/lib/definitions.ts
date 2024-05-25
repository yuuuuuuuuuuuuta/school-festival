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
  booths?: Booth[]
}

export type Booth = {
  id: string
  name: string
  place: string
  image?: boolean
  position: {
    top: string
    left: string
  }
}
