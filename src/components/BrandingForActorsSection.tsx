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

export default function BrandingForActorsSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Image */}
        <div className="w-full">
          <Image
            src="/images/Webb Tryptch_WS.jpg"
            alt="Branding portraits for actors by Judy Babinski Photography"
            width={1200}
            height={800}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Right: Text */}
        <div className="flex items-center px-12 py-16 lg:py-24" style={{ backgroundColor: '#f5f5f5' }}>
          <div>
            <h2 className={`text-[50px] mb-6 ${playfair.className}`} style={{ color: '#666666' }}>
              Branding For Actors
            </h2>
            <p className={`text-lg leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>
              Casting directors and agents are looking for a variety of moods and the ability to play more than one
              character. Let&apos;s show your versatility!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
