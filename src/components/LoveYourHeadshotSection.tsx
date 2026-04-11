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

export default function LoveYourHeadshotSection() {
  return (
    <section>
      {/* Title */}
      <div className="text-center pt-5 pb-8 bg-white">
        <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
        <h2 className={`text-[50px] ${playfair.className}`} style={{ color: '#666666' }}>
          I Want You To Love Your Headshot
        </h2>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-6"></div>
      </div>

      {/* Two Column Layout - full width, no outer padding */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] bg-gray-50">
        {/* Left: Text */}
        <div className={`flex items-center px-12 py-12 text-lg leading-relaxed ${montserrat.className}`} style={{ color: '#666666', textAlign: 'justify' }}>
          <p>
            Hi! I&apos;m Judy, a Detroit Metro based headshot photographer. My goal is to give you a great headshot and
            make sure you have fun in the process. I want you to leave my studio loving your headshot and loving the experience.
          </p>
        </div>

        {/* Right: Diptych image - fills column width */}
        <div className="w-full">
          <Image
            src="/images/Judy dyptich_F.jpg"
            alt="Diptych of Judy laughing"
            width={1200}
            height={800}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  )
}
