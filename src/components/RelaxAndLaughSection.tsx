import Image from 'next/image'
import { Playfair_Display, Montserrat } from 'next/font/google'

const playfair = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RelaxAndLaughSection() {
  return (
    <section className="pt-[25px] pb-4 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center space-y-6 px-12 py-12" style={{ backgroundColor: '#f5f5f5' }}>
          <h2 className={`text-4xl font-bold ${playfair.className}`} style={{ color: '#666666' }}>
            Relax and laugh.
          </h2>
          <p className={`leading-relaxed text-lg ${montserrat.className}`} style={{ color: '#666666' }}>
            The secret to a great expression is to feel relaxed and
            comfortable in front of the camera. I make sure my studio is a
            "deer in front of the headlights" free zone.
          </p>
        </div>

        {/* Right Column - Image flush top and bottom */}
        <div className="w-full">
          <Image
            src="/images/Idris.jpg"
            alt="Idris enjoying & loving his headshot"
            width={1200}
            height={800}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}
