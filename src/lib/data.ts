// Building型（建物構造）をインポート
import type { Building } from './definitions'

// 建物データを定義（第一から第三校舎）
const buildings: Building[] = [
  {
    id: 'first', // 識別用の内部ID
    name: '第一校舎', // 表示名
    index: 1, // 並び順用の番号
    themeColor: '#6FBA2D', // UIテーマ色（主に背景など）
    accentColor: '#2C893A', // UIアクセント色（主にボーダーなど）
    icons: [
      // トイレやエレベーターなどの設備アイコン一覧
      { id: 'restroom', name: '多目的トイレ', image: 'restroom_share' },
      { id: 'restroom', name: '男子トイレ', image: 'restroom_men' },
      { id: 'restroom', name: '女子トイレ', image: 'restroom_women' },
      { id: 'elevator', name: 'エレベーター', image: 'elevator' },
    ],
    floors: [
      // 各フロア情報（1F〜7F)
      {
        id: 'building-1-floor-1',
        name: '1F',
        number: 1,
        booths: [
          // 展示ブース一覧
          {
            id: '1-1_animal2',
            name: '動物園飼育専攻\n2年',
            title: '動物たちの\n【今】\nに出会える場所',
            description: 'ふれあい・学び',
            place: '第1校舎 1階 飼育室',
            position: { top: '45', left: '65' }, // マップ上の位置（%）
          },
          {
            id: '1-1_pro2',
            name: '水族館プロデュース専攻\n2年',
            title: 'WOWO\nHOUSE',
            description: 'アクアルーム探検',
            place: '第1校舎 1階 アクアルーム',
            position: { top: '10', left: '27' }, // マップ上の位置（%）
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
            id: '133_pro3',
            name: '水族館プロデュース専攻\n3年',
            title: '鮮度抜群！リアル お寿司屋さん',
            description: 'ハンドメイド・トレーナー体験',
            place: '第1校舎 3階 133教室',
            position: { top: '50', left: '50' }, // マップ上の位置（%）
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
            name: '学園祭本部',
            title: '学園祭本部',
            description: 'スタンプラリー',
            place: '第1校舎 4階 図書室前',
            position: { top: '10', left: '25' }, // マップ上の位置（%）
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
            name: 'ドルフィントレーナー専攻\n2年Aクラス',
            title: '呪われた海と海獣の亡霊',
            description: 'お化け屋敷',
            place: '第1校舎 5階 151教室',
            position: { top: '50', left: '30' }, // マップ上の位置（%）
          },
          {
            id: '152_dolphin2b',
            name: 'ドルフィントレーナー専攻\n2年Bクラス',
            title: 'BAN★BAN みらくるエコたまっ🥚',
            description: 'アクション・学び',
            place: '第1校舎 5階 152教室',
            position: { top: '50', left: '60' }, // マップ上の位置（%）
          },
        ],
      },
      {
        id: 'building-1-floor-6',
        name: '6F',
        number: 6,
        booths: [
          {
            id: '162_manage3',
            name: '動物園マネジメント専攻\n3年',
            title: '0円工房 ~どうぶつの落としもの',
            description: 'マスコット・小物づくり',
            place: '第1校舎 6階 162教室',
            position: { top: '50', left: '30' }, // マップ上の位置（%）
          },
          {
            id: '163_manage2',
            name: '動物園マネジメント専攻\n2年',
            title: 'アニマルクイズ！ エコリーグ',
            description: 'クイズ・学び',
            place: '第1校舎 6階 163教室',
            position: { top: '50', left: '60' }, // マップ上の位置（%）
          },
        ],
      },
      {
        id: 'building-1-floor-7',
        name: '7F',
        number: 7,
        booths: [],
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
      { id: 'restroom', name: '多目的トイレ', image: 'restroom_share' },
      { id: 'restroom', name: '男子トイレ', image: 'restroom_men' },
      { id: 'restroom', name: '女子トイレ', image: 'restroom_women' },
      { id: 'elevator', name: 'エレベーター', image: 'elevator' },
    ],
    floors: [
      {
        id: 'building-2-floor-1',
        name: '1F',
        number: 1,
        booths: [],
      },
      {
        id: 'building-2-floor-2',
        name: '2F',
        number: 2,
        booths: [],
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
        booths: [],
      },
      {
        id: 'building-2-floor-5',
        name: '5F',
        number: 5,
        booths: [],
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
      { id: 'restroom', name: '男子トイレ', image: 'restroom_men' },
      { id: 'restroom', name: '女子トイレ', image: 'restroom_women' },
    ],
    floors: [
      {
        id: 'building-3-floor-0',
        name: 'BF',
        number: -1,
        booths: [
          {
            id: '3-0_museum',
            name: '博物館・恐竜自然史専攻\n2年',
            title: 'TCA DINOSAUR MUSEUM TOUR',
            description: '展示解説・企画展示・ガチャガチャ販売',
            place: '第3校舎 地下1階 展示室・Dinosaur Square',
            position: { top: '50', left: '50' }, // マップ上の位置（%）
          },
        ],
      },
      {
        id: 'building-3-floor-1',
        name: '1F',
        number: 1,
        booths: [],
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

// 全建物の「floors（階層情報）」を除いた概要リストを返す
export function getBuildings(): Omit<Building, 'floors'>[] {
  return buildings.map((building) => {
    const { floors, ...rest } = building
    return rest
  })
}

// 指定されたIDに対応する建物の全データ（階層含む）を返す
export function getBuilding(id: string): Building | undefined {
  return buildings.find((building) => building.id === id)
}
