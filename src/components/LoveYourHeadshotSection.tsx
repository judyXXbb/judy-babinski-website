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

export default function LoveYourHeadshotSection() {
  return (
    <section>
      {/* Title */}
      <div className="text-center pt-5 pb-8 bg-white">
        <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
        <h2 className={`text-[50px] ${playfair.className}`} style={{ color: '#666666' }}>
          Hi, I&apos;m Judy.
        </h2>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-6"></div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%]" style={{ backgroundColor: '#f5f5f5' }}>
        {/* Left: Text */}
        <div className={`flex items-center px-12 py-12 text-lg leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>
          <div className="space-y-4">
            <p>I&apos;m a Detroit-based headshot photographer, and I work with people who don&apos;t always feel comfortable in front of the camera.</p>
            <p>Most people come in a little unsure, and that&apos;s completely normal.</p>
            <p>My approach is relaxed and guided. I&apos;ll help you get past the feeling of &ldquo;what am I supposed to do?&rdquo; so things start to feel more natural.</p>
            <p>By the end of the session, it usually feels a lot easier than expected and the images reflect that. They look like you, just on a really good day.</p>
          </div>
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
