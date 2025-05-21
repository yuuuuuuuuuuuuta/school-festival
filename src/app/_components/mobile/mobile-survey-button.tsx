'use client'

export default function MobileSurveyButton() {
  return (
    <div className="mt-10 text-center">
      <button
        onClick={() => window.open('https://example.com/survey', '_blank')}
        className="rounded bg-yellow-400 px-6 py-3 font-bold text-yellow-900 shadow-md"
      >
        ぜひアンケートにご協力ください！！
      </button>
    </div>
  )
}
