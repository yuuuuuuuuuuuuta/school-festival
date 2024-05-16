export type Building = {
  id: string
  name: string
  index: number
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
  x: number
  y: number
}
