import type { Building } from './definitions'

const buildings: Building[] = [
  {
    id: 'first',
    name: '第一校舎',
    index: 1,
    floors: [
      {
        id: 'building-1-floor-1',
        name: '1階',
        number: 1,
        booths: [],
      },
      {
        id: 'building-1-floor-2',
        name: '2階',
        number: 2,
        booths: [],
      },
    ],
  },
  {
    id: 'second',
    name: '第二校舎',
    index: 2,
    floors: [
      {
        id: 'building-2-floor-1',
        name: '1階',
        number: 1,
        booths: [],
      },
      {
        id: 'building-2-floor-2',
        name: '2階',
        number: 2,
        booths: [],
      },
    ],
  },
  {
    id: 'third',
    name: '第三校舎',
    index: 3,
    floors: [
      {
        id: 'building-3-floor-1',
        name: '1階',
        number: 1,
        booths: [],
      },
      {
        id: 'building-3-floor-2',
        name: '2階',
        number: 2,
        booths: [],
      },
    ],
  },
]

export function getBuildings(): Building[] {
  return buildings
}
