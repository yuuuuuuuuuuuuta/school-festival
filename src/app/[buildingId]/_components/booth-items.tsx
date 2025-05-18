// ブース情報をマップ上に表示するコンポーネント

import type { Booth } from '@/lib/definitions'

// 各ブースをモーダルで開くUIコンポーネント
import BoothDialog from './booth-dialog'

// props定義とメイン関数
export default function BoothItems({
  booths, // 対象の階に存在するブース一覧
  themeColor, // 校舎テーマカラー（ボタンの色などに使用）
  accentColor, // アクセントカラー（強調・縁取りなど）
}: {
  booths?: Booth[] // boothが省略可なのは、空の階に対応するため
  themeColor: string
  accentColor: string
}) {
  // ブースが存在しない場合は何も表示しない
  if (!booths || booths.length === 0) {
    return null
  }

  return (
    <div className="">
      {booths.map((booth) => (
        <div key={booth.id}>
          <BoothDialog
            booth={booth} // ブースの詳細情報
            themeColor={themeColor} // 色指定（テーマ）
            accentColor={accentColor} // 色指定（アクセント）
          />
        </div>
      ))}
    </div>
  )
}
