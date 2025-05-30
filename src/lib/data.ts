// Building型（建物構造）をインポート
import type { Building } from './definitions'

// 建物データを定義（第一から第三校舎）
const buildings: Building[] = [
  {
    id: 'first', // 識別用の内部ID
    name: '第1校舎', // 表示名
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
            id: '1-1_animal_s',
            name: '動物園飼育専攻\n2年',
            title: '動物たちの\n【今】\nに出会える場所',
            description: 'ふれあい・学び',
            place: '第1校舎 1階 飼育室',
            image: ['image', 'text'],
            position: {
              pc: {
                top: '45%',
                left: '65%',
              },
              mobile: {
                top: '48%',
                left: '63%',
              },
            },
          },
          {
            id: '1-1_animal_j',
            name: '動物園飼育専攻\n2年',
            title: '乗馬 記念撮影\n瑠とふれあおう！！',
            description: 'ふれあい・写真撮影',
            place: '第1校舎 1階 駐車場',
            explanation:
              '学校馬「瑠」との記念撮影！\nお馬さんと触れ合ってみませんか？\nぜひご参加ください！',
            position: {
              pc: {
                top: '10%',
                left: '75%',
              },
              mobile: {
                top: '10%',
                left: '75%',
              },
            },
          },
          {
            id: '1-1_pro2',
            name: '水族館プロデュース専攻\n2年',
            title: 'WOWO\nHOUSE',
            description: 'アクアルーム探検',
            place: '第1校舎 1階 アクアルーム',
            explanation:
              'アクアルームで飼育している\n生き物の他に学校付近に潜んでいる\n生き物の展示をします\nどこかで見たことある魚や\n全く知らない生き物など\n新しい発見だらけです！！\n是非見に来てください\n見に行くぞー！！！魚〜（うぉ〜）',
            position: {
              pc: {
                top: '11%',
                left: '31%',
              },
              mobile: {
                top: '18%',
                left: '22%',
              },
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
            id: 'sp_event',
            name: 'スペシャルイベント',
            title: '村崎太郎プロデュース\n日光さる軍団\nともきりき来校!!',
            description: 'スペシャルイベント',
            place: '第1校舎 3階 131・132教室',
            explanation:
              '本校卒業生のアニマルパフォーマー\nともきりきが来校🐵\nSNSでも大人気で見たことがある方も\nいるのではないでしょうか？\n息のぴったり合ったパフォーマンスは\n盛り上がること間違いなし！\n圧巻のモンキーパフォーマンスを\nぜひご覧ください😊',
            position: {
              pc: {
                top: '54%',
                left: '60%',
              },
              mobile: {
                top: '56%',
                left: '58%',
              },
            },
          },
          {
            id: '133_pro3',
            name: '水族館プロデュース専攻\n3年',
            title: '鮮度抜群！リアル お寿司屋さん',
            description: 'ハンドメイド・トレーナー体験',
            place: '第1校舎 3階 133教室',
            explanation:
              '水族館プロデュース専攻3年\n私たちが学校で学んできた魚のことについて、皆さんにとても身近な回転寿司を通して知ってもらいたい！\n回転寿司だけでなく、ハンドメイド体験、トレーナー体験などさまざまな体験ができるブースもあります！！！\nみなさんの思い出になること間違いなし！',
            position: {
              pc: {
                top: '36%',
                left: '24%',
              },
              mobile: {
                top: '42%',
                left: '12%',
              },
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
            name: '学園祭本部',
            title: '学園祭本部',
            description: 'スタンプラリー',
            place: '第1校舎 4階 図書室前',
            image: ['image', 'text'],
            position: {
              pc: {
                top: '13%',
                left: '23%',
              },
              mobile: {
                top: '22%',
                left: '13%',
              },
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
            name: 'ドルフィントレーナー専攻\n2年Aクラス',
            title: '呪われた海と海獣の亡霊',
            description: 'お化け屋敷',
            place: '第1校舎 5階 151教室',
            explanation:
              '2Aの呪われた海へようこそ\nここでは海獣の亡霊にハラハラ、\nドキドキさせられながら\nクイズに挑戦してもらうよ\n謎を解きに151に来る挑戦者は誰かな？\nもちろん亡霊の仲間に入りたい子も募集中\nさぁ、君にこの海の謎が解けるかな…？',
            position: {
              pc: {
                top: '56%',
                left: '68%',
              },
              mobile: {
                top: '58%',
                left: '67%',
              },
            },
          },
          {
            id: '152_dolphin2b',
            name: 'ドルフィントレーナー専攻\n2年Bクラス',
            title: 'BAN★BAN みらくるエコたまっ🥚',
            description: 'アクション・学び',
            place: '第1校舎 5階 152教室',
            explanation:
              'ドルフィントレーナー専攻2年Bクラスでは、トロッコに乗りながらボールを使ってBAN☆BAN的を当てるゲームです！\n生き物の進化や海のゴミ問題も学べる！？\nぜひ152教室に来てください！！',
            position: {
              pc: {
                top: '45%',
                left: '50%',
              },
              mobile: {
                top: '48%',
                left: '42%',
              },
            },
          },
          {
            id: '153_aqua2a',
            name: '水族館アクアリスト専攻\n2年Aクラス',
            title: 'アクアの保育園',
            description: '展示解説・学び',
            place: '第1校舎 5階 153教室',
            image: ['image', 'text'],
            position: {
              pc: {
                top: '37%',
                left: '22%',
              },
              mobile: {
                top: '39%',
                left: '8%',
              },
            },
          },
          {
            id: '154_aqua2b',
            name: '水族館アクアリスト専攻\n2年Bクラス',
            title: '進化の記憶 ~鰭から足~',
            description: '学び',
            place: '第1校舎 5階 154教室',
            image: ['image', 'text'],
            position: {
              pc: {
                top: '10%',
                left: '23%',
              },
              mobile: {
                top: '17%',
                left: '17%',
              },
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
            id: '161_animal_g',
            name: '動物園飼育専攻\n2年',
            title: '動物ガイド',
            description: 'ガイド',
            place: '第1校舎 6階 161教室',
            explanation:
              'みなさんようこそ！！\n私達のブースでは\n飼育室内外のガイドはもちろん、\n動物についてのお話や質問などを\nお話しさせていただきます。\n内容は当日どのガイドに当たるかによって\n変わってくるのでお楽しみです！',
            position: {
              pc: {
                top: '48%',
                left: '45%',
              },
              mobile: {
                top: '52%',
                left: '38%',
              },
            },
          },
          {
            id: '161_animal_k',
            name: '動物園飼育専攻\n2年',
            title: '苔玉作り',
            description: '創作体験・学び',
            place: '第1校舎 6階 161教室',
            explanation:
              '苔玉で小さな森作り！\n昔々、一番初めに生まれた植物は\n「コケ」！\nそんな苔を使って自分だけの森を作ろう！\n作って育てて自然の不思議を\n楽しく学ぼう！',
            position: {
              pc: {
                top: '38%',
                left: '60%',
              },
              mobile: {
                top: '43%',
                left: '55%',
              },
            },
          },
          {
            id: '162_manage3',
            name: '動物園マネジメント専攻\n3年',
            title: '0円工房 ~どうぶつの落としもの',
            description: 'マスコット・小物づくり',
            place: '第1校舎 6階 162教室',
            image: ['image', 'text'],
            position: {
              pc: {
                top: '35%',
                left: '25%',
              },
              mobile: {
                top: '40%',
                left: '14%',
              },
            },
          },
          {
            id: '163_manage2',
            name: '動物園マネジメント専攻\n2年',
            title: 'アニマルクイズ！ エコリーグ',
            description: 'クイズ・学び',
            place: '第1校舎 6階 163教室',
            image: ['image', 'text'],
            position: {
              pc: {
                top: '14%',
                left: '23%',
              },
              mobile: {
                top: '11%',
                left: '18%',
              },
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
            id: '171_create',
            name: 'ECO自然環境クリエーター専攻\n2年',
            title: '五感で楽しむ野生教室',
            description: '展示解説・クイズ・コーヒー提供',
            place: '第1校舎 7階 171教室',
            explanation:
              '自然の香りに満ちた教室に現れた外来種を銃でひと狩り！\nブラックボックスに入っているのは動物の・・・！？\nクイズや写真の展示、コーヒーの提供もあります！\n新たな住人・カヤネズミと共にお待ちしております！',
            position: {
              pc: {
                top: '38%',
                left: '23%',
              },
              mobile: {
                top: '45%',
                left: '13%',
              },
            },
          },
        ],
      },
    ],
  },
  {
    id: 'second',
    name: '第2校舎',
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
        booths: [
          {
            id: '221_trimmer',
            name: 'ペットワールドトリマー＆ヘルスケア専攻\n2年',
            title: 'わんちゃんのリボン作り体験 \n~クイズにも答えてみよう！~',
            description: '創作体験・クイズ',
            place: '第2校舎 2階 221教室',
            image: ['image', 'text'],
            position: {
              pc: {
                top: '38%',
                left: '69%',
              },
              mobile: {
                top: '40%',
                left: '67%',
              },
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
            title: 'INU',
            description: 'アジリティ・トレーニング体験',
            place: '第2校舎 2階 241・242教室',
            image: ['image', 'text'],
            position: {
              pc: {
                top: '45%',
                left: '58%',
              },
              mobile: {
                top: '52%',
                left: '54%',
              },
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
            id: '251_medic2',
            name: '愛玩動物看護士・高度医療専攻\n2年',
            title: 'こたえてワンダフル',
            description: 'クイズ・学び',
            place: '第2校舎 2階 251教室',
            image: ['image', 'text'],
            position: {
              pc: {
                top: '28%',
                left: '68%',
              },
              mobile: {
                top: '30%',
                left: '70%',
              },
            },
          },
          {
            id: '252_madic3',
            name: '理学・高度医療専攻\n3年',
            title: '犬の体内迷路 ~食べ物はどこへ？~',
            description: '学び・クイズ・景品',
            place: '第2校舎 2階 252教室',
            image: ['image', 'text'],
            position: {
              pc: {
                top: '41%',
                left: '46%',
              },
              mobile: {
                top: '42%',
                left: '37%',
              },
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
    name: '第3校舎',
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
            explanation:
              '学びも驚きもすべてがここに！！\n見て、触って、体験して！\n今しかないこの瞬間を\n大好きが増えてく出会いに！\nかわいいだけじゃおさまらない！\n特別な時間をぜひ体験しに来てください！',
            position: {
              pc: {
                top: '43%',
                left: '45%',
              },
              mobile: {
                top: '50%',
                left: '40%',
              },
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
            id: '311_tech',
            name: '動物園・水族館＆テクノロジー専攻\n2年',
            title: 'Gather Animals',
            description: 'カード集め！',
            place: '第3校舎 3階 311教室',
            image: ['image', 'text'],
            position: {
              pc: {
                top: '41%',
                left: '23%',
              },
              mobile: {
                top: '45%',
                left: '11%',
              },
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
