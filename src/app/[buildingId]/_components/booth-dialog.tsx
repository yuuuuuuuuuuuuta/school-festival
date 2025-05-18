// ブースアイコンをマップ上に表示し、クリックすると詳細ダイアログを開くUI

import Image from 'next/image'

// ダイアログ関連コンポーネント
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
// ダイアログ内部で縦スクロール可能にする
import { ScrollArea } from '@/components/ui/scroll-area'
// ブースの型
import type { Booth } from '@/lib/definitions'

export default function BoothDialog({
  booth,
  themeColor,
  accentColor,
}: {
  booth: Booth
  themeColor: string
  accentColor: string
}) {
  return (
    <Dialog>
      {/* ==== ブースのアイコン（クリックでモーダルを開く） ==== */}
      <DialogTrigger>
        <div>
          <div
            className="absolute flex flex-col items-center justify-center gap-1 focus:outline-0"
            style={{
              top: `${booth.position.top}%`, // 上からの位置 (%)
              left: `${booth.position.left}%`, // 左からの位置 (%)
            }}
          >
            <div className="relative">
              {/* ラベル（タイトルや説明） */}
              {!booth.label?.isHidden && (
                <div
                  className="absolute right-1/2 w-max whitespace-pre-wrap rounded border-2 bg-white/80 px-3 py-1.5"
                  style={{
                    borderColor: accentColor,
                    transform:
                      booth.label?.position === 'bottom'
                        ? 'translateY(68px) translateX(50%)'
                        : 'translateY(-110%) translateX(50%)',
                  }}
                >
                  <p className="text-[8px] text-zinc-700">
                    {booth.description}
                  </p>
                  <p className="text-[10px]">{booth.title}</p>
                </div>
              )}

              {/* ブースアイコン画像（クリック領域） */}
              <Image
                className="!relative aspect-square !w-16 object-contain"
                src={`/images/booths/${booth.id}/icon.webp`}
                alt={booth.name}
                fill
              />
            </div>
          </div>
        </div>
      </DialogTrigger>

      {/* ==== モーダル本体 ==== */}
      <DialogContent
        className="w-[90vw] rounded-md border-2 md:w-auto md:max-w-lg"
        style={{ borderColor: themeColor }}
      >
        <DialogDescription className="mx-auto w-full">
          {/* モーダルのタイトル（場所表示） */}
          <DialogTitle
            className="mb-2 w-fit px-3 py-1.5 text-left text-sm text-white"
            style={{ backgroundColor: themeColor }}
          >
            {booth.place}
          </DialogTitle>

          {/* 展示画像をスクロール表示 */}
          <ScrollArea
            className={`${booth.image && 'h-[calc(60dvh+70px)] w-full'}`}
          >
            {/* 複数画像対応 */}
            {booth.image ? (
              booth.image.map((image, index) => (
                <Image
                  key={index}
                  className="!relative mx-auto mt-4 !min-h-60dvh !w-full border-b-2 object-contain pb-4 last-of-type:border-b-0 last-of-type:pb-0 md:min-w-[350px]"
                  src={`/images/booths/${booth.id}/${image}.webp`}
                  placeholder="blur"
                  blurDataURL={`/images/booths/${booth.id}/image.webp`}
                  alt={booth.name}
                  style={{ borderBottomColor: themeColor }}
                  fill
                />
              ))
            ) : (
              // 単一画像対応
              <Image
                className="!relative mx-auto !min-h-60dvh !w-full object-contain md:min-w-[350px]"
                src={`/images/booths/${booth.id}/image.webp`}
                placeholder="blur"
                blurDataURL={`/images/booths/${booth.id}/image.webp`}
                alt={booth.name}
                fill
              />
            )}

            {/* スクロールのグラデーション効果 */}
            {booth.image && (
              <div className="pointer-events-none sticky inset-x-0 -bottom-1 h-10 bg-gradient-to-t from-card" />
            )}
          </ScrollArea>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
