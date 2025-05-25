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
  id: string // 一意のID（例: '153_aqua2a'）
  name: string // 専攻名＋学年（例: '水族館・アクアリスト専攻 2年A'）
  title: string // 展示タイトル（例: '麗しくも儚い水の世界'）
  description: string // 展示概要（例: '水生生物すくい'）
  place: string // 場所（例: '第一校舎 5階 153教室'）
  image?: string[] // 複数画像がある場合（モーダル内でスライド表示）
  explanation?: string // 説明文(100文字)
  label?: {
    // ブースラベルのオプション設定
    position?: string // 'bottom' or 'top'（デフォルト: top）
    isHidden?: boolean // true の場合はラベルを非表示
  }
  position: {
    // マップ上の位置（%で指定）
    top: string
    left: string
  }
}

// === アイコン型（トイレ・エレベーター等） ===
export type Icon = {
  id: string // 識別用ID（重複ありでも表示には問題ない）
  name: string // 表示名（例: '男子トイレ'）
  image: // 表示するアイコン名（SVGファイル名と一致）
  'elevator' | 'restroom_men' | 'restroom_share' | 'restroom_women'
}
