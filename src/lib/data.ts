import type { Building } from './definitions'

const buildings: Building[] = [
  {
    id: 'first',
    name: '第一校舎',
    index: 1,
    themeColor: '#6FBA2D',
    accentColor: '#2C893A',
    floors: [
      {
        id: 'building-1-floor-1',
        name: '1F',
        number: 1,
        booths: [
          {
            id: '1-1_doumanashiku2a',
            name: '動マネ飼育2A',
            position: {
              top: '32',
              left: '23',
            },
          },
          {
            id: '1-1_suipro2',
            name: '水プロ2',
            position: {
              top: '52',
              left: '63',
            },
          },
        ],
      },
      {
        id: 'building-1-floor-2',
        name: '2F',
        number: 2,
        booths: [],
        infos: [
          {
            id: '2-1',
            title: '開会式・閉会式',
            fill: true,
            border: false,
            position: {
              top: '10',
              left: '10',
            },
          },
          {
            id: '2-2',
            title: 'STAFF ONLY',
            fill: false,
            border: true,
            position: {
              top: '50',
              left: '10',
            },
          },
        ],
      },
      {
        id: 'building-1-floor-3',
        name: '3F',
        number: 3,
        booths: [
          {
            id: '133_dolphin2b',
            name: 'ドルフィン2B',
            position: {
              top: '10',
              left: '10',
            },
          },
          {
            id: '131.132_safaritoor',
            name: 'サファリツアー',
            position: {
              top: '10',
              left: '10',
            },
          },
          {
            id: '131.132_tomokiriki',
            name: 'ともきりき',
            position: {
              top: '10',
              left: '10',
            },
          },
        ],
        infos: [
          {
            id: '3-1',
            title: '業界交流ブース\n卒業アルバム展示\nパネル展示',
            fill: false,
            border: false,
            position: {
              top: '30',
              left: '10',
            },
          },
        ],
      },
      {
        id: 'building-1-floor-4',
        name: '4F',
        number: 4,
        booths: [
          {
            id: '1-4_maindesk',
            name: '本部',
            position: {
              top: '10',
              left: '10',
            },
          },
        ],
        infos: [
          {
            id: '4-1',
            title: 'STAFF ONLY',
            fill: false,
            border: true,
            position: {
              top: '30',
              left: '10',
            },
          },
          {
            id: '4-2',
            title: 'STAFF ONLY',
            fill: false,
            border: true,
            position: {
              top: '10',
              left: '10',
            },
          },
        ],
      },
      {
        id: 'building-1-floor-5',
        name: '5F',
        number: 5,
        booths: [
          {
            id: '151_dolphin2a',
            name: 'ドルフィン2A',
            position: {
              top: '10',
              left: '10',
            },
          },
          {
            id: '152_suipro3',
            name: '水プロ3',
            position: {
              top: '10',
              left: '10',
            },
          },
          {
            id: '153_aqua2a',
            name: 'アクア2A',
            position: {
              top: '10',
              left: '10',
            },
          },
          {
            id: '154_aqua2b',
            name: 'アクア2B',
            position: {
              top: '10',
              left: '10',
            },
          },
        ],
      },
      {
        id: 'building-1-floor-6',
        name: '6F',
        number: 6,
        booths: [
          {
            id: '161_shiku2b',
            name: '飼育2B',
            position: {
              top: '10',
              left: '10',
            },
          },
          {
            id: '162_doumane3',
            name: '動マネ3',
            position: {
              top: '10',
              left: '10',
            },
          },
        ],
        infos: [
          {
            id: '6-1',
            title: 'STAFF ONLY',
            fill: false,
            border: true,
            position: {
              top: '30',
              left: '10',
            },
          },
        ],
      },
      {
        id: 'building-1-floor-7',
        name: '7F',
        number: 7,
        booths: [
          {
            id: '171_ekizo',
            name: 'エキゾ',
            position: {
              top: '10',
              left: '10',
            },
          },
          {
            id: '171_yasei',
            name: '野生',
            position: {
              top: '10',
              left: '10',
            },
          },
        ],
        infos: [
          {
            id: '7-1',
            title: 'STAFF ONLY',
            fill: false,
            border: true,
            position: {
              top: '30',
              left: '10',
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
    themeColor: '#F3858E',
    accentColor: '#B81649',
    floors: [
      {
        id: 'building-2-floor-1',
        name: '1F',
        number: 1,
        booths: [
          {
            id: '211_petbusiness',
            name: 'ペットビジネス',
            position: {
              top: '10',
              left: '10',
            },
          },
        ],
      },
      {
        id: 'building-2-floor-2',
        name: '2F',
        number: 2,
        booths: [
          {
            id: '221.222_trimmer',
            name: 'トリマー',
            position: {
              top: '10',
              left: '10',
            },
          },
        ],
      },
      {
        id: 'building-2-floor-3',
        name: '3F',
        number: 3,
        booths: [],
      },
      {
        id: 'building-2-floor-4',
        name: '4F',
        number: 4,
        booths: [
          {
            id: '241.242_dog',
            name: 'ドッグ',
            position: {
              top: '10',
              left: '10',
            },
          },
        ],
      },
      {
        id: 'building-2-floor-5',
        name: '5F',
        number: 5,
        booths: [
          {
            id: '251_nursingscience2',
            name: '看護理学2',
            position: {
              top: '10',
              left: '10',
            },
          },
          {
            id: '252_nursingscience3',
            name: '看護理学3',
            position: {
              top: '10',
              left: '10',
            },
          },
        ],
      },
      {
        id: 'building-2-floor-6',
        name: '6F',
        number: 6,
        booths: [],
        infos: [
          {
            id: '6-1',
            title: 'STAFF ONLY',
            fill: false,
            border: true,
            position: {
              top: '30',
              left: '10',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'third',
    name: '第三校舎',
    index: 3,
    themeColor: '#965045',
    accentColor: '#954D2B',
    floors: [
      {
        id: 'building-3-floor-b1',
        name: 'BF',
        number: -1,
        booths: [
          {
            id: '3-b1_dinosaur',
            name: '恐竜',
            position: {
              top: '10',
              left: '10',
            },
          },
        ],
      },
      {
        id: 'building-3-floor-1',
        name: '1F',
        number: 1,
        booths: [
          {
            id: '311_dousuitech',
            name: '動水テク',
            position: {
              top: '10',
              left: '10',
            },
          },
        ],
      },
      {
        id: 'building-3-floor-2',
        name: '2F',
        number: 2,
        booths: [],
      },
      {
        id: 'building-3-floor-3',
        name: '3F',
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
