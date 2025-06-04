'use client'

import Image from 'next/image'
import { useEffect,useMemo, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

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
  autoOpen = false,
}: {
  booth: Booth
  themeColor: string
  accentColor: string
  autoOpen?: boolean
}) {
  const [showDescription, setShowDescription] = useState(false)
  const [open, setOpen] = useState(false)

  const isMobile = useMediaQuery({ maxWidth: 768 })
  const boothPosition = isMobile ? booth.position.mobile : booth.position.pc

  const animationDelay = useMemo(() => `${Math.random() * 2}s`, [])

  useEffect(() => {
    if (autoOpen) setOpen(true)
  }, [autoOpen])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div>
          <div
            className="absolute flex animate-float flex-col items-center justify-center gap-1 focus:outline-0"
            style={{
              top: boothPosition.top,
              left: boothPosition.left,
              animationDelay,
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
      <DialogContent
        className="w-[90vw] rounded-md border-2 md:w-auto md:max-w-lg"
        style={{ borderColor: themeColor }}
      >
        <DialogDescription className="mx-auto w-full">
          <div className="mb-2 flex items-center gap-4">
            <DialogTitle
              className="px-3 py-1.5 text-left text-sm text-white"
              style={{ backgroundColor: themeColor }}
            >
              {booth.place}
            </DialogTitle>
          </div>
          {showDescription ? (
            <div className="whitespace-pre-wrap p-4 text-sm leading-relaxed text-gray-700">
              {/* {booth.explanation} */}
            </div>
          ) : (
            <ScrollArea
              className={`${booth.image && 'h-[calc(60dvh+70px)] w-full'}`}
            >
              {booth.image ? (
                booth.image.length === 1 ? (
                  <div className="flex w-full justify-center px-4 pt-4">
                    <Image
                      className="h-auto w-full max-w-[500px] object-contain"
                      src={`/images/booths/${booth.id}/${booth.image[0]}.webp`}
                      alt={booth.name}
                      placeholder="blur"
                      blurDataURL={`/images/booths/${booth.id}/image.webp`}
                      sizes="(max-width: 768px) 90vw, 500px"
                      width={600}
                      height={900}
                    />
                  </div>
                ) : (
                  booth.image.map((img, i) => (
                    <div
                      key={i}
                      className="flex w-full justify-center px-4 pt-4"
                    >
                      <Image
                        className="h-auto w-full max-w-[500px] object-contain"
                        src={`/images/booths/${booth.id}/${img}.webp`}
                        alt={booth.name}
                        placeholder="blur"
                        blurDataURL={`/images/booths/${booth.id}/image.webp`}
                        sizes="(max-width: 768px) 90vw, 500px"
                        width={600}
                        height={900}
                      />
                    </div>
                  ))
                )
              ) : (
                <div className="flex w-full justify-center px-4 pt-4">
                  <Image
                    className="h-auto w-full max-w-[500px] object-contain"
                    src={`/images/booths/${booth.id}/image.webp`}
                    alt={booth.name}
                    placeholder="blur"
                    blurDataURL={`/images/booths/${booth.id}/image.webp`}
                    sizes="(max-width: 768px) 90vw, 500px"
                    width={600}
                    height={900}
                  />
                </div>
              )}
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
