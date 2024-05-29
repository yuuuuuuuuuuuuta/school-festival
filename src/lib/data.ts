import type { Building } from './definitions'

const buildings: Building[] = [
  {
    id: 'first',
    name: '第一校舎',
    index: 1,
    themeColor: '#6FBA2D',
    accentColor: '#2C893A',
    icons: [
      {
        id: 'restroom',
        name: '多目的トイレ',
        image: 'restroom_share',
      },
      {
        id: 'restroom',
        name: '男子トイレ',
        image: 'restroom_men',
      },
      {
        id: 'restroom',
        name: '女子トイレ',
        image: 'restroom_women',
      },
      {
        id: 'elevator',
        name: 'エレベーター',
        image: 'elevator',
      },
    ],
    floors: [
      {
        id: 'building-1-floor-1',
        name: '1F',
        number: 1,
        booths: [
          {
            id: '1-1_doumanashiku2a',
            name: '動物園マネジメント専攻\n動物園・動物飼育専攻\n2年A',
            place: '第一校舎 1階 動物飼育室',
            position: {
              top: '17',
              left: '17',
            },
          },
          {
            id: '1-1_suipro2',
            name: '水族館プロデュース専攻\n2年',
            place: '第一校舎 1階 アクアルーム',
            position: {
              top: '40',
              left: '62',
            },
          },
        ],
      },
      {
        id: 'building-1-floor-2',
        name: '2F',
        number: 2,
        booths: [],
      },
      {
        id: 'building-1-floor-3',
        name: '3F',
        number: 3,
        booths: [
          {
            id: '133_dolphin2b',
            name: 'ドルフィントレーナー専攻\n2年B',
            place: '第一校舎 3階 133教室',
            position: {
              top: '25',
              left: '68',
            },
          },
          {
            id: '131.132_specialevent',
            name: 'スペシャルイベント',
            place: '第一校舎 3階 131,132教室',
            image: ['tomokiriki', 'yukaonsafari', 'animalshow'],
            position: {
              top: '18',
              left: '28',
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
            place: '第一校舎 4階 図書室（キャリアセンター）',
            position: {
              top: '53',
              left: '65',
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
            name: 'ドルフィントレーナー専攻\n2年A',
            place: '第一校舎 5階 151教室',
            position: {
              top: '8',
              left: '16',
            },
          },
          {
            id: '152_suipro3',
            name: '水族館プロデュース専攻\n3年',
            place: '第一校舎 5階 152教室',
            position: {
              top: '15',
              left: '35',
            },
          },
          {
            id: '153_aqua2a',
            name: '水族館・アクアリスト専攻\n2年A',
            place: '第一校舎 5階 153教室',
            position: {
              top: '23',
              left: '75',
            },
          },
          {
            id: '154_aqua2b',
            name: '水族館・アクアリスト専攻\n2年B',
            place: '第一校舎 5階 154教室',
            position: {
              top: '55',
              left: '62',
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
            name: '動物園・動物飼育専攻\n2年B',
            place: '第一校舎 6階 161教室',
            position: {
              top: '15',
              left: '35',
            },
          },
          {
            id: '162_doumane3',
            name: '動物園マネジメント専攻\n3年',
            place: '第一校舎 6階 162教室',
            position: {
              top: '25',
              left: '75',
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
            name: 'エキゾチックアニマル＆プランツ専攻\n2年',
            place: '第一校舎 7階 171教室',
            position: {
              top: '25',
              left: '75',
            },
          },
          {
            id: '171_yasei',
            name: '野生動物保護専攻\n2年',
            place: '第一校舎 7階 171教室',
            position: {
              top: '25',
              left: '55',
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
    icons: [
      {
        id: 'restroom',
        name: '多目的トイレ',
        image: 'restroom_share',
      },
      {
        id: 'restroom',
        name: '男子トイレ',
        image: 'restroom_men',
      },
      {
        id: 'restroom',
        name: '女子トイレ',
        image: 'restroom_women',
      },
      {
        id: 'elevator',
        name: 'エレベーター',
        image: 'elevator',
      },
    ],
    floors: [
      {
        id: 'building-2-floor-1',
        name: '1F',
        number: 1,
        booths: [
          {
            id: '211_petbusiness',
            name: 'ペットビジネス専攻\n3年',
            place: '第二校舎 1階 211教室（カフェ室）',
            position: {
              top: '20',
              left: '25',
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
            name: 'ペットトリマー＆エステティシャン専攻\n2年',
            place: '第二校舎 2階 221,222教室（トリミングルーム）',
            position: {
              top: '25',
              left: '25',
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
            name: 'ドッグトレーナー専攻\n2年',
            place: '第二校舎 4階 241,242教室（トレーニングルーム）',
            position: {
              top: '25',
              left: '25',
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
            name: '動物看護＆福祉理学療法専攻\n3年',
            place: '第二校舎 5階 251教室（動物看護室）',
            position: {
              top: '30',
              left: '10',
            },
          },
          {
            id: '252_nursingscience3',
            name: '愛玩動物看護師＆高度医療専攻\n2年',
            place: '第二校舎 5階 252教室（動物理学療法室）',
            position: {
              top: '25',
              left: '45',
            },
          },
        ],
      },
      {
        id: 'building-2-floor-6',
        name: '6F',
        number: 6,
        booths: [],
      },
    ],
  },
  {
    id: 'third',
    name: '第三校舎',
    index: 3,
    themeColor: '#965045',
    accentColor: '#954D2B',
    icons: [
      {
        id: 'restroom',
        name: '男子トイレ',
        image: 'restroom_men',
      },
      {
        id: 'restroom',
        name: '女子トイレ',
        image: 'restroom_women',
      },
    ],
    floors: [
      {
        id: 'building-3-floor-0',
        name: 'BF',
        number: -1,
        booths: [
          {
            id: '3-b1_dinosaur',
            name: '恐竜・自然史博物専攻\n3年',
            place: '第三校舎 地下',
            position: {
              top: '30',
              left: '30',
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
            name: '動物園・水族館＆テクノロジー専攻\n2年',
            place: '第三校舎 1階 311教室',
            position: {
              top: '40',
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
