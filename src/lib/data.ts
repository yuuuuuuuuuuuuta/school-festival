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
            name: '動マネ飼育2A',
            position: {
              x: 0,
              y: 0,
            },
          },
          {
            id: '1-1_suipro2',
            name: '水プロ2',
            position: {
              x: 0,
              y: 0,
            },
          },
        ],
      },
      {
        id: 'building-1-floor-2',
        name: '2階',
        number: 2,
        booths: [],
      },
      {
        id: 'building-1-floor-3',
        name: '3階',
        number: 3,
        booths: [
          {
            id: '133_dolphin2b',
            name: 'ドルフィン2B',
            position: {
              x: 0,
              y: 0,
            },
          },
          {
            id: '131.132_safaritoor',
            name: 'サファリツアー',
            position: {
              x: 0,
              y: 0,
            },
          },
          {
            id: '131.132_tomokiriki',
            name: 'ともきりき',
            position: {
              x: 0,
              y: 0,
            },
          },
        ],
      },
      {
        id: 'building-1-floor-4',
        name: '4階',
        number: 4,
        booths: [
          {
            id: '1-4_maindesk',
            name: '本部',
            position: {
              x: 0,
              y: 0,
            },
          },
        ],
      },
      {
        id: 'building-1-floor-5',
        name: '5階',
        number: 5,
        booths: [
          {
            id: '151_dolphin2a',
            name: 'ドルフィン2A',
            position: {
              x: 0,
              y: 0,
            },
          },
          {
            id: '152_suipro3',
            name: '水プロ3',
            position: {
              x: 0,
              y: 0,
            },
          },
          {
            id: '153_aqua2a',
            name: 'アクア2A',
            position: {
              x: 0,
              y: 0,
            },
          },
          {
            id: '154_aqua2b',
            name: 'アクア2B',
            position: {
              x: 0,
              y: 0,
            },
          },
        ],
      },
      {
        id: 'building-1-floor-6',
        name: '6階',
        number: 6,
        booths: [
          {
            id: '161_shiku2b',
            name: '飼育2B',
            position: {
              x: 0,
              y: 0,
            },
          },
          {
            id: '162_doumane3',
            name: '動マネ3',
            position: {
              x: 0,
              y: 0,
            },
          },
        ],
      },
      {
        id: 'building-1-floor-7',
        name: '7階',
        number: 7,
        booths: [
          {
            id: '171_ekizo',
            name: 'エキゾ',
            position: {
              x: 0,
              y: 0,
            },
          },
          {
            id: '171_yasei',
            name: '野生',
            position: {
              x: 0,
              y: 0,
            },
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
        booths: [
          {
            id: '211_petbusiness',
            name: 'ペットビジネス',
            position: {
              x: 0,
              y: 0,
            },
          },
        ],
      },
      {
        id: 'building-2-floor-2',
        name: '2階',
        number: 2,
        booths: [
          {
            id: '221.222_trimmer',
            name: 'トリマー',
            position: {
              x: 0,
              y: 0,
            },
          },
        ],
      },
      {
        id: 'building-2-floor-3',
        name: '3階',
        number: 3,
        booths: [],
      },
      {
        id: 'building-2-floor-4',
        name: '4階',
        number: 4,
        booths: [
          {
            id: '241.242_dog',
            name: 'ドッグ',
            position: {
              x: 0,
              y: 0,
            },
          },
        ],
      },
      {
        id: 'building-2-floor-5',
        name: '5階',
        number: 5,
        booths: [
          {
            id: '251_nursingscience2',
            name: '看護理学2',
            position: {
              x: 0,
              y: 0,
            },
          },
          {
            id: '252_nursingscience3',
            name: '看護理学3',
            position: {
              x: 0,
              y: 0,
            },
          },
        ],
      },
      {
        id: 'building-2-floor-6',
        name: '6階',
        number: 6,
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
        id: 'building-3-floor-b1',
        name: '地下1階',
        number: -1,
        booths: [
          {
            id: '3-b1_dinosaur',
            name: '恐竜',
            position: {
              x: 0,
              y: 0,
            },
          },
        ],
      },
      {
        id: 'building-3-floor-1',
        name: '1階',
        number: 1,
        booths: [
          {
            id: '311_dousuitech',
            name: '動水テク',
            position: {
              x: 0,
              y: 0,
            },
          },
        ],
      },
      {
        id: 'building-3-floor-2',
        name: '2階',
        number: 2,
        booths: [],
      },
      {
        id: 'building-3-floor-3',
        name: '3階',
        number: 3,
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
