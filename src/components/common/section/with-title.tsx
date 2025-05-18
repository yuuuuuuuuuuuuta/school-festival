import { cn } from '@/lib/utils' // Tailwindクラスを合成する補助関数（複数クラスの結合）

// props:
// - title: セクションの見出し
// - children: 中身（画像やリストなど）
// - className: 外部から追加するクラス（任意）
export default function SectionWithTitle({
  title,
  children,
  className,
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn('flex flex-col items-start gap-6', className)}>
      {/* セクションのタイトル部分（背景つき） */}
      <h2 className="bg-theme px-5 py-1 text-lg font-semibold text-white">
        {title}
      </h2>

      {/* セクションの中身（子要素） */}
      <div className="w-full">{children}</div>
    </section>
  )
}
