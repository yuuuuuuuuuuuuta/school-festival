export default function SectionWithTitle({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col items-start gap-6">
      <h2 className="bg-[#BBD31E] px-5 py-1 text-lg font-semibold text-white">
        {title}
      </h2>
      <div className="w-full">{children}</div>
    </section>
  )
}
