// `clsx`: truthy なクラス名だけを結合（条件付きでクラスを出し分けできる）
// `twMerge`: Tailwindのクラス競合を解決（例: `p-4 p-6` → `p-6` に整理）
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// 使用例：
// cn('p-4', condition && 'bg-red-500', 'text-white')
// → 'p-4 bg-red-500 text-white'（条件に応じてクラスを動的に合成）
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
