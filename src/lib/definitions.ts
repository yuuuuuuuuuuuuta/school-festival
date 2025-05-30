// === 建物データ型 ===
export type Building = {
  id: string // 例: 'first', 'second'
  name: string // 表示名（例: '第一校舎'）
  index: number // 並び順や識別用の番号（例: 1, 2, 3）
  themeColor: string // 建物テーマカラー（背景・ボタンなどに使用）
  accentColor: string // アクセントカラー（縁・強調等に使用）
  floors: Floor[] // フロア一覧（詳細下記）
  icons?: Icon[] // トイレ・エレベーター等の設備アイコン（任意）
}

// === フロア型 ===
export type Floor = {
  id: string // 例: 'building-1-floor-1'
  name: string // 表示名（例: '1F'）
  number: number // 数値的な階数（降順表示などに使用）
  booths?: Booth[] // 展示ブース一覧（任意：存在しない階もある）
}

// === 展示ブース型 ===
export type Booth = {
  id: string
  name: string
  title: string
  description: string
  place: string
  image?: string[]
  explanation?: string
  label?: {
    position?: string // 'bottom' | 'top'
    isHidden?: boolean
  }
  position: {
    pc: {
      top: string
      left: string
    }
    mobile: {
      top: string
      left: string
    }
  }
}

// === アイコン型（トイレ・エレベーター等） ===
export type Icon = {
  id: string // 識別用ID（重複ありでも表示には問題ない）
  name: string // 表示名（例: '男子トイレ'）
  image: // 表示するアイコン名（SVGファイル名と一致）
  'elevator' | 'restroom_men' | 'restroom_share' | 'restroom_women'
}
