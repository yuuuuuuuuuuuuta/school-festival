import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 bg-[#BBD31E] py-6 text-white">
      <Image
        src={'/images/tcaeco-logo2.png'}
        alt="TCA ECO 学園祭"
        width={250}
        height={20}
      />
      <p className="text-center text-xs">
        〒134-0088 東京都江戸川区西葛西6-29-9
        <br />
        Mail:info@tcaeco.ac.jp フリーダイヤル:0120-545-556
      </p>
      <div className="">icons</div>
    </footer>
  )
}
