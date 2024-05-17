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
        booths: [
          {
            id: '1-1_doumanashiku2a',
            name: '1-A',
            x: 0,
            y: 0,
          },
          {
            id: 'building-1-floor-1-booth-2',
            name: '1-B',
            x: 0,
            y: 0,
          },
          {
            id: 'building-1-floor-1-booth-3',
            name: '1-C',
            x: 0,
            y: 0,
          },
        ],
      },
      {
        id: 'building-1-floor-2',
        name: '2階',
        number: 2,
        booths: [
          {
            id: 'building-1-floor-2-booth-1',
            name: '2-A',
            x: 0,
            y: 0,
          },
          {
            id: 'building-1-floor-2-booth-2',
            name: '2-B',
            x: 0,
            y: 0,
          },
          {
            id: 'building-1-floor-2-booth-3',
            name: '2-C',
            x: 0,
            y: 0,
          },
        ],
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

export function getBuildings(): Omit<Building, 'floors'>[] {
  return buildings.map((building) => {
    const { floors, ...rest } = building
    return rest
  })
}

export function getBuilding(id: string): Building | undefined {
  return buildings.find((building) => building.id === id)
}
