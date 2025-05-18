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
            id: '1-1_doumanashiku2a',
            name: '動物園マネジメント＆動物飼育専攻\n2年A',
            title: 'おいでよ ZOOの森',
            description: 'クイズ・ふれあい',
            place: '第一校舎 1階 動物飼育室',
            position: { top: '30', left: '25' }, // マップ上の位置（%）
          },
          {
            id: '1-1_suipro2',
            name: '水族館プロデュース専攻\n2年',
            title: 'バイオワールド',
            description: 'アクアルーム探検',
            place: '第一校舎 1階 アクアルーム',
            position: { top: '55', left: '65' }, // マップ上の位置（%）
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
          // 展示ブース一覧
          {
            id: '133_dolphin2b',
            name: 'ドルフィントレーナー専攻\n2年B',
            title: 'あなたを海の生き物で例えると？',
            description: '性格診断',
            place: '第一校舎 3階 133教室',
            position: { top: '33', left: '72' }, // マップ上の位置（%）
          },
          {
            id: '131.132_specialevent',
            name: 'スペシャルイベント',
            title: 'スペシャルイベント',
            description: '',
            place: '第一校舎 3階 131,132教室',
            image: ['tomokiriki', 'yukaonsafari', 'animalshow'],
            position: { top: '20', left: '26' }, // マップ上の位置（%）
          },
        ],
      },
      {
        id: 'building-1-floor-4',
        name: '4F',
        number: 4,
        booths: [
          // 展示ブース一覧
          {
            id: '1-4_maindesk',
            name: '本部',
            title: '',
            description: '',
            place: '第一校舎 4階 図書室（キャリアセンター）',
            label: { isHidden: true },
            position: { top: '53', left: '70' }, // マップ上の位置（%）
          },
        ],
      },
      {
        id: 'building-1-floor-5',
        name: '5F',
        number: 5,
        booths: [
          // 展示ブース一覧
          {
            id: '151_dolphin2a',
            name: 'ドルフィントレーナー専攻\n2年A',
            title: '深海',
            description: 'お化け屋敷',
            place: '第一校舎 5階 151教室',
            position: { top: '20', left: '16' }, // マップ上の位置（%）
          },
          {
            id: '152_suipro3',
            name: '水族館プロデュース専攻\n3年',
            title: '水プロ観魚室\n～Life Gravity 命の重み～',
            description: '生き物展示',
            place: '第一校舎 5階 152教室',
            position: { top: '32', left: '40' }, // マップ上の位置（%）
          },
          {
            id: '153_aqua2a',
            name: '水族館・アクアリスト専攻\n2年A',
            title: '麗しくも儚い水の世界',
            description: '水生生物すくい',
            place: '第一校舎 5階 153教室',
            position: { top: '36', left: '76' }, // マップ上の位置（%）
          },
          {
            id: '154_aqua2b',
            name: '水族館・アクアリスト専攻\n2年B',
            title: '意外と知らないトーキョーイキモノ',
            description: 'プチ水族館',
            place: '第一校舎 5階 154教室',
            label: { position: 'bottom' },
            position: { top: '55', left: '65' }, // マップ上の位置（%）
          },
        ],
      },
      {
        id: 'building-1-floor-6',
        name: '6F',
        number: 6,
        booths: [
          // 展示ブース一覧
          {
            id: '161_shiku2b',
            name: '動物園・動物飼育専攻\n2年B',
            title: 'アニマルスタディ\n～東京ECO動物総選挙～',
            description: '動物クイズ・総選挙',
            place: '第一校舎 6階 161教室',
            position: { top: '29', left: '42' }, // マップ上の位置（%）
          },
          {
            id: '162_doumane3',
            name: '動物園マネジメント専攻\n3年',
            title: 'ぼくら探検隊\n～知られざるXを追うぞ！～',
            description: '動物解説',
            place: '第一校舎 6階 162教室',
            position: { top: '40', left: '75' }, // マップ上の位置（%）
          },
        ],
      },
      {
        id: 'building-1-floor-7',
        name: '7F',
        number: 7,
        booths: [
          // 展示ブース一覧
          {
            id: '171_ekizo',
            name: 'エキゾチックアニマル\n＆プランツ専攻\n2年',
            title: 'ワークショップで苔玉を作ろう\n～植物のある暮らしの提案～',
            description: '苔玉作り体験',
            place: '第一校舎 7階 171教室',
            label: { position: 'bottom' },
            position: { top: '40', left: '77' }, // マップ上の位置（%）
          },
          {
            id: '171_yasei',
            name: '野生動物保護専攻\n2年',
            title: '江口のキャンプ場',
            description: 'ワークショップ',
            place: '第一校舎 7階 171教室',
            position: { top: '32', left: '62' }, // マップ上の位置（%）
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
        booths: [
          // 展示ブース一覧
          {
            id: '211_petbusiness',
            name: 'ペットビジネス専攻\n3年',
            title: 'わんわんカフェテリア',
            description: 'ドリンク提供',
            place: '第二校舎 1階 211教室（カフェ室）',
            position: { top: '30', left: '40' }, // マップ上の位置（%）
          },
        ],
      },
      {
        id: 'building-2-floor-2',
        name: '2F',
        number: 2,
        booths: [
          // 展示ブース一覧
          {
            id: '221.222_trimmer',
            name: 'ペットトリマー＆エステティシャン専攻\n2年',
            title:
              'ペットのアロマスプレーを作ろう！！\n～ワンちゃんに安らぎを～',
            description: 'アロマスプレー製作体験',
            place: '第二校舎 2階 221,222教室（トリミングルーム）',
            position: { top: '32', left: '32' }, // マップ上の位置（%）
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
          // 展示ブース一覧
          {
            id: '241.242_dog',
            name: 'ドッグトレーナー専攻\n2年',
            title: 'わんわんカーニバル♬',
            description: '犬とのアクティビティ',
            place: '第二校舎 4階 241,242教室（トレーニングルーム）',
            position: { top: '30', left: '30' }, // マップ上の位置（%）
          },
        ],
      },
      {
        id: 'building-2-floor-5',
        name: '5F',
        number: 5,
        booths: [
          // 展示ブース一覧
          {
            id: '251_nursingscience2',
            name: '愛玩動物看護師＆高度医療専攻\n2年',
            title: 'ココほれワンワン',
            description: 'クイズ・宝さがし',
            place: '第二校舎 5階 251教室（動物看護室）',
            position: { top: '40', left: '20' }, // マップ上の位置（%）
          },
          {
            id: '252_nursingscience3',
            name: '動物看護＆福祉理学療法専攻\n3年',
            title: '動物看護師体験\n～犬の身体について知ろう！！～',
            description: '薬割り体験など',
            place: '第二校舎 5階 252教室（動物理学療法室）',
            position: { top: '30', left: '50' }, // マップ上の位置（%）
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
      { id: 'restroom', name: '男子トイレ', image: 'restroom_men' },
      { id: 'restroom', name: '女子トイレ', image: 'restroom_women' },
    ],
    floors: [
      {
        id: 'building-3-floor-0',
        name: 'BF',
        number: -1,
        booths: [
          // 展示ブース一覧
          {
            id: '3-b1_dinosaur',
            name: '恐竜・自然史博物専攻\n3年',
            title: 'TCA DINOSAUR MUSEUM ツアー',
            description: '展示解説、企画展示、ガチャガチャ販売',
            place: '第三校舎 地下',
            position: { top: '40', left: '40' }, // マップ上の位置（%）
          },
        ],
      },
      {
        id: 'building-3-floor-1',
        name: '1F',
        number: 1,
        booths: [
          // 展示ブース一覧
          {
            id: '311_dousuitech',
            name: '動物園・水族館＆テクノロジー専攻\n2年',
            title: '動水テクからの挑戦状‼',
            description: 'クイズラリー',
            place: '第三校舎 1階 311教室',
            position: { top: '45', left: '20' }, // マップ上の位置（%）
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
