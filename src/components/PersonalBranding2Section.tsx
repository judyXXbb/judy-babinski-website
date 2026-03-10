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

export default function PersonalBranding2Section() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Text */}
        <div className="flex items-center px-12 py-16 lg:py-24" style={{ backgroundColor: '#f5f5f5' }}>
          <div>
            <h2 className={`text-[50px] mb-6 ${playfair.className}`} style={{ color: '#666666' }}>
              Personal Branding
            </h2>
            <p className={`text-lg leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>
              You are more than just your headshot. You are adventurous, artistic, confident! Let&apos;s show your
              entrepreneurial personality!
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full">
          <Image
            src="/images/Lauren tryptch_WS.jpg"
            alt="Personal branding photography by Judy Babinski Photography"
            width={1200}
            height={800}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}
