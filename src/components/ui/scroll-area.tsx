'use client' // クライアントサイドでのみ動作（Next.js App Router 用）

// Radix UI のスクロールエリアコンポーネント群
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import * as React from 'react'

// Tailwindクラス名を合成するユーティリティ関数（lib/utils.ts で定義）
import { cn } from '@/lib/utils'

// ====================
// スクロールエリア本体
// ====================
const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn('relative overflow-hidden', className)} // 外側のラッパー
    {...props}
  >
    {/* 中身のスクロール対象エリア */}
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>

    {/* スクロールバー */}
    <ScrollBar />

    {/* コーナー（縦横スクロール交差点） */}
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

// ====================
// スクロールバー定義
// ====================
const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition-colors', // 共通スタイル
      orientation === 'vertical' &&
        'h-full w-2.5 border-l border-l-transparent p-[1px]', // 縦バー
      orientation === 'horizontal' &&
        'h-2.5 flex-col border-t border-t-transparent p-[1px]', // 横バー
      className,
    )}
    {...props}
  >
    {/* スクロールつまみ本体 */}
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

// ====================
// エクスポート
// ====================
export { ScrollArea, ScrollBar }
