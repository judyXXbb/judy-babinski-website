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

export default function BrandingForPerformersSection() {
  return (
    <section style={{ backgroundColor: '#f5f5f5' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Text */}
        <div className="flex items-center px-12 py-16 lg:py-24" style={{ backgroundColor: '#f5f5f5' }}>
          <div>
            <h2 className={`text-[50px] mb-6 ${playfair.className}`} style={{ color: '#666666' }}>
              Branding For Performers
            </h2>
            <p className={`text-lg leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>
              You just don&apos;t play one role in your dance performances. Let&apos;s show your variety of moods and characters.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full">
          <Image
            src="/images/Floyd tryptch_WS.jpg"
            alt="Branding portraits for professional dancers"
            width={1200}
            height={800}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}
