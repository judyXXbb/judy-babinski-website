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

export default function HeadshotGallery() {
  const headshotImages = [
    { src: '/images/Andrea_IG.jpg', alt: 'Headshot of medical professional' },
    { src: '/images/James_IG.jpg', alt: 'Headshot of James for his Linkedin account' },
    { src: '/images/Cindy.jpg', alt: 'Headshot of Cindy, a corporate professional' },
    { src: '/images/Tyler.jpg', alt: 'Professional headshot of Tyler for his Linkedin account' },
    { src: '/images/Caleb.jpg', alt: 'Headshot of Caleb, retiring military, for his Linkedin account' },
    { src: '/images/Nykol.jpg', alt: 'Smiling headshot of Nykol, dancer and actress' },
    { src: '/images/Hs.jpg', alt: 'Impish headshot by Judy Babinski Photography' },
    { src: '/images/Rocio.jpg', alt: 'Headshot of Rocio for her Linkedin account' },
  ]

  return (
    <section className="bg-white">
      {/* Top Heading */}
      <div className="py-[37px]" style={{ backgroundColor: '#ffffff' }}>
        <div className="text-center">
          <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
          <h1 className={`text-[50px] font-normal tracking-widest ${playfair.className}`} style={{color: '#666666'}}>
            PROFESSIONAL HEADSHOTS DETROIT
          </h1>
          <p className={`text-[36px] font-normal tracking-widest mt-4 ${playfair.className}`} style={{color: '#666666'}}>
            Most people don&apos;t think they&apos;re photogenic. Most of my clients leave wondering why they ever thought that!
          </p>
          <div className="w-16 h-px bg-gray-400 mx-auto mt-6"></div>
        </div>
      </div>

      {/* Full Width Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px]">
        {headshotImages.map((image, index) => (
          <div key={index} className="aspect-square relative overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index < 4}
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Bottom Heading */}
      <div className="py-10" style={{ backgroundColor: '#ffffff' }}>
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
          <h2 className={`text-[28px] md:text-[34px] font-normal leading-snug ${playfair.className}`} style={{color: '#666666'}}>
            My job is to create the image that shows people how you make them feel, not just how you look.
          </h2>
          <p className={`text-lg mt-5 leading-relaxed ${montserrat.className}`} style={{color: '#888888'}}>
            I guide you through the process so you feel at ease—and end up with images that look natural, confident, and genuinely like you.
          </p>
          <div className="w-16 h-px bg-gray-400 mx-auto mt-6"></div>
        </div>
      </div>
    </section>
  )
}