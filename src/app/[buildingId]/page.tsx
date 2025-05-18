// [buildingId]ごとのページ（例: /first, /second）を生成するルートページコンポーネント

// 共通UIコンポーネント
import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
// スクロール可能なラッパーUI
import { ScrollArea } from '@/components/ui/scroll-area'
// データ取得関数
import { getBuilding, getBuildings } from '@/lib/data'

// 建物切り替えUI
import FloorLinkSelect from './_components/floor-link-select'
// 建物内のフロア＋ブース構成を表示
import FloorList from './_components/floor-list'

// パラメータ（buildingId）から該当建物のページを構築
export default function BuildingPage({
  params,
}: {
  params: { buildingId: string } // 動的ルーティングパラメータ
}) {
  const building = getBuilding(params.buildingId) // 該当の建物データ取得
  const buildings = getBuildings() // 全建物一覧取得
  if (!building) {
    return <div>Building not found</div> // IDが無効な場合のエラーハンドリング
  }

  return (
    <article>
      {/* ヘッダーに建物テーマカラーを適用 */}
      <Header color={building.themeColor} />

      {/* スクロール可能なエリアに本文を収める */}
      <ScrollArea className="h-dvh">
        <main className="flex flex-col items-center justify-center gap-10 py-20">
          {/* ページタイトル＋説明 */}
          <div className="px-4">
            <h1 className="mb-4 text-center text-2xl font-bold">
              フロアマップ
            </h1>
            <p className="text-balance text-center text-sm">
              マップに表示されているアイコンをクリックすると詳細情報が出ます
            </p>
          </div>

          {/* 建物切り替えリンクタブ */}
          <FloorLinkSelect buildings={buildings} currentBuilding={building} />

          {/* フロアマップ＋展示ブースを表示 */}
          <FloorList buildingId={building.id} />
        </main>

        {/* フッターも建物テーマカラーで色付け */}
        <Footer color={building.themeColor} className="backdrop-blur" />
      </ScrollArea>
    </article>
  )
}
