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
  infos?: Info[]
}

export type Booth = {
  id: string
  name: string
  position: {
    top: string
    left: string
  }
}

export type Info = {
  id: string
  title: string
}
