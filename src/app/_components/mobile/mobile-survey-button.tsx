'use client'

export default function MobileSurveyButton() {
  const handleClick = () => {
    window.open(
      'https://docs.google.com/forms/d/1Fsi_qbcPgAJ4Svq9vHYbR13YcikfQYJsiTiYpLHMu4c/viewform?edit_requested=true',
      '_blank',
    )
  }

  return (
    <div className="relative z-30 mx-auto -mt-0.5 w-fit">
      <div
        className="
          animate-pulse-scale
          relative animate-twitch
          cursor-pointer
          rounded-xl
          bg-yellow-400
          px-5 py-2
          text-sm font-bold text-yellow-900
          shadow-md
          transition hover:animate-shake hover:bg-yellow-500 hover:shadow-lg
        "
        onClick={handleClick}
      >
        ここをタッチして
        <br />
        ぜひアンケートにご協力ください！！
        {/* ▼ 三角形（左下） */}
        <div className="absolute left-4 top-full h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-yellow-400" />
      </div>
    </div>
  )
}
