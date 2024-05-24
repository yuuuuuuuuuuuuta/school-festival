import { cn } from '@/lib/utils'

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
      <h2 className="bg-theme px-5 py-1 text-lg font-semibold text-white">
        {title}
      </h2>
      <div className="w-full">{children}</div>
    </section>
  )
}
