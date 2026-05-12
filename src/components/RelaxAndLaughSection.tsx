import Image from 'next/image'
import { Playfair_Display, Montserrat } from 'next/font/google'

const playfair = Playfair_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'optional',
})

const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
  display: 'optional',
})

export default function RelaxAndLaughSection() {
  return (
    <section className="pt-[25px] pb-4 bg-white">
      <div style={{ width: '83.333%', maxWidth: '1024px', margin: '0 auto' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center space-y-6 px-12 py-12" style={{ backgroundColor: '#f5f5f5' }}>
          <h2 className={`text-4xl font-normal ${playfair.className}`} style={{ color: '#666666' }}>
            It&apos;s more relaxed than you think.
          </h2>
          <div className={`leading-relaxed text-lg space-y-4 ${montserrat.className}`} style={{ color: '#666666' }}>
            <p>The session doesn&apos;t feel rushed or overly structured.</p>
            <p>We take a little time, adjust as we go, and let things settle naturally.</p>
            <p>You don&apos;t have to force anything. By the end, it starts to feel easy, and that&apos;s when the images really come together.</p>
          </div>
        </div>

        {/* Right Column - Image flush top and bottom */}
        <div className="w-full">
          <Image
            src="/images/Idris.jpg"
            alt="Idris enjoying & loving his headshot"
            width={1200}
            height={800}
            sizes="(max-width: 1024px) 83vw, 42vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>
      </div>
    </section>
  )
}
