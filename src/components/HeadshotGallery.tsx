import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export default function HeadshotGallery() {
  const headshotImages = [
    { src: '/images/Andrea_IG.jpg', alt: 'Professional headshot of Andrea by Judy Babinski Photography' },
    { src: '/images/James_IG.jpg', alt: 'Professional headshot of James by Judy Babinski Photography' },
    { src: '/images/Cindy.jpg', alt: 'Professional headshot of Cindy by Judy Babinski Photography' },
    { src: '/images/Tyler.jpg', alt: 'Professional headshot of Tyler by Judy Babinski Photography' },
    { src: '/images/Caleb.jpg', alt: 'Professional headshot of Caleb by Judy Babinski Photography' },
    { src: '/images/Nykol.jpg', alt: 'Professional headshot of Nykol by Judy Babinski Photography' },
    { src: '/images/Hs.jpg', alt: 'Professional headshot by Judy Babinski Photography' },
    { src: '/images/Rocio.jpg', alt: 'Professional headshot of Rocio by Judy Babinski Photography' },
  ]

  return (
    <section className="bg-white">
      {/* Top Heading */}
      <div className="py-[37px]" style={{ backgroundColor: '#ffffff' }}>
        <div className="text-center">
          <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
          <h1 className={`text-[50px] font-normal tracking-widest ${playfair.className}`} style={{color: '#666666'}}>
            HEADSHOTS DETROIT
          </h1>
          <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
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
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Bottom Heading */}
      <div className="py-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="text-center">
          <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
          <h2 className={`text-[50px] font-normal tracking-widest ${playfair.className}`} style={{color: '#666666'}}>
            LOVE YOUR HEADSHOT
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
        </div>
      </div>
    </section>
  )
}