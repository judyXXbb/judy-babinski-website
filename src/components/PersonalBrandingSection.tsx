import Image from 'next/image'
import { Playfair_Display, Montserrat } from 'next/font/google'

const playfair = Playfair_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export default function PersonalBrandingSection() {
  return (
    <section style={{ backgroundColor: '#f5f5f5' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Image */}
        <div className="w-full">
          <Image
            src="/images/Andreza tryptch_WS.jpg"
            alt="Branding portraits for fitness instructors"
            width={1200}
            height={800}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Right: Title + Text */}
        <div className="flex items-center px-12 py-16 lg:py-24">
          <div>
            <h2 className={`text-[50px] mb-6 ${playfair.className}`} style={{ color: '#666666' }}>
              Personal Branding
            </h2>
            <p className={`text-lg leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>
              You wear several &quot;hats&quot; in your business. You are a fitness trainer but also a stunning model.
              Let&apos;s show that!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
