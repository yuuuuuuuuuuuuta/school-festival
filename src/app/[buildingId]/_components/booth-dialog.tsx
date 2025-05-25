'use client'

import Image from 'next/image'
import { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
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
  const [showDescription, setShowDescription] = useState(false)

  return (
    <Dialog>
      {/* ==== ブースのアイコン ==== */}
      <DialogTrigger>
        <div>
          <div
            className="absolute flex flex-col items-center justify-center gap-1 focus:outline-0"
            style={{
              top: `${booth.position.top}%`,
              left: `${booth.position.left}%`,
            }}
          >
            <div className="relative">
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
          {/* タイトルと切替ボタンを左に並べる */}
          <div className="mb-2 flex items-center gap-4">
            <DialogTitle
              className="px-3 py-1.5 text-left text-sm text-white"
              style={{ backgroundColor: themeColor }}
            >
              {booth.place}
            </DialogTitle>
            {booth.explanation && (
              <button
                className="rounded bg-white px-3 py-1 text-xs font-semibold text-zinc-600 shadow"
                style={{ color: themeColor }}
                onClick={() => setShowDescription((prev) => !prev)}
              >
                {showDescription ? '画像を見る' : '説明を見る'}
              </button>
            )}
          </div>

          {/* 中身の切り替え */}
          {showDescription ? (
            <div className="whitespace-pre-wrap p-4 text-sm leading-relaxed text-gray-700">
              {booth.explanation}
            </div>
          ) : (
            <ScrollArea
              className={`${booth.image && 'h-[calc(60dvh+70px)] w-full'}`}
            >
              {/* 複数画像対応 */}
              {booth.image ? (
                booth.image.map((img, i) => (
                  <div key={i} className="relative h-[80dvh] w-full">
                    <Image
                      className="object-contain"
                      src={`/images/booths/${booth.id}/${img}.webp`}
                      alt={booth.name}
                      placeholder="blur"
                      blurDataURL={`/images/booths/${booth.id}/image.webp`}
                      fill
                    />
                  </div>
                ))
              ) : (
                <div className="relative h-[80dvh] w-full">
                  <Image
                    className="object-contain"
                    src={`/images/booths/${booth.id}/image.webp`}
                    alt={booth.name}
                    placeholder="blur"
                    blurDataURL={`/images/booths/${booth.id}/image.webp`}
                    fill
                  />
                </div>
              )}

              {/* グラデーション効果 */}
              {booth.image && (
                <div className="pointer-events-none sticky inset-x-0 -bottom-1 h-10 bg-gradient-to-t from-card" />
              )}
            </ScrollArea>
          )}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
