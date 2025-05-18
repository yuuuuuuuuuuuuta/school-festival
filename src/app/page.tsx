// Home ページのメインエントリーポイント

// UIコンポーネント：スクロール可能なエリアのUIラッパー
import { ScrollArea } from '@/components/ui/scroll-area'
// データ取得関数：建物一覧を取得する
import { getBuildings } from '@/lib/data'

// モバイル表示用ホームページコンポーネントをインポート
import MobileHomePage from './_components/mobile'
// PC表示用ホームページコンポーネントをインポート
import PcHomePage from './_components/pc'

// Home コンポーネントの定義（このファイルで export されるページ本体）
export default function Home() {
  // 建物情報を取得（例：第一校舎、第二校舎など）
  const buildings = getBuildings()

  return (
    // 全画面スクロール可能エリアでラップ
    <ScrollArea className="h-dvh">
      {/* モバイル用ホームページを表示（建物一覧を props で渡す） */}
      <MobileHomePage buildings={buildings} />
      {/* PC用ホームページを表示（同様に props を渡す） */}
      <PcHomePage buildings={buildings} />
    </ScrollArea>
  )
}
